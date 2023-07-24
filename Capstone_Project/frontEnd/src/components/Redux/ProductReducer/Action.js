import {
    GET_ALL_UNIT_REQUEST,
    GET_ALL_UNIT_FAILURE,
    GET_ALL_UNIT_SUCCESS
} from "./ActionType";

import axios from "axios";

export const getAllUnitRequest=()=>({
    type:GET_ALL_UNIT_REQUEST,
});
export const getAllUnitFailure=()=>({
    type:GET_ALL_UNIT_FAILURE,
});
export const getAllUnitSuccess=(loadData)=>({
    type:GET_ALL_UNIT_SUCCESS,
    loadData,
});

export const getAllUnits=()=>(dispatch)=>{
    dispatch(getAllUnitRequest());
    axios
        .get("http://localhost:8080/units")
        .then((response) => dispatch(getAllUnitSuccess(response.data)))
        .catch(()=>dispatch(getAllUnitRequest()));
};