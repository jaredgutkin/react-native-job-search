import { useState } from 'react';
import { 
  View, 
  Text,
  TextInput,
  TouchableOpacity, 
  Image,
  FlatList 
} from 'react-native';
import { useRouter } from 'expo-router';

import styles from './welcome.style'
import { icons, SIZES } from '../../../constants';
const Welcome = () => {
  return (
    <View>
      <View style={styles.container}>
          <Text style={styles.userName}>Hello MIMI</Text>
          <Text style={styles.welcomeMessage}>Find your Perfect Job</Text>
      </View>
    </View>
  )
}

export default Welcome