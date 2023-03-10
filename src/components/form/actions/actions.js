import actionTypes from "./action-types/actionTypes"


const actionsCreators = {

    setBirthDateAction(value) {
        return {
            type: actionTypes.BIRTH_DATE,
            payload: value
        }
    }, 
    
    setFirstNameAction(value){
        return {
            type: actionTypes.FIRST_NAME,
            payload: value
        }
    },
    
    setLastNameAction(value){
        return {
            type: actionTypes.LAST_NAME,
            payload: value
        }
    },
    
    setPnrAction(value){
        return {
            type: actionTypes.PNR,
            payload: value
        }
    },
    
    setUsernameAction(value){
        return {
            type: actionTypes.USERNAME,
            payload: value
        }
    },

    setPasswordAction(value){
        return {
            type: actionTypes.PASSWORD,
            payload: value
        }
    },
    
    setConfirmPasswordAction(value){
        return {
            type: actionTypes.CONFIRM,
            payload: value
        }
    },
    
    setEmailAction(value){
        return {
            type: actionTypes.EMAIL,
            payload: value
        }
    },
    
    setPhoneAction(value){
        return {
            type: actionTypes.PHONE,
            payload: value
        }
    },
    
    setCityAction(value){
        return {
            type: actionTypes.CITY,
            payload: value
        }
    },
    
    setStreetAction(value){
        return {
            type: actionTypes.STREET,
            payload: value
        }
    },
    
    setZipCodeAction(value){
        return {
            type: actionTypes.ZIP_CODE,
            payload: value
        }
    }

}

export const {
    setBirthDateAction, 
    setCityAction, 
    setConfirmPasswordAction, 
    setEmailAction, 
    setFirstNameAction, 
    setLastNameAction, 
    setPasswordAction, 
    setPhoneAction, 
    setPnrAction, 
    setStreetAction, 
    setUsernameAction, 
    setZipCodeAction} = actionsCreators
    
export default actionsCreators;

