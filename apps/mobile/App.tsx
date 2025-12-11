import "./global.css";
import React, { useState, useEffect } from "react";
// Using react-native imports as NativeWind handles web compatibility
import { View, ScrollView, Platform, Alert } from "react-native";
import { Button, Input, Text, Box } from "@teaching-kids/ui";
import * as Speech from "expo-speech";

// Determine API URL based on platform
const API_URL =
  Platform.OS === "android" ? "http://10.0.2.2:3000" : "http://localhost:3000";

interface Activity {
  id: string;
  title: string;
  description: string;
  classType: string;
  date: string;
}

export default function App() {
  const [emailOrMobile, setEmailOrMobile] = useState("");
  const [user, setUser] = useState<any>(null);
  const [activities, setActivities] = useState<Activity[]>([]);
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${API_URL}/users/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ emailOrMobile }),
      });
      const data = await response.json();
      if (data.success) {
        setUser(data.user);
        fetchActivities();
      } else {
        alert("Login failed: " + data.message);
      }
    } catch (error) {
      alert("Login error: " + error);
    } finally {
      setLoading(false);
    }
  };

  const fetchActivities = async () => {
    try {
      const response = await fetch(`${API_URL}/activities`);
      const data = await response.json();
      setActivities(data);
    } catch (error) {
      console.error("Failed to fetch activities", error);
    }
  };

  const handleSpeak = (text: string) => {
    Speech.speak(text, {
      language: "en",
      pitch: 1.0,
      rate: 0.9,
    });
  };

  if (!user) {
    return (
      <View className="flex-1 justify-center p-4 bg-gray-50">
        <Text className="text-2xl font-bold text-center mb-8">
          Teaching Kids
        </Text>
        <Input
          placeholder="Email or Mobile"
          value={emailOrMobile}
          onChangeText={setEmailOrMobile}
          className="mb-4"
        />
        <Button
          label={loading ? "Logging in..." : "Login"}
          onPress={handleLogin}
          disabled={loading}
        />
      </View>
    );
  }

  return (
    <ScrollView className="flex-1 bg-white p-4 pt-12">
      <Text className="text-2xl font-bold mb-4">
        Welcome, {user.name || "Parent"}!
      </Text>
      <Text className="text-lg mb-6">
        Here are the latest class activities:
      </Text>

      {activities.length === 0 ? (
        <Text className="text-gray-500">No activities found.</Text>
      ) : (
        activities.map((activity) => (
          <View
            key={activity.id}
            className="p-4 border border-gray-200 rounded-lg mb-4 bg-gray-50"
          >
            <View className="flex-row justify-between items-start mb-2">
              <View className="flex-1 mr-2">
                <Text className="font-bold text-lg">{activity.title}</Text>
                <Text className="text-sm text-gray-500">
                  {activity.classType} •{" "}
                  {new Date(activity.date).toLocaleDateString()}
                </Text>
              </View>
              <Button
                label="🔊"
                variant="secondary"
                className="p-2 h-10 w-10 !rounded-full"
                onPress={() => handleSpeak(activity.description)}
              />
            </View>
            <Text>{activity.description}</Text>
          </View>
        ))
      )}

      <Button
        label="Logout"
        variant="outline"
        onPress={() => setUser(null)}
        className="mt-8"
      />
    </ScrollView>
  );
}
