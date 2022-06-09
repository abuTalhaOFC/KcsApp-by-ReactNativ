import React from 'react'
import { Text, View } from 'react-native'

const ListBar = ({deta}) => {
  return (
    <View style={{width:"100%",height:55,margin:4,backgroundColor:"red",borderRadius:12,justifyContent:'center',}}>
      <Text style={{marginLeft:20}}>{deta.branch}</Text>
    </View>
  )
}

export default ListBar

