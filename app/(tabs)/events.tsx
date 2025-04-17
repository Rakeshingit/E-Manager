import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from "react-native";
import { Link } from "expo-router";
import { useState, useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

// Sample event data - in a real app, you would fetch this from an API or database
const sampleEvents = [
  {
    id: "1",
    title: "Annual Conference",
    date: new Date(2023, 11, 15), // Future date
    time: "9:00 AM - 5:00 PM",
    location: "Convention Center",
    image: "https://picsum.photos/id/1/400/200",
    description:
      "Annual industry conference with keynote speakers and networking opportunities.",
    status: "upcoming",
  },
  {
    id: "2",
    title: "Team Building Workshop",
    date: new Date(), // Today
    time: "10:00 AM - 3:00 PM",
    location: "Recreation Center",
    image: "https://picsum.photos/id/2/400/200",
    description: "Activities to build team rapport and improve collaboration.",
    status: "upcoming",
  },
  {
    id: "3",
    title: "Product Launch",
    date: new Date(2023, 5, 10), // Past date
    time: "2:00 PM - 4:00 PM",
    location: "Main Office",
    image: "https://picsum.photos/id/3/400/200",
    description: "Launch event for our new flagship product.",
    status: "past",
  },
  {
    id: "4",
    title: "Quarterly Review",
    date: new Date(2024, 1, 28), // Future date
    time: "1:00 PM - 3:00 PM",
    location: "Conference Room A",
    image: "https://picsum.photos/id/4/400/200",
    description: "Review of Q2 performance and planning for Q3.",
    status: "upcoming",
  },
  {
    id: "5",
    title: "Holiday Party",
    date: new Date(2022, 11, 15), // Past date
    time: "6:00 PM - 10:00 PM",
    location: "Grand Hotel",
    image: "https://picsum.photos/id/5/400/200",
    description: "Annual company celebration with dinner and entertainment.",
    status: "past",
  },
];

// Card component for individual events
const EventCard = ({ event }) => {
  const formatDate = (date) => {
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <View style={styles.card}>
      <Image source={{ uri: event.image }} style={styles.eventImage} />
      <View style={styles.eventInfo}>
        <Text style={styles.eventTitle}>{event.title}</Text>
        <Text style={styles.eventDate}>{formatDate(event.date)}</Text>
        <Text style={styles.eventTime}>{event.time}</Text>
        <Text style={styles.eventLocation}>{event.location}</Text>
        <Text numberOfLines={2} style={styles.eventDescription}>
          {event.description}
        </Text>
        <TouchableOpacity style={styles.viewButton}>
          <Text style={styles.viewButtonText}>View Details</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default function Events() {
  const authContext = useContext(AuthContext);
  const [activeTab, setActiveTab] = useState("upcoming");

  // Filter events based on the active tab
  const filteredEvents = sampleEvents.filter(
    (event) => event.status === activeTab
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Events</Text>
        <Text style={styles.welcomeText}>
          Welcome,{" "}
          {authContext?.user?.email
            ? authContext.user.email.split("@")[0]
            : "Guest"}
        </Text>
      </View>

      {/* Tab navigation */}
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[styles.tab, activeTab === "upcoming" && styles.activeTab]}
          onPress={() => setActiveTab("upcoming")}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === "upcoming" && styles.activeTabText,
            ]}
          >
            Upcoming
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeTab === "current" && styles.activeTab]}
          onPress={() => setActiveTab("current")}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === "current" && styles.activeTabText,
            ]}
          >
            Current
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeTab === "past" && styles.activeTab]}
          onPress={() => setActiveTab("past")}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === "past" && styles.activeTabText,
            ]}
          >
            Past
          </Text>
        </TouchableOpacity>
      </View>

      {/* Events list */}
      {filteredEvents.length > 0 ? (
        <ScrollView style={styles.eventList}>
          {filteredEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </ScrollView>
      ) : (
        <View style={styles.emptyState}>
          <Text style={styles.emptyStateText}>No {activeTab} events found</Text>
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f7fa",
  },
  header: {
    padding: 16,
    backgroundColor: "#ffffff",
    borderBottomWidth: 1,
    borderBottomColor: "#e1e4e8",
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#202124",
  },
  welcomeText: {
    fontSize: 14,
    color: "#5f6368",
    marginTop: 4,
  },
  tabContainer: {
    flexDirection: "row",
    backgroundColor: "#ffffff",
    paddingHorizontal: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#e1e4e8",
  },
  tab: {
    flex: 1,
    paddingVertical: 12,
    alignItems: "center",
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: "#4285f4",
  },
  tabText: {
    fontSize: 16,
    color: "#5f6368",
  },
  activeTabText: {
    color: "#4285f4",
    fontWeight: "500",
  },
  eventList: {
    flex: 1,
    padding: 16,
  },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 8,
    marginBottom: 16,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  eventImage: {
    width: "100%",
    height: 150,
  },
  eventInfo: {
    padding: 16,
  },
  eventTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#202124",
    marginBottom: 8,
  },
  eventDate: {
    fontSize: 14,
    color: "#4285f4",
    marginBottom: 4,
  },
  eventTime: {
    fontSize: 14,
    color: "#5f6368",
    marginBottom: 4,
  },
  eventLocation: {
    fontSize: 14,
    color: "#5f6368",
    marginBottom: 8,
  },
  eventDescription: {
    fontSize: 14,
    color: "#5f6368",
    marginBottom: 16,
    lineHeight: 20,
  },
  viewButton: {
    backgroundColor: "#4285f4",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 4,
    alignSelf: "flex-start",
  },
  viewButtonText: {
    color: "#ffffff",
    fontWeight: "500",
    fontSize: 14,
  },
  emptyState: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },
  emptyStateText: {
    fontSize: 16,
    color: "#5f6368",
    textAlign: "center",
  },
});
