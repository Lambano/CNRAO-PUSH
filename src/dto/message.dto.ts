import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class MessageDto {
  @IsNotEmpty() @IsString() message: string;
  @IsString() user: string;
  @IsNotEmpty() @IsString() type: string;
  @IsNotEmpty() @IsString({ each: true }) ids: string[];
}
