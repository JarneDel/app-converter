import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import Conversion from "./screens/MainStack/Conversion";
import React from "react";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="arabicToRoman"
            component={Conversion}
            options={{
              title: "Roman number converter",
              headerShown: true,
              animation: "fade_from_bottom",
            }}
          />
          <Stack.Screen
            name="settings"
            component={Conversion}
            options={{
              title: "Settings",
              headerShown: true,
              animation: "fade_from_bottom",

            }}
          />
        </Stack.Navigator>
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
