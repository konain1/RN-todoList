import { StyleSheet, View, Text, TextInput, Button } from 'react-native'

import { useState } from 'react'

function GaolInput (props) {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder='enter here'
        value={props.enteredText}
        onChangeText={props.handleEnterText}
      />
      {/* <Pressable> <Text style={{fontSize:18,color:'blue'}}>submit </Text></Pressable> */}
      <Button
        style={{ color: 'red' }}
        title='add goal'
        onPress={props.handleGoalLists}
      />
    </View>
  )
}

export default GaolInput

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginHorizontal: 30,
    alignItems: 'center',
    flex: 1
  },
  textInput: {
    borderWidth: 1,
    borderColor: 'green',
    padding: 5,
    width: '60%',
    borderRadius: 10
  }
})
