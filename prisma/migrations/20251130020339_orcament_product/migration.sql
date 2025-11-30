/*
  Warnings:

  - You are about to drop the `OrcamentItem` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the column `productId` on the `Orcament` table. All the data in the column will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "OrcamentItem";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "OrcamentProduct" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "orcamentId" INTEGER NOT NULL,
    "productId" INTEGER NOT NULL,
    "width" REAL NOT NULL,
    "height" REAL NOT NULL,
    "quantity" INTEGER NOT NULL,
    "totalPrice" REAL NOT NULL,
    CONSTRAINT "OrcamentProduct_orcamentId_fkey" FOREIGN KEY ("orcamentId") REFERENCES "Orcament" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "OrcamentProduct_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Orcament" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "totalPrice" REAL NOT NULL,
    "validadeDays" INTEGER NOT NULL DEFAULT 30,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_Orcament" ("createdAt", "id", "totalPrice", "validadeDays") SELECT "createdAt", "id", "totalPrice", "validadeDays" FROM "Orcament";
DROP TABLE "Orcament";
ALTER TABLE "new_Orcament" RENAME TO "Orcament";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
