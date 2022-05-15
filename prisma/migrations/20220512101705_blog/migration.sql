-- CreateTable
CREATE TABLE "Blog" (
    "id" SERIAL NOT NULL,
    "category" TEXT NOT NULL,
    "author" TEXT NOT NULL,
    "intro" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "date" TEXT NOT NULL,

    CONSTRAINT "Blog_pkey" PRIMARY KEY ("id")
);
