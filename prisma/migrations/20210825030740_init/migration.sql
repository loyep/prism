/*
  Warnings:

  - The primary key for the `posts` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `posts` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `UnsignedBigInt`.
  - You are about to alter the column `user_id` on the `posts` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `UnsignedBigInt`.
  - The primary key for the `users` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `users` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `UnsignedBigInt`.

*/
-- DropForeignKey
ALTER TABLE `posts` DROP FOREIGN KEY `posts_ibfk_1`;

-- AlterTable
ALTER TABLE `posts` DROP PRIMARY KEY,
    MODIFY `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    MODIFY `user_id` BIGINT UNSIGNED,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `users` DROP PRIMARY KEY,
    MODIFY `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`id`);

-- AddForeignKey
ALTER TABLE `posts` ADD FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
