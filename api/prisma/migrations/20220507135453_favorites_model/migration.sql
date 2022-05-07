-- CreateTable
CREATE TABLE "Favorites" (
    "id" TEXT NOT NULL,
    "isbn" TEXT NOT NULL,
    "user" TEXT NOT NULL,

    CONSTRAINT "Favorites_pkey" PRIMARY KEY ("id")
);
