/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import MainMenu from "./ViewControllers/MainMenu.tsx";
import ConnectDevice from "./ViewControllers/ConnectDevice.tsx";
import CreateChalk from "./ViewControllers/CreateChalk.tsx";

const Stack = createNativeStackNavigator();


function App(): React.JSX.Element {
  return (<NavigationContainer  >
    <Stack.Navigator screenOptions={{headerShown:false}} >
      
      <Stack.Screen  name="MAIN MENU" component={MainMenu} />
      {/*<Stack.Screen name="JOIN CHALK" component={CreateChalk} options={{ title: "JOIN CHALK" }} />*/}
      {/*<Stack.Screen  name="CONNECT DEVICE" component={ConnectDevice}/>*/}
    </Stack.Navigator>

  </NavigationContainer>);
}


export default App;
