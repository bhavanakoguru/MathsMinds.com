import {
    GET_ALL_UNIT_REQUEST,
    GET_ALL_UNIT_FAILURE,
    GET_ALL_UNIT_SUCCESS
} from  "./ActionType";

 export const initialState = {
    unitData:[],
    error:"",
    loding:false,
};

const reducer = (state=initialState,action )=>{
    switch(action.type){
        case GET_ALL_UNIT_REQUEST:
        return {
            ...state,
            loding:true,
            error:""
        };
    case GET_ALL_UNIT_FAILURE:
        return {
            ...state,
            loding:false,
            error:"something went wrong",
        };
    case 'GET_ALL_UNIT_SUCCESS':
        return {
            ...state,
            loding:false,
            error:"",
            unitData:action.loadData,

        };
    default :
    return state;
    }
};
export default reducer;