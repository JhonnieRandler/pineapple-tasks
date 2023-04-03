import { View, Text, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { AntDesign, Entypo, Ionicons } from "@expo/vector-icons";
import styles from "./styles";
import { useState } from "react";

type AppProps = {
  title: string;
  navigation: any;
  back: boolean;
  options: object[];
  search: boolean;
  save: () => void;
  disabled: boolean;
};

export default function Header({
  title,
  navigation,
  back,
  options,
  search,
  save,
  disabled
}: AppProps) {
  const router = useRouter();

  const [activeOptions, setActiveOptions] = useState(false);

  const saveAndRedirect = () => {
    save();
    navigation.goBack();
  };

  return (
    <>
      <View style={styles.container}>
        <View>
          {back && (
            <TouchableOpacity activeOpacity={0.4} onPress={navigation.goBack}>
              <AntDesign name="arrowleft" size={20} color="#5600A0" />
            </TouchableOpacity>
          )}
        </View>
        <Text style={styles.text}>{title}</Text>
        <View style={styles.right}>
          {save && (
            <TouchableOpacity disabled={disabled} activeOpacity={0.4} onPress={saveAndRedirect}>
              <Ionicons name="ios-save-sharp" size={20} color={disabled ? "rgba(0,0,0,0.3)" : "#5600A0"} />
            </TouchableOpacity>
          )}
          {search && (
            <TouchableOpacity
              activeOpacity={0.4}
              onPress={() => router.push("/search")}
            >
              <Ionicons name="search" size={20} color="#5600A0" />
            </TouchableOpacity>
          )}
          {options && (
            <TouchableOpacity activeOpacity={0.4} onPress={()=>setActiveOptions(!activeOptions)}>
              <Entypo name="dots-three-vertical" size={20} color="#5600A0" />
            </TouchableOpacity>
          )}
        </View>
      </View>
      {activeOptions && (
        <View style={styles.options}>
          <TouchableOpacity activeOpacity={0.4} onPress={()=>setActiveOptions(!activeOptions)}>
            <AntDesign name="close" size={20} color="#5600A0" />
          </TouchableOpacity>
          {options.map((option, index)=>(
            <TouchableOpacity key={index} activeOpacity={0.4} onPress={option.action}>
              <Text style={styles.optionName}>{option.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </>
  );
}
