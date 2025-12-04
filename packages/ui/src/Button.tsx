import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { Text } from "./Text";
import { cn } from "./utils";

export interface ButtonProps extends TouchableOpacityProps {
  className?: string;
  label: string;
  variant?: "primary" | "secondary" | "outline";
}

export function Button({
  className,
  label,
  variant = "primary",
  ...props
}: ButtonProps) {
  const baseStyles = "p-4 rounded-lg items-center justify-center";
  const variants = {
    primary: "bg-primary-main",
    secondary: "bg-secondary-main",
    outline: "border border-primary-main bg-transparent",
  };
  const textVariants = {
    primary: "text-white font-bold",
    secondary: "text-white font-bold",
    outline: "text-primary-main font-bold",
  };

  return (
    <TouchableOpacity
      className={cn(baseStyles, variants[variant], className)}
      {...props}
    >
      <Text className={textVariants[variant]}>{label}</Text>
    </TouchableOpacity>
  );
}
