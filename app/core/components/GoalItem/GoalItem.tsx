import React from 'react';

import {
    Text, View
  } from 'react-native';
import { IGoalItem , IGoal, IGoalItemProps } from '../../models/Models';
import {GoalStyles} from '../../../ui/GoalStyles';

const GoalItem : React.FC<IGoalItemProps> = (props)  =>  {
    return (
        <View>
            <Text key={props.item.id}>{props.item.value}</Text>
        </View>
    )
}


export default GoalItem;
  