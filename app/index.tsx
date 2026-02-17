import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Image
          source={require("../assets/images/friend1.jpg")}
          style={styles.image}
        />
        <Text style={styles.text}>Feli Rafael</Text>
      </View>
      <View style={styles.container}>
        <Image
          source={require("../assets/images/friend3.jpg")}
          style={styles.image}
        />
        <Text style={styles.text}>Aurelia Ivanka</Text>
      </View>
      <View style={styles.container}>
        <Image
          source={require("../assets/images/friend6.jpg")}
          style={styles.image}
        />
        <Text style={styles.text}>PAtrcik Winardi</Text>
      </View>
      <View style={styles.container}>
        <Image
          source={require("../assets/images/friend2.jpg")}
          style={styles.image}
        />
        <Text style={styles.text}>Ivan Christian</Text>
      </View>
      <View style={styles.container}>
        <Image
          source={require("../assets/images/friend4.jpg")}
          style={styles.image}
        />
        <Text style={styles.text}>Vieri Halim</Text>
      </View>
      <View style={styles.container}>
        <Image
          source={require("../assets/images/friend5.jpg")}
          style={styles.image}
        />
        <Text style={styles.text}>Celine Devany</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#fff",
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: "contain",
  },
});
