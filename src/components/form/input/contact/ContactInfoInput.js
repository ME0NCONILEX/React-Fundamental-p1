
const ContactInfoInput = (props) => {

    return(
        <section>
            <h2>Kontaktuppgifter:</h2>
            <div>
                <input id="id" type="hidden" value={props.contactInfo.id} />
                <div>
                    <div>
                        <label htmlFor="email">Epost</label>
                        <input id="email" type="text" value={props.contactInfo.email} onChange = {(e) => props.onEmailChange(e)} />
                    </div>
                    <ul></ul>
                </div>
                <div>
                    <div>
                        <label htmlFor="phone">Telefon</label>
                        <input id="phone" type="text" value={props.contactInfo.phone} onChange = {(e) => props.onPhoneChange(e)} />
                    </div>
                    <ul></ul>
                </div>
            </div>
        </section>
    )
    
}

export default ContactInfoInput;