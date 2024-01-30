import {
  IsNotEmpty,
  IsString,
  IsOptional,
  IsEmail,
  IsDate,
} from 'class-validator';

export class CreateFeedbackDto {
  @IsOptional()
  @IsNotEmpty()
  @IsString()
  user_id?: string;

  @IsNotEmpty()
  @IsString()
  message: string;

  @IsOptional()
  @IsEmail()
  email?: string;

  @IsNotEmpty()
  @IsDate()
  created_at: Date;
}
