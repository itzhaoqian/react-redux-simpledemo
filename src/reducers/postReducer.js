const initialState = {};
export default function(state=initialState,action){
    switch(action.type){
        case 'FETCH_POSTS':
            return {
                ...state,
                newData:action.payload
            }
        case 'FETCH_NAME':
            return {
                ...state,
                newData:action.payload
            }
        default:
            return state;
    }
}