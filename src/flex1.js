import React,{
    Component
} from 'react';

import {
    Text,
    View,
    ScrollView,
    Image,
    Button,
    TextInput,
} from 'react-native';



export default  class MainAppDemo extends Component {

    render() {
        return(
            <View style={styles.container}>
            <View style= {styles.banner}>
            <TextInput style={styles.addressbar}/>
            <Button
            title="go"
            />
            </View>
            <View style={styles.container}>
            
            </View>
            <View style={styles.foot}>
            <Button 
            title="prev">
            </Button>

           <Button 
            title="back">
            </Button> 
            </View>
            </View>
        );
    }
}


const styles = {
    container:{
        flex:1,
        backgroundColor:'blue',
    },
    banner:{
        height:50,
        flexDirection:'row',
        backgroundColor:'#d0d0d0',
    },
    addressbar:{
        flex:1,
        backgroundColor:'red',
    },
    foot:{
        height:50,
        backgroundColor:'#ffffff',
        flexDirection:'row',
        justifyContent:"space-around",
    },
};