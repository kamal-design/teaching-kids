import "./global.css";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Box, Text, Button } from "@teaching-kids/ui";

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView
        className="flex-1 bg-background-default"
        edges={["top", "left", "right"]}
      >
        <StatusBar style="light" />
        <Content />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

function Content() {
  return (
    <Box className="flex-1">
      <Box className="flex-1 px-4 pt-8 pb-20">
        {/* Header */}
        <Box className="items-center mb-8">
          {/* Placeholder for Avatar */}
          <Box className="w-32 h-32 bg-primary-light rounded-full mb-4 items-center justify-center">
            <Text className="text-4xl">👩‍🏫</Text>
          </Box>
          <Text className="text-3xl font-bold text-text-primary">
            Hi 👋, I am Nova.
          </Text>
        </Box>

        {/* CTA */}
        <Box className="mb-8">
          <Button
            label="Ask Nova"
            variant="primary"
            className="w-full rounded-full"
          />
        </Box>

        {/* Grid */}
        <Box className="flex-row flex-wrap justify-between">
          <Card
            title="Speak & draft email/msg"
            subtitle="Telugu లో మాట్లాడి..."
          />
          <Card title="Translate To English" subtitle="మీరు Telugu లో..." />
          <Card title="Ask English Doubts" subtitle="నేను English doubts..." />
          <Card title="Find Word Meanings" subtitle="నేను మీకు words..." />
        </Box>
      </Box>

      {/* Bottom Nav */}
      <Box className="absolute bottom-0 left-0 right-0 flex-row justify-around py-4 bg-background-paper border-t border-gray-800">
        <NavIcon label="Learn" icon="🏠" />
        <NavIcon label="Ask AI" icon="🤖" active />
        <NavIcon label="Reports" icon="📊" />
        <NavIcon label="HW Help" icon="📷" />
      </Box>
    </Box>
  );
}

function Card({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <Box className="w-[48%] bg-background-paper p-4 rounded-xl mb-4 min-h-[140px] justify-between">
      <Box>
        {/* Icon placeholder */}
        <Box className="w-8 h-8 bg-primary-dark rounded-full mb-2" />
        <Text className="text-lg font-bold text-text-primary mb-1 leading-6">
          {title}
        </Text>
        <Text className="text-sm text-text-secondary">{subtitle}</Text>
      </Box>
      <Box className="items-end">
        <Text className="text-primary-light">↗</Text>
      </Box>
    </Box>
  );
}

function NavIcon({
  label,
  active,
  icon,
}: {
  label: string;
  active?: boolean;
  icon: string;
}) {
  return (
    <Box className="items-center">
      <Text
        className={`text-xl mb-1 ${active ? "text-primary-main" : "text-text-secondary"}`}
      >
        {icon}
      </Text>
      <Text
        className={`text-xs ${active ? "text-primary-main" : "text-text-secondary"}`}
      >
        {label}
      </Text>
    </Box>
  );
}
