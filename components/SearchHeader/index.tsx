import { View, Text, TouchableOpacity, TextInput } from "react-native";
import { useRouter } from "expo-router";
import { AntDesign } from "@expo/vector-icons";
import styles from "./styles";
import { Category } from "../Types";

type AppProps = {
  navigation: any;
  items: Category[];
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
};

export default function SearchHeader({ navigation, text, setText }: AppProps) {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity activeOpacity={0.4} onPress={navigation.goBack}>
          <AntDesign name="left" size={20} color="#5600A0" />
        </TouchableOpacity>
      </View>
      <TextInput
        value={text}
        placeholder="Pesquisar... "
        style={styles.text}
        onChangeText={(text) => setText(text)}
        autoFocus
      />
      <View style={styles.right}>
        {text.length > 0 && (
          <TouchableOpacity activeOpacity={0.4} onPress={()=>setText("")}>
            <AntDesign name="close" size={24} color="#5600A0" />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}
