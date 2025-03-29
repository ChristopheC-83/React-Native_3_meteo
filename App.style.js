import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  container: {
    flex: 1,
    color : "white",
  },
  imgBg: {
    flex: 1,
    // pour bg foncé, on met bgc black et on baisse opacity de l'img avec imageStyle
    backgroundColor : "black",
  },
  img: {
    opacity: 0.75,
  },
});
