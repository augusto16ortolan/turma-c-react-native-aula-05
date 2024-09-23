import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView } from "react-native";

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
  return (
    <ScrollView style={styles.container}>
      {pessoas.map((pessoa) => (
        <View style={styles.containerPessoa}>
          <Text style={styles.textoPessoa}>{pessoa.nome}</Text>
          <Text style={styles.textoPessoa}>{pessoa.sobrenome}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 16,
    paddingTop: 16,
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
