import React from 'react';
import { Text, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

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
} from './styles';

export class Main extends React.Component {
    state = {
        products: [],
    };

    componentDidMount() {
        this.getProducts();
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

    addProduct = product => {
        console.log('click');
    };

    renderProduct = ({ item }) => {
        return (
            <Product>
                <ProductImage
                    source={{
                        uri: item.image,
                    }}
                />
                <ProductTitle>{item.title}</ProductTitle>
                <ProductPrice>{'R$ ' + item.price}</ProductPrice>
                <ProductButton onPress={() => this.addProduct(item)}>
                    <ProductAmount>
                        <Icon name="add-shopping-cart" color="#fff" size={20} />
                        <Amount>{item.amount ? item.amount : 0}</Amount>
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
                    keyExtractor={item => String(item.id)}
                    renderItem={this.renderProduct}
                />
            </Container>
        );
    }
}

export default Main;
