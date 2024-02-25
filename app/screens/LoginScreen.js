// LoginScreen.js
import React from "react";
import {
  TouchableOpacity,
  Text,
  View,
  StyleSheet,
  Linking,
} from "react-native";
const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
const CLIENT_ID = "664606c14f7d448db87db7e31d086416";
const REDIRECT_URI = "exp:/10.56.3.78:8081";
const RESPONSE_TYPE = "token";
const LoginScreen = ({ navigation }) => {
  const url = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`;
  const handleLinkPress = () => {
    Linking.openURL(url);
  };
  return (
    <TouchableOpacity onPress={handleLinkPress}>
      <Text style={styles.link}>Login To Spotify</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webview: {
    flex: 1,
  },
});

export default LoginScreen;
