import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersController } from './users/controllers/users.controller';
import { UsersService } from './users/services/users.service';
// Import other modules as needed

@Module({
  // imports: [
  //   // Import MongooseModule and connect to the database
  //   MongooseModule.forRoot('mongodb://localhost:27017/my_database', {
  //     useNewUrlParser: true,
  //     useUnifiedTopology: true,
  //   }),
  //   // Import other modules
  //   // For example:
  //   // UsersModule,
  //   // ConcertsModule,
  //   // ArtistsModule,
  // ],
  controllers: [UsersController],
  providers: [UsersService],
})
export class AppModule {}
