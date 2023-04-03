import { StyleSheet, Text, View, ImageBackground } from "react-native";
import SearchHeader from "../components/SearchHeader";
import ToDoList from "../components/ToDoList";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "expo-router";
import { useEffect, useState } from "react";
import { getCategories } from "../components/DB/category";

const background = require("./background.png");

export default function SearchPage() {
  const navigation = useNavigation();
  const [categories, setCategories] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    setCategories(getCategories());
  }, []);

  const filteredCategories =
    search.length > 0
      ? categories.filter(category => category.name.toLowerCase().includes(search.toLowerCase()))
      : categories;


  return (
    <>
      <ImageBackground source={background} style={styles.container}>
        <SearchHeader
          text={search}
          setText={setSearch}
          navigation={navigation}
        />
        <ToDoList items={filteredCategories} alternativeText={"Nenhuma tarefa encontrada!"} />
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
});
