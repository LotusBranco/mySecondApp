import React from "react"
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native"

import { styles } from "./style"

import { Tarefa } from "../components/ListaTarefas"

export function Home() {
  const atividades = [""]

  function AdicionarTarefa() {
    return console.log("Você Clicou!")
  }

  function RemoverTarefa(nome: string) {
    return console.log(`Você remoreu a tarefa ${nome}`)
  }

  function TarefaCompletada() {
    return console.log("Tarefa foi completada")
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require("../assets/image/rocket.png")}
          style={styles.headerImageRocket}
        />
        <Text style={styles.headerTextTo}>to</Text>
        <Text style={styles.haderTextDo}>do</Text>
      </View>

      <View style={styles.ViewAdd}>
        <TextInput
          style={styles.textInput}
          placeholder="Adicione uma nova tarefa"
        ></TextInput>

        <TouchableOpacity style={styles.button} onPress={AdicionarTarefa}>
          <Image source={require("../assets/image/plus.png")}></Image>
        </TouchableOpacity>
      </View>

      <View style={styles.areaInfor}>
        <Text style={styles.areaInforCriadas}>Criadas</Text>
        <Text style={styles.areaInforConcluidas}>Concluidas</Text>
      </View>

      <FlatList
        data={[]}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Tarefa
            key={item}
            taf={item}
            onCompletada={TarefaCompletada}
            onRemove={() => RemoverTarefa("Primeira tareza")}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <View style={styles.listEmptyConteiner}>
            <Image
              source={require("../assets/image/Clipboard.png")}
              style={styles.listEmptyImage}
            />
            <Text style={styles.listEmpty}>
              Você nao tem tarefas cadastrada.
            </Text>
            <Text style={styles.listEmpty}>
              Crie tarefas e organizes seus itens a fazer.
            </Text>
          </View>
        )}
      />
    </View>
  )
}
