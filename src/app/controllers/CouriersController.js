import * as Yup from 'yup';

import Couriers from '../models/Couriers';

class CouriersController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      emai: Yup.email().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Courier Validation failed' });
    }

    const courier = await Couriers.create(req.body);
    return res.json(courier);
  }
}

export default new CouriersController();
