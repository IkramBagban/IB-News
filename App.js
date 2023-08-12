import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import { store } from "./src/reduxToolkit/store";
import MainStackNavigator from "./src/navigations/StackNavigator";


const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MainStackNavigator />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
