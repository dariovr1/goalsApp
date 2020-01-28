//style={{padding:10, backgroundColor : '#CCC' , marginBottom : 10 , marginTop : 10  }}

import {
    StyleSheet
  } from 'react-native';
 
  import {AppStyle} from './AppStyles';

export const GoalStyles = StyleSheet.create({
    ...AppStyle,
    listItem: {
        padding: 10,
        marginVertical: 10,
        backgroundColor: '#ccc',
        borderColor: 'black',
        borderWidth: 1
    }
});