import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { ArtistsService } from '../services/artists.service';
import { CreateArtistDto, UpdateArtistDto } from '../dto/artist.dto';

@Controller('artists')
export class ArtistsController {
  constructor(private readonly artistsService: ArtistsService) {}

  @Get()
  async getAllArtists() {
    return await this.artistsService.getAllArtists();
  }

  @Get(':id')
  async getArtistById(@Param('id') id: number) {
    return await this.artistsService.getArtistById(id);
  }

  @Post()
  async createArtist(@Body() createArtistDto: CreateArtistDto) {
    return await this.artistsService.createArtist(createArtistDto);
  }

  @Put(':id')
  async updateArtist(
    @Param('id') id: number,
    @Body() updateArtistDto: UpdateArtistDto,
  ) {
    return await this.artistsService.updateArtist(id, updateArtistDto);
  }

  @Delete(':id')
  async deleteArtist(@Param('id') id: number) {
    return await this.artistsService.deleteArtist(id);
  }
}
