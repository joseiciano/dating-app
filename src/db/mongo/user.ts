import { Schema, model, Document } from 'mongoose';

interface IUser extends Document {
  phoneNumber: String;
  accountType: String;
  verified: Boolean;
  profiles: [
    {
      original: Schema.Types.ObjectId;
      copy: Schema.Types.ObjectId;
    },
  ];
}

const userSchema = new Schema<IUser>(
  {
    phoneNumber: {
      type: String,
      required: true,
    },
    accountType: {
      type: String,
      required: true,
      default: 'free',
    },
    verified: {
      type: Boolean,
      required: true,
      default: false,
    },
    profiles: {
      type: [
        {
          original: {
            type: Schema.Types.ObjectId,
            ref: 'profile',
          },
          copy: {
            type: Schema.Types.ObjectId,
            ref: 'profile',
          },
        },
      ],
    },
  },
  { timestamps: true },
);

const User = model<IUser>('User', userSchema);
export { User, IUser };
