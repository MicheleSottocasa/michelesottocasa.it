export interface User {
    username : string,
    email : string,
    password : string,
    role : string
}

export interface UnitUser extends User {
    id : string
}

export interface Users {
    [key : string] : UnitUser
}