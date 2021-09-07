
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal
} = require('./runtime/index-browser')


const Prisma = {}

exports.Prisma = Prisma

/**
 * Prisma Client JS version: 2.30.3
 * Query Engine version: b8c35d44de987a9691890b3ddf3e2e7effb9bf20
 */
Prisma.prismaVersion = {
  client: "2.30.3",
  engine: "b8c35d44de987a9691890b3ddf3e2e7effb9bf20"
}

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */

Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.validator = () => (val) => val

/**
 * Enums
 */
// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275
function makeEnum(x) { return x; }

exports.Prisma.ArticleScalarFieldEnum = makeEnum({
  id: 'id',
  title: 'title',
  public: 'public',
  slug: 'slug',
  image: 'image',
  excerpt: 'excerpt',
  meta: 'meta',
  cover: 'cover',
  status: 'status',
  browseCount: 'browseCount',
  commentsCount: 'commentsCount',
  likesCount: 'likesCount',
  userId: 'userId',
  categoryId: 'categoryId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.UserScalarFieldEnum = makeEnum({
  id: 'id',
  email: 'email',
  name: 'name',
  slug: 'slug',
  url: 'url',
  meta: 'meta',
  cover: 'cover',
  bio: 'bio',
  description: 'description',
  mobile: 'mobile',
  openid: 'openid',
  password: 'password',
  loggedAt: 'loggedAt',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  deleteAt: 'deleteAt',
  avatar: 'avatar',
  updatedPwdAt: 'updatedPwdAt'
});

exports.Prisma.TagScalarFieldEnum = makeEnum({
  id: 'id',
  slug: 'slug',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  meta: 'meta'
});

exports.Prisma.CategoryScalarFieldEnum = makeEnum({
  id: 'id',
  slug: 'slug',
  name: 'name',
  description: 'description',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  article_count: 'article_count',
  meta: 'meta'
});

exports.Prisma.TopicScalarFieldEnum = makeEnum({
  id: 'id'
});

exports.Prisma.SettingScalarFieldEnum = makeEnum({
  id: 'id'
});

exports.Prisma.CommentScalarFieldEnum = makeEnum({
  id: 'id',
  articleId: 'articleId',
  userId: 'userId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.FavoriteScalarFieldEnum = makeEnum({
  id: 'id',
  userId: 'userId',
  articleId: 'articleId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.ContentScalarFieldEnum = makeEnum({
  id: 'id',
  articleId: 'articleId',
  html: 'html',
  markdown: 'markdown',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.CollectionScalarFieldEnum = makeEnum({
  id: 'id'
});

exports.Prisma.LikeScalarFieldEnum = makeEnum({
  id: 'id',
  userId: 'userId',
  articleId: 'articleId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.MediaScalarFieldEnum = makeEnum({
  id: 'id',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  alt: 'alt',
  description: 'description',
  filename: 'filename',
  path: 'path',
  type: 'type'
});

exports.Prisma.MenuScalarFieldEnum = makeEnum({
  id: 'id',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.RoleScalarFieldEnum = makeEnum({
  id: 'id',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.PermissionScalarFieldEnum = makeEnum({
  id: 'id',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.TagsOnArticlesScalarFieldEnum = makeEnum({
  articleId: 'articleId',
  tagId: 'tagId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.FollowerScalarFieldEnum = makeEnum({
  followerId: 'followerId',
  followingId: 'followingId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.VerificationScalarFieldEnum = makeEnum({
  id: 'id',
  code: 'code',
  token: 'token',
  captcha: 'captcha',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.IpScalarFieldEnum = makeEnum({
  ip: 'ip'
});

exports.Prisma.ViewScalarFieldEnum = makeEnum({
  id: 'id',
  ip: 'ip',
  url: 'url',
  bid: 'bid',
  area: 'area',
  areaInfo: 'areaInfo',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  ua: 'ua'
});

exports.Prisma.SortOrder = makeEnum({
  asc: 'asc',
  desc: 'desc'
});
exports.ArticleStatus = makeEnum({
  PUBLISHED: 'PUBLISHED',
  PRIVATE: 'PRIVATE',
  PASSWORD: 'PASSWORD',
  DRAFT: 'DRAFT'
});

exports.Prisma.ModelName = makeEnum({
  Article: 'Article',
  User: 'User',
  Tag: 'Tag',
  Category: 'Category',
  Topic: 'Topic',
  Setting: 'Setting',
  Comment: 'Comment',
  Favorite: 'Favorite',
  Content: 'Content',
  Collection: 'Collection',
  Like: 'Like',
  Media: 'Media',
  Menu: 'Menu',
  Role: 'Role',
  Permission: 'Permission',
  TagsOnArticles: 'TagsOnArticles',
  Follower: 'Follower',
  Verification: 'Verification',
  Ip: 'Ip',
  View: 'View'
});

/**
 * Create the Client
 */
class PrismaClient {
  constructor() {
    throw new Error(
      `PrismaClient is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
    )
  }
}
exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
