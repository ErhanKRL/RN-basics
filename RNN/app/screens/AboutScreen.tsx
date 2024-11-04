import { View, StyleSheet, Text, useWindowDimensions, SafeAreaView, Platform, Button } from "react-native";


export default function AboutScreen({navigation}) {
    const windowWith = useWindowDimensions().width;
    const windowHeight = useWindowDimensions().height;
  return (
    <SafeAreaView style={styles.safeContainer}>
    <View style={styles.container}>
      
      <View style={[styles.box, {
        width: windowWith > 500 ? "70%" : "90%",
        height: windowHeight > 600 ? "60%" : "90%",
      }]}>
        <Text style={[styles.text, {fontSize: windowWith > 500 ? 32 : 24}]}>About Screen</Text>
        <Button title="Home" onPress={() => navigation.navigate("Home") }>Go to Home</Button>
      </View>
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeContainer:{
    flex:1,
    backgroundColor: "lightblue",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "lightblue",
    paddingTop: Platform.OS === "android" ? 25 : 0
  },
  box: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "plum",
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