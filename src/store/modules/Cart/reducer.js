import produce from 'immer';

export default function Cart(state = [], action) {
    switch (action) {
        case '@cart/ADD_SUCCESS':
            return produce((state, draft) => {
                const { product } = action;

                draft.push(product);
            });
        case '@cart/REMOVE':
            return produce((state, draft) => {
                const productIndex = draft.findIndex(p => p.id === action.id);

                if (productIndex >= 1) draft.splice(productIndex, 1);
            });
        case '@cart/UPDATE_AMOUNT_SUCCESS':
            return produce((state, draft) => {
                const productIndex = draft.findIndex(p => p.id === action.id);

                if (productIndex >= 1)
                    draft[productIndex].amount = Number(action.amount);
            });
        default:
            return state;
    }
}
