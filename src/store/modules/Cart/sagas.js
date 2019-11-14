import { all, select, put } from 'redux-saga/effects';
import { Alert } from 'react-native';

import api from '../../../services/api';

import { addToCartSuccess, updateAmountSuccess } from './actions';

function* addToCart({ id }) {
    const productExist = yield select(state =>
        state.cart.find(product => product.id === id)
    );

    const stock = yield select(api.get, `stock/${id}`);

    const stockAmount = stock.data.amount;
    const currentAmount = productExist ? productExist.amount : 0;
    const amount = currentAmount + 1;

    if (amount > stockAmount) {
        Alert.alert('Quantidade Soliciatada fora de estoque');
        return;
    }

    if (productExist) {
        yield put(updateAmountSuccess(id, amount));
    } else {
        const response = yield select(api.get, `/products/${id}`);

        const product = {
            ...response.data,
            amount: 1,
        };

        yield put(addToCartSuccess(product));
    }
}

function* updateAmount({ id, amount }) {
    if (amount <= 0) return;

    const stock = yield select(api.get, `/stock/${id}`);
    const stockAmount = stock.data.amount;

    if (amount > stockAmount) {
        Alert.alert('Quantidade solicitada fora de estoque');
        return;
    }

    yield put(updateAmountSuccess(id, amount));
}

export default all([
    takeLatest('@cart/ADD_REQUEST', addToCart),
    takeLatest('@cart/UPDATE_AMOUNT_REQUEST', updateAmount),
]);
