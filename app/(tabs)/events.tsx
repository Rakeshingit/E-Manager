import React from "react";
import {
  View,
  ScrollView,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Theme } from "@/constants/theme";
import EventSections from "@/assets/components/EventSections";
import EventCards from "@/assets/components/EventCards";
import { EventStatus } from "@/constants/theme";

const eventData = [
  {
    title: "Royal Orchid Ceremony",
    date: new Date("2025-04-16"),
    session: "Morning",
    status: EventStatus.COMPLETED,
    workersRequired: 10,
    workersEnrolled: 10,
  },
  {
    title: "Dewdrop Lawn Party",
    date: new Date("2025-04-15"),
    session: "Evening",
    status: EventStatus.SETTLED,
    workersRequired: 12,
    workersEnrolled: 12,
  },
  {
    title: "Carnation Hills Festival",
    date: new Date("2025-04-14"),
    session: "Morning",
    status: EventStatus.PARTIALLY_PAID,
    workersRequired: 9,
    workersEnrolled: 9,
  },
  {
    title: "Sunset Garden Reception",
    date: new Date("2025-04-17"),
    session: "Evening",
    status: EventStatus.SETTLED,
    workersRequired: 8,
    workersEnrolled: 7,
  },
  {
    title: "Prince Melon Banquet",
    date: new Date("2025-04-18"),
    session: "Morning",
    status: EventStatus.COMPLETED,
    workersRequired: 12,
    workersEnrolled: 9,
  },
  {
    title: "Golden Leaf Gala",
    date: new Date("2025-04-18"),
    session: "Evening",
    status: EventStatus.COMPLETED,
    workersRequired: 15,
    workersEnrolled: 11,
  },
  {
    title: "Lily Pond Engagement",
    date: new Date("2025-04-19"),
    session: "Morning",
    status: EventStatus.READY,
    workersRequired: 9,
    workersEnrolled: 9,
  },
  {
    title: "Twilight Meadows Fest",
    date: new Date("2025-04-19"),
    session: "Evening",
    status: EventStatus.OPEN,
    workersRequired: 14,
    workersEnrolled: 13,
  },
  {
    title: "Peach Bloom Ceremony",
    date: new Date("2025-04-19"),
    session: "Morning",
    status: EventStatus.OPEN,
    workersRequired: 6,
    workersEnrolled: 5,
  },
  {
    title: "Amber Twilight Bash",
    date: new Date("2025-04-19"),
    session: "Evening",
    status: EventStatus.READY,
    workersRequired: 10,
    workersEnrolled: 10,
  },
  {
    title: "Gardenia Spring Night",
    date: new Date("2025-04-19"),
    session: "Morning",
    status: EventStatus.OPEN,
    workersRequired: 11,
    workersEnrolled: 10,
  },
  {
    title: "Meadow Breeze Mixer",
    date: new Date("2025-04-19"),
    session: "Evening",
    status: EventStatus.READY,
    workersRequired: 13,
    workersEnrolled: 13,
  },
  {
    title: "Crimson Dusk Dinner",
    date: new Date("2025-04-20"),
    session: "Morning",
    status: EventStatus.READY,
    workersRequired: 10,
    workersEnrolled: 10,
  },
  {
    title: "Blossom Hall Celebration",
    date: new Date("2025-04-20"),
    session: "Evening",
    status: EventStatus.OPEN,
    workersRequired: 12,
    workersEnrolled: 8,
  },
  {
    title: "Emerald Bay Wedding",
    date: new Date("2025-04-21"),
    session: "Morning",
    status: EventStatus.OPEN,
    workersRequired: 11,
    workersEnrolled: 6,
  },
  {
    title: "Moonlight Harmony Party",
    date: new Date("2025-04-21"),
    session: "Evening",
    status: EventStatus.READY,
    workersRequired: 13,
    workersEnrolled: 13,
  },
  {
    title: "Silver Sands Soirée",
    date: new Date("2025-04-22"),
    session: "Morning",
    status: EventStatus.READY,
    workersRequired: 7,
    workersEnrolled: 7,
  },
  {
    title: "Velvet Vine Anniversary",
    date: new Date("2025-04-22"),
    session: "Evening",
    status: EventStatus.OPEN,
    workersRequired: 10,
    workersEnrolled: 5,
  },
  {
    title: "Oak Tree Reunion",
    date: new Date("2025-04-23"),
    session: "Morning",
    status: EventStatus.READY,
    workersRequired: 8,
    workersEnrolled: 8,
  },
  {
    title: "Maple Grove Meet",
    date: new Date("2025-04-23"),
    session: "Evening",
    status: EventStatus.OPEN,
    workersRequired: 9,
    workersEnrolled: 6,
  },
];

export default () => {
  const [selected, setSelected] = React.useState("Current");
  const TODAY = new Date().setHours(0, 0, 0, 0);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.main_container}>
        <Text style={styles.heading}>Events</Text>
        <SafeAreaView style={styles.main_frame} edges={["bottom"]}>
          <EventSections selected={selected} setSelected={setSelected} />
          <ScrollView
            // showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            style={styles.scroll_container}
          >
            {selected === "Current"
              ? eventData
                  .filter((event) => {
                    const eventDate = new Date(event.date).setHours(0, 0, 0, 0);
                    return eventDate === TODAY;
                  })
                  .map((event, index) => (
                    <EventCards
                      key={index}
                      title={event.title}
                      date={new Date(event.date)}
                      session={event.session}
                      status={event.status as EventStatus}
                      workersEnrolled={event.workersEnrolled}
                      workersRequired={event.workersRequired}
                    />
                  ))
              : selected === "Upcoming"
              ? eventData
                  .filter((event) => {
                    const eventDate = new Date(event.date).setHours(0, 0, 0, 0);
                    return eventDate > TODAY;
                  })
                  .map((event, index) => (
                    <EventCards
                      key={index}
                      title={event.title}
                      date={new Date(event.date)}
                      session={event.session}
                      status={event.status as EventStatus}
                      workersEnrolled={event.workersEnrolled}
                      workersRequired={event.workersRequired}
                    />
                  ))
              : selected === "Past"
              ? eventData
                  .filter((event) => {
                    const eventDate = new Date(event.date).setHours(0, 0, 0, 0);
                    return eventDate < TODAY;
                  })
                  .map((event, index) => (
                    <EventCards
                      key={index}
                      title={event.title}
                      date={new Date(event.date)}
                      session={event.session}
                      status={event.status as EventStatus}
                      workersEnrolled={event.workersEnrolled}
                      workersRequired={event.workersRequired}
                    />
                  ))
              : null}
          </ScrollView>
        </SafeAreaView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Theme.Colors.background,
    flex: 1,
  },
  main_container: {
    flex: 1,
    marginHorizontal: 20,
  },
  heading: {
    fontSize: Theme.FontSizes.H1,
    marginTop: 10,
    fontWeight: "bold",
  },
  main_frame: {
    marginTop: 34,
    flex: 1,
    // borderWidth: 1,
    // borderColor: "red",
  },
  scroll_container: {
    flexDirection: "column",
    marginTop: 20,
    // paddingBottom: 40,
    // borderWidth: 1,
    height: "100%",
    // borderColor: Theme.Colors.primary,
  },
});
