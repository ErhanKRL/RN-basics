import { View, StyleSheet, Text, Dimensions, useWindowDimensions, SafeAreaView, Platform } from "react-native";
//import { useEffect, useState } from "react";
// DUI/app/index.tsx
import {CustomButton }from "@/components/CustomButton/CustomButton.android";

export default function Index() {
  // const [dimensions, setDimensions] = useState({
  //   window: Dimensions.get("window")});

  //   useEffect(() => {
  //     const subscription = Dimensions.addEventListener("change", ({ window }) => {
  //       setDimensions({ window });
  //     });
  //     return () => subscription.remove();
  //   }
  //   )

    // const {window} = dimensions;
    // const windowWith = window.width;
    // const windowHeight = window.height;
    const windowWith = useWindowDimensions().width;
    const windowHeight = useWindowDimensions().height;
  return (
    <SafeAreaView style={styles.safeContainer}>
    <View style={styles.container}>
      <CustomButton title="Press me" onPress={() => alert("Hello")} />
      <View style={[styles.box, {
        width: windowWith > 500 ? "70%" : "90%",
        height: windowHeight > 600 ? "60%" : "90%",
      }]}>
        <Text style={[styles.text, {fontSize: windowWith > 500 ? 32 : 24}]}>Hello</Text>
      </View>
    </View>
    </SafeAreaView>
  );
}

//const windowWith = Dimensions.get("window").width;
//const windowHeight = Dimensions.get("window").height;

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
    //width: windowWith > 500 ? "70%" : "90%",
    //height: windowHeight > 600 ? "60%" : "90%",
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