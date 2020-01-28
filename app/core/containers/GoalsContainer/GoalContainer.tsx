import React, {useState} from 'react';
import { IGoal } from '../../models/Models';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Button,
    FlatList
  } from 'react-native';
  import { AppStyle } from '../../../ui/AppStyles';
import GoalItem from '../../components/GoalItem/GoalItem';
import GoalList from '../../components/GoalList/GoalList';

const GoalContainer : React.FC = props => {

    const [enteredGoal, setEnteredGoal] = useState<string>('');
    const [courseGoal, setCourseGoal] = useState<IGoal[]>([]);

    const goalInputHandler = (text: string) => {
        console.log(text);
        setEnteredGoal(text);
    }

  const addGoalHandler = () : void => {
      
    setCourseGoal( currentGoals => [...currentGoals, {
      id : Math.random().toString(),
      value : enteredGoal
    }]);

    setEnteredGoal("");

  }

  const deleteItem = (id : string) => {
    setCourseGoal(currentGoals =>  currentGoals.filter(item => item.id !== id ))
  }


   return (
      <View style={AppStyle.screen}>
          <View style={AppStyle.inputContainer}>
            <TextInput
              placeholder="Course Goal"
              style={AppStyle.input}
              onChangeText={goalInputHandler}
              value={enteredGoal}
            />
            <Button title="ADD" onPress={addGoalHandler} />
            </View>
            <GoalList onDelete={deleteItem} courseList={courseGoal} />
      </View>
   )
}

export default GoalContainer;

