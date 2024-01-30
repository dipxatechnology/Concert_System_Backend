import { Controller, Post, Body } from '@nestjs/common';
import { FeedbackService } from '../services/feedback.service';
import { CreateFeedbackDto } from '../dto/feedback.dto';

@Controller('feedback')
export class FeedbackController {
  constructor(private readonly feedbackService: FeedbackService) {}

  @Post()
  async submitFeedback(@Body() createFeedbackDto: CreateFeedbackDto) {
    return await this.feedbackService.submitFeedback(createFeedbackDto);
  }
}
