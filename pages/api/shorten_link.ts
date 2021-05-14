import { connectToDatabase } from "./_connector";
import type { NextApiRequest, NextApiResponse } from "next";
import { DB_NAME, DB_COLLECTION } from "./api.constants";
import { DB_COLLECTION_OBJECT_TYPE } from "./api.types";

type ShortenLinkDataResponse = {
  short_link?: string;
  error?: string;
  error_description?: string;
};

export default async (
  req: NextApiRequest,
  res: NextApiResponse<ShortenLinkDataResponse>
) => {
  const db = await connectToDatabase();

  if (req.body !== "" && req.body.link !== undefined && req.body.link !== "") {
    const entry = await db
      .db(DB_NAME)
      .collection<DB_COLLECTION_OBJECT_TYPE>(DB_COLLECTION)
      .insertOne({ link: req.body.link });

    res.statusCode = 201;
    return res.json({
      short_link: `${process.env.VERCEL_URL}/r/${entry.insertedId}`,
    });
  }

  res.statusCode = 409;
  res.json({ error: "no_link_found", error_description: "No link found" });
};
