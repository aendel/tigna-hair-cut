import { connectToDatabase } from "./_connector";
import type { NextApiRequest, NextApiResponse } from "next";

type DataResponse = {
  short_link?: string;
  error?: string;
  error_description?: string;
};

export default async (
  req: NextApiRequest,
  res: NextApiResponse<DataResponse>
) => {
  const db = await connectToDatabase();

  if (req.body !== "" && req.body.link !== undefined && req.body.link !== "") {
    const entry = await db
      .db("links_db")
      .collection("links_collection")
      .insertOne({ link: req.body.link });

    res.statusCode = 201;
    return res.json({
      short_link: `${process.env.VERCEL_URL}/r/${entry.insertedId}`,
    });
  }

  res.statusCode = 409;
  res.json({ error: "no_link_found", error_description: "No link found" });
};
