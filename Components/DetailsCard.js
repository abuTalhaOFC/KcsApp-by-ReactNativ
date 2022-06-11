import { Text, TouchableOpacity, View } from "react-native";

const DetailsCard = () => {
  return (
    <View
      style={{
        width: "90%",
        borderColor: "red",
        borderRadius: 20,
        borderWidth: 2,
        padding: 20,
      }}
    >
      <Text style={{ fontSize: 30 }}>Pabna</Text>
      <View
        style={{
          width: "100%",
          padding: 10,
          backgroundColor: "#fff",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginVertical: 5,
          borderRadius: 15,
        }}
      >
        <Text style={{ fontSize: 20 }}>01713228408</Text>
        <TouchableOpacity
          style={{
            width: 30,
            height: 30,
            borderRadius: 30,
            backgroundColor: "red",
          }}
          onPress={() => {}}
        ></TouchableOpacity>
      </View>
      <View
        style={{
          padding: 10,
          backgroundColor: "#fff",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginVertical: 5,
          borderRadius: 15,
        }}
      >
        <Text style={{ fontSize: 20 }}>01713228408</Text>
        <TouchableOpacity
          style={{
            width: 30,
            height: 30,
            borderRadius: 30,
            backgroundColor: "red",
          }}
          onPress={() => {}}
        ></TouchableOpacity>
      </View>
    </View>
  );
};

export default DetailsCard;
