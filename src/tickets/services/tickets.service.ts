import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Ticket } from '../ticket.interface';
import { CreateTicketDto, UpdateTicketDto } from '../dto/ticket.dto';

@Injectable()
export class TicketsService {
  constructor(
    @InjectModel('Ticket') private readonly ticketModel: Model<Ticket>,
  ) {}

  async purchaseTicket(
    concertId: string,
    createTicketDto: CreateTicketDto,
  ): Promise<Ticket> {
    // Implement logic to purchase tickets for a specific concert
  }

  async getTicketsByUserId(userId: string): Promise<Ticket[]> {
    // Implement logic to get all tickets purchased by a user
  }

  async getTicketById(id: string): Promise<Ticket> {
    const ticket = await this.ticketModel.findById(id).exec();
    if (!ticket) {
      throw new NotFoundException('Ticket not found');
    }
    return ticket;
  }

  async updateTicket(
    id: string,
    updateTicketDto: UpdateTicketDto,
  ): Promise<Ticket> {
    const updatedTicket = await this.ticketModel
      .findByIdAndUpdate(id, updateTicketDto, { new: true })
      .exec();
    if (!updatedTicket) {
      throw new NotFoundException('Ticket not found');
    }
    return updatedTicket;
  }

  async cancelTicket(id: string): Promise<Ticket> {
    const canceledTicket = await this.ticketModel.findByIdAndDelete(id).exec();
    if (!canceledTicket) {
      throw new NotFoundException('Ticket not found');
    }
    return canceledTicket;
  }
}
