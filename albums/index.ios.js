/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-named-as-default */
/* eslint-disable max-len */
// import a library to help create a component******** We also have components (modules we wrote ourselves imported here. ex:Header)
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

// Text is provided to us from ReactNative so we must import it. see above.

// Create a component********** We use a viewtag now since we have another component added. View is like div in react
const App = () => (
    <View style={{ flex: 1 }}>
    {/* /* whenever you have a scrollview (in AlbumList) you must add a style property of flex: 1 to the root component. just adding one style you can just add to the view. it says please expand this component to fill the entire area of this device. it's a react native got ya! */ }
        <Header headerText={'Albums'} />
        <AlbumList />
    </View>
    );
// eslint-disable-next-line max-len
// The above is the same as saying const App = () => { return (<Text>Some Text</Text>)} but ESlint is very specific and you will always have what looks like an error. to fix this you can conver the code to what it looks like above by removing the {} and the return statement 

// Render it to the device***********
// eslint-disable-next-line max-len
// any react native you create you must register at least one component to the application (albums- string must match project name), we also pass a function that returns the first component to render for our application.
AppRegistry.registerComponent('albums', () => App);
