import { View, StyleSheet, Text, Pressable } from "react-native"
import { GoalInfo } from "../App"

type Props = {
    goal: GoalInfo,
    deleteGoalHandler: (id:string) => void
}
export const GoalItem = ({ goal, deleteGoalHandler }:Props) => {
    const deleteGoal = () => {
        deleteGoalHandler(goal.id)
    }

    return (
        <View style={styles.goalItem}>
            <Pressable
                onLongPress={deleteGoal}
                android_ripple={{color: '#40058e'}}
                style={({pressed}) => pressed && styles.pressedItem}
            >
                <Text style={styles.goalName}>{goal.name}</Text>
            </Pressable>
        </View>        
    )
}

const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        borderRadius: 6,
        backgroundColor: '#5e0acc',
    },
    pressedItem: {
        opacity: 0.5,
    },
    goalName:{
        color: 'white',
        padding:8
    }
})