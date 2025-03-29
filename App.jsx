import { View, Text, ImageBackground } from "react-native";
import { s } from "./App.style";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Home from "./pages/Home/Home";
import bgImgSummer from "./assets/images/bg/ete.jpg";
import ReemKufiFun from "./assets/fonts/ReemKufiFun.ttf";
import { useFonts } from "expo-font";

export default function App() {
  const [isFontLoaded] = useFonts({
    ReemKufiFun: ReemKufiFun,
  });

  console.log(isFontLoaded);
  return (
    <ImageBackground source={bgImgSummer} style={s.imgBg} imageStyle={s.img}>
      <SafeAreaProvider>
        <SafeAreaView style={s.container}>
          {isFontLoaded && <Home />}
        </SafeAreaView>
      </SafeAreaProvider>
    </ImageBackground>
  );
}
