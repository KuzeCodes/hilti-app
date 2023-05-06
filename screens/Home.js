import { Dimensions, StyleSheet, Text, View } from "react-native";
import Svg, { Path } from "react-native-svg";

import MenuButtons from "../components/MenuButtons";
import * as RootNavigation from '../components/RootNavigation';


const MyHome = () => {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.mainContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>
            Which services you would like to select?
          </Text>
        </View>

        <View style={styles.contentContainer}>
          <View style={styles.buttonRow}>
            <MenuButtons
              title={"Fix-it"}
              subTitle={"Trace your tool in repair"}
              iconName={"tools"}
              iconFamily={"entypo"}
              buttonColor={"#dd4e5f"}
            />
            <MenuButtons
              title={"Find-it"}
              subTitle={"Find the location of your tool"}
              iconName={"location-pin"}
              iconFamily={"ionicons"}
              buttonColor={"#ffaf00"}
              onPress={() => RootNavigation.navigate("FindIt")}
            />
          </View>
          <View style={styles.buttonRow}>
            <MenuButtons
              title={"My Tools"}
              subTitle={"List of your tools"}
              iconName={"circular-saw"}
              iconFamily={"material-community"}
              buttonColor={"#19af37"}
            />
            <MenuButtons
              title={"How to"}
              subTitle={"Learn how to use your tool"}
              iconName={"question"}
              iconFamily={"ant-design"}
              buttonColor={"#009aef"}
            />
          </View>
          <View style={styles.buttonRow}></View>
        </View>
      </View>

      <View style={styles.bottom}>
        <Svg
          height={180}
          width={800}
          viewBox="0 0 2340 320"
          style={styles.bottomWavy}
        >
          <Path
            fill="#e8e8e8"
            d="M0,32L60,69.3C120,107,240,181,360,197.3C480,213,600,171,720,133.3C840,96,960,64,1080,90.7C1200,117,1320,203,1380,245.3L1440,288L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          />
        </Svg>
      </View>
    </View>
  );
};

export default MyHome;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: "column",
    padding: 20,
    backgroundColor: "#ffffff",
  },
  titleContainer: {
    flex: 2,
    textAlign: "justify",
  },
  title: {
    fontWeight: "bold",
    fontSize: 22,
  },
  contentContainer: {
    flex: 8,
  },
  buttonRow: {
    flex: 1,
    flexDirection: "row",
  },
  bottom: {
    position: "absolute",
    width: Dimensions.get("screen").width,
    bottom: 0,
  },
  bottomWavy: {
    position: "absolute",
    bottom: 0,
  },
});
