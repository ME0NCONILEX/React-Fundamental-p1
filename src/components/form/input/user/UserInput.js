
const UserInput = (props) => {
    return(
        <section>
            <h2>Användare:</h2>
            <div>
                <div>
                    <input id="id" type="hidden" value={props.user.id} />
                    <div>
                        <label htmlFor="username">Användarnamn</label>
                        <input id="username" type="text" value={props.user.username} onChange={(e) => props.onUsernameChange(e)} />
                    </div>
                    <ul></ul>                                
                </div>
                <div>
                    <div>
                        <label htmlFor="password">Lösenord</label>
                        <input id="password" type="password" value={props.user.password} onChange={(e) => props.onPasswordChange(e)} />
                    </div>
                </div>
                <div>
                    <div>
                        <label htmlFor="confirm">Bekräfta lösenord</label>
                        <input id="confirm" type="password" value={props.user.confirm} onChange={(e) => props.onConfirmChange(e)} />
                    </div>
                </div>                
            </div>
        </section>        
    )
}

export default UserInput;