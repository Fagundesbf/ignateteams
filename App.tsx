//ThemeProvider \\
import { ThemeProvider } from "styled-components";

//Theme 
import theme from './src/theme';

//FONT 
import {useFonts, Roboto_400Regular, Roboto_700Bold} from '@expo-google-fonts/roboto';

//LOADING
import { Loading } from "@components/Loading";

//StatusBar
import { StatusBar } from "react-native";


import { Groups } from "@screens/Groups"

export default function App() {

  const [fontsLoaded] = useFonts({Roboto_400Regular, Roboto_700Bold});

  return (
    <ThemeProvider theme={theme}>
       <StatusBar barStyle="light-content"
       backgroundColor="transparent"
       translucent
           />
       {fontsLoaded ? <Groups/> : <Loading/>}

    </ThemeProvider>
    );
  }
