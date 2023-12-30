import { StyleSheet } from "react-native"


const styles = StyleSheet.create({
    androidSafeArea:{
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      paddingTop: Platform.OS === 'android' ? 25 : 0,
    },
    container: {
      flex: 1,
      width:'100%',
      height:'100%',
      justifyContent: 'center',
      alignItems: 'center'
    },
    result:{
      fontSize: 40,
    },
    content:{
      padding: 30,
      gap: 15,
    },
    button:{
      paddingTop: 14,
      paddingBottom: 14,
      borderRadius:100,
    },
    header: {
      height: '15%',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#161A30',
      texto:{
        fontSize: 20,
        color: '#fff',
      },
      titulo:{
        fontSize: 35,
        color: '#fff',
      }
    }
  })

export default styles;