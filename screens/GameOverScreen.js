import React from 'react'
import { View, Text, StyleSheet,Button } from 'react-native'
import color from '../constants/color'

const GameOverScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>The Game is Over!</Text>
            <Text>Number of rounds: {props.roundsNumber}</Text>
            <Text>The number was: {props.userNumber}</Text>
            <View style={styles.restButton}>
                <Button color={color.accent} title="NEW GAME" onPress={props.onRestart}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    screen:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    restButton:{
        marginTop:40,
        backgroundColor: color.accent ,
    }
})

export default GameOverScreen
