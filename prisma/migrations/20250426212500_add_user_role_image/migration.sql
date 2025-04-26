/*
  Warnings:

  - You are about to drop the column `title` on the `Idea` table. All the data in the column will be lost.
  - Added the required column `category` to the `Idea` table without a default value. This is not possible if the table is not empty.
  - Added the required column `currentResources` to the `Idea` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Idea` table without a default value. This is not possible if the table is not empty.
  - Added the required column `problemSolved` to the `Idea` table without a default value. This is not possible if the table is not empty.
  - Added the required column `progress` to the `Idea` table without a default value. This is not possible if the table is not empty.
  - Added the required column `targetAudience` to the `Idea` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Idea` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Idea" DROP COLUMN "title",
ADD COLUMN     "category" TEXT NOT NULL,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "currentResources" TEXT NOT NULL,
ADD COLUMN     "image" TEXT,
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "problemSolved" TEXT NOT NULL,
ADD COLUMN     "progress" INTEGER NOT NULL,
ADD COLUMN     "targetAudience" TEXT NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "image" TEXT,
ADD COLUMN     "role" TEXT DEFAULT 'user';
