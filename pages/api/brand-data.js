import { connectDatabase, getAllDocuments } from "../../lib/db-utils";

async function handler(req, res) {
  if (req.method === "GET") {
    let client;
    try {
      client = await connectDatabase();
    } catch (error) {
      res.status(500).json({ message: "Connection to database failed" });
      return;
    }

    let allDocuments;
    try {
      allDocuments = await getAllDocuments(client, "brand_updated");
    } catch (error) {
      client.close();
      res.status(500).json({ message: "Error retrieveing documents" });
      return;
    }

    client.close();
    res.status(200).json({ message: allDocuments });
  }

  if (req.method === "POST") {
    const { id, isLike } = req.body;
    let client;
    try {
      client = await connectDatabase();
    } catch (error) {
      res.status(500).json({ message: "Connection to database failed" });
      return;
    }

    try {
      if (isLike === true) {
        await client
          .db()
          .collection("brand_updated")
          .updateOne({ id: id }, { $inc: { likes: -1 } });
        await client
          .db()
          .collection("users")
          .updateOne({ name: "john" }, { $pull: { likes: id } });
      } else {
        await client
          .db()
          .collection("brand_updated")
          .updateOne({ id: id }, { $inc: { likes: +1 } });
        await client
          .db()
          .collection("users")
          .updateOne({ name: "john" }, { $push: { likes: id } });
      }
    } catch (e) {
      res.status(500).json({ message: "Error updating" });
      return;
    }

    client.close();
    res.status(200).json({ message: "all good in updating state" });
  }
}

export default handler;
