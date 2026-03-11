import { Link } from "expo-router";
import { ScrollView, TouchableOpacity, View } from "react-native";
import { Avatar, Card, Text } from "react-native-paper";
import styles from "./AppStyles";
import userData from "./data.json";

export default function UserList() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {userData.map((user, index) => (
        <Card key={index} style={styles.card}>
          <Link
            href={{
              pathname: "./profile",
              params: {
                userName: user.name,
                userEmail: user.email,
                userPhoto: user.photo_url
              }
            }}
            push
            asChild
          >
            <TouchableOpacity>
              <Card.Content style={styles.cardContent}>
                <Avatar.Image
                  size={70}
                  source={{ uri: user.photo_url }}
                />

                <View style={styles.textContainer}>
                  <Text variant="titleMedium">{user.name}</Text>
                  <Text variant="bodyMedium">{user.email}</Text>
                </View>
              </Card.Content>
            </TouchableOpacity>
          </Link>
        </Card>
      ))}
    </ScrollView>
  );
}