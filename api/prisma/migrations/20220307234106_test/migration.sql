-- CreateTable
CREATE TABLE "Books" (
    "book_id" TEXT NOT NULL,
    "book_author" TEXT NOT NULL,
    "book_title" TEXT NOT NULL,

    CONSTRAINT "Books_pkey" PRIMARY KEY ("book_id")
);

-- CreateTable
CREATE TABLE "User_Book" (
    "userId" TEXT NOT NULL,
    "bookId" TEXT NOT NULL,

    CONSTRAINT "User_Book_pkey" PRIMARY KEY ("userId","bookId")
);

-- CreateIndex
CREATE UNIQUE INDEX "Books_book_author_key" ON "Books"("book_author");

-- CreateIndex
CREATE UNIQUE INDEX "Books_book_title_key" ON "Books"("book_title");

-- AddForeignKey
ALTER TABLE "User_Book" ADD CONSTRAINT "User_Book_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User_Book" ADD CONSTRAINT "User_Book_bookId_fkey" FOREIGN KEY ("bookId") REFERENCES "Books"("book_id") ON DELETE RESTRICT ON UPDATE CASCADE;
