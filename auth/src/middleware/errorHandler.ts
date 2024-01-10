import { NextFunction , Response , Request} from "express"
import { RequestValidationError } from "../errors/validationError"
import { ConnectionError } from "../errors/connectionError"
import { ValidationError } from "express-validator"
export const errorHandler = (error:Error,req: Request,res: Response ,next: NextFunction) => {

    if (error instanceof RequestValidationError) {
      console.log(error)
        const formattedErrors = error.errors.map((error) => {
          if (error.type === 'field') {
            return { message: error.msg, field: error.path };
          }
        });
        return res.status(400).send({ errors: formattedErrors });
      }
    if (error instanceof ConnectionError){
        res.status(400).send(({ errors: [{message:error.reason}] }))
    } 
    res.status(400).send(({ errors: [{message:"unknown error"}] }))
}