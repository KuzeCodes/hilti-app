import { Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons, MaterialIcons, FontAwesome } from "@expo/vector-icons";
import { createStackNavigator } from "@react-navigation/stack";

import MyHome from "../screens/Home";
import MyFindIt from "../screens/FindIt";
import MyToolInfo from "../screens/ToolInformation";

const HomeStack = createStackNavigator();
function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home "
        title="StackScreenHome"
        component={HomeScreen}
        options={{
          headerTitleAlign: "center",
          headerTitleStyle: {
            color: "#d2051a",
            fontSize: 22,
            fontWeight: "bold",
          },
          headerStyle: {
            backgroundColor: "#e8e8e8",
          },
        }}
      />
      <HomeStack.Screen
        name="FindIt"
        component={FindItScreen}
        options={{
          headerTitleAlign: "center",
          headerTitleStyle: {
            color: "#d2051a",
            fontSize: 22,
            fontWeight: "bold",
          },
        }}
      />
      <HomeStack.Screen
        name="ToolInfo"
        component={ToolInfoScreen}
        options={{
          headerTitleAlign: "center",
          headerTitleStyle: {
            color: "#d2051a",
            fontSize: 22,
            fontWeight: "bold",
          },
        }}
      />
    </HomeStack.Navigator>
  );
}

function HomeScreen() {
  return <MyHome />;
}

function FindItScreen() {
  return <MyFindIt />;
}

function ToolInfoScreen() {
  return <MyToolInfo />;
}

function Dashboard() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Dashboard!</Text>
    </View>
  );
}

function XXX() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>XXX!</Text>
    </View>
  );
}

function Settings() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Settings!</Text>
    </View>
  );
}

const BottomTab = createBottomTabNavigator();

function MyTabs() {
  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#d2051e",
        tabBarStyle: {
          backgroundColor: "#e8e8e8",
          height: 60,
          borderTopWidth: 0,
          elevation: 0,
          position: "absolute",
          justifyContent: "center",
        },
      }}
    >
      <BottomTab.Screen
        name="Home"
        title="Home"
        component={HomeStackScreen}
        options={{
          headerTitleAlign: "center",
          headerTitleStyle: {
            color: "#d2051a",
            fontSize: 22,
            fontWeight: "bold",
          },
          headerStyle: {
            backgroundColor: "#e8e8e8",
          },
          tabBarIcon: ({ color }) => (
            <Ionicons name="md-home" color={color} size={25} />
          ),
          tabBarLabelStyle: {
            fontWeight: "bold",
            fontSize: 12,
            marginBottom: 10,
          },
          tabBarIconStyle: { marginTop: 5 },
        }}
      />
      <BottomTab.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          headerTitleAlign: "center",
          headerTitleStyle: {
            color: "#d2051a",
            fontSize: 22,
            fontWeight: "bold",
          },
          headerStyle: {
            backgroundColor: "#e8e8e8",
          },
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="dashboard" color={color} size={25} />
          ),
          tabBarLabelStyle: {
            fontWeight: "bold",
            fontSize: 12,
            marginBottom: 10,
          },
          tabBarIconStyle: { marginTop: 5 },
        }}
      />
      <BottomTab.Screen
        name="XXX"
        component={XXX}
        options={{
          headerTitleAlign: "center",
          headerTitleStyle: {
            color: "#d2051a",
            fontSize: 22,
            fontWeight: "bold",
          },
          headerStyle: {
            backgroundColor: "#e8e8e8",
          },
          tabBarIcon: ({ color }) => (
            <FontAwesome name="bluetooth" color={color} size={25} />
          ),
          tabBarLabelStyle: {
            fontWeight: "bold",
            fontSize: 12,
            marginBottom: 10,
          },
          tabBarIconStyle: { marginTop: 5 },
        }}
      />
      <BottomTab.Screen
        name="Settings"
        component={Settings}
        options={{
          headerTitleAlign: "center",
          headerTitleStyle: {
            color: "#d2051a",
            fontSize: 22,
            fontWeight: "bold",
          },
          headerStyle: {
            backgroundColor: "#e8e8e8",
          },
          tabBarIcon: ({ color }) => (
            <Ionicons name="settings-sharp" color={color} size={25} />
          ),
          tabBarLabelStyle: {
            fontWeight: "bold",
            fontSize: 12,
            marginBottom: 10,
          },
          tabBarIconStyle: { marginTop: 5 },
        }}
      />
    </BottomTab.Navigator>
  );
}

export default MyTabs;
