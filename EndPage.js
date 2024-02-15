import React from 'react';
import { Button } from 'react-native';
import styled from 'styled-components/native';


const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #fff;
`;

const ResultText = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const EndPage = ({ route, navigation }) => {
  const { result } = route.params;

  return (
    <Container>
      <ResultText>Fin de l'histoire</ResultText>
      <ResultText>Résultat: {result}</ResultText>
      <Button
        title="Recommencer"
        onPress={() => navigation.navigate('Home')}
      />
    </Container>
  );
};

export default EndPage;
