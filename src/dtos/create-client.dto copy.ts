import { IsEmail, IsNotEmpty } from "class-validator"
export class CreateClientDto {
  @IsNotEmpty()
  name!: string

  @IsNotEmpty()
  CPF!: string

  @IsNotEmpty()
  phone!: string

}