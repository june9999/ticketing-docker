import { CustomError } from "./customError";


export class ConnectionError extends CustomError {
    reason = "connection error"
    errorNumber=500;
    formattedError2 =()=>{return([{message:this.reason}])}

     constructor(){
        super('connection failed')
        Object.setPrototypeOf(this, ConnectionError.prototype);
    }
}