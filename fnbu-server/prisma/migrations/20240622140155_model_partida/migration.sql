/*
  Warnings:

  - You are about to drop the column `modo` on the `FnbuEdition` table. All the data in the column will be lost.
  - You are about to drop the column `vencedor` on the `FnbuEdition` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "FnbuEdition" DROP COLUMN "modo",
DROP COLUMN "vencedor";

-- CreateTable
CREATE TABLE "Partida" (
    "id" SERIAL NOT NULL,
    "modo" INTEGER NOT NULL,
    "vencedor" VARCHAR(35),
    "edicaoId" TEXT NOT NULL,

    CONSTRAINT "Partida_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Partida" ADD CONSTRAINT "Partida_edicaoId_fkey" FOREIGN KEY ("edicaoId") REFERENCES "FnbuEdition"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
