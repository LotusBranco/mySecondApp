import { StyleSheet } from "react-native"
import { TextInput } from "react-native-gesture-handler"

export const styles = StyleSheet.create({
  container: {
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
  ViewAdd: {
    flex: 1,
    flexDirection: "row",
  },

  hehaderTextDo: {
    color: "#5E60CE",
    fontSize: 36,
    fontWeight: "bold",
    fontFamily: "Inter",
  },
  textInput: {
    width: "76%",
    marginTop: -26,
    height: 52,
    marginLeft: 16,
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#262626",
    color: "#fff",
  },
  button: {
    marginTop: -27,
    height: 52,
    width: 52,
    marginLeft: 10,
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#1E6F9F",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
})
