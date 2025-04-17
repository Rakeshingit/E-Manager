import {
  SafeAreaView,
  View,
  ScrollView,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import { Theme } from "@/constants/theme";

const EventSections = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.cells}>
        <Text style={{ fontSize: Theme.FontSizes.BODY }}>Current</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.cells}>
        <Text style={{ fontSize: Theme.FontSizes.BODY }}>Upcoming</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.cells}>
        <Text style={{ fontSize: Theme.FontSizes.BODY }}>Past</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "grey",
    height: 44,
    // width: 340,
    borderRadius: 28,
    flexDirection: "row",
    // justifyContent: "space-evenly",
    alignItems: "center",
    paddingHorizontal: 2,
  },
  cells: {
    backgroundColor: Theme.Colors.primary,
    flex: 1,
    paddingVertical: 10,
    borderRadius: 28,
    alignItems: "center",
  },
});

export default EventSections;
