import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Artist } from '../artist.interface';
import { CreateArtistDto, UpdateArtistDto } from '../dto/artist.dto';

@Injectable()
export class ArtistsService {
  constructor(
    @InjectModel('Artist') private readonly artistModel: Model<Artist>,
  ) {}

  async getAllArtists(): Promise<Artist[]> {
    return await this.artistModel.find().exec();
  }

  async getArtistById(id: string): Promise<Artist> {
    const artist = await this.artistModel.findById(id).exec();
    if (!artist) {
      throw new NotFoundException('Artist not found');
    }
    return artist;
  }

  async createArtist(createArtistDto: CreateArtistDto): Promise<Artist> {
    const createdArtist = new this.artistModel(createArtistDto);
    return await createdArtist.save();
  }

  async updateArtist(
    id: string,
    updateArtistDto: UpdateArtistDto,
  ): Promise<Artist> {
    const updatedArtist = await this.artistModel
      .findByIdAndUpdate(id, updateArtistDto, { new: true })
      .exec();
    if (!updatedArtist) {
      throw new NotFoundException('Artist not found');
    }
    return updatedArtist;
  }

  async deleteArtist(id: string): Promise<Artist> {
    const deletedArtist = await this.artistModel.findByIdAndDelete(id).exec();
    if (!deletedArtist) {
      throw new NotFoundException('Artist not found');
    }
    return deletedArtist;
  }
}
