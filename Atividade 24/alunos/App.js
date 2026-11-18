
import { StyleSheet, Text, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "./src/components/header";

const studentNames = [
  "Ana Silva",
  "Bruno Santos",
  "Carlos Oliveira",
  "Diana Pereira",
  "Eduardo Costa",
];

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Header title="Lista de Alunos" />

      <FlatList
        data={studentNames}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Text style={styles.student}>{item}</Text>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  student: {
    fontSize: 18,
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
});
