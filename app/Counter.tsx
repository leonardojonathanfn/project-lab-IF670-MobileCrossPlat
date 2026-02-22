import { Button, Text, View } from "react-native";

interface iCounter {
  handleIncrement: () => void;
  handleDecrement: () => void;
  onPassValue: () => void;
  value: number;
}

const Counter = ({
  handleIncrement,
  handleDecrement,
  onPassValue,
  value,
}: iCounter) => {
  return (
    <View>
      <Text>Umur: {value}</Text>
      <Button title="Increment" onPress={handleIncrement} />
      <Button title="Decrement" onPress={handleDecrement} />
      <Button title="Pass Value" onPress={onPassValue} />
    </View>
  );
};

export default Counter;