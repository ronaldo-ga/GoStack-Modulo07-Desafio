import styled from 'styled-components/native';

export const Container = styled.View`
    margin-top: auto;
    margin-right: auto;
    margin-left: auto;
    margin-bottom: 15px;
    background-color: #fff;
    border-radius: 4px;
    width: 90%;
    height: 88%;
    justify-content: center;
    align-items: center;
`;

export const ProductContainer = styled.View`
    padding: 15px;
    width: 100%;
    height: 200px;
`;

export const ProductBox = styled.View`
    display: flex;
    flex-direction: row;
    align-content: space-between;
    margin-bottom: 5px;
`;

export const ProductImage = styled.Image`
    width: 30%;
    height: 80px;
`;

export const Details = styled.View`
    flex-direction: column;
    text-align: left;
    margin-left: 5px;
    width: 58%;
`;

export const ProductName = styled.Text`
    font-size: 18px;
`;

export const ProductPrice = styled.Text`
    font-size: 22;
    font-weight: bold;
`;

export const IconBox = styled.View`
    width: 10%;
    justify-content: center;
    align-items: center;
`;

export const InfoBox = styled.View`
    background-color: #eee;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
`;

export const AmountBox = styled.View`
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px 4px;
    border-radius: 4px;
`;

export const AmountInput = styled.TextInput`
    border: 1px solid #bebebe;
    border-radius: 4px;
    height: 64%;
    width: 50px;
    background-color: #fff;
    margin: 2px;
    font-size: 13px;
    align-self: center;
`;

export const FinalPrice = styled.Text`
    font-size: 25px;
    font-weight: bold;
    text-align: right;
    align-self: center;
    margin-right: 5px;
`;

export const TotalTitle = styled.Text`
    text-transform: uppercase;
    font-size: 18px;
    color: #b7b7b7;
`;

export const TotalAmount = styled.Text`
    font-size: 26px;
    font-weight: bold;
`;

export const EndButton = styled.TouchableOpacity`
    background-color: #7159c1;
    width: 90%;
    height: 50px;
    margin: 8px;
    border-radius: 4px;
    align-items: center;
    justify-content: center;
`;

export const EndButtomText = styled.Text`
    font-size: 16px;
    font-weight: bold;
    text-transform: uppercase;
    color: #fff;
`;
