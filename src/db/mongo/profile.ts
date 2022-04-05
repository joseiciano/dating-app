import { Schema, model } from 'mongoose';

interface IProfile {
  pictures: String[];
  bio: String;
  tags: String[];
  prompts: { question: String; answer: String }[];
}

const profileSchema = new Schema<IProfile>(
  {
    pictures: {
      type: [String],
      default: [],
    },
    bio: {
      type: String,
    },
    tags: {
      type: [String],
      default: [],
    },
    prompts: {
      type: [
        {
          question: String,
          answer: String,
        },
      ],
      default: [],
    },
  },
  { timestamps: true },
);

const Profile = model<IProfile>('Profile', profileSchema);
export { Profile, IProfile };
