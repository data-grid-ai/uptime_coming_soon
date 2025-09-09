-- CreateTable
CREATE TABLE "public"."form_submissions" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL DEFAULT '',
    "state" TEXT NOT NULL DEFAULT 'Alabama',
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL DEFAULT '',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "form_submissions_pkey" PRIMARY KEY ("id")
);
