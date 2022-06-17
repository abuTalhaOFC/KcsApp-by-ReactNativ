import {
  Image,
  Linking,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { assets } from "../constants";

const HomeHeader = ({ onSearch }) => {
  return (
    <View style={{ margin: 10, marginVertical: 20 }}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text style={{ color: "#fff", fontSize: 40 }}>KCS</Text>
        <Image style={{ height: 35, width: 35 }} source={assets.badge} />
      </View>
      <View>
        <Text style={{ color: "#fff", fontSize: 19, marginVertical: 10 }}>
          Karatoa Courier Service's Contact Number
        </Text>
        {/* Creater and massenger_____________ */}
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text
            style={{
              color: "#fff",
              fontSize: 15,
            }}
          >
            Created By Talha
          </Text>
          <TouchableOpacity
            onPress={() => {
              Linking.openURL("https://m.me/abutalha.private");
            }}
          >
            <Image
              style={{ height: 35, width: 35, marginLeft: 10 }}
              source={assets.massenger}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              Linking.openURL("https://react.protalha.com/");
            }}
          >
            <Image
              style={{ height: 35, width: 35, marginLeft: 10 }}
              source={assets.mysite}
            />
          </TouchableOpacity>
        </View>
        {/* ^^^^^^^^^^^^^^^^^^^^^^Creater and massenger^^^^^^^^^^^^^^^^^ */}
      </View>
      <View
        style={{
          padding: 2,
          backgroundColor: "#34495e",
          flexDirection: "row",
          marginHorizontal: 5,
          borderRadius: 5,
          height: 45,
          marginTop: 15,
          alignItems: "center",
        }}
      >
        <Image
          style={{
            height: 35,
            width: 35,
            marginRight: 10,
            marginLeft: 5,
            height: 30,
            width: 30,
          }}
          source={assets.search}
        />
        <TextInput
          style={{ flex: 1, fontSize: 20 }}
          onChangeText={onSearch}
          placeholder="Search brance name"
        />
      </View>
    </View>
  );
};

export default HomeHeader;
