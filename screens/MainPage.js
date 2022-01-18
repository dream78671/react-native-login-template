import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    
    TouchableOpacity,
} from "react-native";

import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import Paragraph from '../components/Paragraph'
import MapView from 'react-native-maps';
import {  Dimensions } from 'react-native';


class MainPage extends Component {



    render()
    {
        return (
          
            <View style={styles.container}>
              <MapView style={styles.map} />
              <View style={{
                position:'absolute',
      width: '55%',
      height:'85%',
      paddingLeft: '5%',
      bottom:1,
      marginBottom:10,
      height: 150,
    }}>

              <Button marginBottom="0%"
        onPress={() =>   this.props.navigation.navigate('menu')  }
    mode="important"
    uppercase={false}

>
        Start
                     </Button>

                            </View>

            </View>
            
          );

    }

    
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    map: {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
    },
  });
export default MainPage;