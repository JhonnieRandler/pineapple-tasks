import { TouchableOpacity } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import styles from "./styles";
import { useRouter } from "expo-router";

export default function Button() {
  const router = useRouter();
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.5} onPress={()=>router.push('/category/add')}>
      <LinearGradient
        colors={[
          "rgba(143, 11, 255, 0.5)",
          "rgba(137, 0, 253, 0.5)",
          "rgba(255, 255, 255, 0)",
        ]}
        locations={[0.1, 0.3, 0.9]}
        style={styles.main}
      >
        <Entypo name="plus" size={35} color="white" />
      </LinearGradient>
    </TouchableOpacity>
  );
}
