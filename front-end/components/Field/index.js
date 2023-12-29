import styles from './styles'
import { View, Text, TextInput } from 'react-native'

function Field(props) {
    return(
        <View style={styles.container}>
            <Text style={styles.title}>{props.title}</Text>
            <TextInput style={styles.input} keyboardType={props.mode} onChangeText={props.onChange} value={props.value}/>
        </View>
    )
}

export default Field;