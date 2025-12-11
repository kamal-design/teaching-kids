"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Box, Button, Text } from "@teaching-kids/ui";

interface Activity {
  id: string;
  title: string;
  description: string;
  classType: string;
  date: string;
}

export default function DashboardPage() {
  const [user, setUser] = useState<any>(null);
  const [activities, setActivities] = useState<Activity[]>([]);
  const router = useRouter();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (!storedUser) {
      router.push("/login");
      return;
    }
    setUser(JSON.parse(storedUser));
    fetchActivities();
  }, [router]);

  const fetchActivities = async () => {
    try {
      const response = await fetch("http://localhost:3000/activities");
      const data = await response.json();
      setActivities(data);
    } catch (error) {
      console.error("Failed to fetch activities", error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    router.push("/login");
  };

  const handleSpeak = (text: string) => {
    if ("speechSynthesis" in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      window.speechSynthesis.speak(utterance);
    } else {
      alert("Text-to-speech not supported in this browser.");
    }
  };

  if (!user) return null;

  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <Box className="max-w-4xl mx-auto">
        <Box className="flex flex-row justify-between items-center mb-8">
          <Text className="text-3xl font-bold text-black">
            Welcome, {user.name || "Parent"}!
          </Text>
          <Button label="Logout" onPress={handleLogout} variant="outline" />
        </Box>

        <Text className="text-xl mb-6 text-black">
          Here are the latest class activities:
        </Text>

        <Box className="space-y-4">
          {activities.length === 0 ? (
            <Text className="text-gray-500">No activities found.</Text>
          ) : (
            activities.map((activity) => (
              <Box
                key={activity.id}
                className="p-6 bg-white rounded-lg shadow-sm border border-gray-200"
              >
                <div className="flex justify-between items-start mb-2">
                  <div className="flex-1">
                    <Text className="text-xl font-bold text-black">
                      {activity.title}
                    </Text>
                    <Text className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded inline-block mt-1">
                      {activity.classType}
                    </Text>
                  </div>
                  <Button
                    label="🔊"
                    variant="secondary"
                    className="px-3 py-1 ml-4"
                    onPress={() => handleSpeak(activity.description)}
                  />
                </div>
                <Text className="text-sm text-gray-500 mb-4 block">
                  {new Date(activity.date).toLocaleDateString()}
                </Text>
                <Text className="text-gray-700">{activity.description}</Text>
              </Box>
            ))
          )}
        </Box>
      </Box>
    </main>
  );
}
