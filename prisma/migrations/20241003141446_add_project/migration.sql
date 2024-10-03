/*
  Warnings:

  - You are about to drop the column `project` on the `Transaction` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Transaction" DROP COLUMN "project",
ADD COLUMN     "projectId" INTEGER;

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "password" TEXT NOT NULL DEFAULT 'ioadaildmklndaklmdklwjo3i4u89u9woedjml;kdnm';

-- CreateTable
CREATE TABLE "Project" (
    "id" SERIAL NOT NULL,
    "maxBudget" INTEGER NOT NULL,
    "walletId" INTEGER NOT NULL,
    "subId" INTEGER NOT NULL,

    CONSTRAINT "Project_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Transaction" ADD CONSTRAINT "Transaction_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE SET NULL ON UPDATE CASCADE;
