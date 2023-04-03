import { Text, View } from "react-native";
import styles from "./styles";

type AppProps = {
    title: string;
    date: string;
  };

export default function Category({title, date} : AppProps) {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.content}>{date}</Text>
      </View>
    </>
  );
}

