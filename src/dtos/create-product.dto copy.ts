import { IsEmail, IsNotEmpty } from "class-validator"
export class CreateProductDto {
  @IsNotEmpty()
  name!: string

  @IsNotEmpty()
  color!: string

  @IsNotEmpty()
  materialProducts!: {productId: number, materialId: number, formula: string}[]

  

}