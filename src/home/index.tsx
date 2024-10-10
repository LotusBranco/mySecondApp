import React from "react"
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native"

import { styles } from "./style"

export function Home() {
  return (
    <View style={styles.Container}>
      <View style={styles.header}>
        <Image
          source={require("../assets/image/rocket.png")}
          style={styles.headerImageRocket}
        />
        <Text style={styles.headerTextTo}>to</Text>
        <Text style={styles.hehaderTextDo}>do</Text>
      </View>
    </View>
  )
}
