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
}

export default new RecipientsController();
