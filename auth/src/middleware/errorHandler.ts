import { NextFunction , Response , Request} from "express"
import { CustomError } from "../errors/customError";
export const errorHandler = (error:Error,req: Request,res: Response ,next: NextFunction) => {

    if (error instanceof CustomError) {
        res.status(error.errorNumber).send(({ errors: error.formattedError2() }))
    } 
}