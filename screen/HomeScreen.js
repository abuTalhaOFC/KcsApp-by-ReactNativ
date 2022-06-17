import * as React from "react";
import { useState } from "react";
import { FlatList, SafeAreaView, View } from "react-native";
import { FocusedStatusBar, HomeHeader, ListBar } from "../Components";
import { COLORS, KcsData } from "../constants";

const HomeScreen = ({ navigation }) => {
  const [kcsData, setKcsData] = useState(KcsData);

  const searchHandeler = (value) => {
    if (value.length === 0) {
      setKcsData(KcsData);
    }

    const filteredData = KcsData.filter((item) =>
      item.branch.toLowerCase().includes(value.toLowerCase())
    );

    if (filteredData.length === 0) {
      setKcsData(KcsData);
    } else {
      setKcsData(filteredData);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar backgroundColor={COLORS.primary} />

      {/* List item render  */}
      <View style={{ flex: 1 }}>
        <View Style={{ zIndex: 0 }}>
          <FlatList
            data={kcsData}
            renderItem={({ item }) => <ListBar deta={item} />}
            keyExtractor={(item, index) => index}
            ListHeaderComponent={<HomeHeader onSearch={searchHandeler} />}
          />
        </View>

        {/* backgroundColor */}
        <View
          style={{
            zIndex: -1,
            flex: 1,
            position: "absolute",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: COLORS.primary,
          }}
        >
          <View
            style={{
              height: 250,
              backgroundColor: COLORS.primary,
            }}
          ></View>
          <View
            style={{
              flex: 1,
              backgroundColor: "#fff",
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
            }}
          ></View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
