import { BUY_CAKE, RESTOCK_CAKES } from './../constants/CakeConstants';
const initialState = {
    cakes: 10
    //da se dodade varijabla koja 
    //koa ke se klikne poveke torti
    //nego sto ima da se prikaze poraka za greska
    //pr. klik na buy 3 cakes a ima samo 2
    // poraka: not Enough Cakes only 2 cakes left
}

const CakeReducer = (state = initialState, action) => {

    switch (action.type) {

        case BUY_CAKE:
            return {
                ...state,
                cakes: state.cakes - action.payload // 10 - 1
            }

        case RESTOCK_CAKES:
            return {
                ...state,
                cakes: state.cakes + action.payload
            }

        default: return state;
    }
}

export default CakeReducer;