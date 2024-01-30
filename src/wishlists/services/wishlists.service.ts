import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Wishlist } from '../wishlist.interface';
import { CreateWishlistDto } from '../dto/wishlist.dto';

@Injectable()
export class WishlistsService {
  constructor(
    @InjectModel('Wishlist') private readonly wishlistModel: Model<Wishlist>,
  ) {}

  async addToWishlist(createWishlistDto: CreateWishlistDto): Promise<void> {
    const { userId, concertId } = createWishlistDto;
    // Implement logic to add a concert to a user's wishlist
  }

  async getWishlistByUserId(userId: number): Promise<Wishlist[]> {
    // Implement logic to get a user's wishlist
  }

  async removeFromWishlist(
    createWishlistDto: CreateWishlistDto,
  ): Promise<void> {
    const { userId, concertId } = createWishlistDto;
    // Implement logic to remove a concert from a user's wishlist
  }
}
