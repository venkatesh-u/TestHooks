/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  CheckBox
} from 'react-native';
// import Icon from 'react-native-vector-icons/Feather';
// import Checkbox from 'react-native-community/checkbox';

const App = () => {

  const [task, addTask] = useState('');
  const [list, addToList] = useState([]);
  const [checked, setChecked] = useState(false);

  eventAddTask = () => {
    if (task.length > 0) {
      addToList([...list, { task: task, key: Date.now(), isChecked: checked }]);
      addTask('');
    }
  }

  setCheckedValue = id => {
    console.log("ID: "+id);
    addToList(
      list.map(toDo => {
        console.log("toDo: "+JSON.stringify(toDo));
        if (toDo.key === id) {
          setChecked(!toDo.isChecked);
          toDo.isChecked = !toDo.isChecked;
          console.log("toDo1: "+JSON.stringify(toDo));
          return toDo;
        }
      })
    )
    console.log("List: "+ JSON.stringify(list));
  }

  return (
    <View style={styles.container}>
      <View style={styles.textInputContainer}>
        <TextInput
          hint="Enter Something"
          value={task}
          onChangeText={text => addTask(text)}
          style={styles.textInputStyle}
        />
        <Button title="Add" onPress={eventAddTask} />
      </View>
      <ScrollView style={styles.ScrollViewStyle}>
        {
          list.map((toDo, key) => (
            <View style={styles.itemContainer} key={key}>
              {console.log(toDo.isChecked+"uu")}
              <CheckBox
                checked={toDo.isChecked}
                onChange={()=>setCheckedValue(toDo.key)}
                />
              <Text
                style={styles.textStyle}>
                {toDo.task}
              </Text>
              <Button title="Del" onPress={eventAddTask} />
            </View>
          ))
        }


      </ScrollView>
    </View>
  );
}

export default App;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 16,
  },
  textInputStyle: {
    borderBottomWidth: 1,
    flex: 1,
    marginHorizontal: 10,
  },
  textInputContainer: {
    flexDirection: 'row',
    width: '100%',
    height: 60,
    alignItems: 'baseline',
  },
  itemContainer: {
    flex: 1,
    backgroundColor: 'green',
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 5,
  },
  ScrollViewStyle: {
    flex: 1,
    backgroundColor: 'yellow',
    width: '100%'
  },
  textStyle: {
    color: 'black'
  }

})
