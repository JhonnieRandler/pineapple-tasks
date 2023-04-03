import { Text, View, ScrollView, TouchableOpacity } from "react-native";
import styles from "./styles";
import { getCategories } from "../DB/category";
import { useEffect, useState } from "react";
import { useRouter } from "expo-router";
import Category from "../Category";
import { Category as CategoryType } from "../Types";

type AppProps = {
  items: CategoryType[];
  alternativeText: string;
};

export default function ToDoList({items, alternativeText}: AppProps) {
  const [categories, setCategories] = useState([]);
  const router = useRouter();

  useEffect(() => {
    if (items) {
      setCategories(items);
    } else {
      setCategories(getCategories());
    }
  }, [items]);

  if (categories.length < 1) {
    return (
          <View style={styles.null}>
            <Text style={styles.text}>{alternativeText ? alternativeText: "Você não possui nenhuma tarefa!"}</Text>
          </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      {categories.map((item) => (
        <TouchableOpacity
          key={item.id}
          onPress={() => {
            router.push(`/category/${item.id}`);
          }}
          activeOpacity={0.5}
        >
          <View style={styles.main}>
            <Category title={item.name} date={item.date} />
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}
