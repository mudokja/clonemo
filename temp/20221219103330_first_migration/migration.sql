-- CreateTable
CREATE TABLE `topic_table` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `idx` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `topic_type` VARCHAR(191) NOT NULL,
    `topic_depiction` VARCHAR(500) NOT NULL,
    `parent_topic` INTEGER NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,
    `deleted_by` VARCHAR(191) NULL,
    `deleted_at` DATETIME(3) NULL,

    UNIQUE INDEX `topic_table_idx_key`(`idx`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `post_table` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `post_type` INTEGER NOT NULL,
    `title` VARCHAR(50) NOT NULL,
    `hidden` BOOLEAN NOT NULL DEFAULT false,
    `is_edit` BOOLEAN NOT NULL DEFAULT false,
    `post_table` VARCHAR(200) NOT NULL,
    `author_name` VARCHAR(191) NOT NULL,
    `author_id` INTEGER NULL,
    `published` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    UNIQUE INDEX `post_table_id_key`(`id`),
    INDEX `post_table_title_idx`(`title`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `post_content` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `rep_id` TINYINT UNSIGNED NULL,
    `post_id` INTEGER NOT NULL,
    `ip` VARCHAR(39) NULL,
    `is_image` BOOLEAN NOT NULL,
    `is_edit` BOOLEAN NOT NULL,
    `content` MEDIUMTEXT NOT NULL,
    `hidden` BOOLEAN NOT NULL DEFAULT false,
    `published` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `edited` DATETIME(3) NOT NULL,
    `deleted_by` VARCHAR(191) NOT NULL,
    `deleted_at` DATETIME(3) NULL,
    `like` INTEGER NOT NULL DEFAULT 0,

    INDEX `post_content_post_id_idx`(`post_id`),
    FULLTEXT INDEX `post_content_content_idx`(`content`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `user` (
    `user_id` INTEGER NOT NULL AUTO_INCREMENT,
    `user_name` VARCHAR(50) NOT NULL,
    `auth_type` TINYINT UNSIGNED NOT NULL,
    `role_type` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,
    `deleted_at` DATETIME(3) NULL,

    UNIQUE INDEX `user_user_id_key`(`user_id`),
    INDEX `user_user_id_idx`(`user_id`),
    PRIMARY KEY (`user_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `post_image` (
    `idx` BINARY(16) NOT NULL DEFAULT (uuid_to_bin(uuid())),
    `origin_name` VARCHAR(191) NOT NULL,
    `image_size` INTEGER NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `extension` VARCHAR(191) NOT NULL,
    `path_type` VARCHAR(191) NOT NULL,
    `path` VARCHAR(191) NOT NULL,
    `width` INTEGER NULL,
    `height` INTEGER NULL,
    `post_content_id` INTEGER NOT NULL,
    `topic_id` INTEGER NOT NULL,

    PRIMARY KEY (`idx`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `user_profile` (
    `user_id` INTEGER NOT NULL,
    `custom_name` VARCHAR(12) NOT NULL,
    `custom_memo` VARCHAR(500) NULL,
    `updated_at` DATETIME(3) NOT NULL,

    UNIQUE INDEX `user_profile_user_id_key`(`user_id`),
    UNIQUE INDEX `user_profile_custom_name_key`(`custom_name`),
    INDEX `user_profile_user_id_idx`(`user_id`),
    PRIMARY KEY (`user_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `auth_password` (
    `user_id` INTEGER NOT NULL,
    `password` CHAR(64) NOT NULL,
    `nacl` VARCHAR(100) NOT NULL,
    `pv` VARCHAR(191) NULL,

    UNIQUE INDEX `auth_password_user_id_key`(`user_id`),
    PRIMARY KEY (`user_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `post_content` ADD CONSTRAINT `post_content_post_id_fkey` FOREIGN KEY (`post_id`) REFERENCES `post_table`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
