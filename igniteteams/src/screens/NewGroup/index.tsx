import { Header } from "@components/Header";
import { Container, Content, Icon } from "./styles";
import { Highlight } from "@components/Highlight";
import { Button } from "@components/Button";
import React from "react";
import { Input } from "@components/Input";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { groupCreate } from "@storage/group/groupCreate";

export function NewGroup() {
  const [group, setGroup] = useState('')

  const navigation = useNavigation()

  async function handleNew() {
    try {      
      await groupCreate(group)
      navigation.navigate('players', {group})
    } catch(error) {
      console.log(error);
      
    }
  }
  return(
    <Container>
      <Header showBackButton/>

      <Content>
      <Icon/>

      <Highlight
        title="Nova turma"
        subtitle="Crie a turma para adicionar as pessoas"
      />      
      </Content>
      <Input placeholder="Nome da turma" onChangeText={setGroup}/>
      <Button title="Criar" onPress={handleNew}/>

    </Container>
  )
}