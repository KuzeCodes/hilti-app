import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Button,
  FlatList,
  TouchableOpacity,
} from "react-native";

import * as RootNavigation from "../components/RootNavigation";
import useBLE from "./useBLE";

function MyFindIt() {
  const { requestPermissions, scanForPeripherals, distance } = useBLE();

  const scanForDevices = () => {
    requestPermissions((isGranted) => {
      if (isGranted) {
        scanForPeripherals();
      }
    });
  };
  return (
    <View style={styles.mainContainer}>
      <View style={styles.heartRateTitleWrapper}>
        <Text style={{ fontSize: 50, color: "black" }}>Meters</Text>
        <Text style={{ fontSize: 300, color: "black" }}>{distance}</Text>
      </View>
      <TouchableOpacity onPress={scanForDevices} style={styles.ctaButton}>
        <Text style={styles.ctaButtonText}>FIND THE DISTANCE</Text>
      </TouchableOpacity>
      <SafeAreaView>
        <Button
          title="Cordless Drill Driver"
          color=""
          onPress={() => RootNavigation.navigate("ToolInfo")}
        />
      </SafeAreaView>
    </View>
  );
}

export default MyFindIt;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
    flexDirection: "column",
  },
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",
  },
  heartRateTitleWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  heartRateTitleText: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginHorizontal: 20,
    color: "black",
  },
  heartRateText: {
    fontSize: 25,
    marginTop: 15,
  },
  ctaButton: {
    backgroundColor: "purple",
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    marginHorizontal: 20,
    marginBottom: 5,
    borderRadius: 8,
  },
  ctaButtonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});
