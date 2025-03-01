import { StyleSheet, View, Text, TextInput, Button, Modal ,Pressable} from 'react-native'

import { useState } from 'react'

function GaolInput (props) {
  return (
    <Modal visible={props.showModal} animationType='slide' onRequestClose={false} >

  
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder='enter here'
        value={props.enteredText}
        onChangeText={props.handleEnterText}
      />
      {/* <Pressable> <Text style={{fontSize:18,color:'blue'}}>submit </Text></Pressable> */}
      <View style={styles.btnContainer}>
      <Button
        title='add goal'
        onPress={props.handleGoalLists}
      />
      <Button title='cancel' color='red' onPress={props.onCancelModal} />
      </View>
     
    </View>
    </Modal>
  )
}

export default GaolInput

const styles = StyleSheet.create({

  container: {
    flex:1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    borderWidth: 1,
    borderColor: 'green',
    padding: 5,
    width: '60%',
    borderRadius: 10
  },
  btnContainer:{
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center'
  }

})
