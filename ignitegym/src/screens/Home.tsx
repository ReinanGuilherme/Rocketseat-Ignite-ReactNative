import React, { useState } from 'react';
import { HStack, VStack, FlatList, Heading, Text } from 'native-base';
import { HomeHeader } from '../components/HomeHeader';
import { Group } from '../components/Group';
import { ExerciseCard } from '../components/ExerciseCard';
import { useNavigation } from '@react-navigation/native';
import { AppNavigatorRoutesProps } from '../routes/app.routes';

export function Home() {
    const [groups, setGroups] = useState(['Costas', 'Bíceps', 'Tríceps', 'ombro']);
    const [exercises, setExercises] = useState(['Puxada frontal', 'Remada curvada', 'Remada unilateral', 'Levantamento terras']);
    const [groupSelected, setGroupSelected] = useState('Costas');

    const navigation = useNavigation<AppNavigatorRoutesProps>()

    function handleOpenExerciseDetails() {
        navigation.navigate('exercise')
    }

  return (
    <VStack flex={1}>
        <HomeHeader />

        <FlatList
        data={groups}
        keyExtractor={item => item}
        renderItem={({item}) => (
        <Group 
            name={item}
            isActived={groupSelected === item}
            onPress={() => setGroupSelected(item)}
            />
        )}
        horizontal
        showsVerticalScrollIndicator={false}
        _contentContainerStyle={{px: 8}}
        my={10}
        maxH={10}
        minH={10}
        
        />

        <VStack flex={1} px={8}>
            <HStack justifyContent="space-between" mb={5}>
                <Heading color="gray.200" fontSize="md" fontFamily="heading">
                    Exercicios
                </Heading>

                <Text color="gray.200" fontSize="sm">
                    {exercises.length}
                </Text>
            </HStack>

            <FlatList 
                data={exercises}
                keyExtractor={item => item}
                renderItem={({ item }) => (
                    <ExerciseCard onPress={handleOpenExerciseDetails} />
                )}
                showsVerticalScrollIndicator={false}
                _contentContainerStyle={{
                    paddingBottom: 20
                }}
            />
        </VStack>
    </VStack>
  );
}