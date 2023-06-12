import React, {useEffect, useRef, useState} from 'react';
import {View, Text, ScrollView, FlatList, Image} from 'react-native';
import ActionSheet, {
  ActionSheetRef,
  SheetProps,
} from 'react-native-actions-sheet';
import FrameComponent from './component/FrameComponent';

function ExampleTwo({sheetId, payload}: SheetProps<{data: string}>) {
  const actionSheetRef = useRef<ActionSheetRef>(null);
  // const data = [{id: 1}, {id: 2}, {id: 3}, {id: 4}, {id: 5}];
  const [dataSource, setDataSource] = useState();
  useEffect(() => {
    let items = Array.apply(null, Array(60)).map((v, i) => {
      return {
        id: i + 1,
      };
    });
    console.log('fafafafa,', items);
    setDataSource(items);
    console.log('fafafafaDADADAA,', dataSource);
  }, []);

  return (
    <ActionSheet
      id={sheetId}
      ref={actionSheetRef}
      containerStyle={{
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        height: '50%',
      }}
      indicatorStyle={{
        width: 100,
      }}
      gestureEnabled={true}>
      {/* <View
        style={{
          padding: 20,
          height: 300,
          flexDirection: 'row',
          width: '100%',
        }}>
        <View
          style={{
            width: 10,
            height: 50,
            backgroundColor: '#f7f7f7',
            borderRadius: 100,
            marginRight: 10,
          }}
        />

        <View style={{flexGrow: 1}}>
          <View
            style={{
              width: '100%',
              height: 20,
              backgroundColor: '#f7f7f7',
              borderRadius: 10,
              marginBottom: 10,
            }}>
            <Text>kkkkkk</Text>
          </View>
          <View
            style={{
              width: '10%',
              height: 20,
              backgroundColor: '#f7f7f7',
              borderRadius: 10,
            }}
          />
        </View>
      </View> */}

      <ScrollView>
        <View style={{flexDirection: 'row', margin: 10, flexWrap: 'wrap'}}>
          <FlatList
            data={dataSource}
            renderItem={({item, index}) => (
              <View
                style={{
                  backgroundColor: 'yellow',
                  marginRight: 10,
                  marginBottom: 10,
                }}>
                <Text
                  style={{paddingVertical: '15%', paddingHorizontal: '15%'}}>
                  {dataSource[index].id}
                </Text>
              </View>
            )}
            //Setting the number of column
            numColumns={3}
          />
        </View>
      </ScrollView>
    </ActionSheet>
  );
}

export default ExampleTwo;
