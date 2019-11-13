import styled from 'styled-components/native';
import { darken } from 'polished';

import colors from '../../styles/colors';

export const Container = styled.View`
    background: ${colors.dark};
    margin-top: auto;
`;

export const Product = styled.View`
    background: #fff;
    padding: 10px;
    margin: 15px;
    border-radius: 4px;
    width: 300px;
    height: 80%;
`;

export const ProductImage = styled.Image`
    height: 70%;
    width: 100%;
`;

export const ProductTitle = styled.Text`
    font-size: 18px;
    color: #333;
`;

export const ProductPrice = styled.Text`
    font-size: 25px;
    font-weight: bold;
    margin-top: auto;
    margin-bottom: 3px;
`;

export const ProductButton = styled.TouchableOpacity`
    background: ${colors.primary};
    flex-direction: row;
    align-items: center;
    border-radius: 4px;
`;

export const ProductAmount = styled.View`
    padding: 12px;
    background: ${darken(0.03, colors.primary)};
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
    flex-direction: row;
    align-items: center;
`;

export const Amount = styled.Text`
    font-size: 18px;
    color: white;
    margin-left: 4px;
    font-weight: 100;
`;

export const AddText = styled.Text`
    flex: 1;
    text-align: center;
    font-weight: bold;
    color: #fff;
    text-transform: uppercase;
`;
