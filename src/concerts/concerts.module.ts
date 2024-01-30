import { Module } from '@nestjs/common';
import { ConcertsController } from './controllers/concerts.controller';
import { ConcertsService } from './services/concerts.service';

@Module({
  controllers: [ConcertsController],
  providers: [ConcertsService],
})
export class ConcertsModule {}
