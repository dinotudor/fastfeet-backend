import * as Yup from 'yup';

import Recipients from '../models/Recipients';

class RecipientsController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      address: Yup.string().required(),
      number: Yup.number().required(),
      complement: Yup.string(),
      city: Yup.string().required(),
      postal: Yup.number().required(),
      state: Yup.string().required(),
      country: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Invalid format' });
    }

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
    const schema = Yup.object().shape({
      name: Yup.string(),
      address: Yup.string(),
      number: Yup.number(),
      complement: Yup.string(),
      city: Yup.string(),
      postal: Yup.number(),
      state: Yup.string(),
      country: Yup.string(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Invalid format' });
    }

    const recipient = await Recipients.findByPk(req.params.id);

    if (!recipient) {
      return res.status(400).json({ error: 'Invalid recipient' });
    }

    await recipient.update(req.body);

    return res.json({ recipient });
  }

  async delete(req, res) {
    const recipient = await Recipients.findByPk(req.params.id);

    if (!recipient) {
      return res.status(400).json({ error: 'No such recipient found' });
    }

    recipient.destroy(req.params.id);

    return res.status(200).json({ message: 'Bye Bye Kansas!' });
  }
}

export default new RecipientsController();
