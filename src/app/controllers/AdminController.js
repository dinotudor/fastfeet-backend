import Admin from '../models/Admin';

class AdminController {
  async update(req, res) {
    /*     const userExists = await Admin.findOne({
      where: { email: req.body.email },
    });

    if (userExists) {
      return res.status(400).json({ error: 'Email already used' });
    }
 */
    const { name, email, password_hash } = await Admin.create(req.body);
    return res.json({
      name,
      email,
      password_hash,
    });
  }
}

export default new AdminController();
