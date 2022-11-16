export interface User{
    id:string;
    email:string;
    password?:string;
    role:string;
}

export enum Role{
    USER="USER",
    ADMIN="ADMIN"
}


export interface Validation{
    ctrl:string,
    chcks:Condition[]
}

export interface Condition{
    chck:string,
    msg:string
    
}

