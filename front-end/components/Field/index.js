import styles from './styles'
import { View, Text, TextInput } from 'react-native'

function Field(props) {
    return(
        <View style={styles.container}>
            <Text style={styles.title}>{props.title}</Text>
            <TextInput style={styles.input} inputMode={props.mode} onChange={props.onChange}/>
        </View>
    )
}

export default Field;