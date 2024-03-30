import { useState } from 'react'
import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  View,
  FlatList,
  Alert,
  Button
} from 'react-native';
import { GoalItem } from './components/GoalItem';
import { GoalInput } from './components/GoalInput';

export type GoalInfo = {
  id: string,
  name: string
}
export default function App() {
  const [modalVisible, setModalVisible] = useState(false)
  const [courseGoals, setCourseGoals] = useState<GoalInfo[]>([{
    id: '',
    name: ''
  }])

  const startAddGoalHandler = () => {
    setModalVisible(true)
  }

  const endAddGoalHandler = () => {
    setModalVisible(false)
  }

  const addGoalHandler = (enteredText: string) => {
    if(enteredText !== ""){
      setCourseGoals(prevGoals => [...prevGoals, {id: Math.random().toString(), name: enteredText, }])
    }else{
      Alert.alert("Preencha o campo")
    }
    
  }

  const deleteGoalHandler = (id: string) => {
    setCourseGoals(currentCourseGoals => {
      return currentCourseGoals.filter((goal) => goal.id !== id)
    })
  }
  return (
    <>
      <StatusBar style="dark" />
      <View style={styles.container}>
      <Button title='Add new Goal' color="#5e0acc" onPress={startAddGoalHandler}/>
      <GoalInput
        onAddGoal={addGoalHandler}
        modalVisible={modalVisible}
        onEndAddGoal={endAddGoalHandler}
      />
      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
            return (
              <>
              {itemData.item.name !== '' && (
                <GoalItem
                  goal={itemData.item}
                  deleteGoalHandler={deleteGoalHandler}
                /> 
              )}
              </>
            )
          }}
          keyExtractor={(item, index) => {
            return item.id
          }}
        />
      </View>
    </View>
    </>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:50,
    paddingHorizontal:16
  },
  goalsContainer: {
    flex: 4,
    marginTop: 24
  }
});
