import {ValidationError} from 'yup';

interface Errors {
  [key: string]: string;
}

export default function getVAlidationErrors(err: ValidationError) {
  const validationErrors: Errors ={};

  err.inner.forEach(error => {
    validationErrors[error.path] = error.message;
  });

  return validationErrors;
}