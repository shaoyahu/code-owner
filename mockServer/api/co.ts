import express from 'express';
import { page } from './mockData.ts';

const router = express.Router();

router.get('/page/:id', async (_, res) => {
  try {
    res.json({
      code: 0,
      msg: 'success',
      data: page
    });
  } catch (e) {
    res.send(e);
  }
});

export default router;