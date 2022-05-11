import { prisma } from "@/lib/prisma";
import { getSession } from "next-auth/react";

export default async function handler(req, res) {
  const session = await getSession({ req });
  if (!session) {
    return res.status(401).json({ message: "Unauthorized " });
  }

  if (req.method === "POST") {
    try {
      const {
        name,
        headline,
        bio,
        image,
        cv,
        twitter,
        github,
        linkedin,
        otherLink,
        skills,
        title,
      } = req.body;

      const user = await prisma.user.findUnique({
        where: { email: session.user.email },
      });

      const talent = await prisma.talent.create({
        data: {
          image,
          headline,
          bio,
          title,
          name,
          cv,
          twitter,
          github,
          linkedin,
          otherLink,
          skills,
          userId: user.id,
        },
      });

      res.status(200).json(talent);
    } catch (e) {
      res.status(500).json({ message: "Something went wrong" });
    }
  }
  // HTTP method not supported!
  else {
    res.setHeader("Allow", ["POST"]);
    res
      .status(405)
      .json({ message: `HTTP method ${req.method} is not supported.` });
  }
}
