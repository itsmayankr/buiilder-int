import { View, TouchableOpacity, Image, StyleSheet, Text, Alert } from "react-native";
import React, { useEffect, useState } from "react";

import Scale from '../src/Scale';
import AsyncStorage from "@react-native-async-storage/async-storage";
import FastImage from 'react-native-fast-image'

interface myProps {
    navigation: any;
}

export default function SideMenu(props: myProps) {
    // console.log('myProps', props);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [image, setImage] = useState("");

    const onPressLogout = async () => {
        Alert.alert(
            '',
            'Are you sure you want to Logout?',
            [
                { text: 'Yes', onPress: () => loggedOut() },
                { text: 'No', onPress: () => console.log('No button clicked'), style: 'cancel' },
            ],
            {
                cancelable: true
            }
        );

    }

    const loggedOut = async () => {
        await AsyncStorage.removeItem('token');
        await AsyncStorage.removeItem('userId');
        await AsyncStorage.removeItem('country_code');
        props.navigation.navigate('EmailAccountLoginBlock');
    }

    useEffect(() => {
        userDetail();
    }, [props])

    const userDetail = async () => {
        // console.log("userDetailSideMenu")
        let email: any = await AsyncStorage.getItem('email');
        let name: any = await AsyncStorage.getItem('fullName');
        let image: any = await AsyncStorage.getItem('userImage');
        setName(name);;
        setEmail(email);
        setImage(image);
    }

    return (
        <View style={styles.landingPageView}>
            <View style={styles.drawerHeadView}>
                <View style={styles.userImageView}>
                    <FastImage source={image ? { uri: image } : require('./avatar.png')} style={styles.profileImage} />
                    <View style={{ backgroundColor: '#fff', justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center', width:'85%' }}>
                        <View style={{ marginLeft: Scale(10), backgroundColor:'#fff', width:'85%' }}>
                            <Text style={{ fontSize: 16, fontWeight: '700', opacity: 0.7, color: '#000',bottom:2 }}>{name ? name : ""}</Text>
                            <Text style={{ fontSize: 14, fontWeight: "700", opacity: 0.5,backgroundColor: '#fff',top:2 }} numberOfLines={1}>{email}</Text>
                        </View>
                        <TouchableOpacity style={{}} onPress={() => props.navigation.closeDrawer()}>
                            <Image source={require("./navIcon.png")} style={styles.navIcon} resizeMode='contain' />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={styles.listView}>
                <TouchableOpacity style={styles.screenView} onPress={() => props.navigation.navigate('UserProfile')}>
                    <Text style={styles.screenText}>Profile</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.screenView} onPress={() => props.navigation.navigate('Notifications')}>
                    <Text style={styles.screenText}>Preferences</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.screenView} onPress={() => props.navigation.navigate('Contactus')}>
                    <Text style={styles.screenText}>Support</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.screenView}>
                    <Text style={styles.screenText}>Subscription</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.screenView} onPress={() => props.navigation.navigate('TermsAndConditions')}>
                    <Text style={styles.screenText}>Terms & Conditions</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.screenView}>
                    <Text style={styles.screenText}>News Community</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.screenView}>
                    <Text style={styles.screenText}>Rate Us</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.screenView} onPress={() => onPressLogout()}>
                    <Text style={styles.screenText}>Logout</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    landingPageView: {
        flex: 1,
        backgroundColor: "#fff"
    },
    drawerHeadView: {
        backgroundColor: "#fff",
        // position: 'absolute',
        width: '100%',
        elevation: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        padding: Scale(18),
        zIndex: 1,
        // alignItems:'center',
        // justifyContent:'center'
    },
    userImageView: {
        flexDirection: 'row',
        // alignItems: "center",
        backgroundColor: '#fff',
        marginTop: Scale(30),
    },
    profileImage: {
        height: Scale(50),
        width: Scale(50),
        borderRadius: Scale(30),
        // backgroundColor:"yellow"
    },
    navIcon: {
        height: Scale(20),
        width: Scale(20),
    },
    listView: {
        // backgroundColor: "pink",
        flex: 1,
        // marginTop:Scale(60)
    },
    screenView: {
        marginHorizontal: Scale(22),
        marginTop: Scale(25)
    },
    screenText: {
        fontSize: Scale(18),
        opacity: 0.7,
        fontWeight: 'bold'
    }
})

export { SideMenu }
