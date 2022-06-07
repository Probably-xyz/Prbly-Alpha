import { prisma } from "@/lib/prisma";
import { getSession } from "next-auth/react";

export default async function handler(req, res) {
  const session = await getSession({ req });
  if (!session) {
    return res.status(401).json({ message: "Unauthorized " });
  }

  if (req.method === "POST") {
    try {
      const { id } = req.body;

      const user = await prisma.talent.findUnique({
        where: { userId: session.user.id },
      });

      const post = await prisma.post.findUnique({
        where: { id },
      });

      const applicant = await prisma.applicant.create({
        data: {
          name: user.name,
          bio: user.bio,
          image: user.image,
          title: user.title,
          cv: user.cv,
          twitter: user.twitter,
          linkedin: user.linkedin,
          otherLink: user.otherLink,
          applicationId: post.id,
        },
      });

      res.status(200).json(applicant);
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
