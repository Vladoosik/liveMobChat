import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from './styles.ts';
import {getFirestore} from '@react-native-firebase/firestore/lib/modular';

const HomeScreen = ({navigation}: any) => {
  const loginCustomer = async (value: 'customer' | 'executor') => {
    await getFirestore()
      .collection('users')
      .where('name', '==', value)
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          const userData = doc.data();
          goToChat(userData.id);
        });
      });
  };

  const goToChat = async (id: any) => {
    await navigation.navigate('chat', {
      id,
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Who are you ?</Text>
      <TouchableOpacity
        style={styles.buttonDefault}
        onPress={() => loginCustomer('customer')}>
        <Text style={styles.defaultText}>Customer</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonActive}
        onPress={() => loginCustomer('executor')}>
        <Text style={styles.activeText}>Executor</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
