import { Text, View, StyleSheet } from "react-native";
import Greet from "@/components/Greet";
export default function Index() {
  return (
    <View
      style={styles.container}
    >
      <Greet name="Klark Kent" />
      <View style={[styles.Box, styles.lightBlueBg, styles.boxShadow]}>
        <Text>Light Blue Box</Text>
      </View>
      <View style={[styles.Box, styles.lightGreenBg, styles.androidShadow]}>
        <Text>Light Green Box</Text></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor:"plum",
      padding: 60 
  },
 Box:{
    width: "100%",
    height: 100,
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "black",
  },
  lightBlueBg:{
    backgroundColor: "lightblue",
  },
  lightGreenBg:{
    backgroundColor: "lightgreen",
  },
  boxShadow:{
    shadowColor: "#333333 ",
    shadowOffset: {
      width: 6,
      height: 6,
    },
    shadowOpacity: 0.6,
    shadowRadius: 4,
  },
  androidShadow:{
    elevation: 10,
  }
});
