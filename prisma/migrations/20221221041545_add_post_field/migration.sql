-- AlterTable
ALTER TABLE `post_content` ADD COLUMN `author_id` INTEGER NULL,
    ADD COLUMN `author_name` VARCHAR(50) NULL,
    ADD COLUMN `staff_id` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `post_table` MODIFY `author_name` VARCHAR(50) NULL;
