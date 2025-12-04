import { Text as RNText, TextProps as RNTextProps } from "react-native";
import { cn } from "./utils";

export interface TextProps extends RNTextProps {
  className?: string;
}

export function Text({ className, ...props }: TextProps) {
  return (
    <RNText
      className={cn("text-text-primary font-base", className)}
      {...props}
    />
  );
}
