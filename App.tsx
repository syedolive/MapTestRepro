/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';

const GOOGLE_API_KEY = 'YOUR_KEY';

function App(): JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'light-content'} backgroundColor="white" />
      <GooglePlacesAutocomplete
        placeholder="Search"
        onPress={(data, details = null) => {
          console.log(data, details);
        }}
        query={{
          key: GOOGLE_API_KEY,
          language: 'en',
          components: 'country:us',
        }}
        styles={{
          textInputContainer: {
            backgroundColor: 'grey',
          },
          textInput: {
            height: 38,
            color: '#5d5d5d',
            fontSize: 16,
          },
          predefinedPlacesDescription: {
            color: 'black',
          },
          description: {
            color: 'black',
          },
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'white',
    padding: 20,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
