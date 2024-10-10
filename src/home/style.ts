import { StyleSheet } from "react-native"
import { TextInput } from "react-native-gesture-handler"

export const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: "#333333",
  },
  header: {
    backgroundColor: "#0D0D0D",
    width: "100%",
    height: 173,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  headerImageRocket: {
    marginRight: 10,
  },
  headerTextTo: {
    color: "#4EA8DE",
    fontSize: 36,
    fontWeight: "bold",
    fontFamily: "Inter",
    lineHeight: 140,
  },
  hehaderTextDo: {
    color: "#5E60CE",
    fontSize: 36,
    fontWeight: "bold",
    fontFamily: "Inter",
  },
  TextInput: {
    width: 100,
    height: 50,
    backgroundColor: "red",
  },
  Button: {
    width: 100,
    height: 50,
  },
})
