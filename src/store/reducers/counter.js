import * as actionTypes from '../../actions';

const initialState = {
    counter: 0
};

const reducer = (state = initialState, action) => {
    console.log('state:', state);
    switch (action.type) {
        case actionTypes.INCREMENT:
            return { ...state, counter:state.counter + 1};

        case actionTypes.DECREMENT:
            return { ...state, counter:state.counter - 1}; 
        
        case actionTypes.ADD:
            return { ...state, counter:state.counter + action.value};    

        case actionTypes.REMOVE:
            return { ...state, counter:state.counter - action.value};
    
    }
    console.log('state1:', state);
    return state;

}

export default reducer;


