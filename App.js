import { useState } from 'react';
import { StyleSheet, View,  FlatList,Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import GoalItems from './components/GoalItems'; 
import GoalInput from './components/GoalInput';

export default function App() {
  const[modalIsVisible,setModalIsVisible]=useState(false)
  const [courseGoals, setCourseGoals] = useState([]);

  function startAddGoalHandler(){
    setModalIsVisible(true);
  }
  function endAddGoalHandler(){
    setModalIsVisible(false);
  }

  function addGoalHandler(enteredGoalText) {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
    endAddGoalHandler();
  }

  function deleteGoalHandler(itemId) {
    setCourseGoals(currentCourseGoals => {
      return currentCourseGoals.filter(goal => goal.id !== itemId);
    });
  }
  

  return (
    <>
    <StatusBar style='light'/>
    <View style={styles.appContainer}>
      <View style={{ borderRadius: 8, overflow: 'hidden'}}>
     <Button title='Add New Goal' color={'#7e459b'}
        onPress={startAddGoalHandler} />
        </View>
         <GoalInput showModal={modalIsVisible}
          onAddGoal={addGoalHandler}
          onCancel={endAddGoalHandler}/>
      <View style={styles.goalsContainer}>
      <FlatList
        data={courseGoals}
        renderItem={( itemData ) => {
          return <GoalItems text={itemData.item.text} 
          id={itemData.item.id}
          onDeleteItem={deleteGoalHandler}/>;
        }}
        keyExtractor={(item, index)=>{
          return item.id;
        }}
        alwaysBounceVertical={false}
        />
      </View>
    </View>
    </>
  );
}  

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 100,
    paddingHorizontal: 16,
    backgroundColor: '#9d82d2',
  },
 

  goalsContainer: {
    marginTop:36,
    flex: 5,
    padding: 20,
    backgroundColor: '#6a009f',
    borderRadius: 6,
  }
});
