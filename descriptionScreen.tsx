import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';

const DescriptionScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Title for the Description Page */}
      <Text style={styles.descriptionTitle}>Menu Description</Text>

      {/* Starters Section */}
      <Text style={styles.sectionTitle}>Starters: Different Ramen Flavours</Text>
      <Text style={styles.item}>Shoyu Ramen - R80</Text>
      <Text style={styles.item}>Miso Ramen - R85</Text>
      <Text style={styles.item}>Tonkotsu Ramen - R90</Text>

      {/* Mains Section */}
      <Text style={styles.sectionTitle}>Mains: Types of Ramen</Text>
      <Text style={styles.item}>Shoyu Ramen (Large) - R100</Text>
      <Text style={styles.item}>Spicy Miso Ramen - R105</Text>
      <Text style={styles.item}>Tonkotsu Ramen (Large) - R110</Text>

      {/* Desserts Section */}
      <Text style={styles.sectionTitle}>Desserts: Ice Creams</Text>
      <Text style={styles.item}>Chocolate Ice Cream - R30</Text>
      <Text style={styles.item}>Caramel Ice Cream - R30</Text>

      {/* Appetizers Section */}
      <Text style={styles.sectionTitle}>Appetizers</Text>
      <Text style={styles.item}>Coke - R40</Text>
      <Text style={styles.item}>Fanta Grape - R50</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: 'white',
  },
  descriptionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
    color: 'black',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 16,
    marginBottom: 8,
  },
  item: {
    fontSize: 16,
    color: 'black',
    marginBottom: 4,
  },
});

export default DescriptionScreen;
