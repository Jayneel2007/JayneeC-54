import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';


class AnyColorButton extends Component {
  displayAlert = () => {
    alert("Are you sure you want to use this sound");
  };
  render() {
    return (
      <Button color={this.props.color} title="Sound 1" onPress={this.displayAlert}/>
    );
  }
}

class Sound2 extends Component{
  displayAlert = () => {
    alert("Are you sure you want to use this sound")
  }
  render(){
    return(
      <Button color={this.props.color} title="Sound 2" onPress={this.displayAlert}/>
    )
  }
}
class Sound3 extends Component{
  displayAlert = () => {
    alert("Are you sure you want to use this sound")
  }
  render(){
    return(
      <Button color={this.props.color} title="Sound 3" onPress={this.displayAlert}/>
    )
  }
}

class Sound4 extends Component{
  displayAlert = () => {
    alert("Are you sure you want to use this sound")
  }
  render(){
    return(
      <Button color={this.props.color} title="Sound 4" onPress={this.displayAlert}/>
    )
  }
}

class Sound5 extends Component{
  displayAlert = () => {
    alert("Are you sure you want to use this sound")
  }
  render(){
    return(
      <Button color={this.props.color} title="Sound 5" onPress={this.displayAlert}/>
    )
  }
}

export default class App extends Component {
  render() {
    return (
      <View>
      <View style={{ marginTop: 50 }}>
        <AnyColorButton color="blue" />
        
      </View>
       <View style={{ marginTop: 70 }}>
        <Sound2 color ="green"/>

        <View style={{ marginTop: 70 }}>
        <Sound3 color ="pink"/>

        </View>
         <View style={{ marginTop: 70 }}>
        <Sound4 color ="maroon"/>

        </View>

         <View style={{ marginTop: 70 }}>
        <Sound5 color ="orange"/>

        </View>
        
      </View>
      </View>

    );
  }
}
