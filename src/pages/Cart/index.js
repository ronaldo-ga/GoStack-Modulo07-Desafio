import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as CartActions from '../../store/modules/Cart/actions';

import {
    Container,
    ProductContainer,
    ProductBox,
    ProductImage,
    Details,
    ProductName,
    ProductPrice,
    IconBox,
    InfoBox,
    AmountBox,
    AmountInput,
    FinalPrice,
    TotalTitle,
    TotalAmount,
    EndButton,
    EndButtomText,
} from './styles';
import { FlatList } from 'react-native-gesture-handler';

class Cart extends Component {
    handleNavigation(page) {
        const { navigation } = this.props;

        navigation.navigate(page);
    }

    renderProducts = ({ item }) => {
        return (
            <ProductContainer>
                <ProductBox>
                    <ProductImage
                        source={{
                            uri:
                                'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQMGfuoq6sAuNm8DHatTZuj-RQ7rBU5K41srkIYG-ObON8ibuE4',
                        }}
                    />
                    <Details>
                        <ProductName>Tênis de Caminhada Leve</ProductName>
                        <ProductPrice>R$ 179,90</ProductPrice>
                    </Details>
                    <IconBox>
                        <Icon name="delete-forever" color="#7159c1" size={35} />
                    </IconBox>
                </ProductBox>
                <InfoBox>
                    <AmountBox>
                        <Icon
                            name="add-circle-outline"
                            color="#7159c1"
                            size={25}
                        />
                        <AmountInput>3</AmountInput>
                        <Icon
                            name="remove-circle-outline"
                            color="#7159c1"
                            size={25}
                        />
                    </AmountBox>
                    <FinalPrice>R$ 355,70</FinalPrice>
                </InfoBox>
            </ProductContainer>
        );
    };

    render() {
        const { products, total } = this.props;

        return (
            <Container>
                <FlatList
                    vertical
                    renderItem={this.renderProducts}
                    data={products}
                    keyExtractor={item => item.id}
                />
                <TotalTitle>Total</TotalTitle>
                <TotalAmount>{'R$' + total}</TotalAmount>
                <EndButton style={{ marginBottom: 0 }}>
                    <EndButtomText>Finalizar Pedido</EndButtomText>
                </EndButton>
                <EndButton>
                    <EndButtomText
                        onPress={() => this.handleNavigation('Main')}
                    >
                        Voltar
                    </EndButtomText>
                </EndButton>
            </Container>
        );
    }
}

const mapStateToProps = state => ({
    products: state.cart.map(product => ({
        ...product,
        subtotal: product.price * product.amount,
    })),
    total: state.cart.reduce(
        (total, product) => total + product.price * product.amount
    ),
});

const mapDispatchToProps = dispatch =>
    bindActionCreators(CartActions, dispatch);

export default connect(mapDispatchToProps, mapStateToProps)(Cart);
