import { StyleSheet, Text, View, SafeAreaView, FlatList } from "react-native";

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
    <SafeAreaView style={styles.container}>
      <FlatList
        data={pessoas}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {
          return (
            <View style={styles.containerPessoa}>
              <Text style={styles.textoPessoa}>{item.nome}</Text>
              <Text style={styles.textoPessoa}>{item.sobrenome}</Text>
            </View>
          );
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 16,
    paddingTop: 30,
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
