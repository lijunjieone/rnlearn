

import React,{Component } from 'react';

import {Text,Image,View,StyleSheet,FlatList,WebView,
    Button,
    TouchableOpacity,
    TextInput,

} from 'react-native';

import ComicMainDemo from './comic';

import MainAppDemo from './flex1';



export default class App extends Component {

    render() {
        return (

            <View style={{ flex:1,flexDirection:'column',justifyContent:'space-between',backgroundColor:'red'}}>
                        {/* <PropTest name="lijunjie"></PropTest>
                        <PropTest name="linian"></PropTest>
                        <PropTest></PropTest> */}

                        {/* <Blink text="this is a test"></Blink> */}
                        {/* <LinearLayoutTest> </LinearLayoutTest> */}
                        {/* <FlatListTest></FlatListTest> */}
                        {/* <ScaledWebView></ScaledWebView> */}
                        {/* <WebViewExample></WebViewExample> */}

            {/* <FlexDicTest1></FlexDicTest1> */}
            {/* <ComicMainDemo></ComicMainDemo> */}
            <MainAppDemo></MainAppDemo>

            </View>
        );
    }
}


class ImageTest extends Component {
    render() {
        let pic = {
            uri:'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
        }
      return (
          
          <Image source={pic} style={{width:193,height:110}} />
      )
    }
}


class TextTest extends Component {
    render() {
        return (
            <Text> Hello World!</Text>
        )
    }
}


class PropTest extends Component {
    render() {
        return(
            <Text> Hello {this.props.name} </Text>
        )
    }
}


class Blink extends Component {
    constructor(props) {
        super(props);
        this.state = {showText:true};

        setInterval(()=>{
            this.setState(previousState=> {
                return {showText:!previousState.showText};
            })
        },1000);

    }

    render() {
        let display = this.state.showText ? this.props.text:" ";

        return (
            <Text style={styles.bigblue}>{display}</Text>
        )
    }
}

class FlatListTest extends Component {
    render() {
        return(
            <View>
                <FlatList
                 data={[
                    {key: 'Devin'},
                    {key: 'Jackson'},
                    {key: 'James'},
                    {key: 'Joel'},
                    {key: 'John'},
                    {key: 'Jillian'},
                    {key: 'Jimmy'},
                    {key: 'Julie'},
                    {key: 'Devin'},
                    {key: 'Jackson'},
                    {key: 'James'},
                    {key: 'Joel'},
                    {key: 'John'},
                    {key: 'Jillian'},
                    {key: 'Jimmy'},
                    {key: 'Julie'},
                    {key: 'Devin'},
                    {key: 'Jackson'},
                    {key: 'James'},
                    {key: 'Joel'},
                    {key: 'John'},
                    {key: 'Jillian'},
                    {key: 'Jimmy'},
                    {key: 'Julie'},
                    {key: 'Devin'},
                    {key: 'Jackson'},
                    {key: 'James'},
                    {key: 'Joel'},
                    {key: 'John'},
                    {key: 'Jillian'},
                    {key: 'Jimmy'},
                    {key: 'Julie'},
                    {key: 'Devin'},
                    {key: 'Jackson'},
                    {key: 'James'},
                    {key: 'Joel'},
                    {key: 'John'},
                    {key: 'Jillian'},
                    {key: 'Jimmy'},
                    {key: 'Julie'},
                    ]}
                    renderItem={({item}) => <Text>{item.key}</Text>}
                    >
                    </FlatList>
            </View>
        )
    }
}


var TEXT_INPUT_REF = 'urlInput';
var WEBVIEW_REF = 'webview';
var DEFAULT_URL = 'https://m.baidu.com';


class WebViewExample extends React.Component {
    state = {
      url: DEFAULT_URL,
      status: 'No Page Loaded',
      backButtonEnabled: false,
      forwardButtonEnabled: false,
      loading: true,
      scalesPageToFit: true,
    };
  
    inputText = '';
  
    handleTextInputChange = (event) => {
      var url = event.nativeEvent.text;
      if (!/^[a-zA-Z-_]+:/.test(url)) {
        url = 'http://' + url;
      }
      this.inputText = url;
    };
  
