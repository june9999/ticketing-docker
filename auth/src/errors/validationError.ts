import { ValidationError } from  "express-validator";
import { CustomError } from "./customError";

export class RequestValidationError extends CustomError {

    errorNumber=400;
    formattedError2 =()=>{
            return this.errors.map((error) => {
             if (error.type === 'field') {
               return { message: error.msg, field: error.path };
             }
             else{
                return { message: error.msg}
           }})}

    constructor(public errors: ValidationError[]){
        super('invalid request')
        Object.setPrototypeOf(this, RequestValidationError.prototype);
    }
}