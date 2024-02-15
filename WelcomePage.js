import React from 'react';
import { View, Text, Button } from 'react-native';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const WelcomePage = ({ navigation }) => {
  return (
    <Container>
      <Title>Bienvenue dans le jeu à choix!</Title>
      <Button
        title="Commencer l'histoire"
        onPress={() => navigation.navigate('StoryStep1')}
      />
    </Container>
  );
};

export default WelcomePage;
