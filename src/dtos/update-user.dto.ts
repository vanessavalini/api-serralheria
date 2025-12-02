import { IsEmail, IsOptional } from "class-validator"
export class UpdateUserDto {
    @IsOptional()
    name?: string

    @IsOptional()
    @IsEmail()
    email?: string


    @IsOptional()
    CNPJ!: string

    @IsOptional()
    phone!: string

}