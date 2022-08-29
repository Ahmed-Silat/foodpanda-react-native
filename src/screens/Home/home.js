import { DrawerActions } from "@react-navigation/native";
import { Button, Text, View } from "react-native";

export default function Home({ navigation }) {
  return (
    <View>
      <Text>Home</Text>
      <Button
        title="Go To Profile"
        onPress={() => navigation.navigate("Profile")}
      />
      {/* <CustomDrawerContent /> */}
    </View>
  );
}
// function CustomDrawerContent({ navigation }) {
//   return (
//     <Button
//       title="Go somewhere"
//       onPress={() => {
//         // Navigate using the `navigation` prop that you received
//         navigation.navigate("SomeScreen");
//       }}
//     />
//   );
// }
