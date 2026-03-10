import { Stack } from "expo-router";
import { Image, ScrollView, Text, View } from "react-native";
import styles from "./AppStyles";
import userData from "./data.json";

export default function App() {
  return (
    <>
      {/* Screen Name */}
      <Stack.Screen options={{ title: "User List" }} />

      <ScrollView>
        {userData.map((users, index) => (
          <View style={styles.container} key={index}>
            <View style={styles.card}>
              <Image
                source={{ uri: users.photo_url }}
                style={styles.avatar}
              />
              <View>
                <Text style={styles.boldText}>{users.name}</Text>
                <Text>{users.email}</Text>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//     padding: 5,
//     display: "flex",
//   },
//   card: {
//     borderWidth: 1,
//     borderColor: "black",
//     borderRadius: 8,
//     display: "flex",
//     flexDirection: "row",
//     alignItems: "center",
//     padding: 8,
//     width: 325,
//     gap: 8,
//   },
//   avatar: {
//     width: 75,
//     height: 75,
//     borderRadius: 999,
//   },
//   boldText: {
//     fontWeight: "bold",
//   },
// });

