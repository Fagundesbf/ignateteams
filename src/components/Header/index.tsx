import { Container, Logo } from './styles';

import LogoImage from '@assets/logo.png';

export function Header(){

    return(
        <Container>
            <Logo source={LogoImage}/>
        </Container>
    )
}