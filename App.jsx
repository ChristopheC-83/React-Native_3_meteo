import { View, Text, ImageBackground } from "react-native";
import { s } from "./App.style";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Home from "./pages/Home/Home";
import bgImgSummer from "./assets/images/bg/ete.jpg";
import ReemKufiFun from "./assets/fonts/ReemKufiFun.ttf";
import { useFonts } from "expo-font";
import { NavigationContainer, StackRouter } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Forecast from "./pages/Forecast/Forecast";

const Stack = createNativeStackNavigator();
const navTheme={
  colors:{
    bacjground:"transparent",
  }
}

export default function App() {
  const [isFontLoaded] = useFonts({
    ReemKufiFun: ReemKufiFun,
  });

  return (
    <NavigationContainer theme={navTheme}>
      
            {isFontLoaded ? (
              <Stack.Navigator
                initialRouteName="Home"
                screenOptions={{animation:"fade", headerShown: false }}
              >
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Forecast" component={Forecast} />
              </Stack.Navigator>
            ) : null}
    </NavigationContainer>
  );
}
