import { IsEmail, IsOptional } from "class-validator"
export class UpdateMaterialDto {
  @IsOptional()
  name?: string

 @IsOptional()
  color!: string

  @IsOptional()
  unitPrice!: number
}