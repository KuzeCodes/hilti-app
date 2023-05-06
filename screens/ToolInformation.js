import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Button,
  FlatList,
  TouchableOpacity,
} from "react-native";

function MyToolInfo() {
  return (
    <View style={styles.mainContainer}>
      <View>
        <Text>Tool Information</Text>
      </View>
      <View>
        <Text>Tool details</Text>
      </View>
      <View>
        <Text>Location/Current Location/Last Updated</Text>
      </View>
      <View>
        <Text>Map View</Text>
      </View>
      <SafeAreaView>
        <Button
          title="Live View"
          color=""
          onPress={() => console.log("view")}
        />
        <Button
          title="Options"
          color="#dd4e5f"
          onPress={() => console.log("options")}
        />
      </SafeAreaView>
    </View>
  );
}

export default MyToolInfo;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
    flexDirection: "column",
  },
});
