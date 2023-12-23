import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { AdminsController } from './admins/admins.controller';
import { EventsController } from './events/events.controller';

@Module({
  imports: [],
  controllers: [AppController, UsersController, AdminsController, EventsController],
  providers: [AppService],
})
export class AppModule {}
