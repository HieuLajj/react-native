import React from 'react';
import {Avatar,Title,Caption,Paragraph,Drawer,TouchableRipple,Switch} from 'react-native-paper'
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer'
export function DrawerContent(props){
    return(
        <View style={{flex:1}}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                   <View style={styles.userInfoSection}>
                        <View>
                            <Avatar.Image source={{
                                  uri: 'https://sieupet.com/sites/default/files/pictures/images/1-1473150685951-5.jpg'
                            }}
                            size={50}
                            />
                        </View>
                        <View>
                          <Title style={styles.title}>Lai Van Hieu</Title>
                          <Caption style={styles.caption}>@hieu.pro</Caption> 
                        </View>
                   </View>
                </View>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem
                    icon={({color,size}) =>(
                        <Icon
                            name='exit-to-app'
                            color={color}
                            size={size}
                        />)
                    }
                    label="Signs Out"
                    onPress={()=>{}}
                />
            </Drawer.Section>
        </View>
    )
}
const styles = StyleSheet.create({
    drawerContent: {
      flex: 1,
    },
    userInfoSection: {
      paddingLeft: 20,
    },
    title: {
      fontSize: 16,
      marginTop: 3,
      fontWeight: 'bold',
    },
    caption: {
      fontSize: 14,
      lineHeight: 14,
    },
    row: {
      marginTop: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 15,
    },
    paragraph: {
      fontWeight: 'bold',
      marginRight: 3,
    },
    drawerSection: {
      marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12,
      paddingHorizontal: 16,
    },
  });
