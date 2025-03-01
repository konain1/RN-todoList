import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  Modal,
  Pressable,
  Image
} from 'react-native'

import { useState } from 'react'

function GaolInput (props) {
  return (
    <Modal
      visible={props.showModal}
      animationType='slide'
      onRequestClose={false}
    >
      <View style={styles.container}>
        <Image
          style={styles.img}
          source={require('../assets/images/goal.png')}
        />
        <TextInput
          style={styles.textInput}
          placeholder='enter here'
          value={props.enteredText}
          onChangeText={props.handleEnterText}
        />
        {/* <Pressable> <Text style={{fontSize:18,color:'blue'}}>submit </Text></Pressable> */}
        <View style={styles.btnContainer}>
          <Pressable onPress={props.handleGoalLists}>
            <Text style={styles.addText}> Add Goal</Text>
          </Pressable>
          <Pressable onPress={props.onCancelModal}>
         
            <Text style={styles.cancelText}>Cancel</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  )
}

export default GaolInput

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#311b6b',
    alignItems: 'center',
    justifyContent: 'center'
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#316adb',
    backgroundColor:'#967adb',
    padding: 5,
    width: '60%',
    borderRadius: 10,
    color: 'white'
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '60%',
    margin: 5
  },
  img: {
    width: 100,
    height: 100,
    margin: 20
  },
  addText: {
    fontSize: 18,
    color: 'green'
  },
  cancelText: {
    fontSize: 18,
    color: 'red'
  }
})