    render() {
      this.inputText = this.state.url;
  
      return (
        <View style={[styles.container]}>
          <View style={[styles.addressBarRow]}>
            <TouchableOpacity
              onPress={this.goBack}
              style={this.state.backButtonEnabled ? styles.navButton : styles.disabledButton}>
              <Text>
                 {'<'}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={this.goForward}
              style={this.state.forwardButtonEnabled ? styles.navButton : styles.disabledButton}>
              <Text>
                {'>'}
              </Text>
            </TouchableOpacity>
            <TextInput
              ref={TEXT_INPUT_REF}
              autoCapitalize="none"
              defaultValue={this.state.url}
              onSubmitEditing={this.onSubmitEditing}
              onChange={this.handleTextInputChange}
              clearButtonMode="while-editing"
              style={styles.addressBarTextInput}
            />
            <TouchableOpacity onPress={this.pressGoButton}>
              <View style={styles.goButton}>
                <Text>
                   Go!
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <WebView
            ref={WEBVIEW_REF}
            automaticallyAdjustContentInsets={false}
            style={styles.webView}
            source={{uri: this.state.url}}
            javaScriptEnabled={true}
            domStorageEnabled={true}
            decelerationRate="normal"
            onNavigationStateChange={this.onNavigationStateChange}
            onShouldStartLoadWithRequest={this.onShouldStartLoadWithRequest}
            startInLoadingState={true}
            scalesPageToFit={this.state.scalesPageToFit}
          />
          <View style={styles.statusBar}>
            <Text style={styles.statusBarText}>{this.state.status}</Text>
          </View>
        </View>
      );
    }
  
    goBack = () => {
      this.refs[WEBVIEW_REF].goBack();
    };
  
    goForward = () => {
      this.refs[WEBVIEW_REF].goForward();
    };
  
    reload = () => {
      this.refs[WEBVIEW_REF].reload();
    };
  
    onShouldStartLoadWithRequest = (event) => {
      // Implement any custom loading logic here, don't forget to return!
      return true;
    };
  
    onNavigationStateChange = (navState) => {
      this.setState({
        backButtonEnabled: navState.canGoBack,
        forwardButtonEnabled: navState.canGoForward,
        url: navState.url,
        status: navState.title,
        loading: navState.loading,
        scalesPageToFit: true
      });
    };
  
    onSubmitEditing = (event) => {
      this.pressGoButton();
    };
  
    pressGoButton = () => {
      var url = this.inputText.toLowerCase();
      if (url === this.state.url) {
        this.reload();
      } else {
        this.setState({
          url: url,
        });
      }
      // dismiss keyboard
      this.refs[TEXT_INPUT_REF].blur();
    };
  }
  
//   class Button extends React.Component {
//     _handlePress = () => {
//       if (this.props.enabled !== false && this.props.onPress) {
//         this.props.onPress();
//       }
//     };
  
//     render() {
//       return (
//         <TouchableWithoutFeedback onPress={this._handlePress}>
//           <View style={styles.button}>
//             <Text>{this.props.text}</Text>
//           </View>
//         </TouchableWithoutFeedback>
//       );
//     }
//   }

class FlexDicTest1 extends Component {
    render() {
        return (
            <View style={{flex:1,flexDirection:'row'}}>
               <View style={{ width:50,height:50,backgroundColor:'powderblue'}}/>
               <View style={{ width:50,height:50,backgroundColor:'skyblue'}}/>
               <View style={{ width:50,height:50,backgroundColor:'steelblue'}}/>
            </View>
        )
    }
}
  

class ScaledWebView extends React.Component {
    state = {
      scalingEnabled: true,
    };
  
    render() {
      return (
        <View>
          <WebView
            style={{
              backgroundColor: "blue",
              width: 300,
              height: 200,
            }}
            source={{uri: 'https://www.baidu.com'}}
            scalesPageToFit={this.state.scalingEnabled}
          />
          <View style={styles.buttons}>
          { this.state.scalingEnabled ?
            <Button
              title="Scaling:ON"
              enabled={true}
              onPress={() => this.setState({scalingEnabled: false})}
            /> :
            <Button
              title="Scaling:OFF"
              enabled={true}
              onPress={() => this.setState({scalingEnabled: true})}
            /> }
          </View>
        </View>
      );
    }
  }

class LinearLayoutTest extends Component {
    render() {
        return (
            <View>
                <View style={{width:50,height:50,backgroundColor:'powderblue'}} />
                <View style={{width:100,height:100,backgroundColor:'skyblue'}} />
                <View style={{width:150,height:150,backgroundColor:'blue'}} />

            </View>
        )
    }
}
const styles = StyleSheet.create({
    bigblue:{
        color:'blue',
        fontSize:30,
    },


    container: {
        height: 800,
        width:300,
      },
      
});