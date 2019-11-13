import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
    Container,
    Wrapper,
    CartContainer,
    Logo,
    Counter,
    LogoButton,
} from './styled';

export class Header extends Component {
    handleNavigation(page) {
        const { navigation } = this.props;
        console.log('cliquei');

        navigation.navigate(page);
    }

    render() {
        return (
            <Wrapper>
                <Container>
                    <LogoButton onPress={() => console.log('Click')}>
                        <Logo />
                    </LogoButton>
                    <CartContainer
                        onPress={() => this.handleNavigation('Cart')}
                    >
                        <Icon name="shopping-cart" color="#fff" size={24} />
                        <Counter>7</Counter>
                    </CartContainer>
                </Container>
            </Wrapper>
        );
    }
}
