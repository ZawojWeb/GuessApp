import React from 'react'
import { View, Text, StyleSheet,Button, Image } from 'react-native'
import color from '../constants/color'

const GameOverScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>The Game is Over!</Text>
            <Image source={require('../assets/success.png')}  style={styles.image} resizeMode="cover"/>
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
    },
    image:{
        width: '80%',
        height: 300
    }
})

export default GameOverScreen
