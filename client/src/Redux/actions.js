import * as types from './actionTypes'
import axios from 'axios'
import { API_BASE_URL } from '../Keys'



function getCountriesRequest(){
    return {
        type : types.GET_COUNTRIES_REQUEST
    }
}

export function getCountriesSuccess(data){
    return {
        type : types.GET_COUNTRIES_SUCCESS,
        payload: data
    }
}

function getCountriesFailure(){
    return {
        type : types.GET_COUNTRIES_FAILURE
    }
}

 export function mainGetCountriesData(){
    return (dispatch) =>{
        dispatch(getCountriesRequest())
        axios.get(API_BASE_URL)
        .then(res=>{
            // console.log(res.data)
            dispatch(getCountriesSuccess(res.data))
        })
        .catch(err=>{
            console.log("error",err)
        })

    }
}

export function deleteCountryData(id){
    return (dispatch) => {
        axios.delete(`${API_BASE_URL}${id}`)
        .then(res=>{
            dispatch(mainGetCountriesData())
        })
        .catch(err=>{
            console.log("delete request Error")
        })
    }
}


