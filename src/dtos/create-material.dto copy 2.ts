import { IsEmail, IsNotEmpty } from "class-validator"
export class CreateMaterialDto {
  @IsNotEmpty()
  name!: string

  @IsNotEmpty()
  color!: string

  @IsNotEmpty()
  unit!: string

  
  @IsNotEmpty()
  unitPrice!: number

  @IsNotEmpty()
  categoryId!: number

  @IsNotEmpty()
  code!: number
  
}