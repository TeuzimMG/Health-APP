import { StyleSheet } from "react-native"


const styles = StyleSheet.create({
    container:{
        display: 'flex',
        width: '100%',
        marginBottom: 10,
        gap:7,
    },
    title:{
        fontSize: 15,
    },
    input:{
        borderStyle: "solid",
        borderWidth: 2,
        borderColor: 'rgb(0, 0, 0)',
        height: 40,
        paddingLeft: 5,
        borderRadius: 30,
    }
})

export default styles;