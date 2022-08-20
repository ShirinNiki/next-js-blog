import { MongoClient } from "mongodb";
async function handler(req, res) {
  if (req.method === "POST") {
    const { email, name, message } = req.body;
    const databaseString = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_clustername}.kwxiuok.mongodb.net/${process.env.mongodb_database}?retryWrites=true&w=majority`;
    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !message ||
      message.trim() === ""
    ) {
      res.status(422).json({ message: "Invalid Input" });
      return;
    }
    const newMessage = {
      email,
      name,
      message,
    };
    let client;
    try {
      client = await MongoClient.connect(databaseString);
    } catch (error) {
      res.status(500).json({ message: "could not connect to db " });
    }
    const db = client.db();
    try {
      const result = await db.collection("messages").insertOne(newMessage);
      newMessage.id = result.insertedId;
    } catch (error) {
      res.status(500).json({ message: "storing message error " });
      return;
    }

    res
      .status(201)
      .json({ message: "Successfully stored data", message: newMessage });
  }
}
export default handler;
