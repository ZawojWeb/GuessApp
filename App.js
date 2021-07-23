import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';

export default function App() {
  const [userNumber, setuserNumber] = useState()
  const [guessRounds, setGuessRounds] = useState(0)

  const configreNewGame = () =>{
    setGuessRounds(0);
    setuserNumber(null)
  }

  const startGameHandler = (selectedNumber) =>{
    setuserNumber(selectedNumber)
  }

  const gameOverHanlder = numOfRounds =>{
    setGuessRounds(numOfRounds);
  }

  let content = <StartGameScreen onStartGame={startGameHandler} ></StartGameScreen>

  if(userNumber && guessRounds <= 0){
    content = <GameScreen userChoice={userNumber} onGameOver={gameOverHanlder}></GameScreen>
  }else if(guessRounds > 0 ){
    content = <GameOverScreen roundsNumber={guessRounds} userNumber={userNumber} onRestart={configreNewGame}/>
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
