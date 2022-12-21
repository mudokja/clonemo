/*
  Warnings:

  - You are about to drop the column `rep_id` on the `post_content` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `post_content` DROP COLUMN `rep_id`,
    ADD COLUMN `rep_idx` TINYINT UNSIGNED NULL;

-- AlterTable
ALTER TABLE `post_table` ADD COLUMN `short_title` VARCHAR(20) NULL,
    ADD COLUMN `staff_id` VARCHAR(191) NULL,
    MODIFY `post_type` VARCHAR(191) NOT NULL,
    MODIFY `title` VARCHAR(80) NOT NULL;

-- AlterTable
ALTER TABLE `topic_table` ADD COLUMN `created_by` VARCHAR(191) NULL;

-- CreateIndex
CREATE INDEX `post_image_post_content_id_idx` ON `post_image`(`post_content_id`);
