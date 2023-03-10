import { useReducer } from "react"
import Form from "../../layout/Form"
import ContactInfoInput from "./input/contact/ContactInfoInput"
import { contactInfoReducer } from "./reducer/reducers"
import { setEmailAction, setPhoneAction } from "./actions/actions"

const ContactInfoForm = (props) => {
    
    const initialState = {
        id: null,
        email: "",
        phone: ""
    }

    const [contactInfo, dispatch] = useReducer(contactInfoReducer, initialState);

    const handleEmailChange = (e) => dispatch(setEmailAction(e.target.value))
    const handlePhoneChange = (e) => dispatch(setPhoneAction(e.target.value))

    return (
        <Form>
            <ContactInfoInput 
                contactInfo = {contactInfo}
                onEmailChange = {handleEmailChange}
                onPhoneChange = {handlePhoneChange}
            />
            <button>Submit</button>
        </Form>
    )

}

export default ContactInfoForm