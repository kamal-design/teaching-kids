import { View, ViewProps } from "react-native";
import { cn } from "./utils";

export interface BoxProps extends ViewProps {
  className?: string;
}

export function Box({ className, ...props }: BoxProps) {
  return <View className={cn(className)} {...props} />;
}
