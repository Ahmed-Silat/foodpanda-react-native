import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home/home";
import Profile from "../screens/Profile/profile";

const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
}

export default function MainNavigator() {
  return <MyStack />;
}
