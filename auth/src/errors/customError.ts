interface formatedErrorinfo{
    message:string
    field?:string
}

export abstract class CustomError extends Error {
    abstract errorNumber: number;

    // abstract  formattedError : ()  =>formatedErrorinfo[]
    // two type of writing 
    abstract  formattedError2 (): {
        message:string
        field?:string
    }[]
     
    constructor(msg:string){
        super(msg)
        Object.setPrototypeOf(this, CustomError.prototype);
    }
}