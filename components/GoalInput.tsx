import { useState } from "react"
import { Button, TextInput, View, StyleSheet, Modal, Text, Image } from "react-native"

type Props = {
    onAddGoal: (text: string) => void,
    modalVisible: boolean,
    onEndAddGoal: () => void
}
export const GoalInput = ({onAddGoal, modalVisible, onEndAddGoal}: Props) => {
    const [enteredGoalText, setEnteredGoalText] = useState('')

    const addGoalHandler = () => {
        onAddGoal(enteredGoalText)
        setEnteredGoalText('')
        onEndAddGoal()
    }
    return(
        <Modal visible={modalVisible} animationType="slide">
            <View style={styles.inputContainer}>
                <Text style={styles.title}>ADD NEW GOAL</Text>
                <Image source={require('../assets/images/goal.png')} style={styles.image}/>
                <TextInput
                style={styles.textInput}
                placeholder="Your course goal!"
                onChangeText={text => setEnteredGoalText(text)}
                value={enteredGoalText}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button
                            title="Add Goal"
                            onPress={addGoalHandler}
                        />
                    </View>
                    <View style={styles.button}>
                        <Button
                            title="Cancel"
                            onPress={onEndAddGoal}
                            color='#ff0000'
                        />
                    </View>
                </View>
            </View>
        </Modal>
        
    )
}

const styles = StyleSheet.create({
    inputContainer:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        backgroundColor:'#311b6b'
      },
      title:{
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white'
      },
      image:{
        width: 100,
        height: 100,
        margin: 20
      },
      textInput:{
        borderWidth: 1,
        borderColor: '#ccc',
        width: '100%',
        marginRight: 8,
        padding: 8,
        backgroundColor: '#fff',
        borderRadius: 5
      },
      buttonContainer:{
        flexDirection: 'row',
      },
      button: {
        width: '40%',
        marginHorizontal: 8,
        marginTop: 20
      }
})