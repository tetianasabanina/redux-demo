
const initialState = {
    counter:100
}
/*const reducer = (state=initialState, action) => {
    if (action.type==='INCREMENT') {
        return {
            ...state,
            counter:state.counter + 1
        }
    }
    if (action.type==='DECREMENT') {
        return {
            ...state,
            counter:state.counter - 1
        }
    }
    if (action.type==='ADD5') {
        return {
            ...state,
            counter:state.counter + action.value
        }
    }
    if (action.type==='SUBSTRACT5') {
        return {
            ...state,
            counter:state.counter - action.value
        }
    }
    return state;
}*/

const reducer = (state=initialState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {...state, counter: state.counter + 1};
        case 'DECREMENT':
            return {...state, counter: state.counter - 1};
        case 'ADD':
            return {...state, counter: state.counter + action.value};
  
        case 'SUBSTRACT':
            return {...state, counter: state.counter - action.value};
           
    }
    return state;
}

export default reducer;