// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomePage from './WelcomePage';
import StoryStep1 from './StoryStep1';
import StoryStep2A from './StoryStep2A';
import EndPage from './EndPage';
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={WelcomePage} />
        <Stack.Screen name="StoryStep1" component={StoryStep1} />
        <Stack.Screen name="StoryStep2A" component={StoryStep2A} />
        <Stack.Screen name="EndPage" component={EndPage} />


      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

// import React from 'react';
// import { View, Text, Button } from 'react-native';
// import styled from 'styled-components/native';

// const Container = styled.View`
//   flex: 1;
//   justify-content: center;
//   align-items: center;
// `;

// const Title = styled.Text`
//   font-size: 24px;
//   font-weight: bold;
//   margin-bottom: 20px;
// `;

// const WelcomePage = ({ navigation }) => {
//   return (
//     <Container>
//       <Title>Bienvenue dans le jeu à choix!</Title>
//       <Button
//         title="Commencer l'histoire"
//         onPress={() => navigation.navigate('StoryStep1')}
//       />
//     </Container>
//   );
// };

// export default WelcomePage;
