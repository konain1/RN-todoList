import { View } from 'react-native'
import { StyleSheet, Text, Pressable } from 'react-native'

function GoalItems (props) {
  console.log(props)
  return (
    props.text && 
    <Pressable  style={({pressed})=> pressed && styles.opacityLow} key={props.id} onPress={()=>props.handlerDeleteItem(props.id)} >
    <Text style={styles.goalItems}>{props.text} {props.id}</Text>
  </Pressable>

    
    
  )
}

export default GoalItems

const styles = StyleSheet.create({
  goalItems: {
    margin: 8,
    padding: 8,
    borderRadius: 10,
    backgroundColor: '#5a0ccc',
    color: 'white'
  },
  opacityLow:{
    opacity:0.7
  }
})
