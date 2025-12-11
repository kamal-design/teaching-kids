"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Box, Button, Input, Text } from "@teaching-kids/ui";

export default function LoginPage() {
  const [emailOrMobile, setEmailOrMobile] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async () => {
    try {
      setLoading(true);
      const response = await fetch("http://localhost:3000/users/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ emailOrMobile }),
      });
      const data = await response.json();
      if (data.success) {
        // Store user in localStorage for simplicity in this demo
        localStorage.setItem("user", JSON.stringify(data.user));
        router.push("/dashboard");
      } else {
        alert("Login failed: " + data.message);
      }
    } catch (error) {
      alert("Login error: " + error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gray-50">
      <Box className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        <Text className="text-3xl font-bold text-center mb-8 text-black">Login</Text>
        <Box className="space-y-4">
          <Input
            placeholder="Email or Mobile"
            value={emailOrMobile}
            onChangeText={(text) => setEmailOrMobile(text)}
            className="w-full"
          />
          <Button
            label={loading ? "Logging in..." : "Login"}
            onPress={handleLogin}
            disabled={loading}
            className="w-full"
          />
        </Box>
      </Box>
    </main>
  );
}
