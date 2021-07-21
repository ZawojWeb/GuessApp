import React from 'react'
import { View ,StyleSheet } from 'react-native'

const Card = props => {
    return (
        <View style={{...styles.card, ...props.style}}>
            {props.children}
        </View>
    )
}

const styles = StyleSheet.create({
    card:{
        shadowColor: 'black',
        shadowOffset:{
            width: 0,
            height:2 ,
        },
        shadowRadius:6,
        shadowOpacity: 0.26,
        elevation:20,
        padding:15 ,
        marginTop: 20,
        borderRadius: 10,
        backgroundColor: 'white',
    }
})
export default Card
