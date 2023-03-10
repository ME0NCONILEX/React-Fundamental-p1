import { useReducer } from "react"
import UserInput from "./input/user/UserInput"
import Form from "../../layout/Form"
import { appUserReducer } from "./reducer/reducers"
import { setUsernameAction, setPasswordAction, setConfirmPasswordAction } from "./actions/actions"





const AppUserForm = (props) => {

    const initialState = {
        id: null,
        username: "",
        password: "",
        confirm: ""
    }

    const [user, dispatch] = useReducer(appUserReducer, initialState);

    const handleUserNameChange = (e) => dispatch(setUsernameAction(e.target.value))
    const handlePasswordChange = (e) => dispatch(setPasswordAction(e.target.value))
    const handleConfirmChange = (e) => dispatch(setConfirmPasswordAction(e.target.value))

    return(
        <Form>
            <UserInput 
                user = {user}
                onPasswordChange = {handlePasswordChange}
                onUsernameChange = {handleUserNameChange}
                onConfirmChange = {handleConfirmChange}
            />
            <button>Submit</button>
        </Form>
    )
}

export default AppUserForm;