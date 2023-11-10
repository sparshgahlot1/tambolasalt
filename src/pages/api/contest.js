import mongoose from "mongoose";
import { Contest } from "../../../models/Contest";
import { mongooseConnect } from "../../../lib/mongoose";

import cors from '../../../middleware/cors'

export default async function handle(req,res) {
    const {method} = req;

    await mongooseConnect();
    if(method === 'POST') {
        const {title,date,ticket,prizePool,entry} = req.body;
       const contestDoc = await Contest.create({
            title,date,ticket,prizePool,entry,
        })
        res.json(contestDoc);
    } else if (method === 'GET') {
        try {
          const contestDocs = await Contest.find(); // Fetch all contests from the database
          res.json(contestDocs);
        } catch (error) {
          res.status(500).json({ error: 'Internal Server Error' });
        }
    }

}