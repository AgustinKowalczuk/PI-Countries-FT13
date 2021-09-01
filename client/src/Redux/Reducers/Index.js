
//
const initialState = {
    country_Name:[],
    activities: [],
    countries: [],
    country_Detail:{},
    country_id3Code:[],
}

export default function rootReducer(state=initialState,action){
    switch (action.type){
        case "GET_COUNTRIES":{
            return {
                ...state,
                countries:action.payload
            }
        }
        case "GET_COUNTRY":{
            return {
                ...state,
                countries: action.payload
            }
        }
        case "GET_COUNTRY_DETAIL":{
            return {
                ...state,
                country_Name:action.payload,
                country_Detail:action.payload
            }
        }
        case "GET_ACTIVITIES":{
            return{
                ...state,
                activities: action.payload
            }
        }
        case "POST_ACTIVITY":{
            return{
                ...state,
                country_id3Code: action.payload
            }
        }
        case "ORDER_ABC":{
            return{
                ...state,
                countries: action.payload
            }
        }
        case "ORDER_POPULATION":{
            return{
                ...state,
                countries: action.payload
            }
        }
        case "FILTER_REG":{
            return{
                ...state,
                countries: action.payload
            }
        }
        case "CHANGE_COUNTRIES":{
            return{
                ...state,
                countries: action.payload
            }
        }
        default:
            return state;
    }
}