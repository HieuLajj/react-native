import React from "react";
import { StyleSheet, View } from "react-native";
import { AppProvider } from "./src/context/AppState";
import NavigateScreen from "./src/Navigate/NavigateScreen";

const App = () => {
  return (
    <AppProvider>
      <View style={styles.container}>
        <NavigateScreen />
      </View>
    </AppProvider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    margin: 10,
  },
});
