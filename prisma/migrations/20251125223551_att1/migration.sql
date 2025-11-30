/*
  Warnings:

  - You are about to drop the column `materialId` on the `OrcamentItem` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_OrcamentItem" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "orcamentId" INTEGER NOT NULL,
    "productId" INTEGER NOT NULL,
    "width" REAL NOT NULL,
    "height" REAL NOT NULL,
    "quantity" INTEGER NOT NULL,
    "totalPrice" REAL NOT NULL,
    CONSTRAINT "OrcamentItem_orcamentId_fkey" FOREIGN KEY ("orcamentId") REFERENCES "Orcament" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "OrcamentItem_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_OrcamentItem" ("height", "id", "orcamentId", "productId", "quantity", "totalPrice", "width") SELECT "height", "id", "orcamentId", "productId", "quantity", "totalPrice", "width" FROM "OrcamentItem";
DROP TABLE "OrcamentItem";
ALTER TABLE "new_OrcamentItem" RENAME TO "OrcamentItem";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
