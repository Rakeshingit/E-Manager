import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Theme } from "@/constants/theme";
import { EventStatus } from "@/constants/theme";

interface StatusPillProps {
  status: EventStatus;
  workersRequired: number;
  workersEnrolled: number;
  //   style: { backgroundColor: string; color: string };
}

const EventStatusPill: React.FC<StatusPillProps> = ({
  status,
  workersEnrolled,
  workersRequired,
}) => {
  const pillStyle = Theme.EventPills[status];
  return (
    <View style={[styles.pill, { backgroundColor: pillStyle.backgroundColor }]}>
      <Text style={[styles.text]}>
        {status === "Open"
          ? `${workersEnrolled}/${workersRequired}`
          : status === "Ready"
          ? `${status} (${workersEnrolled})`
          : status}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  pill: {
    paddingHorizontal: 11,
    paddingVertical: 6,
    borderRadius: 16,
    // alignSelf: "flex-start",
  },
  text: {
    color: "#fff",
    fontSize: 9,
    // fontWeight: "bold",
  },
});

export default EventStatusPill;
