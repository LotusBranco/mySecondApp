import { StyleSheet } from "react-native"
import { TextInput } from "react-native-gesture-handler"

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#333333",
    padding: 24,
  },
  header: {
    backgroundColor: "#0D0D0D",
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    margin: -24,
    height: 173,
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

  haderTextDo: {
    color: "#5E60CE",
    fontSize: 36,
    fontWeight: "bold",
    fontFamily: "Inter",
  },
  ViewAdd: {
    width: "100%",
    flexDirection: "row",
    marginBottom: 36,
  },
  textInput: {
    flex: 1,
    height: 52,
    marginRight: 10,
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#262626",
    color: "#fff",
  },
  button: {
    height: 52,
    width: 52,
    borderRadius: 5,
    backgroundColor: "#1E6F9F",
    alignItems: "center",
    justifyContent: "center",
  },
  areaInfor: {
    flexDirection: "row",
    marginBottom: 20,
  },
  areaInforCriadas: {
    flex: 1,
    fontSize: 16,
    color: "#4EA8DE",
    fontWeight: "bold",
  },
  areaInforConcluidas: {
    fontSize: 16,
    color: "#8284FA",
    fontWeight: "bold",
  },
  listEmptyConteiner: {
    alignItems: "center",
    marginTop: 46,
  },
  listEmptyImage: {
    marginBottom: 20,
  },
  listEmpty: {
    color: "#808080",
    fontSize: 16,
  },
})
