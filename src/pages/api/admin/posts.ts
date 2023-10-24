import type { NextApiRequest, NextApiResponse } from "next";
import { IPost } from "@/interfaces";
import prisma from "../../../../lib/prisma";

async function getPosts(req: NextApiRequest, res: NextApiResponse<IPost[] | { error: string }>) {
  try {
    const posts = await prisma.post.findMany();
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error!" });
  }
}

function createPost(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { author, title, content } = req.body;
    const newPost = prisma.post.create({ data: { author, title, content } });

    res.status(201).send(newPost);
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
