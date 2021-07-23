import React, {useState, useRef, useEffect} from 'react'
import { View, Text, StyleSheet, Button, Alert } from 'react-native'
import NumberContainer from '../components/NumberContainer';

import Card from '../components/Card';

const generateRandomBetween = (min,max,exclude)=>{
    min = Math.ceil(min);
    max = Math.floor(max);
    const rndNum = Math.floor(Math.random() * (max -min)) + min;

    if(rndNum === exclude){
        return generateRandomBetween(min,max,exclude);
    }else{
        return rndNum
    }
}

const GameScreen = props => {
    const [currentGuess, setcurrentGuess] = useState(generateRandomBetween(1,100, props.userChoice ))
    const currentLow = useRef(1)
    const currentGreater = useRef(100)
    const [rounds, setRounds] = useState(0)
    const {userChoice, onGameOver} = props;

    useEffect(()=>{
        if(currentGuess === userChoice){
            onGameOver(rounds);
        }
    }, [currentGuess,userChoice, onGameOver,nextGuessHandler])


    const nextGuessHandler = direction =>{

        if((direction === "lower" && currentGuess < userChoice) || (direction === 'greater' && currentGuess > userChoice)){
            Alert.alert("YOU ARE LIAR", "You know that this is wrong...", [{text: "Sorry!", style:'cancel'}])
            return;
        }
        if(direction === 'lower'){
            currentGreater.current = currentGuess
        }else{
            currentLow.current = currentGuess;
        }
       const nextNumber =  generateRandomBetween(currentLow.current, currentGreater.current, currentGuess)
       setcurrentGuess(nextNumber);
       setRounds(curRounds => curRounds +1)

    }
    return (
        <View style={styles.screen}>
            <Text>
                Opponent's Guess
            </Text>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card style={styles.buttonContainer}>
                <Button onPress={nextGuessHandler.bind(this, 'lower')} title="Lower"></Button>
                <Button onPress={nextGuessHandler.bind(this, 'greater')} title="GREATER"></Button>
            </Card>
        </View>
    )
}
const styles = StyleSheet.create({
    screen:{
        flex: 1,
        padding: 10,
        alignItems: 'center',

    },
    buttonContainer:{
        flexDirection:'row',
        justifyContent: 'space-around',
        marginTop: 20,
        width: 300,
        maxWidth: '80%'

    }
})
export default GameScreen
