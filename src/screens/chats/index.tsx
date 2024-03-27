import React, {useCallback, useEffect, useState} from 'react';
import {View} from 'react-native';
import {GiftedChat, IMessage} from 'react-native-gifted-chat';
import {getFirestore} from '@react-native-firebase/firestore/lib/modular';

const ChatScreen = ({route}: any) => {
  const {id} = route.params;
  const otherUserId = id == 293023031 ? 8943912 : 293023031;
  const [messageList, setMessageList] = useState<any>([]);
  const [data, setData] = useState<any>([]);
  // Функция для загрузки сообщений из Firestore
  const loadMessages = useCallback(async () => {
    const messagesRef = await getFirestore().collection('messages').get();
    messagesRef.docs.forEach(doc => {
      let anal = {
        // id: doc.id,
        ...doc.data(),
      };
      setMessageList((prev: any) => [...prev, anal]);
    });

    // Прослушиваем коллекцию сообщений, где текущий пользователь является отправителем или получателем
    // const unsubscribe = messagesRef
    //   .where('senderId', 'in', [id, otherUserId])
    //   .where('recipientId', 'in', [otherUserId, id])
    //   .orderBy('timestamp', 'desc')
    //   .onSnapshot(snapshot => {
    //     const loadedMessages: IMessage[] = [];
    //     snapshot.forEach(doc => {
    //       const messageData = doc.data();
    //       const message: IMessage = {
    //         _id: doc.id,
    //         text: messageData.text,
    //         createdAt: messageData.timestamp.toDate(),
    //         user: {
    //           _id: messageData.senderId,
    //         },
    //       };
    //       loadedMessages.push(message);
    //     });
    //     setMessageList(loadedMessages);
    //   });

    // Отписываемся от прослушивания при размонтировании компонента
    // return () => unsubscribe();
  }, []);
  const uniqueKey = messageList.map(el => el.senderId)

  console.log('dfdfdfdfdf',uniqueKey);

  useEffect(() => {
    loadMessages();
  }, []);

  const onSend = useCallback(
    async (messages: IMessage[] = []) => {
      // Отправляем сообщения в GiftedChat
      setMessageList(previousMessages =>
        GiftedChat.append(previousMessages, messages),
      );

      // Сохраняем отправленные сообщения в Firestore
      messages.forEach(message => {
        // Создаем новый документ в коллекции messages
        getFirestore().collection('messages').add({
          senderId: id, // ID отправителя
          recipientId: otherUserId, // ID получателя
          text: message.text,
          timestamp: new Date(), // Временная метка сообщения
        });
      });
    },
    [id, otherUserId],
  );

  return (
    <View style={{flex: 1}}>
      <GiftedChat
        messages={messageList}
        onSend={messages => onSend(messages)}
        user={{
          _id: id,
        }}
      />
    </View>
  );
};

export default ChatScreen;
