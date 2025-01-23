import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { method } = req;
    
    if (method === "POST") {
        // Process a POST request
        res.status(200).json({ name: "John Doe" });
    } else {
        // Handle any other HTTP method
        res.setHeader("Allow", ["POST"]);
        res.status(405).end(`Method ${method} Not Allowed`);
    }
}