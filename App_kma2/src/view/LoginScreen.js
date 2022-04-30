import React, {useState} from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    TouchableHighlight,
    Button,
    TouchableOpacity,
} from 'react-native';
const SIGN_IN = 'SIGN_IN';
const GET_STARTED = 'GET_STARTED';

export default LoginScreen =( {navigation} )=>{
    const [page, setPage] = useState(SIGN_IN);
    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <View style={styles.header}>
                    <Text style={styles.header_text}>KMA</Text>
                </View>
                <View style={styles.top_button}>
                    <TouchableOpacity 
                        style = {styles._button}
                        onPress = {()=>{setPage(SIGN_IN)}}
                        disabled = {page===SIGN_IN ? true : false}
                        >
                        
                            <Text style={styles._button_text}>Sign In</Text>
                            {
                                page === SIGN_IN ? <View style={styles._button_bottom}></View> : null
                            }
                    </TouchableOpacity>

                    <TouchableOpacity 
                        style={styles._button}
                        onPress={()=>{setPage(GET_STARTED)}}
                        disabled = {page===GET_STARTED ? true : false}>
                        
                            <Text style={styles._button_text}>Get Started</Text>
                            {
                                page === GET_STARTED ? <View style={styles._button_bottom}></View> : null
                            }
                    </TouchableOpacity>
                </View>
            </View>
            {/* <Button
            title="Go to Jane's profile"
            onPress={() =>
            navigation.navigate('Home', { name: 'Jane' })
            }
            /> */}
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    top : {
        width: '100%',
        height: '25%',
    },
    header:{
        width: '100%',
        flex:1,
        backgroundColor: "#424874",
        justifyContent: 'center',
        alignItems: 'center',
    },
    header_text : {
        fontSize: 35,
        fontWeight: '600',
        color: 'white',
    },
    top_button : {
        height: 50,
        flexDirection: 'row',
    },
    _button : {
        width: '50%',
        height : '100%',
        justifyContent: 'center',
        alignItems : 'center',
    },
    _button_text : {
        fontSize: 20,
        color: "#424874",
    },
    _button_bottom : {
        height: 3,
        width : '100%',
        backgroundColor: "#424874",
        position: 'absolute',
        bottom:0,
    },
    wave: {
        width: "100%",
        aspectRatio: 2,
        overflow: 'hidden',
        backgroundColor: 'white',
    }, 

  });