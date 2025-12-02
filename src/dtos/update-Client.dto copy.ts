import { IsEmail, IsOptional } from "class-validator"
export class UpdateClientDto {
    @IsOptional()
    name?: string

    @IsOptional()
    @IsEmail()
    email?: string


    @IsOptional()
    CPF!: string

    @IsOptional()
    phone!: string

}