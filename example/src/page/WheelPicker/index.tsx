import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, Dimensions, View, ScrollView, Text } from 'react-native';
import WheelPicker from 'react-native-wheely';

// const { width } = Dimensions.get('screen');

const hourData = [
  '18',
  '19',
  '20',
  '21',
  '22',
  '23',
  '00',
  '01',
  '02',
  '03',
  '04',
  '05',
  '06',
  '07',
  '08',
  '09',
  '10',
  '11',
  '12',
  '13',
  '14',
  '15',
  '16',
  '17',
];
const minuteData = [
  '00',
  '05',
  '10',
  '15',
  '20',
  '25',
  '30',
  '35',
  '40',
  '45',
  '50',
  '55',
];

const decelerationRate = 'normal';

const WheelPickerDemo: React.FC = (props) => {
  const [selectedHourIndex, setSelectedHourIndex] = useState(0);
  const [selectedMinuteIndex, setSelectedMinuteIndex] = useState(0);

  const onTimeChange = (indexArr: number[]) => {
    //   // ToastInfo(
    //   //   `选择的时间为${hourData[indexArr[0]]}:${minuteData[indexArr[1]]}`,
    //   //   1,
    //   // );
  };

  //  todo ios无法同时滑动picker（scrollView导致）
  return (
    <View style={styles.container}>
      <ScrollView style={styles.container} bounces={false}>
        <View style={styles.content}>
          <View
            style={{
              width: 90,
              backgroundColor: '#F2F5FA',
              height: 38,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 5,
            }}
          >
            <Text style={{ fontSize: 24 }}>昨天</Text>
          </View>
          <View
            style={{
              width: 90,
            }}
          >
            <ScrollView
              horizontal={true}
              bounces={false}
              scrollEnabled={true}
              style={{ width: '100%' }}
            >
              <WheelPicker
                selectedIndex={selectedHourIndex}
                options={hourData}
                onChange={(index) => {
                  setSelectedHourIndex(index);
                  onTimeChange([index, selectedMinuteIndex]);
                }}
                decelerationRate={decelerationRate}
                visibleRest={1}
                itemHeight={38}
                itemStyle={{
                  width: 90,
                }}
                selectedIndicatorStyle={{
                  width: 90,
                  backgroundColor: '#F2F5FA',
                  borderRadius: 5,
                }}
                scaleFunction={(x: number) => 0.7 ** x}
                // rotationFunction={(x: number) => 1 - Math.pow(1 / 1, x)}
                // opacityFunction={(x: number) => Math.pow(1 / 3, x)}
                itemTextStyle={{
                  fontSize: 24,
                }}
              />
            </ScrollView>
          </View>
          <View
            style={{
              width: 90,
            }}
          >
            <ScrollView
              horizontal={true}
              bounces={false}
              scrollEnabled={true}
              style={{ width: '100%' }}
            >
              <WheelPicker
                selectedIndex={selectedMinuteIndex}
                options={minuteData}
                onChange={(index) => {
                  setSelectedMinuteIndex(index);
                  onTimeChange([selectedHourIndex, index]);
                }}
                decelerationRate={decelerationRate}
                visibleRest={1}
                itemHeight={38}
                itemStyle={{
                  width: 90,
                }}
                selectedIndicatorStyle={{
                  // fontSize: isSelected ? (24) : (16),
                  width: 90,
                  backgroundColor: '#F2F5FA',
                  borderRadius: 5,
                }}
                itemTextStyle={{
                  fontSize: 24,
                }}
              />
            </ScrollView>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  content: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    // justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#f00'
  },
});

export default WheelPickerDemo;
