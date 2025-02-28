// import { StatusBar } from 'expo-status-bar'
import { useState,useEffect } from 'react'
import {
  Button,
  Pressable,
  ScrollView,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native'

import GoalItems from './components/GoalItems';
import GoalInput from './components/GoalInput'



export default function App () {
  const [enteredText, setEnteredText] = useState('')
    const [goalLists, setGoalLists] = useState([])
  


    const handleEnterText = text => {
      setEnteredText(text)
    }
    const handleGoalLists = () => {
      if(enteredText == ''){
        alert("please enter something!1")
        return;
      }
      setGoalLists(prevGoals => [
        ...prevGoals,
        { text: enteredText, id: Math.random().toString() }
      ])
      setEnteredText('')
    }
    const handlerDeleteItem = (id)=>{


      setGoalLists(currentGola=> currentGola.filter(item=>item.id != id))
      console.log(goalLists)
     
    }


  return (
    <View style={styles.mainContainer}>
     
      <GoalInput handleEnterText={handleEnterText} handleGoalLists={handleGoalLists} enteredText={enteredText}/>
      <View style={styles.goalContainer}>
        <Text style={{ padding: 10 }}>Goal lists....</Text>

        <FlatList
          data={goalLists}
          renderItem={itemData => (
            <GoalItems  id={itemData.item.id} handlerDeleteItem={handlerDeleteItem } text={itemData.item.text} />
          )}
          keyExtractor={(item,key)=>{return item.id}}
        />
         
        
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    marginHorizontal: 5
  },
 
  goalContainer: {
    flex: 2,
    backgroundColor: '#dadada',
    borderRadius: 10,
    marginBottom: 5
  },
  
  addbtn: {
    borderRadius: 10,
    backgroundColor: 'red',
    fontSize: 100
  },
 
})
