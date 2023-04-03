import { StyleSheet, Text, View, ImageBackground } from "react-native";
import Header from "../../components/Header";
import { StatusBar } from "expo-status-bar";
import { useNavigation, useRouter, useSearchParams } from "expo-router";
import { deleteCategory, getCategoryById } from "../../components/DB/category";
import ItemList from "../../components/ItemList";
import { Category as CategoryType } from "../../components/Types";
import { useEffect, useState } from "react";
import { deleteItemsByCategory } from "../../components/DB/item";

const background = require("../background.png");

export default function Category() {
  const navigation = useNavigation();
  const router = useRouter();

  const { id } = useSearchParams();
  const [category, setCategory] = useState<CategoryType>({
    id: null,
    name: "",
    date: "",
  });

  useEffect(() => {
    setCategory(getCategoryById(id));
  }, []);

  const deleteAndGoHome = () => {
    deleteCategory(id);
    deleteItemsByCategory(id);
    router.push("/");
  };

  return (
    <>
      <ImageBackground source={background} style={styles.container}>
        <Header
          options={[
            {
              name: "Deletar",
              action: deleteAndGoHome,
            },
          ]}
          back
          title="Editar"
          navigation={navigation}
        />
        <View style={styles.category_info}>
          <Text style={styles.title}>{category.name}</Text>
          <Text style={styles.date}>{category.date}</Text>
        </View>
        <ItemList id={id} />
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
  },
});
