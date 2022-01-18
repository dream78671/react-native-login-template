import React, { useState } from "react";
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text,View   , TouchableOpacity } from "react-native";
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import BackButton from '../components/BackButton'
import  { Component } from 'react';
import TextInput from '../components/TextInput'


class menue extends Component {
  constructor(props) {
    super(props);
    const hr_value = '';
    const price_value = '';

    this.state = { count: 0 };

    // this.setPassword = this.setPassword.bind(this)
    // this.setEmail = this.setEmail.bind(this)
    // this.login = this.login.bind(this)
}
onPress = () => {
  this.setState({
    count: this.state.count + 1
  });
};



  render() {
    return (
      <Background>
              <BackButton    onPress={() => this.props.navigation.navigate('Home')}/>

      <View style={styles.container}>
        <View style={styles.countContainer}>
          <Text style={styles.choose}>Choose Your Driving Lesson (Manual Only)</Text>
        </View>
        <TouchableOpacity  alignSelf="center"

          style={styles.submit}
          onPress={this.onPress}
        >
         
        

          <Text style={styles.submitText} >1hr driving lesson                      £26 </Text>

        </TouchableOpacity>


        <TouchableOpacity  marginTop= "90"

style={styles.submit}
onPress={this.onPress}
>



<Text style={styles.submitText} >2hr driving lesson                      £51</Text>
</TouchableOpacity>

<TouchableOpacity  marginTop= "90"

style={styles.submit}
onPress={this.onPress}
>
<Text style={styles.submitText} >3hr driving lesson                      £76</Text>
</TouchableOpacity> 



<TextInput style={styles.text_inputlayout }
        label="Discount Code"
        returnKeyType="next"
        onChangeText={(text) => setEmail({ value: text, error: '' })}
        showSoftInputOnFocus={false}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />

      <View style={styles.text_layout}
      
    >
      <Text
      style={styles.recipt_text}
>
  type of driving lesson :
      </Text>
      <Text
      style={styles.recipt_text}
>app fee
  jeff :
      </Text>
      <Text
      style={styles.recipt_text}
>
  total :
      </Text>

      </View>

      <View style={styles.price_text_layout}>

        <Text style={styles.text_layout}
         >
           jeff


        </Text>


      </View>

      <TouchableOpacity  

style={styles.pay}
onPress={() =>   this.props.navigation.navigate('acceptedlesson') }
>



<Text style={styles.pay_text} > Pay </Text>
</TouchableOpacity>



      </View>
             </Background>

    );
  }
}

const styles = StyleSheet.create({
   container: {
    flex: 1,
    marginTop:115,
    justifyContent: "flex-start",
    paddingHorizontal: 10
  },
  choose:{
    color: 'black',
    fontSize:15,
    marginTop:-20,
alignSelf:"center",

  },

  price_text_layout:{
    alignItems: "flex-end",
    flexDirection:"column-reverse",
    marginRight:20,
    marginBottom:15,
    paddingTop:1,
    paddingRight:0,
    flex:1,
    marginLeft:25


  },

  pay :{
    marginRight: 100,
    marginLeft: 135,
    paddingLeft:30,
    marginBottom:39,
    marginTop: 10,
    alignContent:"center",
    width:150,
    alignItems:"center",
    paddingTop: 20,
    paddingBottom: 20,
    
    backgroundColor: 'black',
    borderRadius: 15,
    borderWidth: 2,
    
    borderColor: 'red',
  },

  text_layout:{
    alignItems: "center",
    marginTop:15,
    marginRight:30,
    marginBottom:1,
    paddingTop:1,
    flex:1,
    flexDirection: 'column',
    paddingBottom:1,
    marginLeft:25


  },
  button: {
    alignItems: "center",
    backgroundColor: "white",
    padding: 30,
    marginTop:50,
    marginRight:20,
    marginLeft:20
  },
  submit: {
    marginRight: 40,
    marginLeft: 40,
    marginBottom:28,
    marginTop: 10,
    alignContent:"flex-start",
    width:350,
    alignItems:"center",
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: 'white',
    borderRadius: 15,
    borderWidth: 2,
    
    borderColor: 'black',
  },
  submitText: {
    color: 'black',
    fontSize:20,
    paddingLeft:18,
    
alignSelf:"flex-start",
    textAlign: 'left',
  },

  pay_text: {
    color: 'white',
    fontSize:20,
    paddingLeft:20,
    
alignSelf:"flex-start",
    textAlign: 'left',
  },

  recipt_text: {
    color: 'black',
    fontSize:18,
    paddingLeft:20,
    paddingBottom:10,
    
alignSelf:"flex-start",
    textAlign: 'left',
  },
  
  

  text_inputlayout:{
alignContent:"center",
paddingLeft:20,
width:10,
marginLeft:50,
paddingRight:300

  },
  priceText: {
    color: 'black',
    fontSize:20,
    paddingLeft:18,
    
alignSelf:"flex-end",
    textAlign: 'right',
  },
  countContainer: {
    alignItems: "center",
    padding: 10
  }
});

export default menue;