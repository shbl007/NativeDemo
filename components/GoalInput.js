import { useState } from "react";
import { StyleSheet,View,TextInput,Button, Modal,Image } from "react-native";

function GoalInput(props){
  const [enteredGoalText, setEnteredGoalText] = useState('');

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler(){
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText('');
  }

    return(
        <Modal visible={props.showModal} animationType="slide">
        <View style={styles.inputContainer}>
          <Image style={styles.image} source={require('../assets/images/goal.png')}/>
        <TextInput
          style={styles.textInput}
          placeholder='Your course Goal!! '
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
     <View  style={styles.buttonContainer}>
      <View style={styles.button}>
      <Button title="Cancel" color={'#7e459b'} onPress={props.onCancel}/>
      </View>
      <View style={styles.button}>
      <Button title="Add Goal" onPress={addGoalHandler} color={'#9b56be'} />
      </View>
    </View>
      </View>
      </Modal>
    );
}

const styles=StyleSheet.create({
    inputContainer: {
        flex: 1,
        padding:10,
        justifyContent: '',
        alignItems: 'center',
        backgroundColor:'#9d82d2'
      },
      textInput: {
        borderWidth: 1,
        borderRadius: 8,
        borderColor: '#cccccc',
        backgroundColor: '#D6EBF2',
        width: '95%',
        padding: 16,
      },
      buttonContainer:{
      flexDirection:"row",
      marginTop:16

      
      },
      button:{
        width:'40%',
      marginHorizontal:8,
      borderRadius:8,
      overflow:'hidden'
      },
      image:{
        marginTop:100,
        width:100,
        height:100,
        margin:20,
        // padding:80
      }
      });

export default GoalInput;