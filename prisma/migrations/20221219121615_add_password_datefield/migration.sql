/*
  Warnings:

  - Added the required column `updated_at` to the `auth_password` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `auth_password` ADD COLUMN `updated_at` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `user_profile` MODIFY `updated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);
