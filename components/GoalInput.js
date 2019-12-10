import React, { useState } from 'react';
import {TextInput, View, Button, StyleSheet, Modal} from 'react-native';



export default function GoalInput (props) {
    const [enteredGoal, setEnteredGoal] = useState('');

    const addGoalHandler = () => {
        props.onAddGoal(enteredGoal);
        setEnteredGoal('');
    };   

    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
    };


    return (
<Modal visible={props.visible} animationType="fade">
        <View style={styles.inputContainer}>
            <TextInput placeholder="Course Goal" style={styles.input}
                onChangeText={goalInputHandler}
                value={enteredGoal} />

          <View style={styles.buttonSubContainer}>
              
           <View style={styles.button}> 
           <Button title="add goal" onPress ={addGoalHandler} />
           </View>

            <View style={styles.button}>
                <Button title="CANCEL" color="red"  onPress={props.onCancel}/>
                </View>

            </View>

        </View>
</Modal>

    )
};

const styles = StyleSheet.create({
    inputContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },

    input: {
        width: '80%',
        borderColor: "blue",
        borderBottomWidth: 1,
        padding: 5,
        marginBottom: 10,
    },

    buttonSubContainer :{
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '60%',
    }, 
    
    button: {
        width:'40%',
    }
});
