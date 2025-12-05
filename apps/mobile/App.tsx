import "./global.css";
import "./global.css";
// @ts-ignore
import { View, Text, StyleSheet, Platform } from "react-native-web";
// import { View, Text, StyleSheet, Platform } from "react-native";

console.log("Running on Platform:", Platform.OS);
const debugStyles = StyleSheet.create({ test: { color: "red" } });
console.log("Debug Styles:", debugStyles);

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Basic Render Test</Text>
      <Text>Platform: {Platform.OS}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "lightblue",
    minHeight: "100vh", // Ensure full height on web
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "black",
  },
});
