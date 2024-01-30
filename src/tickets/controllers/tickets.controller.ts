import {
  Controller,
  Post,
  Get,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { TicketsService } from '../services/tickets.service';
import { CreateTicketDto, UpdateTicketDto } from './dto/ticket.dto';

@Controller('tickets')
export class TicketsController {
  constructor(private readonly ticketsService: TicketsService) {}

  @Post(':id')
  async purchaseTicket(
    @Param('id') concertId: number,
    @Body() createTicketDto: CreateTicketDto,
  ) {
    return await this.ticketsService.purchaseTicket(concertId, createTicketDto);
  }

  @Get('users/:userId')
  async getTicketsByUserId(@Param('userId') userId: number) {
    return await this.ticketsService.getTicketsByUserId(userId);
  }

  @Get(':id')
  async getTicketById(@Param('id') id: number) {
    return await this.ticketsService.getTicketById(id);
  }

  @Put(':id')
  async updateTicket(
    @Param('id') id: number,
    @Body() updateTicketDto: UpdateTicketDto,
  ) {
    return await this.ticketsService.updateTicket(id, updateTicketDto);
  }

  @Delete(':id')
  async cancelTicket(@Param('id') id: number) {
    return await this.ticketsService.cancelTicket(id);
  }
}
