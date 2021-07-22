import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';

export default function App() {
  const [userNumber, setuserNumber] = useState()
  const startGameHandler = (selectedNumber) =>{
    setuserNumber(selectedNumber)
  }

  let content = <StartGameScreen onStartGame={startGameHandler} ></StartGameScreen>

  if(userNumber){
    content = <GameScreen userChoice={userNumber}></GameScreen>
  }
  return (
    <View style={styles.screen}>
     <StatusBar style='auto'></StatusBar>
     <Header title="Guess a Number"></Header>
     {content}
    </View>
  );
}

const styles = StyleSheet.create({
 screen:{
   flex: 1,
 }
});
