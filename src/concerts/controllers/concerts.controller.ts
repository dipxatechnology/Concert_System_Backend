import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { ConcertsService } from '../services/concerts.service';
import { CreateConcertDto, UpdateConcertDto } from '../dto/concert.dto';

@Controller('concerts')
export class ConcertsController {
  constructor(private readonly concertsService: ConcertsService) {}

  @Get()
  async getAllConcerts() {
    return await this.concertsService.getAllConcerts();
  }

  @Get(':id')
  async getConcertById(@Param('id') id: number) {
    return await this.concertsService.getConcertById(id);
  }

  @Post()
  async createConcert(@Body() createConcertDto: CreateConcertDto) {
    return await this.concertsService.createConcert(createConcertDto);
  }

  @Put(':id')
  async updateConcert(
    @Param('id') id: number,
    @Body() updateConcertDto: UpdateConcertDto,
  ) {
    return await this.concertsService.updateConcert(id, updateConcertDto);
  }

  @Delete(':id')
  async deleteConcert(@Param('id') id: number) {
    return await this.concertsService.deleteConcert(id);
  }
}
