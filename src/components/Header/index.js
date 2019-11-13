import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Wrapper, CartContainer, Logo, Counter } from './styled';

export class Header extends Component {
    handleNavigation() {
        const { navigation } = this.props;

        navigation.navigate('Cart');
    }

    render() {
        return (
            <Wrapper>
                <Container>
                    <Logo />
                    <CartContainer onPress={() => console.log('Cliquei')}>
                        <Icon name="shopping-cart" color="#fff" size={24} />
                        <Counter>7</Counter>
                    </CartContainer>
                </Container>
            </Wrapper>
        );
    }
}
