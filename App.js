import React, {Component} from 'react';
import {TouchableOpacity, View, Text, Image, StatusBar} from 'react-native';
import Drawer from 'react-native-drawer';
import Dangki from './Component/dangki';
import Dangnhap from './Component/dangnhap';

StatusBar.setHidden(true);
class App extends Component {
  closeControlPanel = () => {
    this._drawer.close();
  };
  openControlPanel = () => {
    this._drawer.open();
  };
  render() {
    return (
      <Drawer
        ref={(ref) => (this._drawer = ref)}
        openDrawerOffset={0.2}
        tapToClose={true}
        content={<Dangnhap />}>
        <View style={{flex: 1, backgroundColor: 'red'}}>
          <TouchableOpacity
            onPress={() => {
              this.openControlPanel();
            }}>
            <Image
              source={require('../Test/img/sidemenu.png')}
              style={{width: 35, height: 35, margin: 22}}
            />
            
          </TouchableOpacity>
        </View>
      </Drawer>
    );
  }
}

export default App;
