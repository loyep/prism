
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  warnEnvConflicts,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  Decimal,
  findSync
} = require('./runtime')

const path = require('path')


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

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */

Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = () => (val) => val


// folder where the generated client is found
const dirname = findSync(process.cwd(), [
  '"prisma/client"',
  '"client"',
], ['d'], ['d'], 1)[0] || __dirname

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
 * DMMF
 */

// We are parsing 2 times, as we want independent objects, because
// DMMFClass introduces circular references in the dmmf object
const dmmf = JSON.parse(dmmfString)
exports.Prisma.dmmf = JSON.parse(dmmfString)

/**
 * Create the Client
 */

const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "/Users/heixing/Git/prism/prisma/client",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "binary"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "darwin"
      }
    ],
    "previewFeatures": [
      "selectRelationCount",
      "filterJson",
      "fullTextSearch"
    ],
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": "../../.env",
    "schemaEnvPath": "../../.env"
  },
  "relativePath": "..",
  "clientVersion": "2.30.3",
  "engineVersion": "b8c35d44de987a9691890b3ddf3e2e7effb9bf20",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "mysql"
}
config.document = dmmf
config.dirname = dirname

/**
 * Only for env conflict warning
 * loading of env variable occurs in getPrismaClient
 */
const envPaths = {
  rootEnvPath: config.relativeEnvPaths.rootEnvPath && path.resolve(dirname, config.relativeEnvPaths.rootEnvPath),
  schemaEnvPath: config.relativeEnvPaths.schemaEnvPath && path.resolve(dirname, config.relativeEnvPaths.schemaEnvPath)
}
warnEnvConflicts(envPaths)

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)

/**
 * Build tool annotations
 * In order to make `ncc` and `@vercel/nft` happy.
 * The process.cwd() annotation is only needed for https://github.com/vercel/vercel/tree/master/packages/now-next
**/
path.join(__dirname, 'query-engine-darwin');
path.join(process.cwd(), './prisma/client/query-engine-darwin')
/**
 * Annotation for `@vercel/nft`
 * The process.cwd() annotation is only needed for https://github.com/vercel/vercel/tree/master/packages/now-next
**/
path.join(__dirname, 'schema.prisma');
path.join(process.cwd(), './prisma/client/schema.prisma');