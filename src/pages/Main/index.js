import React from 'react';
import { Text, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as CartActions from '../../store/modules/Cart/actions';

import api from '../../services/api';

import {
    Container,
    Product,
    ProductImage,
    ProductTitle,
    ProductPrice,
    ProductButton,
    ProductAmount,
    Amount,
    AddText,
    GoToCart,
} from './styles';

class Main extends React.Component {
    state = {
        products: [],
    };

    componentDidMount() {
        this.getProducts();
    }

    handleNavigation(page) {
        const { navigation } = this.props;

        navigation.navigate(page);
    }

    getProducts = async () => {
        try {
            const response = await api.get('/products');

            const data = response.data.map(product => ({
                ...product,
            }));

            this.setState({
                products: data,
            });
        } catch (err) {
            console.log('Deu Erro');
        }
    };

    addProduct = id => {
        const { addToCartRequest } = this.props;

        addToCartRequest(id);
    };

    renderProduct = ({ item }) => {
        const { amount } = this.props;

        return (
            <Product>
                <ProductImage
                    source={{
                        uri: item.image,
                    }}
                />
                <ProductTitle>{item.title}</ProductTitle>
                <ProductPrice>{'R$ ' + item.price}</ProductPrice>
                <ProductButton onPress={() => this.addProduct(product.id)}>
                    <ProductAmount>
                        <Icon name="add-shopping-cart" color="#fff" size={20} />
                        <Amount>{amount[item.id] ? amount[item.id] : 0}</Amount>
                    </ProductAmount>

                    <AddText>Adicionar</AddText>
                </ProductButton>
            </Product>
        );
    };

    render() {
        const { products } = this.state;

        return (
            <Container>
                <FlatList
                    horizontal
                    data={products}
                    extraData={this.props}
                    keyExtractor={item => String(item.id)}
                    renderItem={this.renderProduct}
                />
                <GoToCart onPress={() => this.handleNavigation('Cart')}>
                    <AddText>Ir para o Carrinho</AddText>
                </GoToCart>
            </Container>
        );
    }
}

const mapStateToProps = state => ({
    amount: state.cart.reduce((amount, product) => {
        amount[product.id] = product.amount;
    }, {}),
});

const mapDispatchToProps = dispatch => {
    bindActionCreators(CartActions, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
