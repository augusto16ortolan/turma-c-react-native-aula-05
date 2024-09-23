import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  FlatList,
} from "react-native";
import React, { useState } from "react";

const pessoas = [
  {
    nome: "Augusto",
    sobrenome: "Ortolan",
  },
  {
    nome: "Luiz",
    sobrenome: "Pereira",
  },
  {
    nome: "Ana",
    sobrenome: "Santos",
  },
  {
    nome: "Laura",
    sobrenome: "Ramos",
  },
  {
    nome: "Otavio",
    sobrenome: "Santos",
  },
  {
    nome: "Luiz",
    sobrenome: "Pereira",
  },
  {
    nome: "Ana",
    sobrenome: "Santos",
  },
  {
    nome: "Laura",
    sobrenome: "Ramos",
  },
  {
    nome: "Otavio",
    sobrenome: "Santos",
  },
  {
    nome: "Augusto",
    sobrenome: "Ortolan",
  },
  {
    nome: "Luiz",
    sobrenome: "Pereira",
  },
  {
    nome: "Ana",
    sobrenome: "Santos",
  },
  {
    nome: "Laura",
    sobrenome: "Ramos",
  },
  {
    nome: "Otavio",
    sobrenome: "Santos",
  },
  {
    nome: "Luiz",
    sobrenome: "Pereira",
  },
  {
    nome: "Ana",
    sobrenome: "Santos",
  },
  {
    nome: "Laura",
    sobrenome: "Ramos",
  },
  {
    nome: "Otavio",
    sobrenome: "Santos",
  },
];

export default function App() {
  const [numero, setNumero] = useState(0);
  const [valor1, setValor1] = useState();
  const [valor2, setValor2] = useState();
  const [resultado, setResultado] = useState();

  function somar() {
    setNumero(numero + 1);
  }

  function subtrair() {
    setNumero(numero - 1);
  }

  function somarValores() {
    setResultado(parseInt(valor1) + parseInt(valor2));
  }

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 50 }}>{numero}</Text>
      <Button onPress={() => somar()} title="Somar" />
      <Button onPress={() => subtrair()} title="Subtrair" />

      <TextInput
        value={valor1}
        onChangeText={setValor1}
        style={{ width: "90%", borderWidth: 1, height: 60 }}
        placeholder="Digite o valor 1"
      />
      <TextInput
        value={valor2}
        onChangeText={setValor2}
        style={{ width: "90%", borderWidth: 1, height: 60 }}
        placeholder="Digite o valor 2"
      />

      <Button onPress={() => somarValores()} title="Somar valores" />
      <Text style={{ fontSize: 50 }}>Resultado: {resultado}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  containerPessoa: {
    borderWidth: 1,
    marginBottom: 10,
    width: "100%",
    height: 100,
    paddingLeft: 10,
    paddingTop: 10,
  },
  textoPessoa: {
    fontSize: 20,
  },
});
