import { Link, useLocalSearchParams } from "expo-router";
import { View } from "react-native";
import { Avatar, Button, Text } from "react-native-paper";

export default function Profile() {
  const { userName, userEmail, userPhoto } = useLocalSearchParams<{
    userName: string;
    userEmail: string;
    userPhoto: string;
  }>();

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Avatar.Image size={120} source={{ uri: userPhoto }} />

      <Text variant="titleLarge">{userName}</Text>
      <Text variant="bodyLarge">{userEmail}</Text>

      <Link href="./home" push asChild>
        <Button mode="contained">Go to Home Screen</Button>
      </Link>
    </View>
  );
}