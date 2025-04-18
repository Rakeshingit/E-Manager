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
import React, { useState } from "react";

interface EventSectionsProps {
  selected: string;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
}

const EventSections: React.FC<EventSectionsProps> = ({
  selected,
  setSelected,
}) => {
  // const [selectedLocal, setSelectedLocal] = useState("Current");
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[
          styles.cells,
          {
            backgroundColor:
              selected === "Current"
                ? Theme.Colors.primary
                : Theme.Colors.white,
          },
        ]}
        onPress={() => setSelected("Current")}
      >
        <Text
          style={[
            { fontSize: Theme.FontSizes.BODY },
            { color: selected === "Current" ? Theme.Colors.white : "" },
          ]}
        >
          Current
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.cells,
          {
            backgroundColor:
              selected === "Upcoming"
                ? Theme.Colors.primary
                : Theme.Colors.white,
          },
        ]}
        onPress={() => setSelected("Upcoming")}
      >
        <Text
          style={[
            { fontSize: Theme.FontSizes.BODY },
            { color: selected === "Upcoming" ? Theme.Colors.white : "" },
          ]}
        >
          Upcoming
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.cells,
          {
            backgroundColor:
              selected === "Past" ? Theme.Colors.primary : Theme.Colors.white,
            transitionProperty: "background-color",
            transitionDuration: "10s",
            transitionTimingFunction: "ease-in-out",
          },
        ]}
        onPress={() => setSelected("Past")}
      >
        <Text
          style={[
            { fontSize: Theme.FontSizes.BODY },
            { color: selected === "Past" ? Theme.Colors.white : "" },
          ]}
        >
          Past
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Theme.Colors.white,
    height: 44,
    // width: 340,
    borderRadius: 28,
    flexDirection: "row",
    // justifyContent: "space-evenly",
    alignItems: "center",
    paddingHorizontal: 2,
  },
  cells: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 28,
    alignItems: "center",
    transitionProperty: "background-color",
    transitionDuration: "1s",
    transitionTimingFunction: "ease-in-out",
  },
});

export default EventSections;
