import { ObjectID } from "mongodb";
import { NextApiRequest, NextApiResponse } from "next";
import { DB_COLLECTION, DB_NAME } from "./api.constants";
import { DB_COLLECTION_OBJECT_TYPE } from "./api.types";
import { connectToDatabase } from "./_connector";

export default async (req: NextApiRequest, res: NextApiResponse<string>) => {
  const queryId = req.query.id as string;
  const db = await connectToDatabase();

  const entry = await db
    .db(DB_NAME)
    .collection<DB_COLLECTION_OBJECT_TYPE>(DB_COLLECTION)
    .findOne({ _id: new ObjectID(queryId) });

  if (entry !== null) {
    return res.redirect(301, entry.link);
  }

  return res.redirect(301, "/");
};
