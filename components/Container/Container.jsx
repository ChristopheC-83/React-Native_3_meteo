import { View, Text, ImageBackground } from "react-native";
import { s } from "./Container.style";
import bgImgSummer from "../../assets/images/bg/ete.jpg";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function Container({ children }) {
  return (
    <ImageBackground source={bgImgSummer} style={s.imgBg} imageStyle={s.img}>
      <SafeAreaProvider>
        <SafeAreaView style={s.container}>{children}</SafeAreaView>
      </SafeAreaProvider>
    </ImageBackground>
  );
}
