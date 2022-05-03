import React, {useState,useRef,useEffect} from 'react';
import {
    Image,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    TouchableHighlight,
    Button,
    Dimensions,
    TouchableOpacity,
    TextInput,
    Keyboard, 
    Animated,
} from 'react-native';
import Wave from 'react-native-waveview';
const widowWidth = Dimensions.get('window').width;
const widoHeight = Dimensions.get('window').height;
const SIGN_IN = 'SIGN_IN';
const GET_STARTED = 'GET_STARTED';
export default LoginScreen =( {navigation} )=>{
    const [page, setPage] = useState(SIGN_IN);
    const [keyboardShow, setKeyboardShow] = React.useState();
    React.useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener(
          'keyboardDidShow',
          () => {
              setKeyboardShow(true);
          }
          );
          const keyboardDidHideListener = Keyboard.addListener(
          'keyboardDidHide',
          () => {
              setKeyboardShow(false);
          }
          );   

          Animation_wave_reset();
          return () => {
          keyboardDidHideListener.remove();
          keyboardDidShowListener.remove();
          };
    },[]);

    
    const topMotion1 = useRef(new Animated.Value(0)).current;
    const topMotion2 = useRef(new Animated.Value(0)).current;
    const Animation_wave = () => {
        Animated.parallel([
            Animated.timing(topMotion1,{
                toValue: -widoHeight * 0.25,
                duration: 2000,
                useNativeDriver: false,
            }),
            Animated.timing(topMotion2,{
                toValue: widoHeight * 0.25,
                duration: 2000,
                useNativeDriver: false,
            }),
        ]).start();
    }
    
    const Animation_wave_reset = () => {
        Animated.parallel([
            Animated.timing(topMotion1,{
                toValue: 0,
                duration: 2000,
                useNativeDriver: false,
            }),
            Animated.timing(topMotion2,{
                toValue: 0,
                duration: 2000,
                useNativeDriver: false,
            }),
        ]).start();
        setPage(SIGN_IN);
    }

    return (
        <View style={{ width:'100%' , height:'100%',backgroundColor: "#FCDEC0" }}>
            <View style={styles.Red}>
            <Animated.View style={{marginTop:topMotion1,width: '100%', height: '100%'}}>
                {keyboardShow ? null : <RedComponet page={page} setPage={setPage} Animation_wave={Animation_wave} 
                                                    navigation={navigation} Animation_wave_reset={Animation_wave_reset}/>}
            </Animated.View>
            </View>
            <View style={styles.Green}>
                {page ===SIGN_IN ? <GreenComponet navigation={navigation}/> : null}
            </View>

            <View style={styles.Blue}>
                <Animated.View style={{marginTop:topMotion2,width: '100%', height: '100%'}}>
                    {keyboardShow ? null : <BlueComponet/>} 
                </Animated.View>
            </View>
              
        </View>
    );
}

const RedComponet = ({page,setPage,Animation_wave,navigation,Animation_wave_reset}) => {
//{page,setPage,Animation_wave,navigation}
    const combie = () => {
        setPage(GET_STARTED);
        Animation_wave();
        setTimeout(()=>{ navigation.navigate('Home', { name: 'Jane' })},2000);
        setTimeout(Animation_wave_reset,2500);
    }
    return(
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
                        onPress={combie}
                        disabled = {page===GET_STARTED ? true : false}>
                        
                            <Text style={styles._button_text}>Get Started</Text>
                            {
                                page === GET_STARTED ? <View style={styles._button_bottom}></View> :null
                            }
                    </TouchableOpacity>
                </View>
            </View>
        </View>    
    );
}

