import { Router } from 'express';
import { User } from '../db/mongo/user';

const userRouter = Router();

userRouter.get('/ping', (req, res) => {
  res.status(200).send({ msg: 'Pong' });
});

userRouter.get('/all', async (req, res) => {
  res.send(await User.find({}));
});

userRouter.post('/newUser', async (req, res) => {
  try {
    const { phoneNumber } = req.body;

    const exists = await User.findOne({ phoneNumber });

    if (exists) {
      throw new Error('User already exists');
    }

    const newUser = new User({
      phoneNumber,
    });

    const retNewUser = await newUser.save();
    res.status(200).send(retNewUser);
  } catch (err) {
    res.status(400).send(err);
  }
});

export { userRouter };
