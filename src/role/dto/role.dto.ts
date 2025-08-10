import { IsNotEmpty, isString, IsString } from 'class-validator';

export class RoleDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsString()
  description: string;
}
