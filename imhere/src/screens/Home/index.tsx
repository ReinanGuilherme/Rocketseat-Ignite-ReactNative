import { Alert, FlatList, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import { Participant } from '../../components';
import React, { useState } from 'react';

export default function Home() {
  const [participants, setParticipants] = useState<string[]>([])
  const [participantName, setParticipantName] = useState('')

  function handleParticipantAdd() {
    if(participants.includes(participantName)) {
      return Alert.alert("Participante Existe","Já existe um participante na lista com esse nome.")
    }

    setParticipants(state => [...state, participantName])
    setParticipantName('')
  }

  function handleParticipantRemove(name: string) {

    
    
    return Alert.alert("Remover", `Deseja remover o particiapnte ${name}?` , [
      {
        text: 'Sim',
        onPress: () => {
          let newListParticipants = participants.filter(participant => participant !== name)
          setParticipants(newListParticipants)
          return;
        }
      },
      {
        text: 'Não',
        style: 'cancel'
      }
    ])
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>React Native</Text>
      <Text style={styles.eventDate}>Sábado, 27 de Maio 2023.</Text>

      <View style={styles.form}>
      <TextInput 
      style={styles.input}
      placeholder='Nome do participante.'
      placeholderTextColor="#6b6b6b"
      onChangeText={(e) => setParticipantName(e)}
      value={participantName}
      />

      <TouchableOpacity 
      style={styles.button}
      onPress={handleParticipantAdd}>
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
      </View>

      <FlatList 
      data={participants} 
      keyExtractor={item => item}
      showsVerticalScrollIndicator={false}
      renderItem={({item}) => (
        <Participant 
            key={item} 
            name={item} 
            onRemove={() => handleParticipantRemove(item)}/> 
      )}
      ListEmptyComponent={() => {
        return(
          <Text style={styles.listEmptyText}>
            Nenhum participante foi adicionado ainda.
          </Text>
        )
      }}
      />      
    </View>
  );
}