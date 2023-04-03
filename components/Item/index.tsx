import { Text, TextInput, TouchableOpacity, View } from "react-native";
import styles, { dynamicBackground } from "./styles";
import { Feather } from "@expo/vector-icons";
import { FontAwesome5, AntDesign } from "@expo/vector-icons";
import { getItemById, editItem, deleteItem } from "../DB/item";
import { useEffect, useState } from "react";

type AppProps = {
  id: number;
  even: boolean;
  plus: boolean;
  action: () => void;
};

interface Item {
  id: number;
  name: string;
  time: string;
  done: boolean;
}

export default function Item({ id, even, plus, action }: AppProps) {
  const [item, setItem] = useState<Item>({
    id: null,
    name: "",
    time: "",
    done: false,
  });

  const [name, setName] = useState("");

  const [showDelete, setShowDelete] = useState(false);

  const handleCheck = () => {
    const updatedItem = { done: !item.done };
    editItem(id, updatedItem);
    setItem({ ...item, ...updatedItem });
  };

  const handleSave = () => {
    const updatedItem = { name, recente: false };
    editItem(id, updatedItem);
    setItem({ ...item, ...updatedItem });
    setShowDelete(!showDelete);
  }

  const handleDelete = () => {
    deleteItem(id);
    setShowDelete(!showDelete);
    action();
  };

  useEffect(() => {
    setItem(getItemById(id));
  }, []);

  useEffect(() => {
    if (item) {
      setName(item.name);
      setShowDelete(item.recente);
    }
  }, [item]);

  if (plus) {
    return (
      <>
        <View
          style={[
            styles.container,
            even ? dynamicBackground.even : dynamicBackground.odd,
          ]}
        >
          <View />
          <FontAwesome5 name="plus" size={20} color="#5600A0" />
        </View>
      </>
    );
  }

  return (
    <TouchableOpacity
      onLongPress={() => setShowDelete(!showDelete)}
      activeOpacity={0.5}
    >
      <View
        style={[
          styles.container,
          even ? dynamicBackground.even : dynamicBackground.odd,
        ]}
      >
        <TouchableOpacity onPress={handleCheck}>
          {item.done ? (
            <Feather name="check-square" size={20} color="#5600A0" />
          ) : (
            <Feather name="square" size={20} color="#5600A0" />
          )}
        </TouchableOpacity>
        {showDelete ? (
          <>
            <TextInput
              value={name}
              onChangeText={(text) => setName(text)}
              placeholder="Editar... "
              style={styles.title}
            />
            <TouchableOpacity onPress={handleSave}>
              <AntDesign name="check" size={20} color="#5600A0" />
            </TouchableOpacity>
            <TouchableOpacity onPress={handleDelete}>
              <AntDesign name="close" size={20} color="red" />
            </TouchableOpacity>
          </>
        ) : (
          <>
            <Text style={styles.title}>{item.name}</Text>
            <Text style={styles.content}>{item.time}</Text>
            <FontAwesome5 name="clock" size={20} color="#5600A0" />
          </>
        )}
      </View>
    </TouchableOpacity>
  );
}
