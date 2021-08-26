/*
  Warnings:

  - A unique constraint covering the columns `[slug]` on the table `articles` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[slug]` on the table `categories` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[slug]` on the table `tags` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `slug` to the `tags` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `articles` MODIFY `public` BOOLEAN NOT NULL DEFAULT false,
    ALTER COLUMN `updatedAt` DROP DEFAULT;

-- AlterTable
ALTER TABLE `categories` ALTER COLUMN `updatedAt` DROP DEFAULT;

-- AlterTable
ALTER TABLE `comments` ALTER COLUMN `updatedAt` DROP DEFAULT;

-- AlterTable
ALTER TABLE `contents` MODIFY `html` VARCHAR(191),
    MODIFY `markdown` VARCHAR(191),
    ALTER COLUMN `updatedAt` DROP DEFAULT;

-- AlterTable
ALTER TABLE `favorites` ALTER COLUMN `updatedAt` DROP DEFAULT;

-- AlterTable
ALTER TABLE `likes` ALTER COLUMN `updatedAt` DROP DEFAULT;

-- AlterTable
ALTER TABLE `medias` ALTER COLUMN `updatedAt` DROP DEFAULT;

-- AlterTable
ALTER TABLE `menus` ALTER COLUMN `updatedAt` DROP DEFAULT;

-- AlterTable
ALTER TABLE `permissions` ALTER COLUMN `updatedAt` DROP DEFAULT;

-- AlterTable
ALTER TABLE `roles` ALTER COLUMN `updatedAt` DROP DEFAULT;

-- AlterTable
ALTER TABLE `tags` ADD COLUMN `slug` VARCHAR(191) NOT NULL,
    ALTER COLUMN `updatedAt` DROP DEFAULT;

-- AlterTable
ALTER TABLE `tags_on_articles` ALTER COLUMN `updatedAt` DROP DEFAULT;

-- AlterTable
ALTER TABLE `users` ALTER COLUMN `updatedAt` DROP DEFAULT;

-- CreateIndex
CREATE UNIQUE INDEX `articles.slug_unique` ON `articles`(`slug`);

-- CreateIndex
CREATE UNIQUE INDEX `categories.slug_unique` ON `categories`(`slug`);

-- CreateIndex
CREATE UNIQUE INDEX `tags.slug_unique` ON `tags`(`slug`);
