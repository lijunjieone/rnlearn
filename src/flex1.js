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



export default  class MainAppDemo extends Component {

    state = {
        url:"http://m.baidu.com",
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
            onPress={this.pressGoButton}
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


handleTextInputChange = (event) => {
    var url = event.nativeEvent.text;
    if(!url.startsWith("http")) {
        url = "http://"+url;
    }
    this.inputText= url;
    console.log("inputUrl:"+this.inputText);
}
pressGoButton = () => {
    var url = this.inputText.toLowerCase();
    if(url === this.state.url) {
        
    }else {
        this.setState({
            url:url,
        });
    }
    console.log("inputUrl:"+url);

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