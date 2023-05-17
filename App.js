import { useFonts } from 'expo-font';
import RegisterScreen from './Screens/RegistrationScreen';
import LoginScreen from './Screens/LoginScreen';

export default function App() {

// Check whether fonts has been loaded
  const [fontsLoaded] = useFonts({
    'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
    'Roboto-Medium': require('./assets/fonts/Roboto-Medium.ttf'),
  });
  
  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <RegisterScreen/>
      {/* <LoginScreen/> */}
    </>
  );
}