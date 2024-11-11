import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, ScrollView, Alert } from 'react-native';

// Menu item type
type MenuItem = {
  name: string;
  price: number;
  course: string;
};

const AddMenuItemScreen = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [course, setCourse] = useState('');
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);

  const handleAddItem = () => {
    const parsedPrice = parseFloat(price);

    if (!name || isNaN(parsedPrice) || !course) {
      Alert.alert('Invalid input', 'Please fill out all fields correctly.');
      return;
    }

    const newMenuItem = { name, price: parsedPrice, course };
    setMenuItems((prevItems) => [...prevItems, newMenuItem]);

    // Clear the input fields
    setName('');
    setPrice('');
    setCourse('');
  };

  const handleRemoveItem = () => {
    const itemIndex = menuItems.findIndex(item => item.name === name);
    if (itemIndex >= 0) {
      const updatedItems = [...menuItems];
      updatedItems.splice(itemIndex, 1);
      setMenuItems(updatedItems);
      Alert.alert('Item removed', `Removed ${name} from the menu.`);
    } else {
      Alert.alert('Item not found', `No item named "${name}" exists.`);
    }

    // Clear the input field after removal
    setName('');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Add Menu Item</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter menu item name"
        value={name}
        onChangeText={setName}
      />

      <TextInput
        style={styles.input}
        placeholder="Enter menu item price"
        value={price}
        onChangeText={setPrice}
        keyboardType="numeric"
      />

      <TextInput
        style={styles.input}
        placeholder="Enter course (e.g., Starter, Main)"
        value={course}
        onChangeText={setCourse}
      />

      <Button title="Add Item" onPress={handleAddItem} />
      <Button title="Remove Item" onPress={handleRemoveItem} color="red" />

      {/* Display the menu items */}
      <View style={styles.menuList}>
        <Text style={styles.listTitle}>Menu Items</Text>
        {menuItems.map((item, index) => (
          <View key={index} style={styles.menuItem}>
            <Text>{`${item.name} - R${item.price} (${item.course})`}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
    color: 'black',
  },
  input: {
    height: 48,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingLeft: 10,
    borderRadius: 4,
  },
  menuList: {
    marginTop: 20,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    paddingTop: 10,
  },
  listTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: 'black',
  },
  menuItem: {
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
});

export default AddMenuItemScreen;
