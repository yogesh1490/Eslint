import React from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  Text,
  TouchableOpacity,
} from 'react-native';
const {width} = Dimensions.get('window');

export default function ButtonView({
  text,
  onPress,
  addViewStyle,
  addTextStyle,
}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.button, {...addViewStyle}]}>
        <Text style={[styles.buttonText, {...addTextStyle}]}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: width - 40,
    borderRadius: 8,
    paddingVertical: 14,
    paddingHorizontal: 10,
    backgroundColor: '#f01d71',
    alignSelf: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontSize: 16,
    textAlign: 'center',
  },
});
