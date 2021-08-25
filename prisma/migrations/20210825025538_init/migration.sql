/*
  Warnings:

  - You are about to drop the column `authorId` on the `Post` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `Post` DROP FOREIGN KEY `Post_ibfk_1`;

-- AlterTable
ALTER TABLE `Post` DROP COLUMN `authorId`,
    ADD COLUMN `userId` INTEGER;

-- AddForeignKey
ALTER TABLE `Post` ADD FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
