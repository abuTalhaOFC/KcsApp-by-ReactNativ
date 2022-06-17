import { useNavigation } from "@react-navigation/native";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { assets } from "../constants";

const ListBar = ({ deta }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate("Details", { deta })}>
      <View
        style={{
          width: "100%",
          height: 55,
          margin: 4,
          backgroundColor: "#C0DEC5",
          borderRadius: 12,
          justifyContent: "space-between",
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: 30,
        }}
      >
        <Text style={{}}>{deta.brance_bn}</Text>
        {/* buttons box */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* Call button */}
          <TouchableOpacity onPress={() => {}}>
            <Image style={{ height: 35, width: 35 }} source={assets.heart} />
          </TouchableOpacity>
          {/* Details button */}
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ListBar;
