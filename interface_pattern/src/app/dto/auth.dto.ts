export interface SignupRequestDto {
    readonly login: string
    readonly userRole: string
}

export interface LoginRequestDto {
    readonly login: string
}

// export interface LoginDto {
//     readonly id: number
// }