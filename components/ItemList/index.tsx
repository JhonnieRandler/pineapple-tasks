import { Text, View, ScrollView, TouchableOpacity } from "react-native";
import Item from "../Item";
import styles from "./styles";
import { getItemsByCategory, addItem } from "../DB/item";
import { useEffect, useState } from "react";

type AppProps = {
  id: any;
};

export default function ItemList({ id }: AppProps) {
  const [items, setItems] = useState([]);

  const handleClick = () => {
    addItem({ id_category: id, recente: true });
    setItems(getItemsByCategory(id));
  };

  useEffect(() => {
    setItems(getItemsByCategory(id));
  }, []);

  const update = () => {
    setItems(getItemsByCategory(id));
  }

  return (
    <ScrollView style={styles.container}>
      {items.map((item, index) => (
        <View key={index} style={styles.main}>
          <Item id={item.id} action={update} even={Boolean(index % 2)} />
        </View>
      ))}
      <TouchableOpacity onPress={handleClick}>
        <Item plus even={Boolean(items.length % 2)} />
      </TouchableOpacity>
    </ScrollView>
  );
}
