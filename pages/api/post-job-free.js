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
        title,
        description,
        type,
        benefits,
        location,
        category,
        salary,
        options,
        atsUrl,
      } = req.body;

      const user = await prisma.user.findUnique({
        where: { email: session.user.email },
      });

      const company = await prisma.company.findUnique({
        where: { userId: user.id },
      });

      const post = await prisma.post.create({
        data: {
          title,
          description,
          type,
          benefits,
          location,
          category,
          salary,
          options,
          atsUrl,
          featured: false,
          companyName: company.name,
          companyId: company.id,
          image: company.image,
        },
      });

      res.status(200).json(post);
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
