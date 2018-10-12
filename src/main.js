

import React,{Component } from 'react';

import {Text,Image,View,StyleSheet,FlatList,WebView,
    Button,

} from 'react-native';


export default class App extends Component {

    render() {
        return (
            <View style={{ alignItems: 'center',alignContent:'center',justifyContent:'center'}}>
                        {/* <PropTest name="lijunjie"></PropTest>
                        <PropTest name="linian"></PropTest>
                        <PropTest></PropTest> */}

                        {/* <Blink text="this is a test"></Blink> */}
                        {/* <LinearLayoutTest> </LinearLayoutTest> */}
                        {/* <FlatListTest></FlatListTest> */}
                        <ScaledWebView></ScaledWebView>


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
});