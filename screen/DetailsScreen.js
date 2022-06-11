import { SafeAreaView } from "react-native";
import { DetailsCard, FocusedStatusBar } from "../Components";
import { COLORS } from "../constants";

const DetailsScreen = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.secondary,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <FocusedStatusBar backgroundColor={COLORS.gray} />
      <DetailsCard />
    </SafeAreaView>
  );
};

export default DetailsScreen;
