import {
  IsNotEmpty,
  IsNumber,
  IsString,
  IsOptional,
  IsDate,
} from 'class-validator';

export class CreateTicketDto {
  @IsNotEmpty()
  @IsNumber()
  concert_id: number;

  @IsNotEmpty()
  @IsNumber()
  user_id: number;

  @IsNotEmpty()
  @IsNumber()
  quantity: number;

  @IsNotEmpty()
  @IsNumber()
  price: number;

  @IsOptional()
  @IsString()
  payment_status?: string;

  @IsOptional()
  @IsDate()
  purchase_date?: Date;
}

export class UpdateTicketDto {
  @IsOptional()
  @IsNumber()
  concert_id?: number;

  @IsOptional()
  @IsNumber()
  user_id?: number;

  @IsOptional()
  @IsNumber()
  quantity?: number;

  @IsOptional()
  @IsNumber()
  price?: number;

  @IsOptional()
  @IsString()
  payment_status?: string;

  @IsOptional()
  @IsDate()
  purchase_date?: Date;
}
