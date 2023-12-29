import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        display: "flex",
        alignItems: 'center',
       justifyContent: 'center',
       flexDirection: 'column',
       width: '100%',
       padding: 10,
       backgroundColor: "rgba(245, 40, 145, 0.8)",
       borderRadius: 100,
    },
    title:{
        color:'rgba(255, 255, 255, 1)',
        fontSize: 20,
    }
})

export default styles;