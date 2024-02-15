import React from 'react';
import { Button } from 'react-native';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #fff;
`;

const Description = styled.Text`
  font-size: 18px;
  margin-bottom: 20px;
`;

const StoryStep2A = ({ navigation }) => {
  return (
    <Container>
      <Description>Vous rencontrez un dragon! Que faites-vous?</Description>
      <Button
        title="Combattre le dragon"
        onPress={() => navigation.navigate('EndPage', { result: 'Game Over' })}
      />
      <Button
        title="Fuir loin du dragon"
        onPress={() => navigation.navigate('EndPage', { result: 'Victoire' })}
      />
      <Button
        title="Tenter de le tromper"
        onPress={() => navigation.navigate('EndPage', { result: 'Échec, il vous a repéré!' })}
      />
    </Container>
  );
};

export default StoryStep2A;
