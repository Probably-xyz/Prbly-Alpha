/*
  Warnings:

  - You are about to drop the column `Skills` on the `Talent` table. All the data in the column will be lost.
  - You are about to drop the column `Status` on the `Talent` table. All the data in the column will be lost.
  - Added the required column `status` to the `Talent` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Company" ADD COLUMN     "approved" BOOLEAN NOT NULL DEFAULT false,
ALTER COLUMN "industry" SET NOT NULL,
ALTER COLUMN "industry" SET DATA TYPE TEXT,
ALTER COLUMN "size" SET NOT NULL,
ALTER COLUMN "size" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "Post" ADD COLUMN     "approved" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "Talent" DROP COLUMN "Skills",
DROP COLUMN "Status",
ADD COLUMN     "skills" TEXT[],
ADD COLUMN     "status" TEXT NOT NULL;
