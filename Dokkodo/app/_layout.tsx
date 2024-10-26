import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Platform, SafeAreaView, StatusBar, StyleSheet } from "react-native";
import { TabBarIcon } from "@/components/navigation/TabBarIcon";

import HomeScreen from "./(tabs)/index";
import TabTwoScreen from "./(tabs)/explore";
import PreceptScreen from "./PreceptScreen";
import GlobalStyles from "@/constants/GlobalStyles";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

function TabsNavigator() {
  const colorScheme = useColorScheme();

  const tabBarActiveTintColor = colorScheme === "dark" ? "#9B2C2C" : "#9B2C2C";
  const tabBarInactiveTintColor =
    colorScheme === "dark"
      ? GlobalStyles.primaryBackground.backgroundColor
      : GlobalStyles.secondaryBackground.backgroundColor;

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar
        barStyle={colorScheme === "dark" ? "light-content" : "dark-content"}
      />
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: tabBarActiveTintColor,
          tabBarInactiveTintColor: tabBarInactiveTintColor,
          headerShown: false,
        }}
      >
        <Tab.Screen
          name="index"
          component={HomeScreen}
          options={{
            title: "Home",
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon
                name={focused ? "home" : "home-outline"}
                color={color}
              />
            ),
          }}
        />
        <Tab.Screen
          name="About"
          component={TabTwoScreen}
          options={{
            title: "About",
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon
                name={focused ? "book-outline" : "book-outline"}
                color={color}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </SafeAreaView>
  );
}

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    // SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    CormorantGaramond: require("../assets/fonts/CormorantGaramond-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack.Navigator>
        <Stack.Screen
          name="(tabs)"
          component={TabsNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="PreceptScreen" component={PreceptScreen} />
      </Stack.Navigator>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
