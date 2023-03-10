
const PatientInput = (props) => {
    return(
        <section>
            <h2>Patientuppgifter:</h2>
            <div>
                <input id="id" type="hidden" value={props.patient.id} />
                <div>
                    <div>
                        <label htmlFor="firstName">Förnamn</label>
                        <input id="firstName" type="text" value={props.patient.firstName} onChange={(e) => props.onFirstNameChange(e)} />                  
                    </div>
                    <ul></ul>
                </div>
                <div>
                    <div>
                        <label htmlFor="lastName">Efternamn</label>
                        <input id="lastName" type="text" value={props.patient.lastName} onChange={(e) => props.onLastNameChange(e)}/>
                    </div>
                    <ul></ul>
                </div>
                <div>
                    <div>
                        <label htmlFor="birthDate">Födelsedatum</label>
                        <input id="birthDate" type="date" value={props.patient.birthDate} onChange={(e) => props.onBirthDateChange(e)} />                        
                    </div>
                    <ul></ul>
                </div>
                <div>
                    <div>
                        <label htmlFor="pnr">Personnummer</label>
                        <input id="pnr" type="text" value={props.patient.pnr} onChange={(e) => props.onPnrChange(e)}/>                        
                    </div>
                    <ul></ul>
                </div>
                <div>
                    <div>
                        <label htmlFor="age">Ålder</label>
                        <input id="age" type="int" value={props.patient.age} onChange={(e) => props.onAgeChange(e)}/>
                    </div>
                    <ul></ul>
                </div>
            </div>            
        </section>
    )
}

export default PatientInput;