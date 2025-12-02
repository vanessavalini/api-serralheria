import { IsEmail, IsOptional } from "class-validator"
export class UpdateProductDto {
  @IsOptional()
  name?: string

 @IsOptional()
  color!: string

  @IsOptional()
  materialProducts!: {productId: number, materialId: number, formula: string}[]
}