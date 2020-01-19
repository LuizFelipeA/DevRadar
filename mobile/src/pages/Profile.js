import React from 'react';
import { View } from 'react-native';
import { WebView } from 'react-native-webview';

function Main({ navigation }){
    const githubUsername = navigation.getParam('github_username');

    return <WebView  style={{felx: 1}} source={{ uri: `http://github.com/${githubUsername}`}} />
}

export default Main;