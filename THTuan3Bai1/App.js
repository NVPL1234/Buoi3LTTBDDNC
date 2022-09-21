import React from "react";
import { StyleSheet, View } from "react-native";

const Flex = () => {
  return (
    <View style={[styles.container, {
      flexDirection: "row"
    }]}>
      <View style={{ flex: 2, backgroundColor: "red" }} />
      <View style={{ flex: 2, backgroundColor: "yellow" }} />
      <View style={{ flex: 2, backgroundColor: "green" }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

export default Flex;