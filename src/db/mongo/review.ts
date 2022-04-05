import { Schema, model } from 'mongoose';

interface IReview {
  freeResponse: String;
  ratings: {
    attractive: Number;
    mature: Number;
    smart: Number;
    trustworthy: Number;
    confidence: Number;
  };
  promptReviews: {
    question: String;
    answer: String;
    review?: String;
    rating: Number;
  }[];
}

const reviewSchema = new Schema<IReview>(
  {
    freeResponse: {
      type: String,
    },
    ratings: {
      type: {
        attractive: Number,
        mature: Number,
        smart: Number,
        trustworthy: Number,
        confidence: Number,
      },
      default: {
        attractive: 0,
        mature: 0,
        smart: 0,
        trustworthy: 0,
        confidence: 0,
      },
    },
    promptReviews: {
      type: [
        {
          question: String,
          answer: String,
          review: String,
          rating: String,
        },
      ],
    },
  },
  { timestamps: true },
);

const Review = model<IReview>('Review', reviewSchema);
export { Review, IReview };
