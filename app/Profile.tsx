import { Text, View } from "react-native";

interface iProfile {
  name: string;
  age: number;
}

const Profile = ({ name, age }: iProfile) => {
  return (
    <View style={{ marginTop: 20 }}>
      <Text>Nama: {name}</Text>
      <Text>Umur: {age}</Text>
    </View>
  );
};

export default Profile;