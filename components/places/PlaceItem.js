import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const PlaceItem = ({ place, onSelect }) => {
  const { imageUri, title, address } = place;
  return (
    <TouchableOpacity onPress={onSelect}>
      <Image source={{ uri: imageUri }} />
      <View>
        <Text>{title}</Text>
        <Text>{address}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default PlaceItem;

const styles = StyleSheet.create({});
