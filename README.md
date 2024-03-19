#ESTILIZAR TELAS COMO SE FOSSE NA WEB

*import styled from 'styled-components/native';
  -export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: ${({theme})=> theme.COLORS.GRAY_600};
  `;

  export const LoadIndicator = styled.ActivityIndicator.attrs (({ theme })=>({
    color: theme.COLORS.GREEN_700
    }))``;



#ADICIONAR FONTS GOOGLE FONT USANDO O EXPO

*INSTALAR FONT SELECIONADA
  -expo install expo-font @expo-google-fonts/nome da fonte
*IMPORTAR EM "APP.TSX  
  -import {useFonts, NOME DAS FONTES } from '@expo-google-fonts/roboto';
*LOGICA DE CARREGAMENTO
  - EXPORT DEFAULT FUNCTION APP(){
  useFonts({NOME DA FONTE 1, NOME DA FONTE 2});
}
*GARANTIR QUE AS FONTES SEJAM CARREGADAS

 -IMPORT {ActivityIndicator} from 'react-native';
 -EXPORT DEFAULT FUNCTION APP(){
  
 const [fontsLoaded] =  useFonts({NOME DA FONTE 1, NOME DA FONTE 2});  // return um booleano

 return ( 
   <ThemeProvider theme={theme}>
     {fontsLoaded ? <groups/> : <ActivityIndicator/>
    </ThemeProvider>
}




