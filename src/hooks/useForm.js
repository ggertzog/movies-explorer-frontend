import { useState, useCallback, useEffect } from "react";
import isEmail from "validator/lib/isEmail";

export const useForm = (inputValues={}) => {
  const [values, setValues] = useState(inputValues);
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  const handleChange = (event) => {
    const input = event.target;
    const { value, name } = input;
  
    // Проверка пользовательских ошибок
    let inputErrors = {};
    if (name === 'name' && input.validity.patternMismatch) {
      inputErrors[name] = 'Имя должно содержать только латиницу, кириллицу.';
    } else if (name === 'email') {
      if (!isEmail(value)) {
        inputErrors[name] = 'Некорректый E-mail';
      }
    } else if (name === 'search' && value === '') {
        input.setCustomValidity('Нужно ввести ключевое слово.')
    } else {
        input.setCustomValidity('');
    }
  
    setValues({ ...values, [name]: value });
  
    // Очистка ошибок для данного поля
    setErrors((prevErrors) => {
      const newErrors = { ...prevErrors };
      delete newErrors[name];
      return newErrors;
    });
  
    // Обновление ошибок с учетом новых пользовательских ошибок
    setErrors((prevErrors) => ({ ...prevErrors, ...inputErrors }));
  };

  useEffect(() => {
    // Проверка встроенной валидности
    const form = document.querySelector('form');
    setIsValid(form.checkValidity());
  }, [values]);

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