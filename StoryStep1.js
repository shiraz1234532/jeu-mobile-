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

const StoryStep1 = ({ navigation }) => {
  return (
    <Container>
      <Description>Vous êtes face à un croisement. Quelle direction prenez-vous?</Description>
      <Button
        title="Prendre la route de gauche"
        onPress={() => navigation.navigate('StoryStep2A')}
      />
      <Button
        title="Prendre la route de droite"
        onPress={() => navigation.navigate('EndPage', { result: 'Prévisible' })}
      />
      <Button
        title="Rebrousser chemin"
        onPress={() => navigation.navigate('EndPage', { result: 'Fin prématurée' })}
      />
    </Container>
  );
};

export default StoryStep1;
