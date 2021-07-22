import React, {useState} from 'react'
import { View, StyleSheet, Text, TextInput, Button,TouchableWithoutFeedback,Keyboard } from 'react-native'
import Card from '../components/Card'
import color from '../constants/color'
import Input from '../components/Input'
const StartGameScreen = props => {

    const [enteredValue, setenteredValue] = useState('')
    const numberInputHandler = inputText =>{
        setenteredValue(inputText.replace(/[^0-9]/g, '')) 
    }
    return (
        <TouchableWithoutFeedback onPress={()=>{Keyboard.dismiss();}}>
            <View style={styles.screen}>
                <Text style={styles.title} >Start a New Game!</Text>
                <Card style={styles.inputContainer}>
                    <Text>
                        Select a Number
                    </Text>
                    <Input style={styles.input} blurOnSubmit autoCorect={false} keyboardType="number-pad" maxLength={2} onChangeText={numberInputHandler} value={enteredValue}></Input>
                    <View style={styles.buttonContainer}>
                    <View style={styles.button} ><Button title="Reset" onPress={()=>{}} color={color.red}/></View> 
                    <View style={styles.button} ><Button title="Confirm" onPress={()=>{}} color={color.green}/></View> 
                    </View>
                </Card>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    screen:{
        flex: 1,
        padding: 10,
        alignItems: "center",
    },
    buttonContainer:{
        flexDirection: 'row',
        width: '100%',
        justifyContent: "space-between",
        paddingHorizontal: 15,
    },
    inputContainer:{
        width: 300,
        maxWidth: '80%',
        alignItems: 'center',
       
    },
    title:{
        fontSize:20,
        marginVertical:10,
        
    },
    button:{
        width: 100,
    },
    input:{
        width: 50,
    }
})

export default StartGameScreen
