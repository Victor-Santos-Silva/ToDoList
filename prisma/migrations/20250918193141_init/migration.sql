/*
  Warnings:

  - You are about to drop the column `message` on the `Tarefa` table. All the data in the column will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterTable
ALTER TABLE "public"."Tarefa" DROP COLUMN "message",
ADD COLUMN     "done" BOOLEAN NOT NULL DEFAULT false;

-- DropTable
DROP TABLE "public"."User";
