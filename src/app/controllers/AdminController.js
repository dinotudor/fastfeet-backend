import Admin from '../models/Admin';

class AdminController {
  async store(req, res) {
    const userExists = await Admin.findOne({
      where: { email: req.body.email },
    });

    if (userExists) {
      return res.status(400).json({ error: 'Email already used' });
    }

    const { id, name, email } = await Admin.create(req.body);
    return res.json({
      id,
      name,
      email,
    });
  }
}

export default new AdminController();
