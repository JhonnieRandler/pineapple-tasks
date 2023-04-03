import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
} from "react-native";
import { useEffect, useState } from "react";
import Header from "../../components/Header";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "expo-router";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { addCategory } from "../../components/DB/category";

const background = require("../background.png");

export default function AddCategory() {
  const navigation = useNavigation();
  const [name, setcategoryName] = useState("");
  const [date, setcategoryDate] = useState("");

  const [isDisabled, setDisabled] = useState(true);

  useEffect(() => {
    if (name.length > 0 && date.length > 0) {
      setDisabled(false);
    }
  }, [name, date]);

  return (
    <>
      <ImageBackground source={background} style={styles.container}>
        <Header
          back
          save={() => addCategory({name, date})}
          title="Adicionar"
          navigation={navigation}
          disabled={isDisabled}
        />
        <View style={styles.category_info}>
          <TextInput
            value={name}
            onChangeText={(categoryName) => setcategoryName(categoryName)}
            placeholder={"Título "}
            placeholderTextColor={"#8F0BFF"}
            style={styles.title}
          />
          <View style={styles.date_content}>
            <MaterialCommunityIcons
              name="calendar-plus"
              size={20}
              color="#5600A0"
            />
            <TextInput
              value={date}
              onChangeText={(categoryDate) => setcategoryDate(categoryDate)}
              placeholder={"Data "}
              placeholderTextColor={"#5600A0"}
              style={styles.date}
            />
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
    paddingTop: 24,
  },
  main: {
    flex: 1,
  },
  category_info: {
    width: "100%",
    padding: 20,
    alignItems: "flex-start",
  },
  title: {
    fontFamily: "Cairo",
    color: "#8F0BFF",
    fontWeight: "700",
    fontSize: 20,
  },
  date: {
    fontFamily: "Cairo",
    color: "#5600A0",
    fontWeight: "400",
    fontSize: 20,
    height: 40
  },
  date_content: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
});
