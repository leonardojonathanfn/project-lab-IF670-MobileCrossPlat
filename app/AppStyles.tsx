import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
  },

  card: {
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
    width: 325,
    marginBottom: 10,
  },

  cardContent: {
    flexDirection: "row",
    alignItems: "center",
  },

  textContainer: {
    marginLeft: 10,
  },

  avatar: {
    width: 75,
    height: 75,
    borderRadius: 999,
  },

  boldText: {
    fontWeight: "bold",
  },
});

export default styles;