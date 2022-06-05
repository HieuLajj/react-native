import { View
       , Text
       , StyleSheet
       , ScrollView
       ,TouchableOpacity
       ,Alert
       ,ImageBackground
       } from 'react-native'
import React,{useState} from 'react'
import { colors } from '../components/salon2'
import {useNotes} from '../components/NoteProvider'
import COLORS from '../components/colors'
import AsyncStorage from '@react-native-async-storage/async-storage';
import AddButton2 from '../components/AddButton2'

const NoteDetails = (props) => {
  const [note, setNote] = useState(props.route.params.note);
  //const { setNotes } = useNotes();
  const formatDate = (ms) =>{
    const date = new Date(ms);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const hrs = date.getHours();
    const min = date.getMinutes();
    const sec = date.getSeconds();
  
    return `${day}/${month}/${year} - ${hrs}:${min}:${sec}`;
  }

  const deleteNote = async () => {
    const result = await AsyncStorage.getItem('notes');
    let notes = [];
    if (result !== null) notes = JSON.parse(result);
    const newNotes = notes.filter(n => n.id !== note.id);
    //setNotes(newNotes);
    await AsyncStorage.setItem('notes', JSON.stringify(newNotes));
    props.navigation.goBack();
  };
  const displayDeleteAlert = () =>{
    Alert.alert('Are You Sure!','This action will delete your note permanetly!',[
      {
        text: 'Delete',
        onPress:deleteNote        //()=>{console.log('delete note')}
      },
      {
        text: 'No Thanks',
        onPress:()=>{
          console.log("no thanks")
        }
      }
    ],{
      cancelable: true,
    })
  }
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ImageBackground
          source={
          require('../images/giaytrang.png')}
          style={{flex:1,paddingHorizontal: 15,}}>
      <Text style={styles.time}>{`Created At ${formatDate(note.time)}`}</Text>
      <Text style={styles.title}>{note.title}</Text>
      <Text style={styles.desc}>{note.description}</Text>
      <TouchableOpacity 
              style={{
              position: 'absolute',
              right:100,
              bottom:20,
            }}
            onPress={()=>{displayDeleteAlert()}}
            >
           <AddButton2 name={'remove'} color={COLORS.red}/>
      </TouchableOpacity>
      <TouchableOpacity 
              style={{
              position: 'absolute',
              right:20,
              bottom:20,
            }}
            onPress={()=>{}}
            >
           <AddButton2 name={'edit'} color={COLORS.darkBlue}/>
      </TouchableOpacity>
      </ImageBackground>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    container:{
      flex:1,
     // paddingHorizontal: 15,
    },
    title:{
      fontSize:30,
      color: COLORS.blue,
      fontWeight: 'bold',
    },
    desc:{
      fontSize:20,
      opacity:1    
    },
    time:{
        textAlign:'right',
        fontSize:12,
        opacity:0.5    
    }
})

export default NoteDetails