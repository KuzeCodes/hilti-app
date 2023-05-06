import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { Icon } from "@rneui/themed";

const MenuButtons = ({
  onPress,
  title,
  subTitle,
  iconFamily,
  iconName,
  buttonColor,
}) => (
  <SafeAreaView style={styles.appButtonContainer}>
    <TouchableOpacity onPress={onPress} style={styles.appButton}>
      <Icon name={iconName} type={iconFamily} color={buttonColor} size={50} />
      <Text style={[styles.appButtonText, { color: buttonColor }]}>
        {title}
      </Text>
      <View style={[styles.bottomView, { backgroundColor: buttonColor }]}>
        <Text style={styles.bottomViewText}>{subTitle}</Text>
      </View>
    </TouchableOpacity>
  </SafeAreaView>
);

export default MenuButtons;

const styles = StyleSheet.create({
  appButtonContainer: {
    flex: 1,
    display: "flex",
    marginHorizontal: 10,
    marginVertical: 10,
  },
  appButton: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f8f7f7",
    borderRadius: 25,
    paddingBottom: 50,
  },
  appButtonText: {
    fontWeight: "bold",
    marginTop: 8,
  },
  bottomView: {
    width: "100%",
    height: 50,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 0,
  },
  bottomViewText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 11,
    fontWeight: 600,
    padding: 5,
  },
});
