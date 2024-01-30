import { Controller, Get, Param } from '@nestjs/common';
import { OrdersService } from '../services/orders.service';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Get('users/:userId')
  async getOrdersByUserId(@Param('userId') userId: number) {
    return await this.ordersService.getOrdersByUserId(userId);
  }

  @Get(':id')
  async getOrderById(@Param('id') id: number) {
    return await this.ordersService.getOrderById(id);
  }
}
