import { IsString, IsNotEmpty } from 'class-validator';

export class SlotsCreateDto {
  @IsString()
  @IsNotEmpty({ message: 'name is required' })
  name: string;
}
