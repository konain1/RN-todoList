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
  View,
  SafeAreaView
} from 'react-native'

import GoalItems from './components/GoalItems';
import GoalInput from './components/GoalInput'



export default function App () {
  const [enteredText, setEnteredText] = useState('')
  const [goalLists, setGoalLists] = useState([])
  const [showModal,setShowModal]=useState(false)
  
  
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
      setShowModal(false)
    }
    const handlerDeleteItem = (id)=>{


      setGoalLists(currentGola=> currentGola.filter(item=>item.id != id))
      console.log(goalLists)
     
    }

    const handleShowModal=()=>{
      setShowModal(true)
     
      console.log('pressed')
    }
    const handleShowModalCancel =()=>{
      setShowModal(false)
    }

  return (
    <SafeAreaView style={styles.mainContainer}>
    <View style={styles.setgoal}>

     <Button  title='set goals' onPress={handleShowModal} />
    </View>
  
      <GoalInput onCancelModal={handleShowModalCancel} showModal={showModal} handleEnterText={handleEnterText} handleGoalLists={handleGoalLists} enteredText={enteredText}/>

   
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
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    margin:40,
   alignItems:'center',
  },
 
  goalContainer: {
    flex: 1,
    backgroundColor: '#dadada',
    borderRadius: 10,
   width:'100%',
  },
  
  addbtn: {
    borderRadius: 10,
    backgroundColor: 'red',
    fontSize: 100
  },
setgoal:{
  margin:20,
  width:200,
  alignItems:'center',

}
})
