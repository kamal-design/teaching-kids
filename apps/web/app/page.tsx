"use client";

import { Box, Text, Button } from "@teaching-kids/ui";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-background-default">
      <Box className="items-center">
        <Text className="text-4xl font-bold text-primary-main mb-4">
          Teaching Kids App
        </Text>
        <Text className="text-xl text-text-secondary mb-8">Web Portal</Text>
        <Button label="Get Started" onPress={() => alert("Clicked!")} />
      </Box>
    </main>
  );
}
