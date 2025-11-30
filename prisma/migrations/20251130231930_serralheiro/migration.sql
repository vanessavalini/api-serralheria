-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "CNPJ" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "email" TEXT,
    "phone" TEXT NOT NULL DEFAULT ''
);

-- CreateIndex
CREATE UNIQUE INDEX "User_CNPJ_key" ON "User"("CNPJ");
