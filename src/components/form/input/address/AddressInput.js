import FormItem from "../../../../layout/FormItem"
import InputGroup from "../../../../layout/InputGroup"

const AddressInput = (props) => {    

    return(
        <>
            
            <FormItem>
                <InputGroup 
                    id="street"
                    label="Street address ex. Old street 1"
                    type="text"
                    value={props.address.street}
                    onChange={props.onStreetChange}

                />                
            </FormItem>
            <FormItem>            
                <InputGroup
                    id="zipCode"
                    label="Zipcode ex. (123 45)"
                    type="text"
                    value={props.address.zipCode}
                    onChange={props.onZipCodeChange} 
                 />                
                
                <InputGroup 
                    id="city"
                    label="City"
                    type="text"
                    value={props.address.city}
                    onChange={props.onCityChange}
                />
            </FormItem>
            <FormItem>
            <InputGroup
                    id="country"
                    label="Country"
                    type="text"
                    value={props.address.country}
                    onChange={props.onCountryChange}
                />

            </FormItem>            
        </>
    )
}

export default AddressInput