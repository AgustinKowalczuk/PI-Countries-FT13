const initialState = {
    country_Name:[],
    activity: [],
    countries: [],
    country_Detail:{},
}

export default function rootReducer(state=initialState,action){
    switch (action.type){
        default:
            return state;
    }
}