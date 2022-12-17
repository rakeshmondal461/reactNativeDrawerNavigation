import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
function CustomDrawerComponent(props) {
  return (
    <View style={styles.mainContainer}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={styles.containerStyle}
      >
        <ImageBackground
          style={styles.imageBgStyle}
          source={require("./../assets/images/purple_bg.jpg")}
        >
          <Image
            style={styles.userIconStyle}
            source={require("./../assets/images/user_icon.png")}
          />
          <Text style={styles.userName}>Alexender Pierce</Text>
          <Text style={styles.plainText}>alex@test.cpm</Text>
        </ImageBackground>
        <View style={styles.drawerItemList}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View style={styles.navigateBottom}>
        <TouchableOpacity style={{ paddingVertical: 15 }}>
          <View style={styles.navigateBottomItem}>
            <Ionicons name="share-social-sharp" size={22} color="black" />
            <Text style={styles.navigateBottomText}>Share to a friend</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={{ paddingVertical: 15 }}>
          <View style={styles.navigateBottomItem}>
            <Ionicons name="md-exit-outline" size={22} color="black" />
            <Text style={styles.navigateBottomText}>Sign out</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default CustomDrawerComponent;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  containerStyle: {
    backgroundColor: "#381857",
  },
  imageBgStyle: {
    padding: 25,
  },
  userIconStyle: {
    height: 80,
    width: 80,
    marginBottom: 10,
  },
  userName: {
    fontSize: 17,
    fontWeight: "800",
    color: "#fff",
  },
  plainText: {
    color: "#fff",
  },
  drawerItemList: {
    backgroundColor: "#fff",
    padding: 8,
  },
  navigateBottom: {
    padding: 15,
    borderTopColor: "#ccc",
    borderTopWidth: 2,
  },
  navigateBottomItem: {
    flexDirection: "row",
    alignItems: "center",
  },
  navigateBottomText: {
    marginLeft: 10,
    fontSize: 16,
  },
});
