import React, {useState} from 'react'
import { View, StyleSheet, Text, Alert, Button,TouchableWithoutFeedback,Keyboard, Dimensions } from 'react-native'
import Card from '../components/Card'
import color from '../constants/color'
import Input from '../components/Input'
import NumberContainer from '../components/NumberContainer'
import BodyText from '../components/BodyText'
const StartGameScreen = props => {

    const [enteredValue, setenteredValue] = useState('')
    const numberInputHandler = inputText =>{
        setenteredValue(inputText.replace(/[^0-9]/g, '')) 
    }
    const [confiremdNumber, setconfiremdNumber] = useState(false)
    const [selectedNumeber, setselectedNumeber] = useState("")
    const resetInput = () =>{
        setenteredValue("");
        Keyboard.dismiss();
    }

    const confirmInputHandler = () =>{
        const choosenNumber = parseInt(enteredValue);
        if(isNaN(choosenNumber) || choosenNumber <= 0 || choosenNumber >99){
            Alert.alert("Invalid Number", 'Number has to be number between 1 and 99', [{text:"Okay", style:"destructive", onPress: resetInput}])
            return;
        }
        setselectedNumeber(choosenNumber)
        setconfiremdNumber(true)
        setenteredValue("")
        Keyboard.dismiss()
        
    }
    let ConfirmCard;
    if(confiremdNumber){
         ConfirmCard = (
            <Card style={styles.summaryContainer}>
                <BodyText>You selected</BodyText>
                <NumberContainer>{selectedNumeber}</NumberContainer>
                <Button title="START GAME" onPress={() => {props.onStartGame(selectedNumeber)}}></Button>
            </Card>
         )
    }

    return (
        <TouchableWithoutFeedback onPress={()=>{Keyboard.dismiss();}}>
            <View style={styles.screen}>
                <Text style={styles.title} >Start a New Game!</Text>
                <Card style={styles.inputContainer}>
                    <BodyText>
                        Select a Number
                    </BodyText>
                    <Input style={styles.input} blurOnSubmit autoCorect={false} keyboardType="number-pad" maxLength={2} onChangeText={numberInputHandler} value={enteredValue}></Input>
                    <View style={styles.buttonContainer}>
                    <View style={styles.button} ><Button title="Reset" onPress={resetInput} color={color.red}/></View> 
                    <View style={styles.button} ><Button title="Confirm" onPress={confirmInputHandler} color={color.green}/></View> 
                    </View>
                </Card>
                {ConfirmCard}
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
        fontFamily: 'open-sans-blod'
        
    },
    button:{
        width: Dimensions.get('window').width / 4,
    },
    input:{
        width: 50,
    },
    summaryContainer: {
        marginTop: 20,
        alignItems: 'center',
      } 
})

export default StartGameScreen
