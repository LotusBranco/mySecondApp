import React, { useState } from "react"
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
  Alert,
} from "react-native"

import { styles } from "./style"

import { Tarefa } from "../components/ListaTarefas"

export function Home() {
  const [atividades, setAtividades] = useState<string[]>([])
  const [tarefaAdicionada, setTarefaAdicionada] = useState("")

  function AdicionarTarefa() {
    if (tarefaAdicionada == "") {
      return Alert.alert(
        "Adicione uma tarefa",
        "Você deve adicionar uma tarefa."
      )
    }

    setAtividades((prevState) => [...prevState, tarefaAdicionada])
    setTarefaAdicionada("")
  }

  function RemoverTarefa(taf: string) {
    setAtividades(atividades.filter((atividade) => atividade !== taf))
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
          onChangeText={setTarefaAdicionada}
          value={tarefaAdicionada}
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
        data={atividades}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Tarefa
            key={item}
            taf={item}
            onCompletada={TarefaCompletada}
            onRemove={() => RemoverTarefa(item)}
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
              Você não tem tarefas cadastradas.
            </Text>
            <Text style={styles.listEmpty}>
              Crie tarefas e organize seus itens a fazer.
            </Text>
          </View>
        )}
      />
    </View>
  )
}
