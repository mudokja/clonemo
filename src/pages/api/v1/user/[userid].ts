import { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const id = req.query
  //console.log('api 요청');
  //console.log(id);
  res.status(200).json({ id:`${id.userid}`, name: 'John Doe' })
}