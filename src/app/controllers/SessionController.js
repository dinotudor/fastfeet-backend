// import jwt from 'jsonwebtoken';

import User from '../models/User';

class SessionController {
  async store(req, res) {
    const { email, password } = req.body;
    console.log(req.body);
    // console.log(`EMAIL -> ${email} PASSWORD -> ${password}`);
    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(401).json({ error: 'Not a user' });
    }

    if (!(await user.checkPassword(password))) {
      return res.status(401).json({ error: 'password do not match' });
    }

    const { name } = user;

    return res.json({
      user: {
        name,
        email,
      } /* ,
      token: jwt.sign({ name }, '0f0bc08b4ee6413f434f83a59afb49d6', {
        expiresIn: '7d',
      }), */,
    });
  }
}
export default new SessionController();
