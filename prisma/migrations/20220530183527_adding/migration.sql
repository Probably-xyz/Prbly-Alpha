-- CreateTable
CREATE TABLE "Applicant" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "bio" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "cv" TEXT NOT NULL,
    "twitter" TEXT NOT NULL,
    "linkedin" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "otherLink" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "applicationId" TEXT NOT NULL,

    CONSTRAINT "Applicant_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Applicant" ADD CONSTRAINT "Applicant_applicationId_fkey" FOREIGN KEY ("applicationId") REFERENCES "Post"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
