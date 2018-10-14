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
    WebView,
    TouchableOpacity,
} from 'react-native';

import Toast, {DURATION} from 'react-native-easy-toast'



export default  class MainAppDemo extends Component {

    state = {
        url:"http://m.baidu.com",
    }


    handleTextInputChange = (event) => {
        var url = event.nativeEvent.text;
        if(!url.startsWith("http")) {
            url = "http://"+url;
        }
        this.inputText= url;
        console.log("inputUrl11:"+this.inputText);
    }
    pressGoButton = () => {
    
    
        var url = this.inputText.toLowerCase();
        if(url === this.state.url) {
            
        }else {
            this.setState({
                url:url,
            });
        }
        this.refs.toast.show('hello world!');
    
        console.log("inputUrl:"+url);
    
    }
    
    inputText='';
    render() {
        this.inputText = this.state.url;
        return(
            <View style={styles.container}>
            <View style= {styles.banner}>
            <TextInput style={styles.addressbar}  ref="urlInput" defaultValue={this.state.url}
            onChange={this.handleTextInputChange}
            />
            <TouchableOpacity onPress={this.pressGoButton} >
            <Button
            title="go2"
            onPress = {() => this.pressGoButton()}
            />
            </TouchableOpacity>
            </View>

            <View style={styles.container}>
            <WebView
              ref="webview"
              source={{uri:this.state.url}}
              javaScriptEnabled={true}
              domStorageEnabled={true}
            />
            </View>
            <View style={styles.foot}>
            <Toast ref="toast"/>

            <Button 
            onPress={this.pressGoButton}
            title="prev">
            </Button>

           <Button 
            onPress={this.pressGoButton}
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