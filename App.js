import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { Avatar } from 'react-native-elements';
import { Button } from 'react-native-elements';
import { Input } from "react-native-elements";
import Icon from 'react-native-vector-icons/FontAwesome';

const Flex = () => {
  return (
    <View style={[styles.container, {
      flex: 1,
      flexDirection: 'column',
    }]}>
      <View style={styles.avatar}>
        <Avatar
          size='xlarge'
          rounded
          source={{
            uri:
              'https://cdn-icons-png.flaticon.com/512/6681/6681204.png',
          }}
        />
      </View>
      <View style={styles.container}>
        <Input
          label="Login"
          labelStyle={{fontSize: 18}}
          style={styles.input}
          leftIcon={
            <Icon
              name='user'
              size={24}
              color='#6278f4'
            />
          }
        />
        <Input
          label="Senha"
          labelStyle={{fontSize: 18}}
          style={styles.input}
          leftIcon= {
            <Icon
              name="lock"
              size={24}
              color='#6278f4'
            />
          }
          secureTextEntry={true}
        />
      </View>
      <View style={styles.container}>
          <Button 
            buttonStyle={{backgroundColor: '#46c7fc', height:50}}
            title="Login"
            titleStyle={{fontSize: 25}}
          />
          <Button 
            buttonStyle={{backgroundColor:'#724af4', height:50}}
            title="Cadastre-se"
            titleStyle={{fontSize: 25}}
          />
      </View>

    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 2,
    gap: 10,
    padding: 20,
  },
  input: {
    paddingLeft: 10,
    fontSize: 15,
  },
  avatar: {
    flex: 2, 
    alignItems: 'center', 
    paddingTop: 50, 
  },
});
export default Flex;