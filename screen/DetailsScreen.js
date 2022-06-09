import React from 'react'
import { SafeAreaView, StyleSheet, Text } from 'react-native'
import { FocusedStatusBar } from '../Components'
import { COLORS } from '../constants'

const DetailsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
        <FocusedStatusBar backgroundColor={COLORS.gray}/>
      <Text>Bismillah2</Text>
    </SafeAreaView>
  )
}

export default DetailsScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#fff"
    }
})