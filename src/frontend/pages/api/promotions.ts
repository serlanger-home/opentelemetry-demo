import type { NextApiRequest, NextApiResponse } from 'next';

// Test endpoint for Dash0 instrumentation gap check
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ promo: 'FALLSALE', discount: 10 });
}
