import Recipients from '../models/Recipients';

class RecipientsController {
  async store(req, res) {
    const {
      id,
      name,
      address,
      number,
      complement,
      city,
      postal,
      state,
      country,
    } = await Recipients.create(req.body);

    return res.json({
      id,
      name,
      address,
      number,
      complement,
      city,
      postal,
      state,
      country,
    });
  }

  async update(req, res) {
    const recipient = await Recipients.findByPk(req.params.id);

    if (!recipient) {
      return res.status(401).json({ error: 'Invalid recipient' });
    }

    await recipient.update(req.body);

    return res.json({ recipient });
  }
}

export default new RecipientsController();
