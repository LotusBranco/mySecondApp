import React from "react"
import { View, Text, TouchableOpacity, Image } from "react-native"
import { styles } from "./style"

type Props = {
  taf: string
  onRemove: () => void
  onCompletada: () => void
}

export function Tarefa({ taf, onRemove, onCompletada }: Props) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.buttonCheck} onPress={onCompletada}>
        <Image source={require("../../assets/image/layer1.png")} />
      </TouchableOpacity>

      <Text style={styles.textTarefa}>{taf}</Text>

      <TouchableOpacity style={styles.buttonExcluir} onPress={onRemove}>
        <Image source={require("../../assets/image/layer2.png")} />
      </TouchableOpacity>
    </View>
  )
}
