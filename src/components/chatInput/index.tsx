import React from 'react';
import {TextInput, TouchableOpacity, View} from 'react-native';
import {styles} from './styles.ts';
import ArrowUp from '../../assets/svg/arrowUp.tsx';

type ChatInputProps = {
  onArrowPress: () => void;
  value: string;
  setValue: (s: string) => void;
};

const ChatInput = (props: ChatInputProps) => {
  const {onArrowPress, value, setValue} = props;

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={(text: string) => setValue(text)}
      />
      <TouchableOpacity style={styles.arrowIcon} onPress={onArrowPress}>
        <ArrowUp />
      </TouchableOpacity>
    </View>
  );
};

export default ChatInput;
