/*
  Warnings:

  - The `vencedor` column on the `FnbuEdition` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "FnbuEdition" DROP COLUMN "vencedor",
ADD COLUMN     "vencedor" JSONB;
