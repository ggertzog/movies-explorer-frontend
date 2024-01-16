import { useState, useCallback } from "react";
import isEmail from "validator/lib/isEmail";

export const useForm = (inputValues={}) => {
    const [values, setValues] = useState(inputValues);
    const [errors, setErrors] = useState({});
    const [isValid, setIsValid] = useState(false);

    const handleChange= (event) => {
        const input = event.target;
        const {value, name} = input;

        if(name === 'name' && input.validity.patternMismatch) {
            input.setCustomValidity(
                'Имя должно содержать только латиницу, кириллицу.'
            );
        } else {
            input.setCustomValidity('');
        }
      
        if (name === 'email') {
            if (!isEmail(value)) {
                input.setCustomValidity('Некорректый E-mail');
            } else {
                input.setCustomValidity('');
            }
        }

        if(name === 'search' && input.value === '') {
            input.setCustomValidity(
                'Нужно ввести ключевое слово.'
            )
        } else {
            input.setCustomValidity('');
        }

        setValues({...values, [input.name]: input.value});
        setErrors({...errors, [name]: input.validationMessage});
        setIsValid(input.closest('form').checkValidity());
    };

    const resetForm = useCallback(
        (newValues = {}, newErrors = {}, newIsValid = false) => {
            setValues(newValues);
            setErrors(newErrors);
            setIsValid(newIsValid);
        },
        [setValues, setErrors, setIsValid]
    );

    return {values, errors, isValid, handleChange, resetForm, setIsValid}
}

export default useForm;