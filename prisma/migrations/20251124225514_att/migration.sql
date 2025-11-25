/*
  Warnings:

  - You are about to drop the `ListItem` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_MaterialToProduct` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the column `price` on the `Material` table. All the data in the column will be lost.
  - You are about to drop the column `height` on the `Orcament` table. All the data in the column will be lost.
  - You are about to drop the column `totalMaterialValue` on the `Orcament` table. All the data in the column will be lost.
  - You are about to drop the column `totalValue` on the `Orcament` table. All the data in the column will be lost.
  - You are about to drop the column `width` on the `Orcament` table. All the data in the column will be lost.
  - You are about to drop the column `unitPrice` on the `OrcamentItem` table. All the data in the column will be lost.
  - You are about to alter the column `quantity` on the `OrcamentItem` table. The data in that column could be lost. The data in that column will be cast from `Float` to `Int`.
  - Added the required column `totalPrice` to the `Orcament` table without a default value. This is not possible if the table is not empty.
  - Added the required column `height` to the `OrcamentItem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `productId` to the `OrcamentItem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `width` to the `OrcamentItem` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "_MaterialToProduct_B_index";

-- DropIndex
DROP INDEX "_MaterialToProduct_AB_unique";

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "ListItem";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "_MaterialToProduct";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "materialProduct" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "productId" INTEGER NOT NULL,
    "materialId" INTEGER NOT NULL,
    "formula" TEXT NOT NULL,
    CONSTRAINT "materialProduct_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "materialProduct_materialId_fkey" FOREIGN KEY ("materialId") REFERENCES "Material" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Material" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "code" TEXT NOT NULL DEFAULT '',
    "name" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "unit" TEXT NOT NULL,
    "unitPrice" REAL NOT NULL DEFAULT 0,
    "categoryId" INTEGER NOT NULL,
    CONSTRAINT "Material_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "MaterialCategory" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Material" ("categoryId", "color", "id", "name", "unit") SELECT "categoryId", "color", "id", "name", "unit" FROM "Material";
DROP TABLE "Material";
ALTER TABLE "new_Material" RENAME TO "Material";
CREATE TABLE "new_Orcament" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "totalPrice" REAL NOT NULL,
    "validadeDays" INTEGER NOT NULL DEFAULT 30,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "productId" INTEGER,
    CONSTRAINT "Orcament_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Orcament" ("createdAt", "id", "productId", "validadeDays") SELECT "createdAt", "id", "productId", "validadeDays" FROM "Orcament";
DROP TABLE "Orcament";
ALTER TABLE "new_Orcament" RENAME TO "Orcament";
CREATE TABLE "new_OrcamentItem" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "orcamentId" INTEGER NOT NULL,
    "productId" INTEGER NOT NULL,
    "width" REAL NOT NULL,
    "height" REAL NOT NULL,
    "quantity" INTEGER NOT NULL,
    "totalPrice" REAL NOT NULL,
    "materialId" INTEGER,
    CONSTRAINT "OrcamentItem_orcamentId_fkey" FOREIGN KEY ("orcamentId") REFERENCES "Orcament" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "OrcamentItem_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "OrcamentItem_materialId_fkey" FOREIGN KEY ("materialId") REFERENCES "Material" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_OrcamentItem" ("id", "materialId", "orcamentId", "quantity", "totalPrice") SELECT "id", "materialId", "orcamentId", "quantity", "totalPrice" FROM "OrcamentItem";
DROP TABLE "OrcamentItem";
ALTER TABLE "new_OrcamentItem" RENAME TO "OrcamentItem";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
