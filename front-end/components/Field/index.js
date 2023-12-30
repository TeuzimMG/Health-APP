import styles from './styles'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { View, Text, TextInput } from 'react-native'

function Field(props) {
    return( 
        <KeyboardAwareScrollView
      style={styles.container}
      resetScrollToCoords={{ x: 0, y: 0 }}
      contentContainerStyle={styles.container}
      scrollEnabled={false}
    >
            <Text style={styles.title}>{props.title}</Text>
            <TextInput style={styles.input} keyboardType={props.mode} onChangeText={props.onChange} value={props.value}/>
        </KeyboardAwareScrollView>
    )
}

export default Field;