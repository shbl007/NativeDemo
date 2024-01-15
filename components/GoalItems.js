import { StyleSheet ,View, Text,Pressable } from "react-native";

function GoalItems(props){
  return(
    <View style={styles.goalItem}>
    <Pressable
    android_ripple={{color: '#AA98A9'}}
     onPress={() => props.onDeleteItem(props.id)}>
    <Text style={styles.goalText}>{props.text}</Text>
               </Pressable>
               </View>
  );

};

export default GoalItems;
const styles= StyleSheet.create({
  goalItem: {
    margin: 8,
    backgroundColor: '#D6EBF2',
    borderRadius: 8,
    fontSize: 18,
  },
  goalText: {
    color: '#262626',
    padding: 12,
    borderRadius: 8
  }
});