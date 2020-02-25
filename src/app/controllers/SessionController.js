import Users from '../models/Users';

class SessionController {
  async store(req, res) {
    // const { email, password } = req.body;
    // console.log(`EMAIL -> ${email} PASSWORD -> ${password}`);
    const user = await Users.findOne({ where: { email: req.body } });

    if (!user) {
      return res.status(401).json({ error: 'Not a user' });
    }

    return res.json({ message: 'Session created' });
  }
}

export default new SessionController();
