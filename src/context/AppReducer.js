//reducer is a way to change state and send it back to application

export default (state, action) =>{

    switch(action.type) {

        case 'ADD_TRANSACTION':
            return {
                ...state,
                transactions: [action.payload, ...state.transactions]
            }

        case 'DELETE_TRANSACTION' :
            return {
                ...state,
                transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
            }

        default:
            return state;
    }
}