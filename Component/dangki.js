import React, {Component} from 'react';
import {Alert, Text, TextInput, TouchableOpacity, View, StyleSheet} from 'react-native';

export default class Dangki extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hoten: '',
      user: '',
      pass: '',
      result: ''
    };
  }
  Dangki() {
    //console.log("'dadzzqqqqqz'");
    fetch('http://192.168.0.106/TTTT/dkuser.php', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        hoten: this.state.hoten,
        user: this.state.user,
        pass: this.state.pass,
      }),
    })
      .then((response) => response.json())
      .then((responseJson) => {
        // this.setState({result:responseJson.kq})
        Alert.alert(responseJson.kq);
      })
      .catch((er) => {
        console.log(er);
      });
  }
  render() {
    return (
      <View
        style={{
          padding: 35,
          justifyContent: 'center',
          flex: 1,
          backgroundColor: '#E6E6FA',
        }}>
        <TextInput
          style={styles.texip}
          onChangeText={(hoten) => this.setState({hoten})}
          placeholder="Họ và Tên"
          placeholderTextColor="#333"
         
          value={this.state.hoten}
        />
        <TextInput
          style={styles.texip}
          onChangeText={(user) => this.setState({user})}
          placeholder="Username"
          placeholderTextColor="#333"
          value={this.state.user}
        />
        <TextInput
          style={styles.texip}
          onChangeText={(pass) => this.setState({pass})}
          placeholder="Password"
          placeholderTextColor="#333"
          value={this.state.pass}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            this.Dangki();
          }}>
          <Text>Đăng Kí</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  button: {
    alignContent:"center",
    alignItems: 'center',
   width : 175,
    marginTop: 50,
    margin: 15,
    padding: 15,
    backgroundColor: '#FF83FA',
    borderRadius: 7,
  },
  texip: {
    height: 45,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 7,
    margin: 2,
  },
});