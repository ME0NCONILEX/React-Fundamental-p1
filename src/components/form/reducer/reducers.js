import actionTypes from "../actions/action-types/actionTypes"

export const patientReducer = (state, action) => {
    switch(action.type){
        case actionTypes.BIRTH_DATE:
            return {...state, birthDate: action.payload}
        case actionTypes.FIRST_NAME:
            return {...state, firstName: action.payload}
        case actionTypes.LAST_NAME:
            return {...state, lastName: action.payload}
        case actionTypes.PNR:
            return {...state, pnr: action.payload}
        case actionTypes.USERNAME:
            return {
                ...state,
                appUser: {
                    ...state.appUser, username: action.payload
                }
            }
        case actionTypes.PASSWORD:
            return {
                ...state,
                appUser: {
                    ...state.appUser, password: action.payload
                }
            }
        case actionTypes.CONFIRM:
            return {
                ...state,
                appUser: {
                    ...state.appUser, confirm: action.payload
                }
            }
        case actionTypes.EMAIL:
            return{
                ...state,
                contactInfo: {
                    ...state.contactInfo, email: action.payload
                }
            }
        case actionTypes.PHONE:
            return {
                ...state,
                contactInfo: {
                    ...state.contactInfo, phone: action.payload
                }
            }
        case actionTypes.CITY:
            return {
                ...state,
                contactInfo: {
                    ...state.contactInfo,
                    address: {
                        ...state.contactInfo.address, city: action.payload
                    }
                }
            }
        case actionTypes.ZIP_CODE:
            return {
                ...state,
                contactInfo: {
                    ...state.contactInfo,
                    address: {
                        ...state.contactInfo.address, zipCode: action.payload
                    }
                }
            }
        case actionTypes.STREET:
            return {
                ...state,
                contactInfo: {
                    ...state.contactInfo,
                    address: {
                        ...state.contactInfo.address, street: action.payload
                    }
                }
            }
        default: return state
    }    
}

export const contactInfoReducer = (state, action) => {
    switch(action.type){
        case actionTypes.EMAIL:
            return {
                ...state, email: action.payload
            }
        case actionTypes.PHONE:
            return {
                ...state, phone: action.payload
            }
        default: return state;
    }
}

export const appUserReducer = (state, action) => {
    switch(action.type){
        case actionTypes.USERNAME:
            return {...state, username: action.payload}
        case actionTypes.PASSWORD:
            return {...state, password: action.payload}
        case actionTypes.CONFIRM:
            return {...state, confirm: action.payload}
        default: return state
    }
}

export const addressReducer = (state, action) => {    
    switch(action.type){
        case actionTypes.STREET:
            return {
                ...state,
                street: action.payload  
            }
        case actionTypes.ZIP_CODE:
            return {
                ...state, 
                zipCode: action.payload
            }
        case actionTypes.CITY:{
            return {
                ...state,
                city: action.payload
            }
        }
        default: return state        
    }
}