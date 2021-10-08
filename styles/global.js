import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
    background: {
        backgroundColor: '#E5E5E5',
    },
    container: {
        flex: 1,
        padding: 10,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
    QuestionMark:{
        borderStyle: 'solid',
        borderRadius: 10,
        borderWidth: 1,
        width: 20, 
        height: 20,
        alignItems: 'center', 
        justifyContent: 'center'
    },
    Home:{
        alignItems: 'center'
    },
    homeContainer:{
        flex: 10,
        backgroundColor: '#B0ADAD',
        // padding: 10
    },
    tinyLogo:{
        width: 125,
        height: 65
    },
    largeLogo:{
        height: 250,
        width: 250, 
        alignSelf: 'center', 
        borderRadius: 200,
        marginTop: 50
    },
    login:{
        marginTop: 40,
        // marginBottom: 10,
        // marginLeft: 20,
        fontSize: 35,
        // fontWeight: 'bold',
        color: '#333',
    },
    subLogin:{
        marginLeft: 10,
        marginBottom: 5,
        fontSize: 18,
        color: '#333',
    },
    loginMessage:{
        marginLeft: 10,
        marginBottom: 5,
        fontSize: 18,
        color: '#333',
    },  
    text:{
        fontSize: 18,
        alignSelf: 'center',
        fontWeight: 'bold',
        color: 'white',
    },
    buttonContainer:{
        // marginTop: 5,
        elevation: 8,
        backgroundColor: "#800000",
        borderRadius: 10,
        paddingVertical: 1,
        paddingHorizontal: 12
    },
});