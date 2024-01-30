import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Feedback } from '../feedback.interface';
import { CreateFeedbackDto } from '../dto/feedback.dto';

@Injectable()
export class FeedbackService {
  constructor(
    @InjectModel('Feedback') private readonly feedbackModel: Model<Feedback>,
  ) {}

  async submitFeedback(
    createFeedbackDto: CreateFeedbackDto,
  ): Promise<Feedback> {
    const createdFeedback = new this.feedbackModel(createFeedbackDto);
    return await createdFeedback.save();
  }
}
