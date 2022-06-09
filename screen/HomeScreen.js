import * as React from 'react';
import { FlatList, SafeAreaView, View } from 'react-native';
import { FocusedStatusBar, ListBar } from '../Components';
import { COLORS, KcsData } from '../constants';

const HomeScreen = () => {
  
 
    
  return (
    <SafeAreaView style={{flex:1}}>
        <FocusedStatusBar backgroundColor={COLORS.primary}/>
        
        {/* List item render  */}
        <View style={{flex:1}}>
          <View Style={{zIndex:0}}>
          <FlatList data={KcsData}
        renderItem={({item})=><ListBar deta={item}/>}
        keyExtractor={() => Math.floor((1 + Math.random()) * 0x10000)}
        
      />
      </View>

      {/* backgroundColor */}
      <View style={{
        zIndex:-1,
        flex:1,position:'absolute',top:0,bottom:0,left:0,right:0,}}>
          <View style={{height:250,backgroundColor:COLORS.primary}}></View>
          <View style={{flex:1,backgroundColor:"#fff"}}></View>
      </View>

        </View>
      
    </SafeAreaView>
  )
}

export default HomeScreen

