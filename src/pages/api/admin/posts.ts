// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { POSTS } from "@/constants";
import { IPost } from "@/interfaces";

function getPosts(req: NextApiRequest, res: NextApiResponse<IPost[] | { error: string }>) {
  try {
    res.status(200).json(POSTS);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error!" });
  }
}

function createPost(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { author, title, content } = req.body;
    POSTS.push({ id: POSTS.length + 1, author, title, content });

    res.status(201).send(POSTS);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error!" });
  }
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    getPosts(req, res);
  }

  if (req.method === "POST") {
    createPost(req, res);
  }
}
