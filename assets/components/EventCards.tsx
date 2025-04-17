import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Theme } from "@/constants/theme";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import EventStatusPill from "@/assets/components/EventStatusPill";
import { EventStatus } from "@/constants/theme";

interface EventCardProps {
  title: string;
  date: Date;
  session: string;
  status: EventStatus;
}

const EventCards: React.FC<EventCardProps> = ({
  title,
  date,
  session,
  status,
}) => {
  return (
    <View style={styles.card}>
      <View>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.description}>
          <Text style={styles.description_text}>
            {date.toLocaleDateString()}
          </Text>
          <View
            style={{ width: 2, height: 15, backgroundColor: "grey" }}
          ></View>
          <Text style={styles.description_text}>{session}</Text>
          <EventStatusPill status={status} />
        </View>
      </View>
      <MaterialIcons name="keyboard-arrow-down" size={40} color="black" />
      {/* <FontAwesome name="chevron-right" size={24} color="black" /> */}
      {/* <MaterialIcons name="arrow-forward-ios" size={24} color="black" /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: Theme.Colors.white,
    padding: 16,
    borderRadius: 8,
    height: 80,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
    // shadowColor: "#000",
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.1,
    // shadowRadius: 4,
    // elevation: 3,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    // borderWidth: 1,
    // borderColor: "blue",
    marginBottom: 4,
  },
  //   description: {
  //     fontSize: 14,
  //     color: "#666",
  //   },
  description: {
    flexDirection: "row",
    gap: 11,
    alignItems: "center",
    // borderWidth: 1,
    // borderColor: "green",
    // marginTop: 8,
  },
  description_text: {
    fontSize: 14,
    fontWeight: "regular",
  },
});

export default EventCards;
