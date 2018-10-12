

import React,{Component } from 'react';

import {Text,Image} from 'react-native';


export default class App extends Component {

    render() {
        return (
            <TextTest></TextTest>
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