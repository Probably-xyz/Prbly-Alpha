-- CreateTable
CREATE TABLE "Talent" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "bio" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "cv" TEXT NOT NULL,
    "instagram" TEXT,
    "twitter" TEXT,
    "facebook" TEXT,
    "linkedin" TEXT,
    "email" TEXT NOT NULL,

    CONSTRAINT "Talent_pkey" PRIMARY KEY ("id")
);
