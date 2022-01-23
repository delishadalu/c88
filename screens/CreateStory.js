import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  FlatList,
  SafeAreaView,
  Platform,
  StatusBar,
  ScrollView,
  TextInput,
  KeyboardAvoidingView,
} from 'react-native';
import * as Font from 'expo-font';
import StoryCard from './StoryCard';
import AppLoading from 'expo-app-loading';
import DropDownPicker from 'react-native-dropdown-picker';
import firebase from 'firebase';

var images = {
  image1: require('../assets/story_image_1.png'),
  image2: require('../assets/story_image_2.png'),
  image3: require('../assets/story_image_3.png'),
  image4: require('../assets/story_image_4.png'),
  image5: require('../assets/story_image_5.png'),
};
export default class Feed extends Component {
  constructor() {
    super();
    this.state = {
      fontLoaded: false,
      previewImage: 'image1',
      lightTheme: true,
    };
  }
  fetchUser = async () => {
    await firebase
      .database()
      .ref('users/' + firebase.auth().currentUser.uid)
      .on('value', (data) => {
        this.setState({
          lightTheme: data.val().current_theme === 'dark' ? false : true,
        });
      });
  };

  componentDidMount() {
    this.fetchUser();
    this.loadFont();
  }

  loadFont = async () => {
    await Font.loadAsync({
      'bubblegum-sans': require('../assets/fonts/BubblegumSans-Regular.ttf'),
    });

    this.setState({ fontLoaded: true });
  };

  render() {
    if (!this.state.fontLoaded) {
      return <AppLoading />;
    }
    return (
      <KeyboardAvoidingView
        behavior="padding"
        style={{
          flex: 1,
          backgroundColor: !this.state.lightTheme ? '#15193c' : 'white',
        }}>
        <SafeAreaView
          style={{
            marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
          }}
        />
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
          }}>
          <Image
            style={{ width: 50, height: 50 }}
            source={require('../assets/logo.png')}
          />

          <Text style={{ paddingLeft: 20, fontFamily: 'bubblegum-sans' }}>
            STORY TELLING APP
          </Text>
        </View>

        <View style={{ flex: 0.9, marginTop: 10 }}>
          <ScrollView>
            <Image
              style={{ width: '100%', height: 200, resizeMode: 'contain' }}
              source={images[this.state.previewImage]}
            />

            <DropDownPicker
              items={[
                { label: 'image1', value: 'image1' },
                { label: 'image2', value: 'image2' },
                { label: 'image3', value: 'image3' },
                { label: 'image4', value: 'image4' },
                { label: 'image5', value: 'image5' },
              ]}
             
              style={{ backgroundColor: 'transparent' }}
              dropDownStyle={{
                backgroundColor: 'skyblue',
                borderWidth: 2,
                marginTop: 25,
              }}
              onChangeItem={(item) =>
                this.setState({ previewImage: item.value })
              }
              labelStyle={{
                color: !this.state.lightTheme ? 'white' : 'black',
                fontFamily: 'bubblegum-sans',
              }}
              itemStyle={{ justifyContent: 'flex-start', paddingLeft: 20 }}
              containerStyle={{
                height: 40,
                borderRadius: 20,
                borderWidth: 2,
                borderColor: !this.state.lightTheme ? 'white' : 'black',
               
              }}
            />

            <TextInput
              placeholder="title"
              placeholderTextColor={!this.state.lightTheme ? 'white' : 'black'}
              onChangeText={(title) => {
                this.setState({ title });
              }}
              style={
                !this.state.lightTheme
                  ? {
                      borderWidth: 2,
                      borderRadius: 10,
                      height: 30,
                      marginTop: 10,
                      borderColor: 'white',
                      paddingLeft: 10,
                      fontFamily: 'bubblegum-sans',
                      color: 'white',
                    }
                  : {
                      borderWidth: 2,
                      borderRadius: 10,
                      height: 30,
                      marginTop: 10,
                      borderColor: 'black',
                      paddingLeft: 10,
                      fontFamily: 'bubblegum-sans',
                      color: 'black',
                    }
              }
            />

            <TextInput
              placeholder="description"
              placeholderTextColor={!this.state.lightTheme ? 'white' : 'black'}
              onChangeText={(description) => {
                this.setState({ description });
              }}
              style={
                !this.state.lightTheme
                  ? {
                      borderWidth: 2,
                      borderRadius: 10,
                      height: 30,
                      marginTop: 10,
                      borderColor: 'white',
                      paddingLeft: 10,
                      fontFamily: 'bubblegum-sans',
                      color: 'white',
                    }
                  : {
                      borderWidth: 2,
                      borderRadius: 10,
                      height: 30,
                      marginTop: 10,
                      borderColor: 'black',
                      paddingLeft: 10,
                      fontFamily: 'bubblegum-sans',
                      color: 'black',
                    }
              }
            />

            <TextInput
              placeholder="story"
              placeholderTextColor={!this.state.lightTheme ? 'white' : 'black'}
              onChangeText={(story) => {
                this.setState({ story });
              }}
              multiline={true}
              numberOfLines={20}
              style={
                !this.state.lightTheme
                  ? {
                      borderWidth: 2,
                      borderRadius: 10,
                      height: 30,
                      marginTop: 10,
                      borderColor: 'white',
                      paddingLeft: 10,
                      fontFamily: 'bubblegum-sans',
                      color: 'white',
                    }
                  : {
                      borderWidth: 2,
                      borderRadius: 10,
                      height: 30,
                      marginTop: 10,
                      borderColor: 'black',
                      paddingLeft: 10,
                      fontFamily: 'bubblegum-sans',
                      color: 'black',
                    }
              }
            />

            <TextInput
              placeholder="moral of the story"
              placeholderTextColor={!this.state.lightTheme ? 'white' : 'black'}
              onChangeText={(moral) => {
                this.setState({ moral });
              }}
              style={
                !this.state.lightTheme
                  ? {
                      borderWidth: 2,
                      borderRadius: 10,
                      height: 30,
                      marginTop: 10,
                      borderColor: 'white',
                      paddingLeft: 10,
                      fontFamily: 'bubblegum-sans',
                      color: 'white',
                    }
                  : {
                      borderWidth: 2,
                      borderRadius: 10,
                      height: 30,
                      marginTop: 10,
                      borderColor: 'black',
                      paddingLeft: 10,
                      fontFamily: 'bubblegum-sans',
                      color: 'black',
                    }
              }
            />
          </ScrollView>
        </View>
      </KeyboardAvoidingView>
    );
  }
}
