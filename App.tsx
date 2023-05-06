import { NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler";

import MyTabs from "./components/MyTabs";
import { navigationRef } from "./components/RootNavigation";

export default function App() {
  return (
    <NavigationContainer ref={navigationRef}>
      <MyTabs />
    </NavigationContainer>
  );
}

