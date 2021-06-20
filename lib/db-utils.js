import { MongoClient } from "mongodb";

export async function connectDatabase() {
  const client = await MongoClient.connect(
    "mongodb+srv://tlipwei:MNIqLO9OJ9Utt4cN@cluster0.twqxc.mongodb.net/bovita?retryWrites=true&w=majority"
  );
  return client;
}

export async function getAllDocuments(client, collection) {
  const db = client.db();

  const documents = await db.collection(collection).find({}).toArray();

  return documents;
}

export async function getDocument(client, collection, id) {
  const db = client.db();

  const document = await db.collection(collection).findOne({ id: id });

  return document;
}
