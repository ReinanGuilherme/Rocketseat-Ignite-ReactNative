import { Header } from "@components/Header";
import { Container, Content, Icon } from "./styles";
import { Highlight } from "@components/Highlight";
import { Button } from "@components/Button";
import React from "react";

export function NewGroup() {
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

      <Button title="Criar"/>

    </Container>
  )
}