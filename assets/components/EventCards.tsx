import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Theme } from "@/constants/theme";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import EventStatusPill from "@/assets/components/EventStatusPill";
import { EventStatus } from "@/constants/theme";

interface EventCardProps {
  title: string;
  date: Date;
  session: string;
  status: EventStatus;
  workersRequired: number;
  workersEnrolled: number;
}

const EventCards: React.FC<EventCardProps> = ({
  title,
  date,
  session,
  status,
  workersRequired,
  workersEnrolled,
}) => {
  const [expanded, setExpanded] = React.useState(false);
  return (
    <View
      style={{
        marginBottom: 10,
        backgroundColor: Theme.Colors.white,
      }}
    >
      <View style={expanded ? styles.card_expanded : styles.card}>
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
            <EventStatusPill
              status={status}
              workersEnrolled={workersEnrolled}
              workersRequired={workersRequired}
            />
          </View>
        </View>
        <TouchableOpacity
          onPress={() => setExpanded(!expanded)}
          style={{ alignItems: "center" }}
        >
          <MaterialIcons
            name={"keyboard-arrow-down"}
            size={40}
            color="black"
            style={{
              transform: [{ rotate: expanded ? "180deg" : "0deg" }],
              transitionProperty: "transform",
              transitionDuration: "1s",
              transitionTimingFunction: "ease-in-out",
            }}
          />
        </TouchableOpacity>
      </View>
      {expanded && (
        <View>
          <View
            style={{
              width: 304,
              height: 1.5,
              backgroundColor: Theme.Colors.borderGray,
              alignContent: "center",
              alignSelf: "center",
            }}
          ></View>
          <View
            style={{
              backgroundColor: Theme.Colors.white,
              padding: 16,
              marginBottom: 10,
            }}
          >
            <Text style={styles.participants_heading}>Participants</Text>
          </View>
        </View>
      )}
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
    // marginBottom: 10,
    // borderWidth: 1,
    // borderColor: "red",
    // shadowColor: "#000",
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.1,
    // shadowRadius: 4,
    // elevation: 3,
  },
  card_expanded: {
    backgroundColor: Theme.Colors.white,
    padding: 16,
    borderRadius: 8,
    height: 80,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    // marginBottom: 10,
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
  participants_heading: {
    fontSize: 14,
    fontWeight: "medium",
    // marginBottom: 4,
    // marginTop: 10,
  },
});

export default EventCards;
