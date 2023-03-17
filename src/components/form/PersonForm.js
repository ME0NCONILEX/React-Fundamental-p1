import { useReducer } from "react";
import Form from "../../layout/Form";
import PersonInput from "./input/person/PersonInput";
import UserInput from "./input/user/UserInput"
import ContactInfoInput from "./input/contact/ContactInfoInput"
import AddressInput from "./input/address/AddressInput"
import actionsCreators from "./actions/actions";
import { personReducer } from "./reducer/reducers";

const PersonForm = (props) => {
    
    const initialState = {
        id: null,
        birthDate: "",
        firstName: "",
        lastName: "",
        pnr: "",
        appUser: {
            id: null,
            username: "",
            password: "",
            confirm: ""
        },
        contactInfo: {
            id: null,
            email: "",
            phone: "",
            address: {
                id: null,
                city: "",
                street: "",
                zipCode: ""
            }
        }
    }

    const [person, dispatch] = useReducer(personReducer, initialState);

    const handleUserNameChange = (e) => dispatch(actionsCreators.setUsernameAction(e.target.value))

    const handlePasswordChange = (e) => dispatch(actionsCreators.setPasswordAction(e.target.value))

    const handleConfirmChange = (e) => dispatch(actionsCreators.setConfirmPasswordAction(e.target.value))

    const handleBirthDateChange = (e) => dispatch(actionsCreators.setBirthDateAction(e.target.value))

    const handleFirstNameChange = (e) => dispatch(actionsCreators.setFirstNameAction(e.target.value))

    const handleLastNameChange = (e) => dispatch(actionsCreators.setLastNameAction(e.target.value))

    const handlePnrChange = (e) => dispatch(actionsCreators.setPnrAction(e.target.value))

    const handleEmailChange = (e) => dispatch(actionsCreators.setEmailAction(e.target.value))    

    const handlePhoneChange = (e) => dispatch(actionsCreators.setPhoneAction(e.target.value))

    const handleStreetChange = (e) => dispatch(actionsCreators.setStreetAction(e.target.value))

    const handleZipCodeChance = (e) => dispatch(actionsCreators.setZipCodeAction(e.target.value))

    const handleCityChange = (e) => dispatch(actionsCreators.setCityAction(e.target.value))

    return (
        <Form>
            <UserInput 
                user = {person.appUser}
                onUsernameChange={handleUserNameChange}
                onPasswordChange={handlePasswordChange}
                onConfirmChange={handleConfirmChange}
            />
            <PersonInput
                person = {person}
                onBirthDateChange={handleBirthDateChange}
                onFirstNameChange={handleFirstNameChange}
                onLastNameChange={handleLastNameChange}
                onPnrChange={handlePnrChange}                
            />
            <ContactInfoInput
                contactInfo = {person.contactInfo}
                onEmailChange = {handleEmailChange}
                onPhoneChange = {handlePhoneChange}
            />
            <AddressInput 
                address = {person.contactInfo.address}
                onStreetChange = {handleStreetChange}
                onZipCodeChange = {handleZipCodeChance}
                onCityChange = {handleCityChange}
            />
            <button>Submit</button>
        </Form>
    )

}

export default PersonForm;
