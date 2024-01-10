import { ValidationError } from  "express-validator";

export class ConnectionError extends Error {
     reason = "connection error"
    constructor(){
        super()
        Object.setPrototypeOf(this, ConnectionError.prototype);
    }
}