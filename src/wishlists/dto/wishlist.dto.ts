import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateWishlistDto {
  @IsNotEmpty()
  @IsNumber()
  userId: number;

  @IsNotEmpty()
  @IsNumber()
  concertId: number;
}
