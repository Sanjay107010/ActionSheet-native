/* eslint-disable curly */
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {SheetManager, SheetProvider} from 'react-native-actions-sheet';
//import { LinearGradient } from "expo-linear-gradient";
const ExampleScreen = () => {
  return (
    <>
      <View style={styles.safeareview}>
        {/* <LinearGradient colors={['#EC2B2B',"#B93B68"]} start={{x:0,y:1}} end={{x:1,y:0}} style={styles.safeareview}> */}
        <TouchableOpacity
          onPress={() => {
            console.log('first:::::', SheetManager, SheetProvider);
            SheetManager.show('example-two');
          }}
          style={styles.btn}>
          <Text style={styles.btnTitle}>Open</Text>
        </TouchableOpacity>
        {/* </LinearGradient> */}
      </View>
    </>
  );
};

export default ExampleScreen;

const styles = StyleSheet.create({
  btn: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    paddingHorizontal: 10,
    borderRadius: 0,
    width: '100%',
    borderWidth: 2,
    borderColor: 'white',
  },
  safeareview: {
    flex: 1,
    backgroundColor: 'red',
    padding: 12,
    paddingVertical: 20,
    alignItems: 'center',
    marginHorizontal: 12,
  },
  btnTitle: {
    color: 'white',
    fontWeight: 'bold',
  },
});
