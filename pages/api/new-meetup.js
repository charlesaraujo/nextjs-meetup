// /api/new-meetup
import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;
    try {
      const client = await MongoClient.connect(
        `mongodb+srv://${process.env.USERDB}:${process.env.PASSWORDDB}@mecndev.1rxjx.mongodb.net/meetups?retryWrites=true&w=majority`
      );
      const db = client.db();

      const meetupCollection = db.collection("meetups");

      const result = await meetupCollection.insertOne(data);

      console.log(result);

      client.close();

      res.status(201).json({ message: "Meetup Inserted!" });
    } catch (error) {
      console.log(error);
    }
  }
}

export default handler;
