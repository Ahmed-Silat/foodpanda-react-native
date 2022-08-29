import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import MyDrawer from "./src/config/drawerNavigator";
import MainNavigator from "./src/config/navigation";

export default function App() {
  return (
    <NavigationContainer>
      <MainNavigator />
      {/* <MyDrawer /> */}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
