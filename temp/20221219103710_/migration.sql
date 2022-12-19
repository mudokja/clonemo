/*
  Warnings:

  - You are about to alter the column `author_name` on the `post_table` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(50)`.
  - You are about to alter the column `name` on the `topic_table` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(50)`.

*/
-- AlterTable
ALTER TABLE `post_table` MODIFY `author_name` VARCHAR(50) NOT NULL;

-- AlterTable
ALTER TABLE `topic_table` MODIFY `name` VARCHAR(50) NOT NULL;
