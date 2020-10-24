import React, {Component} from 'react';
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

export default class Dangnhap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
      user: '',
      pass: '',
      result: '',
    };
  }
  Dangnhap() {
    fetch('http://192.168.0.106/TTTT/dnuser.php', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        
        user: this.state.user,
        pass: this.state.pass,
      }),
    })
      .then((response) => response.json())
      .then((responseJson) => {
         this.setState({result:responseJson.tk})
        Alert.alert(responseJson.tk);
      })
      .catch((er) => {
        console.log(er);
      });
  }
  Dangki() {}
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
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.Dangki();
            }}>
            <Text>Đăng Kí</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.Dangnhap();
            }}>
            <Text>Đăng Nhập</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    flex: 1,
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
