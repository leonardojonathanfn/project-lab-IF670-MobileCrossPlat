import { Link } from "expo-router";
import { Button, Text, View } from "react-native";

export default function Home() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Navigation List</Text>

      <View style={{ marginTop: 10 }}>
        <Link href="./email" push asChild>
          <Button title="Go to Email Screen" />
        </Link>
      </View>

      <View style={{ marginTop: 10 }}>
        <Link href="./userList" push asChild>
          <Button title="Go to User List Page" />
        </Link>
      </View>

    </View>
  );
}