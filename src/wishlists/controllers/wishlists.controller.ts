import { Controller, Post, Get, Delete, Param, Body } from '@nestjs/common';
import { WishlistsService } from '../services/wishlists.service';
import { CreateWishlistDto } from '../dto/wishlist.dto';

@Controller('wishlists')
export class WishlistsController {
  constructor(private readonly wishlistsService: WishlistsService) {}

  @Post()
  async addToWishlist(@Body() createWishlistDto: CreateWishlistDto) {
    return await this.wishlistsService.addToWishlist(
      createWishlistDto.userId,
      createWishlistDto.concertId,
    );
  }

  @Get('users/:userId')
  async getWishlistByUserId(@Param('userId') userId: number) {
    return await this.wishlistsService.getWishlistByUserId(userId);
  }

  @Delete(':userId/:concertId')
  async removeFromWishlist(
    @Param('userId') userId: number,
    @Param('concertId') concertId: number,
  ) {
    return await this.wishlistsService.removeFromWishlist(userId, concertId);
  }
}
