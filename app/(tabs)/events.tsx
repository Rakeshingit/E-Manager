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

export default () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.main_container}>
        <Text style={styles.heading}>Events</Text>
        <SafeAreaView style={styles.main_frame} edges={["bottom"]}>
          <EventSections />
          <ScrollView
            // showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            style={styles.scroll_container}
          >
            <EventCards
              title="Prince Melon Banquet"
              date={new Date()}
              session="Morning"
              status={EventStatus.READY}
            />
            <EventCards
              title="Prince Melon Banquet"
              date={new Date()}
              session="Morning"
              status={EventStatus.PARTIALLY_PAID}
            />
            <EventCards
              title="Prince Melon Banquet"
              date={new Date()}
              session="Morning"
              status={EventStatus.PARTIALLY_PAID}
            />
            <EventCards
              title="Prince Melon Banquet"
              date={new Date()}
              session="Afternoon"
              status={EventStatus.PARTIALLY_PAID}
            />
            <EventCards
              title="Prince Melon Banquet"
              date={new Date()}
              session="Morning"
              status={EventStatus.PARTIALLY_PAID}
            />
            <EventCards
              title="Prince Melon Banquet"
              date={new Date()}
              session="Morning"
              status={EventStatus.COMPLETED}
            />
            <EventCards
              title="Prince Melon Banquet"
              date={new Date()}
              session="Morning"
              status={EventStatus.SETTLED}
            />
            <EventCards
              title="Prince Melon Banquet"
              date={new Date()}
              session="Morning"
              status={EventStatus.PARTIALLY_PAID}
            />
            <EventCards
              title="Prince Melon Banquet"
              date={new Date()}
              session="Morning"
              status={EventStatus.PARTIALLY_PAID}
            />
            <EventCards
              title="Prince Melon Banquet"
              date={new Date()}
              session="Morning"
              status={EventStatus.PARTIALLY_PAID}
            />
            <EventCards
              title="Prince Melon Banquet"
              date={new Date()}
              session="Morning"
              status={EventStatus.PARTIALLY_PAID}
            />
            <EventCards
              title="Prince Melon Banquet"
              date={new Date()}
              session="Morning"
              status={EventStatus.PARTIALLY_PAID}
            />
            <EventCards
              title="Prince Melon Banquet"
              date={new Date()}
              session="Morning"
              status={EventStatus.PARTIALLY_PAID}
            />
            <EventCards
              title="Prince Melon Banquet"
              date={new Date()}
              session="Morning"
              status={EventStatus.PARTIALLY_PAID}
            />
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
