import { StyleSheet, Text, View, ImageBackground } from "react-native";
import Button from "../components/Button";
import Header from "../components/Header";
import ToDoList from "../components/ToDoList";
import { StatusBar } from "expo-status-bar";
import { useNavigation, useRouter } from "expo-router";
import { deleteAllCategories } from "../components/DB/category";
import { useEffect, useState } from "react";

const background = require("./background.png");

export default function Page() {
  const navigation = useNavigation();
  const router = useRouter();

  return (
    <>
      <ImageBackground source={background} style={styles.container}>
        <Header
          options={[{ name: "Deletar Tudo", action: () => router.push('/category/delete') }]}
          title="Tarefas"
          search
          navigation={navigation}
        />
        <ToDoList />
        <Button />
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
