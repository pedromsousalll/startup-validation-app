/*
  Warnings:

  - You are about to drop the column `name` on the `Idea` table. All the data in the column will be lost.
  - Added the required column `creatorId` to the `Idea` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `Idea` table without a default value. This is not possible if the table is not empty.
  - Made the column `role` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Idea" DROP COLUMN "name",
ADD COLUMN     "businessModel" TEXT,
ADD COLUMN     "competition" TEXT,
ADD COLUMN     "creatorId" INTEGER NOT NULL,
ADD COLUMN     "marketSize" TEXT,
ADD COLUMN     "problem" TEXT,
ADD COLUMN     "solution" TEXT,
ADD COLUMN     "stage" TEXT NOT NULL DEFAULT 'concept',
ADD COLUMN     "title" TEXT NOT NULL,
ALTER COLUMN "category" DROP NOT NULL,
ALTER COLUMN "currentResources" DROP NOT NULL,
ALTER COLUMN "problemSolved" DROP NOT NULL,
ALTER COLUMN "progress" DROP NOT NULL;

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "role" SET NOT NULL;

-- CreateTable
CREATE TABLE "VerificationToken" (
    "id" SERIAL NOT NULL,
    "token" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "type" TEXT NOT NULL DEFAULT 'email',

    CONSTRAINT "VerificationToken_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "VerificationToken_token_key" ON "VerificationToken"("token");

-- AddForeignKey
ALTER TABLE "Idea" ADD CONSTRAINT "Idea_creatorId_fkey" FOREIGN KEY ("creatorId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VerificationToken" ADD CONSTRAINT "VerificationToken_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
