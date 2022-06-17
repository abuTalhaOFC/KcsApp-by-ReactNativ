import {
  Image,
  Linking,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { FocusedStatusBar } from "../Components";
import { assets } from "../constants";

const DetailsScreen = ({ route, navigation }) => {
  const { deta } = route.params;
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#2980a4",
      }}
    >
      <FocusedStatusBar backgroundColor={"#7158e2"} />
      {/* back button_____________________________ */}
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{
          position: "absolute",
          top: 20,
          right: 20,
          padding: 10,
          borderColor: "#000",
          borderRadius: 50,
          borderWidth: 2,
        }}
      >
        <Image
          style={{
            height: 30,
            width: 30,
          }}
          source={assets.left}
        />
      </TouchableOpacity>

      {/* _________________________________________________ */}
      <Text
        style={{
          fontSize: 15,
          color: "rgba(102, 208, 29, 0.87)",
          position: "absolute",
          top: 35,
          left: 20,
          backgroundColor: "rgba(0, 0, 0, 0.48)",
          alignSelf: "flex-start",
          paddingHorizontal: 10,
          paddingVertical: 5,
          borderRadius: 10,
        }}
      >
        ব্রাঞ্চ কোড: {deta.branch_code}
      </Text>

      <View style={{ padding: 40, borderRadius: 10 }}>
        <Text style={{ fontSize: 25, color: "#fff", marginBottom: 2 }}>
          করতোয়া কুরিয়ার {deta.brance_bn} শাখা!
        </Text>

        {/* _________B-code________ */}

        <View style={{}}>
          <View
            style={{
              margin: 10,
              flexDirection: "row",
              alignItems: "center",
              padding: 10,
              backgroundColor: "#fff",
              minWidth: 300,
              justifyContent: "space-around",
              borderRadius: 10,
            }}
          >
            <Text style={{ fontSize: 40, marginRight: 20 }}>{deta.num1}</Text>
            <TouchableOpacity
              onPress={() => {
                Linking.openURL(`tel:${deta.num1}`);
              }}
            >
              <Image style={{ height: 40, width: 40 }} source={assets.call} />
            </TouchableOpacity>
          </View>
          <View
            style={{
              margin: 10,
              flexDirection: "row",
              alignItems: "center",
              padding: 10,
              backgroundColor: "#fff",
              minWidth: 300,
              justifyContent: "space-between",
              borderRadius: 10,
            }}
          >
            <Text style={{ fontSize: 40, marginHorizontal: 20 }}>
              {deta.num2}
            </Text>
            <TouchableOpacity
              onPress={() => {
                Linking.openURL(`tel:${deta.num2}`);
              }}
            >
              <Image style={{ height: 40, width: 40 }} source={assets.call} />
            </TouchableOpacity>
          </View>

          <View
            style={{
              backgroundColor: "rgba(255, 255, 255, .6)",
              height: 250,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 10,
              margin: 10,
              padding: 10,
            }}
          >
            <Text style={{ fontSize: 20 }}>{deta.address}</Text>
          </View>
        </View>
      </View>
      {/* bavkGround color */}
      <View
        style={{
          flex: 1,
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: -1,
          backgroundColor: "#7158e2",
        }}
      >
        <View style={{ height: 205 }}></View>
        <View
          style={{
            flex: 1,
            backgroundColor: "#cd84f1",
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
          }}
        ></View>
      </View>
    </SafeAreaView>
  );
};

export default DetailsScreen;
