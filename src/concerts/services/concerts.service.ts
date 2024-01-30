import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Concert } from '../concert.interface';
import { CreateConcertDto, UpdateConcertDto } from '../dto/concert.dto';

@Injectable()
export class ConcertsService {
  constructor(
    @InjectModel('Concert') private readonly concertModel: Model<Concert>,
  ) {}

  async getAllConcerts(): Promise<Concert[]> {
    return await this.concertModel.find().exec();
  }

  async getConcertById(id: string): Promise<Concert> {
    const concert = await this.concertModel.findById(id).exec();
    if (!concert) {
      throw new NotFoundException('Concert not found');
    }
    return concert;
  }

  async createConcert(createConcertDto: CreateConcertDto): Promise<Concert> {
    const createdConcert = new this.concertModel(createConcertDto);
    return await createdConcert.save();
  }

  async updateConcert(
    id: string,
    updateConcertDto: UpdateConcertDto,
  ): Promise<Concert> {
    const updatedConcert = await this.concertModel
      .findByIdAndUpdate(id, updateConcertDto, { new: true })
      .exec();
    if (!updatedConcert) {
      throw new NotFoundException('Concert not found');
    }
    return updatedConcert;
  }

  async deleteConcert(id: string): Promise<Concert> {
    const deletedConcert = await this.concertModel.findByIdAndDelete(id).exec();
    if (!deletedConcert) {
      throw new NotFoundException('Concert not found');
    }
    return deletedConcert;
  }
}
