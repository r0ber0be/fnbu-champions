-- CreateTable
CREATE TABLE "FnbuEdition" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "ano" TEXT NOT NULL,
    "edicao" TEXT NOT NULL,
    "modo" INTEGER NOT NULL,
    "vencedor" VARCHAR(35),
    "premio" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "FnbuEdition_pkey" PRIMARY KEY ("id")
);
