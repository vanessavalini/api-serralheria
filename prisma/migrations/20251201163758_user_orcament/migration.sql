/*
  Warnings:

  - Added the required column `userId` to the `Orcament` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Orcament" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "totalPrice" REAL NOT NULL,
    "validadeDays" INTEGER NOT NULL DEFAULT 30,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" INTEGER NOT NULL,
    CONSTRAINT "Orcament_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Orcament" ("createdAt", "id", "totalPrice", "validadeDays") SELECT "createdAt", "id", "totalPrice", "validadeDays" FROM "Orcament";
DROP TABLE "Orcament";
ALTER TABLE "new_Orcament" RENAME TO "Orcament";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
