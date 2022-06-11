import { Text, TouchableOpacity, View } from "react-native";
import { SHADOWS } from "../constants/index";

const ListBar = ({ deta, clc }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        width: "100%",
        height: 55,
        margin: 4,
        backgroundColor: "#3498db",
        borderRadius: 12,
        justifyContent: "space-between",
        alignItems: "center",
        ...SHADOWS.light,
        paddingHorizontal: 25,
      }}
    >
      <Text style={{ color: "#fff", fontSize: 20 }}>{deta.branch}</Text>

      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity
          style={{
            marginHorizontal: 5,
            height: 30,
            width: 30,
            borderRadius: 30,
            backgroundColor: "#f1c40f",
          }}
          onPress={() => {}}
        ></TouchableOpacity>
        <TouchableOpacity
          style={{
            marginHorizontal: 5,
            height: 30,
            width: 30,
            borderRadius: 30,
            backgroundColor: "#e67e22",
          }}
          onPress={clc}
        ></TouchableOpacity>
      </View>
    </View>
  );
};

export default ListBar;
