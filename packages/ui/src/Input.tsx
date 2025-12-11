import { TextInput, TextInputProps } from "react-native";
import { cn } from "./utils";

export interface InputProps extends TextInputProps {
  className?: string;
}

export function Input({ className, ...props }: InputProps) {
  return (
    <TextInput
      className={cn(
        "bg-white border border-gray-300 rounded-lg px-4 py-2 text-base text-black",
        className
      )}
      placeholderTextColor="#9ca3af"
      {...props}
    />
  );
}
