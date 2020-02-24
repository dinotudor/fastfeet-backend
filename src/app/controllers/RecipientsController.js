import Recipients from '../models/Recipients';

class RecipientsController {
  async store(req, res) {
    const recipient = await Recipients.create(req.body);

    return res.json(recipient);
  }
}

export default new RecipientsController();
