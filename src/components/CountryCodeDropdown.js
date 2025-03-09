import { Field } from "formik";
import countryCodes from "./CountryCodes.json"

const CountryCodeDropdown = (name) => (
    <Field as="select" name={name}>
        <option value="">Select</option>
        {countryCodes.map((code) => (
            <option key={code.dial_code} value={code.dial_code}>
                {code.name} ({code.dial_code})
            </option>
        ))}
    </Field>
)

export default CountryCodeDropdown;