import * as types from './actionTypes'
import axios from 'axios'
import { API_BASE_URL } from '../Keys'
import {mainGetCountriesData} from './actions'


function getEditRequest(){
    return {
        type : types.UPDATE_COUNTRY_REQUEST
    }
}

export function getEditSuccess(data){
    return {
        type : types.UPDATE_COUNTRY_SUCCESS,
        payload: data
    }
}

function getEditFailure(){
    return {
        type : types.UPDATE_COUNTRY_FAILURE
    }
}

 export function mainUpdateCountries(id,obj){
    return (dispatch) =>{
        dispatch(getEditRequest())
        console.log(obj)
        axios.patch(`${API_BASE_URL}${id}`,obj)
        .then(res=>{
            dispatch(mainGetCountriesData())
            console.log("resEdit",res)
        })
        .catch(err=>{
            dispatch(getEditFailure())
            console.log("error",err)
        })

    }

 }

