import React from 'react';
import { VStack, Image, Text, Center, Heading, ScrollView } from 'native-base';

import Logo from '../assets/logo.svg'
import BgImg from '../assets/background.png'
import { Input } from '../components/Input';
import { Button } from '../components/Button';
import { useNavigation } from '@react-navigation/native';

export function SignUp() {

    const navigation = useNavigation()

    function handleGoBack() {
        navigation.goBack()
    }

    return (
        <ScrollView 
            contentContainerStyle={{flexGrow: 1}} 
            showsVerticalScrollIndicator={false}
        >
            <VStack flex={1} px={5} pb={16}>
                <Image
                    source={BgImg}                    
                    defaultSource={BgImg}
                    alt='Pessoas Treinando'
                    resizeMode='contain'
                    position="absolute"
                />

                <Center my={24}>
                    <Logo />

                    <Text color="gray.100" fontSize="sm">
                        Treine sua mente e o seu corpo
                    </Text>
                </Center>

                <Center>
                    <Heading color="gray.100" fontSize="xl" mb={6} fontFamily="heading">
                        Crie sua conta
                    </Heading>

                    <Input 
                        placeholder='Nome'
                    />

                    <Input 
                        placeholder='E-mail' 
                        keyboardType='email-address'
                        autoCapitalize='none'
                    />
                    
                    <Input 
                        placeholder='Senha' 
                        secureTextEntry
                    />

                    <Button title='Criar e acessar'/>

                </Center>

                
                <Button 
                    title='Voltar para o login' 
                    variant="outline" 
                    mt={24}
                    onPress={handleGoBack}
                />
            </VStack>
        </ScrollView>
    );
}