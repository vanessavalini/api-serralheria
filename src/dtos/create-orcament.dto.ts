import { IsEmail, IsNotEmpty } from "class-validator"
export class CreateOrcamentDto {
  @IsNotEmpty()
  clientId!: number

  @IsNotEmpty()
  items!: Array<{
    productId: number
    width: number
    height: number
    quantity: number
  }>

}