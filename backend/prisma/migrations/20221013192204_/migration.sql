-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_todo" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "Title" TEXT NOT NULL,
    "status" BOOLEAN DEFAULT false,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_todo" ("Title", "createdAt", "id", "status") SELECT "Title", "createdAt", "id", "status" FROM "todo";
DROP TABLE "todo";
ALTER TABLE "new_todo" RENAME TO "todo";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
