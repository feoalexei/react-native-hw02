import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground source={require("./assets/images/bg.png")} style={styles.imageBg}>
        <View style={styles.signWindow}></View> 
      </ImageBackground>

      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  imageBg: {
    flex: 1,
    justifyContent: 'center',
    resizeMode: 'cover',
  },
  signWindow: {
    backgroundColor: '#fff',
    width: '100%',
    height: 422,
    borderTopLeftRadius: 25,  
    borderTopRightRadius: 25,  
  }
});
