import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { useNavigation, useRouter } from "expo-router";
import { deleteAllCategories } from "../../components/DB/category";
import { deleteAllItems } from "../../components/DB/item";

const background = require("../background.png");

export default function AddCategory() {
  const navigation = useNavigation();
  const router = useRouter();

  const deleteAndGoHome = () => {
    deleteAllCategories();
    deleteAllItems();
    router.push("/");
  };

  return (
    <>
      <ImageBackground source={background} style={styles.container}>
        <View style={styles.main}>
          <Text style={styles.title}>Deletar tudo?</Text>
          <Text style={styles.text}>
            Tem certeza que você deseja deletar todas as tarefas?
          </Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity activeOpacity={0.4} onPress={navigation.goBack}>
              <Text style={styles.not}>NÃO</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.4} onPress={deleteAndGoHome}>
              <Text style={styles.yes}>SIM</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
      <StatusBar style="dark" backgroundColor="white" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 24,
  },
  main: {
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    borderRadius: 7,
    padding: 20,
    gap: 20,
  },
  title: {
    fontFamily: "Roboto",
    fontWeight: "500",
    color: "#FFFEFE",
    fontSize: 16,
    lineHeight: 19,
  },
  text: {
    fontFamily: "Roboto",
    fontWeight: "400",
    color: "#FFFEFE",
    fontSize: 14,
    lineHeight: 21,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    gap: 20,
  },
  not: {
    fontFamily: "Roboto",
    fontWeight: "500",
    color: "#FFFEFE",
    fontSize: 12,
    lineHeight: 14,
  },
  yes: {
    fontFamily: "Roboto",
    fontWeight: "700",
    color: "#FF0000",
    fontSize: 12,
    lineHeight: 14,
  },
});
