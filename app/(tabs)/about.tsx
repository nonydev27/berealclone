import { Image } from "expo-image";
import { ActivityIndicator, StyleSheet, View } from "react-native";

export default function About() {
  return (
    <View style={style.container}>
      <Image
        source={{
          uri: "https://lh3.googleusercontent.com/pw/AP1GczPF4wuuRxcghXH97i5A7_rZoTp45hbTgGbIQ1qQtmeNOpoHhifdO9JeYpWA2Ivtp7_jnP8K45amsMYnM-1etjidzCXM753_iBEwjJm2lbj60JHuP6IO2Q5HpFoyxrTb_bR1_QsvhT1A7iV8sbiXcds9=w1449-h966-s-no?authuser=0",
        }}
        style={style.img}
      />
      <ActivityIndicator />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  title: {
    color: "blue",
  },

  img: {
    width: 200,
    height: 200,
  },
});
