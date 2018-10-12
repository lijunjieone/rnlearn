

import React,{Component } from 'react';

import {Text,Image,View,StyleSheet} from 'react-native';


export default class App extends Component {

    render() {
        return (
            <View style={{ alignItems: 'center',alignContent:'center',justifyContent:'center'}}>
                        {/* <PropTest name="lijunjie"></PropTest>
                        <PropTest name="linian"></PropTest>
                        <PropTest></PropTest> */}

                        {/* <Blink text="this is a test"></Blink> */}
                        <LinearLayoutTest> </LinearLayoutTest>


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