-- CreateTable
CREATE TABLE "User" (
    "user_id" TEXT NOT NULL,
    "user_cpf" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("user_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_user_cpf_key" ON "User"("user_cpf");
