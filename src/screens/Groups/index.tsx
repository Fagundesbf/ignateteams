//Modo 1
// import { StyleSheet, View, Text } from "react-native";

//Modo2
import { Container } from "./styles";
//Modo 2 ALIAS
// import * as S from  "./styles";


export  function Groups(){
    return (
        //Modo 1
        //     <View style={styles.container}>
        //         <Text style={styles.text}> Groups</Text>
        //     </View>

        //Modo 2
        // <Container>
        //     <Title> Groups</Title>
        // </Container>
          <Container>
            {/* <Title> Groups</Title> */}
        </Container>

        //Modo 2 AlIAS
        // <S.ContainerContainer>
        //     <S.Title> Groups</S.Title>
        // </S.Container>

    )}

//Modo 1
// const styles = StyleSheet.create({
//     container: {
//     },
//     text: { 
//         color:'#fff',
//         fontSize: 32
//     }
//   })