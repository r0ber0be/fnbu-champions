/*
  Warnings:

  - You are about to drop the column `premio` on the `FnbuEdition` table. All the data in the column will be lost.
  - Added the required column `premio` to the `Partida` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "FnbuEdition" DROP COLUMN "premio";

-- AlterTable
ALTER TABLE "Partida" ADD COLUMN     "premio" DOUBLE PRECISION NOT NULL;
