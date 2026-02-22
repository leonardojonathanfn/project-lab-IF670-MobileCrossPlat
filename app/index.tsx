import { useState } from "react";
import { StyleSheet, View, TextInput } from "react-native";
import Counter from "./Counter";
import Profile from "./Profile";

export default function Index() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  const [showProfile, setShowProfile] = useState(false);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  const handlePassValue = () => {
    setShowProfile(true);
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Masukkan Nama"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />

      <Counter
        value={count}
        handleIncrement={handleIncrement}
        handleDecrement={handleDecrement}
        onPassValue={handlePassValue}
      />

      {showProfile && <Profile name={name} age={count} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    borderWidth: 1,
    width: 200,
    padding: 8,
    marginBottom: 20,
  },
});