const GreenComponet = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [pwdHidden, setPwdHidden] = useState(true);
    return(
        <View style={styles.body}>
            <Text style={styles.body_text}>Login in your account.</Text>
            <View style= {styles.body_body}>
                <Image source={require('../images/email_icon.png')} resizeMode='stretch' style={styles.image_icon} />
                <TextInput placeholder='E-mail' style={styles.textinput_body}/>
            </View>
            <View style= {styles.body_body}>
                <Image source={require('../images/password_icon.png')} resizeMode='stretch' style={styles.image_icon} />
                <TextInput 
                    placeholder='Password' style={styles.textinput_body}
                    secureTextEntry={pwdHidden ? true : false}
                />
                <TouchableOpacity 
                    style={styles.eye_button}
                    onPress={()=>{setPwdHidden(!pwdHidden)}}>
                        {pwdHidden ?  <Image source={require('../images/close_eye.png')} resizeMode='stretch' style={styles.image_eye} /> :
                         <Image source={require('../images/open-eye.png')} resizeMode='stretch' style={styles.image_eye} /> }
                </TouchableOpacity>
            </View>
            <View style= {styles.body_body2}>
                <TouchableOpacity style= {styles.forget_psw2}>
                    <Text style= {styles.forget_psw}>Forget password ?</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity
                style= {styles.button_login}
                onPress={() =>navigation.navigate('Home', { name: 'Jane' })}
                >
                    <Text style = {styles.text_login}> Login </Text>
            </TouchableOpacity>
        </View>
    );
}

const BlueComponet = () => {
    return (
        <View> 
             <Wave
                style={styles.wave}
                H={80}
                waveParams={[
                    {A: 10, T: 702, fill: '#7D5A50'},
                    {A: 15, T: 546, fill: '#E5B299'},
                    {A: 20, T: 390, fill: '#B4846C'},
                ]}
                animated={true}
             />
  </View>
    );
}
const styles = StyleSheet.create({
    Red : {
        width:'100%',
        height:'25%' 
    },
    Green : {
        width:'100%',
        height:'50%',
    },
    Blue : {
      //  marginTop: topMotion2,
        flex: 1,
    },
    container: {
        flex: 1,
    },
    top : {
        width: '100%',
        height: '100%',
    },
    header:{
        width: '100%',
        flex:1,
        backgroundColor: "#7D5A50",
        justifyContent: 'center',
        alignItems: 'center',
    },
    header_text : {
        fontSize: 35,
        fontWeight: '600',
        color: 'white',
    },
    top_button : {
        position:'relative',
        height: 48,
        flexDirection: 'row',
    },
    _button : {
        width: '50%',
        height : '100%',
        justifyContent: 'center',
        alignItems : 'center',
        backgroundColor: 'white',
    },
    _button_text : {
        fontSize: 20,
        color: "#7D5A50",
    },
    _button_bottom : {
        height: 3,
        width : '100%',
        backgroundColor: "#7D5A50",
        position: 'absolute',
        bottom:0,
    },
    body : {
        height: '100%',
        width : '100%',
       // borderWidth: 1,
        justifyContent: 'center',

    },
    body_text : {
        fontSize: 24,
        marginLeft : 30,
        marginRight: 30,
    },
    body_body : {
        width: widowWidth - 60,
        marginLeft: 30,
        height: 45,
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 5,

    },
    body_body2 : {
        width: widowWidth - 60,
        marginLeft: 30,
        height:45,
       // marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    image_icon : {
        width:25,
        height:25,
        marginLeft:10,
    },
    textinput_body : {
        height: '100%',
        flex: 1,
        marginLeft: 10,
        fontSize: 16,
    },
    image_eye : {
        width:20,
        height:20,
        
    },
    eye_button : {
        height: '100%',
        aspectRatio: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    forget_psw2 : {
        position: 'absolute',
        right: 0,
    },
    forget_psw : {
        color: '#707070',

    },
    button_login : {
        height: 45,
        width: widowWidth - 60,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 30,
        marginTop: 0,
        backgroundColor: '#7D5A50',
        borderRadius: 100,
    },
    text_login : {
        color: 'white',
        fontSize: 16,

    },
    wave: {
        width: widowWidth,
        height: widoHeight * 0.25,
        overflow: 'hidden',
        backgroundColor: '#FCDEC0',
    },
  });