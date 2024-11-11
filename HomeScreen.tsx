import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, FlatList, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Menu item type
type MenuItems = {
  name: string;
  price: number;
  course: string;
};

const HomeScreen = () => {
  const navigation = useNavigation();

  // Sample menu items
  const [menuItems, setMenuItems] = useState<MenuItems[]>([
    { name: 'Ramen Starter', price: 5.0, course: 'Starter' },
    { name: 'Main Ramen Bowl', price: 12.0, course: 'Main' },
    { name: 'Dessert Mochi', price: 4.0, course: 'Dessert' },
    { name: 'Appetizer Spring Roll', price: 3.0, course: 'Appetizer' },
  ]);

  // Calculate average price by course
  const calculateAveragePriceByCourse = () => {
    const courseGroups = menuItems.reduce((acc, item) => {
      acc[item.course] = acc[item.course] ? [...acc[item.course], item] : [item];
      return acc;
    }, {} as Record<string, MenuItems[]>);

    return Object.keys(courseGroups)
      .map((course) => {
        const avgPrice = courseGroups[course].reduce((sum, item) => sum + item.price, 0) / courseGroups[course].length;
        return `${course}: $${avgPrice.toFixed(2)}`;
      })
      .join('\n');
  };

  // Navigate to AddMenuItemScreen
  const handleAddMenuItems = () => {
   
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Screen</Text>

      {/* Menu Grid of Images */}
      <View style={styles.menuGrid}>
        {/* Top Row */}
        <View style={styles.imageRow}>
          {['shoyo', 'beef1', 'classic-ramen', 'beef1', 'halaal1'].map((image, index) => (
            <View key={index} style={styles.imageContainer}>
              <Text>{image}</Text> {/* Placeholder for Image */}
            </View>
          ))}
        </View>

        {/* Bottom Row */}
        <View style={styles.imageRow}>
          {['spicymiso1', 'chicken1', 'spicy1', 'chicken3'].map((image, index) => (
            <View key={index} style={styles.imageContainer}>
              <Text>{image}</Text> {/* Placeholder for Image */}
            </View>
          ))}
        </View>
      </View>

      {/* Average Price Text */}
      <Text style={styles.averagePriceText}>Average Price by Course</Text>
      <Text style={styles.averagePrice}>{calculateAveragePriceByCourse()}</Text>

      {/* Menu List */}
      <FlatList
        data={menuItems}
        renderItem={({ item }) => <Text style={styles.menuItem}>{item.name}</Text>}
        keyExtractor={(item) => item.name}
      />

      {/* Button to Add Menu Items */}
      <TouchableOpacity style={styles.addMenuButton} onPress={handleAddMenuItems}>
        <Text style={styles.buttonText}>Add Menu Items</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flex: 1,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: 'black',
  },
  menuGrid: {
    marginTop: 20,
  },
  imageRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 16,
  },
  imageContainer: {
    width: 80,
    height: 80,
    backgroundColor: '#ddd',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 8,
  },
  averagePriceText: {
    fontSize: 20,
    textAlign: 'center',
    marginVertical: 20,
  },
  averagePrice: {
    textAlign: 'center',
    fontSize: 16,
    color: 'black',
  },
  menuItem: {
    padding: 10,
    fontSize: 16,
    color: 'black',
  },
  addMenuButton: {
    backgroundColor: '#2f95dc',
    padding: 15,
    marginTop: 20,
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default HomeScreen;
