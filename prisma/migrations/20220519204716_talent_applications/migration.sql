/*
  Warnings:

  - You are about to drop the column `github` on the `Talent` table. All the data in the column will be lost.
  - You are about to drop the column `headline` on the `Talent` table. All the data in the column will be lost.
  - You are about to drop the column `skills` on the `Talent` table. All the data in the column will be lost.
  - Added the required column `status` to the `Talent` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Talent" DROP COLUMN "github",
DROP COLUMN "headline",
DROP COLUMN "skills",
ADD COLUMN     "applicationId" TEXT,
ADD COLUMN     "status" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Talent" ADD CONSTRAINT "Talent_applicationId_fkey" FOREIGN KEY ("applicationId") REFERENCES "Post"("id") ON DELETE SET NULL ON UPDATE CASCADE;
