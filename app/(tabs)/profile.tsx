import { ActivityIndicator, StyleSheet, Text, View } from "react-native";

export default function Profile() {
  return (
    <View style={style.container}>
      <Text>A profile Screen</Text>
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
