import React from 'react';
import GoalItem from '../GoalItem/GoalItem';
import { IGoal, IGoalListProps, IGoalItem, IGoalItemProps, currentElement } from '../../models/Models';
import { FlatList, View, ShadowPropTypesIOS } from 'react-native';


const GoalList : React.FC<IGoalListProps> = ({courseList, onDelete}) => {
    return (
        <FlatList 
      data={courseList}
      renderItem={ ({ item }: { item: IGoal })  => <GoalItem item={item} delete={onDelete} />  }>
      </FlatList>
    )
}


export default GoalList;