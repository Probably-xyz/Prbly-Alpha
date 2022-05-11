import { prisma } from "@/lib/prisma";
import { getSession } from "next-auth/react";

export default async function handler(req, res) {
  const session = await getSession({ req });
  if (!session) {
    return res.status(401).json({ message: "Unauthorized " });
  }

  if (req.method === "POST") {
    try {
      const { image, name, bio, intro, size, industry, website } = req.body;

      const user = await prisma.user.findUnique({
        where: { email: session.user.email },
      });

      const company = await prisma.company.create({
        data: {
          image,
          name,
          bio,
          intro,
          size,
          industry,
          website,
          userId: user.id,
        },
      });

      res.status(200).json(company);
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
