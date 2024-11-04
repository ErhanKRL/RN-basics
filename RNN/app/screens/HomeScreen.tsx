import { View, StyleSheet, Text, useWindowDimensions, SafeAreaView, Platform, Button } from "react-native";
//import { useNavigation } from "@react-navigation/native";

export default function HomeScreen({navigation}) {
    //const navigation = useNavigation();
    const windowWith = useWindowDimensions().width;
    const windowHeight = useWindowDimensions().height;
  return (
    <SafeAreaView style={styles.safeContainer}>
    <View style={styles.container}>
      
      <View style={[styles.box, {
        width: windowWith > 500 ? "70%" : "90%",
        height: windowHeight > 600 ? "60%" : "90%",
      }]}>
        <Text style={[styles.text, {fontSize: windowWith > 500 ? 32 : 24}]}>Home Screen</Text>
        
        <Button title="About" onPress={() => navigation.navigate("About", { name: "Klark Kent" }) }>Go to About</Button>
      </View>
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeContainer:{
    flex:1,
    backgroundColor: "plum",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "plum",
    paddingTop: Platform.OS === "android" ? 25 : 0
  },
  box: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "lightblue",
  },
  text: {
    ...Platform.select({
      ios: {
        color: "green",
      },
      android: {
        color: "red",
      },
    })
  },
})