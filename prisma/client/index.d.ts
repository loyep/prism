
/**
 * Client
**/

import * as runtime from './runtime';
declare const prisma: unique symbol
export type PrismaPromise<A> = Promise<A> & {[prisma]: true}
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model Article
 */

export type Article = {
  id: number
  title: string
  public: boolean
  slug: string
  image: string | null
  excerpt: string | null
  meta: Prisma.JsonValue | null
  cover: string | null
  status: ArticleStatus
  browseCount: number
  commentsCount: number
  likesCount: number
  userId: number
  categoryId: number
  createdAt: Date
  updatedAt: Date
}

/**
 * Model User
 */

export type User = {
  id: number
  email: string | null
  name: string
  slug: string
  url: string | null
  meta: Prisma.JsonValue | null
  cover: string | null
  bio: string | null
  description: string | null
  mobile: string | null
  openid: string | null
  password: string
  loggedAt: Date
  createdAt: Date
  updatedAt: Date
  deleteAt: Date | null
  avatar: string | null
  updatedPwdAt: Date
}

/**
 * Model Tag
 */

export type Tag = {
  id: number
  slug: string
  createdAt: Date
  updatedAt: Date
  meta: Prisma.JsonValue | null
}

/**
 * Model Category
 */

export type Category = {
  id: number
  slug: string
  name: string
  description: string | null
  createdAt: Date
  updatedAt: Date
  article_count: number
  meta: Prisma.JsonValue | null
}

/**
 * Model Topic
 */

export type Topic = {
  id: number
}

/**
 * Model Setting
 */

export type Setting = {
  id: number
}

/**
 * Model Comment
 */

export type Comment = {
  id: number
  articleId: number
  userId: number
  createdAt: Date
  updatedAt: Date
}

/**
 * Model Favorite
 */

export type Favorite = {
  id: number
  userId: number
  articleId: number
  createdAt: Date
  updatedAt: Date
}

/**
 * Model Content
 */

export type Content = {
  id: number
  articleId: number
  html: string | null
  markdown: string | null
  createdAt: Date
  updatedAt: Date
}

/**
 * Model Collection
 */

export type Collection = {
  id: number
}

/**
 * Model Like
 */

export type Like = {
  id: number
  userId: number
  articleId: number
  createdAt: Date
  updatedAt: Date
}

/**
 * Model Media
 */

export type Media = {
  id: number
  createdAt: Date
  updatedAt: Date
  alt: string
  description: string | null
  filename: string
  path: string
  type: string
}

/**
 * Model Menu
 */

export type Menu = {
  id: number
  createdAt: Date
  updatedAt: Date
}

/**
 * Model Role
 */

export type Role = {
  id: number
  createdAt: Date
  updatedAt: Date
}

/**
 * Model Permission
 */

export type Permission = {
  id: number
  createdAt: Date
  updatedAt: Date
}

/**
 * Model TagsOnArticles
 */

export type TagsOnArticles = {
  articleId: number
  tagId: number
  createdAt: Date
  updatedAt: Date
}

/**
 * Model Follower
 */

export type Follower = {
  followerId: number
  followingId: number
  createdAt: Date
  updatedAt: Date
}

/**
 * Model Verification
 */

export type Verification = {
  id: number
  code: string
  token: string
  captcha: string | null
  createdAt: Date
  updatedAt: Date
}

/**
 * Model Ip
 */

export type Ip = {
  ip: string
}

/**
 * Model View
 */

export type View = {
  id: number
  ip: string
  url: string
  bid: string | null
  area: string | null
  areaInfo: Prisma.JsonValue
  createdAt: Date
  updatedAt: Date
  ua: string | null
}


/**
 * Enums
 */

// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

export const ArticleStatus: {
  PUBLISHED: 'PUBLISHED',
  PRIVATE: 'PRIVATE',
  PASSWORD: 'PASSWORD',
  DRAFT: 'DRAFT'
};

export type ArticleStatus = (typeof ArticleStatus)[keyof typeof ArticleStatus]


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Articles
 * const articles = await prisma.article.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
      /**
       * @private
       */
      private fetcher;
      /**
       * @private
       */
      private readonly dmmf;
      /**
       * @private
       */
      private connectionPromise?;
      /**
       * @private
       */
      private disconnectionPromise?;
      /**
       * @private
       */
      private readonly engineConfig;
      /**
       * @private
       */
      private readonly measurePerformance;

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Articles
   * const articles = await prisma.article.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<any>;

  /**
   * Add a middleware
   */
  $use(cb: Prisma.Middleware): void

  /**
   * Executes a raw query and returns the number of affected rows
   * @example
   * ```
   * // With parameters use prisma.$executeRaw``, values will be escaped automatically
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE id = ${1};`
   * // Or
   * const result = await prisma.$executeRaw('UPDATE User SET cool = $1 WHERE id = $2 ;', true, 1)
  * ```
  * 
  * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
  */
  $executeRaw < T = any > (query: string | TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<number>;

  /**
   * Performs a raw query and returns the SELECT data
   * @example
   * ```
   * // With parameters use prisma.$queryRaw``, values will be escaped automatically
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'ema.il'};`
   * // Or
   * const result = await prisma.$queryRaw('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'ema.il')
  * ```
  * 
  * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
  */
  $queryRaw < T = any > (query: string | TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends PrismaPromise<any>[]>(arg: [...P]): Promise<UnwrapTuple<P>>

      /**
   * `prisma.article`: Exposes CRUD operations for the **Article** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Articles
    * const articles = await prisma.article.findMany()
    * ```
    */
  get article(): Prisma.ArticleDelegate<GlobalReject>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<GlobalReject>;

  /**
   * `prisma.tag`: Exposes CRUD operations for the **Tag** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tags
    * const tags = await prisma.tag.findMany()
    * ```
    */
  get tag(): Prisma.TagDelegate<GlobalReject>;

  /**
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.CategoryDelegate<GlobalReject>;

  /**
   * `prisma.topic`: Exposes CRUD operations for the **Topic** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Topics
    * const topics = await prisma.topic.findMany()
    * ```
    */
  get topic(): Prisma.TopicDelegate<GlobalReject>;

  /**
   * `prisma.setting`: Exposes CRUD operations for the **Setting** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Settings
    * const settings = await prisma.setting.findMany()
    * ```
    */
  get setting(): Prisma.SettingDelegate<GlobalReject>;

  /**
   * `prisma.comment`: Exposes CRUD operations for the **Comment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Comments
    * const comments = await prisma.comment.findMany()
    * ```
    */
  get comment(): Prisma.CommentDelegate<GlobalReject>;

  /**
   * `prisma.favorite`: Exposes CRUD operations for the **Favorite** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Favorites
    * const favorites = await prisma.favorite.findMany()
    * ```
    */
  get favorite(): Prisma.FavoriteDelegate<GlobalReject>;

  /**
   * `prisma.content`: Exposes CRUD operations for the **Content** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Contents
    * const contents = await prisma.content.findMany()
    * ```
    */
  get content(): Prisma.ContentDelegate<GlobalReject>;

  /**
   * `prisma.collection`: Exposes CRUD operations for the **Collection** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Collections
    * const collections = await prisma.collection.findMany()
    * ```
    */
  get collection(): Prisma.CollectionDelegate<GlobalReject>;

  /**
   * `prisma.like`: Exposes CRUD operations for the **Like** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Likes
    * const likes = await prisma.like.findMany()
    * ```
    */
  get like(): Prisma.LikeDelegate<GlobalReject>;

  /**
   * `prisma.media`: Exposes CRUD operations for the **Media** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Media
    * const media = await prisma.media.findMany()
    * ```
    */
  get media(): Prisma.MediaDelegate<GlobalReject>;

  /**
   * `prisma.menu`: Exposes CRUD operations for the **Menu** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Menus
    * const menus = await prisma.menu.findMany()
    * ```
    */
  get menu(): Prisma.MenuDelegate<GlobalReject>;

  /**
   * `prisma.role`: Exposes CRUD operations for the **Role** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Roles
    * const roles = await prisma.role.findMany()
    * ```
    */
  get role(): Prisma.RoleDelegate<GlobalReject>;

  /**
   * `prisma.permission`: Exposes CRUD operations for the **Permission** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Permissions
    * const permissions = await prisma.permission.findMany()
    * ```
    */
  get permission(): Prisma.PermissionDelegate<GlobalReject>;

  /**
   * `prisma.tagsOnArticles`: Exposes CRUD operations for the **TagsOnArticles** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TagsOnArticles
    * const tagsOnArticles = await prisma.tagsOnArticles.findMany()
    * ```
    */
  get tagsOnArticles(): Prisma.TagsOnArticlesDelegate<GlobalReject>;

  /**
   * `prisma.follower`: Exposes CRUD operations for the **Follower** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Followers
    * const followers = await prisma.follower.findMany()
    * ```
    */
  get follower(): Prisma.FollowerDelegate<GlobalReject>;

  /**
   * `prisma.verification`: Exposes CRUD operations for the **Verification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Verifications
    * const verifications = await prisma.verification.findMany()
    * ```
    */
  get verification(): Prisma.VerificationDelegate<GlobalReject>;

  /**
   * `prisma.ip`: Exposes CRUD operations for the **Ip** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ips
    * const ips = await prisma.ip.findMany()
    * ```
    */
  get ip(): Prisma.IpDelegate<GlobalReject>;

  /**
   * `prisma.view`: Exposes CRUD operations for the **View** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Views
    * const views = await prisma.view.findMany()
    * ```
    */
  get view(): Prisma.ViewDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  /**
   * Prisma Client JS version: 2.30.3
   * Query Engine version: b8c35d44de987a9691890b3ddf3e2e7effb9bf20
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}
 
  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}
 
  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | null | JsonObject | JsonArray

  /**
   * Same as JsonObject, but allows undefined
   */
  export type InputJsonObject = {[Key in string]?: JsonValue}
 
  export interface InputJsonArray extends Array<JsonValue> {}
 
  export type InputJsonValue = undefined |  string | number | boolean | null | InputJsonObject | InputJsonArray
   type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = {
    [key in keyof T]: T[key] extends false | undefined | null ? never : key
  }[keyof T]

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> = (T | U) extends object ? (Without<T, U> & U) | (Without<U, T> & T) : T | U;


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Buffer
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Exact<A, W = unknown> = 
  W extends unknown ? A extends Narrowable ? Cast<A, W> : Cast<
  {[K in keyof A]: K extends keyof W ? Exact<A[K], W[K]> : never},
  {[K in keyof W]: K extends keyof A ? Exact<A[K], W[K]> : W[K]}>
  : never;

  type Narrowable = string | number | boolean | bigint;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: Exact<S, V>) => S;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T

  class PrismaClientFetcher {
    private readonly prisma;
    private readonly debug;
    private readonly hooks?;
    constructor(prisma: PrismaClient<any, any>, debug?: boolean, hooks?: Hooks | undefined);
    request<T>(document: any, dataPath?: string[], rootField?: string, typeName?: string, isList?: boolean, callsite?: string): Promise<T>;
    sanitizeMessage(message: string): string;
    protected unpack(document: any, data: any, path: string[], rootField?: string, isList?: boolean): any;
  }

  export const ModelName: {
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
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends boolean
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     *  * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your prisma.schema file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  export type Hooks = {
    beforeRequest?: (options: { query: string, path: string[], rootField?: string, typeName?: string, document: any }) => any
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'

  /**
   * These options are being passed in to the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined; 
  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ArticleCountOutputType
   */


  export type ArticleCountOutputType = {
    comments: number
    favoritings: number
    likes: number
    tags: number
  }

  export type ArticleCountOutputTypeSelect = {
    comments?: boolean
    favoritings?: boolean
    likes?: boolean
    tags?: boolean
  }

  export type ArticleCountOutputTypeGetPayload<
    S extends boolean | null | undefined | ArticleCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? ArticleCountOutputType
    : S extends undefined
    ? never
    : S extends ArticleCountOutputTypeArgs
    ?'include' extends U
    ? ArticleCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof ArticleCountOutputType ?ArticleCountOutputType [P]
  : 
     never
  } 
    : ArticleCountOutputType
  : ArticleCountOutputType




  // Custom InputTypes

  /**
   * ArticleCountOutputType without action
   */
  export type ArticleCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the ArticleCountOutputType
     * 
    **/
    select?: ArticleCountOutputTypeSelect | null
  }



  /**
   * Count Type UserCountOutputType
   */


  export type UserCountOutputType = {
    articles: number
    comments: number
    favorites: number
    followers: number
    followings: number
    likes: number
  }

  export type UserCountOutputTypeSelect = {
    articles?: boolean
    comments?: boolean
    favorites?: boolean
    followers?: boolean
    followings?: boolean
    likes?: boolean
  }

  export type UserCountOutputTypeGetPayload<
    S extends boolean | null | undefined | UserCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? UserCountOutputType
    : S extends undefined
    ? never
    : S extends UserCountOutputTypeArgs
    ?'include' extends U
    ? UserCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof UserCountOutputType ?UserCountOutputType [P]
  : 
     never
  } 
    : UserCountOutputType
  : UserCountOutputType




  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     * 
    **/
    select?: UserCountOutputTypeSelect | null
  }



  /**
   * Count Type TagCountOutputType
   */


  export type TagCountOutputType = {
    articles: number
  }

  export type TagCountOutputTypeSelect = {
    articles?: boolean
  }

  export type TagCountOutputTypeGetPayload<
    S extends boolean | null | undefined | TagCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? TagCountOutputType
    : S extends undefined
    ? never
    : S extends TagCountOutputTypeArgs
    ?'include' extends U
    ? TagCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof TagCountOutputType ?TagCountOutputType [P]
  : 
     never
  } 
    : TagCountOutputType
  : TagCountOutputType




  // Custom InputTypes

  /**
   * TagCountOutputType without action
   */
  export type TagCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the TagCountOutputType
     * 
    **/
    select?: TagCountOutputTypeSelect | null
  }



  /**
   * Count Type CategoryCountOutputType
   */


  export type CategoryCountOutputType = {
    articles: number
  }

  export type CategoryCountOutputTypeSelect = {
    articles?: boolean
  }

  export type CategoryCountOutputTypeGetPayload<
    S extends boolean | null | undefined | CategoryCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? CategoryCountOutputType
    : S extends undefined
    ? never
    : S extends CategoryCountOutputTypeArgs
    ?'include' extends U
    ? CategoryCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof CategoryCountOutputType ?CategoryCountOutputType [P]
  : 
     never
  } 
    : CategoryCountOutputType
  : CategoryCountOutputType




  // Custom InputTypes

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     * 
    **/
    select?: CategoryCountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model Article
   */


  export type AggregateArticle = {
    _count: ArticleCountAggregateOutputType | null
    count: ArticleCountAggregateOutputType | null
    _avg: ArticleAvgAggregateOutputType | null
    avg: ArticleAvgAggregateOutputType | null
    _sum: ArticleSumAggregateOutputType | null
    sum: ArticleSumAggregateOutputType | null
    _min: ArticleMinAggregateOutputType | null
    min: ArticleMinAggregateOutputType | null
    _max: ArticleMaxAggregateOutputType | null
    max: ArticleMaxAggregateOutputType | null
  }

  export type ArticleAvgAggregateOutputType = {
    id: number | null
    browseCount: number | null
    commentsCount: number | null
    likesCount: number | null
    userId: number | null
    categoryId: number | null
  }

  export type ArticleSumAggregateOutputType = {
    id: number | null
    browseCount: number | null
    commentsCount: number | null
    likesCount: number | null
    userId: number | null
    categoryId: number | null
  }

  export type ArticleMinAggregateOutputType = {
    id: number | null
    title: string | null
    public: boolean | null
    slug: string | null
    image: string | null
    excerpt: string | null
    cover: string | null
    status: ArticleStatus | null
    browseCount: number | null
    commentsCount: number | null
    likesCount: number | null
    userId: number | null
    categoryId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ArticleMaxAggregateOutputType = {
    id: number | null
    title: string | null
    public: boolean | null
    slug: string | null
    image: string | null
    excerpt: string | null
    cover: string | null
    status: ArticleStatus | null
    browseCount: number | null
    commentsCount: number | null
    likesCount: number | null
    userId: number | null
    categoryId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ArticleCountAggregateOutputType = {
    id: number
    title: number
    public: number
    slug: number
    image: number
    excerpt: number
    meta: number
    cover: number
    status: number
    browseCount: number
    commentsCount: number
    likesCount: number
    userId: number
    categoryId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ArticleAvgAggregateInputType = {
    id?: true
    browseCount?: true
    commentsCount?: true
    likesCount?: true
    userId?: true
    categoryId?: true
  }

  export type ArticleSumAggregateInputType = {
    id?: true
    browseCount?: true
    commentsCount?: true
    likesCount?: true
    userId?: true
    categoryId?: true
  }

  export type ArticleMinAggregateInputType = {
    id?: true
    title?: true
    public?: true
    slug?: true
    image?: true
    excerpt?: true
    cover?: true
    status?: true
    browseCount?: true
    commentsCount?: true
    likesCount?: true
    userId?: true
    categoryId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ArticleMaxAggregateInputType = {
    id?: true
    title?: true
    public?: true
    slug?: true
    image?: true
    excerpt?: true
    cover?: true
    status?: true
    browseCount?: true
    commentsCount?: true
    likesCount?: true
    userId?: true
    categoryId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ArticleCountAggregateInputType = {
    id?: true
    title?: true
    public?: true
    slug?: true
    image?: true
    excerpt?: true
    meta?: true
    cover?: true
    status?: true
    browseCount?: true
    commentsCount?: true
    likesCount?: true
    userId?: true
    categoryId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ArticleAggregateArgs = {
    /**
     * Filter which Article to aggregate.
     * 
    **/
    where?: ArticleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Articles to fetch.
     * 
    **/
    orderBy?: Enumerable<ArticleOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: ArticleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Articles from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Articles.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Articles
    **/
    _count?: true | ArticleCountAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_count`
    **/
    count?: true | ArticleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ArticleAvgAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_avg`
    **/
    avg?: ArticleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ArticleSumAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_sum`
    **/
    sum?: ArticleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ArticleMinAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_min`
    **/
    min?: ArticleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ArticleMaxAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_max`
    **/
    max?: ArticleMaxAggregateInputType
  }

  export type GetArticleAggregateType<T extends ArticleAggregateArgs> = {
        [P in keyof T & keyof AggregateArticle]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateArticle[P]>
      : GetScalarType<T[P], AggregateArticle[P]>
  }


    
    
  export type ArticleGroupByArgs = {
    where?: ArticleWhereInput
    orderBy?: Enumerable<ArticleOrderByInput>
    by: Array<ArticleScalarFieldEnum>
    having?: ArticleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ArticleCountAggregateInputType | true
    _avg?: ArticleAvgAggregateInputType
    _sum?: ArticleSumAggregateInputType
    _min?: ArticleMinAggregateInputType
    _max?: ArticleMaxAggregateInputType
  }


  export type ArticleGroupByOutputType = {
    id: number
    title: string
    public: boolean
    slug: string
    image: string | null
    excerpt: string | null
    meta: JsonValue | null
    cover: string | null
    status: ArticleStatus
    browseCount: number
    commentsCount: number
    likesCount: number
    userId: number
    categoryId: number
    createdAt: Date
    updatedAt: Date
    _count: ArticleCountAggregateOutputType | null
    _avg: ArticleAvgAggregateOutputType | null
    _sum: ArticleSumAggregateOutputType | null
    _min: ArticleMinAggregateOutputType | null
    _max: ArticleMaxAggregateOutputType | null
  }

  type GetArticleGroupByPayload<T extends ArticleGroupByArgs> = Promise<
    Array<
      PickArray<ArticleGroupByOutputType, T['by']> & 
        {
          [P in ((keyof T) & (keyof ArticleGroupByOutputType))]: P extends '_count' 
            ? T[P] extends boolean 
              ? number 
              : GetScalarType<T[P], ArticleGroupByOutputType[P]> 
            : GetScalarType<T[P], ArticleGroupByOutputType[P]>
        }
      > 
    >


  export type ArticleSelect = {
    id?: boolean
    title?: boolean
    public?: boolean
    slug?: boolean
    image?: boolean
    excerpt?: boolean
    meta?: boolean
    cover?: boolean
    status?: boolean
    browseCount?: boolean
    commentsCount?: boolean
    likesCount?: boolean
    userId?: boolean
    categoryId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    category?: boolean | CategoryArgs
    user?: boolean | UserArgs
    comments?: boolean | CommentFindManyArgs
    content?: boolean | ContentArgs
    favoritings?: boolean | FavoriteFindManyArgs
    likes?: boolean | LikeFindManyArgs
    tags?: boolean | TagsOnArticlesFindManyArgs
    _count?: boolean | ArticleCountOutputTypeArgs
  }

  export type ArticleInclude = {
    category?: boolean | CategoryArgs
    user?: boolean | UserArgs
    comments?: boolean | CommentFindManyArgs
    content?: boolean | ContentArgs
    favoritings?: boolean | FavoriteFindManyArgs
    likes?: boolean | LikeFindManyArgs
    tags?: boolean | TagsOnArticlesFindManyArgs
    _count?: boolean | ArticleCountOutputTypeArgs
  }

  export type ArticleGetPayload<
    S extends boolean | null | undefined | ArticleArgs,
    U = keyof S
      > = S extends true
        ? Article
    : S extends undefined
    ? never
    : S extends ArticleArgs | ArticleFindManyArgs
    ?'include' extends U
    ? Article  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'category'
        ? CategoryGetPayload<S['include'][P]> :
        P extends 'user'
        ? UserGetPayload<S['include'][P]> :
        P extends 'comments'
        ? Array < CommentGetPayload<S['include'][P]>>  :
        P extends 'content'
        ? ContentGetPayload<S['include'][P]> | null :
        P extends 'favoritings'
        ? Array < FavoriteGetPayload<S['include'][P]>>  :
        P extends 'likes'
        ? Array < LikeGetPayload<S['include'][P]>>  :
        P extends 'tags'
        ? Array < TagsOnArticlesGetPayload<S['include'][P]>>  :
        P extends '_count'
        ? ArticleCountOutputTypeGetPayload<S['include'][P]> | null : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof Article ?Article [P]
  : 
          P extends 'category'
        ? CategoryGetPayload<S['select'][P]> :
        P extends 'user'
        ? UserGetPayload<S['select'][P]> :
        P extends 'comments'
        ? Array < CommentGetPayload<S['select'][P]>>  :
        P extends 'content'
        ? ContentGetPayload<S['select'][P]> | null :
        P extends 'favoritings'
        ? Array < FavoriteGetPayload<S['select'][P]>>  :
        P extends 'likes'
        ? Array < LikeGetPayload<S['select'][P]>>  :
        P extends 'tags'
        ? Array < TagsOnArticlesGetPayload<S['select'][P]>>  :
        P extends '_count'
        ? ArticleCountOutputTypeGetPayload<S['select'][P]> | null : never
  } 
    : Article
  : Article


  type ArticleCountArgs = Merge<
    Omit<ArticleFindManyArgs, 'select' | 'include'> & {
      select?: ArticleCountAggregateInputType | true
    }
  >

  export interface ArticleDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Article that matches the filter.
     * @param {ArticleFindUniqueArgs} args - Arguments to find a Article
     * @example
     * // Get one Article
     * const article = await prisma.article.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ArticleFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ArticleFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Article'> extends True ? CheckSelect<T, Prisma__ArticleClient<Article>, Prisma__ArticleClient<ArticleGetPayload<T>>> : CheckSelect<T, Prisma__ArticleClient<Article | null >, Prisma__ArticleClient<ArticleGetPayload<T> | null >>

    /**
     * Find the first Article that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleFindFirstArgs} args - Arguments to find a Article
     * @example
     * // Get one Article
     * const article = await prisma.article.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ArticleFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ArticleFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Article'> extends True ? CheckSelect<T, Prisma__ArticleClient<Article>, Prisma__ArticleClient<ArticleGetPayload<T>>> : CheckSelect<T, Prisma__ArticleClient<Article | null >, Prisma__ArticleClient<ArticleGetPayload<T> | null >>

    /**
     * Find zero or more Articles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Articles
     * const articles = await prisma.article.findMany()
     * 
     * // Get first 10 Articles
     * const articles = await prisma.article.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const articleWithIdOnly = await prisma.article.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ArticleFindManyArgs>(
      args?: SelectSubset<T, ArticleFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Article>>, PrismaPromise<Array<ArticleGetPayload<T>>>>

    /**
     * Create a Article.
     * @param {ArticleCreateArgs} args - Arguments to create a Article.
     * @example
     * // Create one Article
     * const Article = await prisma.article.create({
     *   data: {
     *     // ... data to create a Article
     *   }
     * })
     * 
    **/
    create<T extends ArticleCreateArgs>(
      args: SelectSubset<T, ArticleCreateArgs>
    ): CheckSelect<T, Prisma__ArticleClient<Article>, Prisma__ArticleClient<ArticleGetPayload<T>>>

    /**
     * Create many Articles.
     *     @param {ArticleCreateManyArgs} args - Arguments to create many Articles.
     *     @example
     *     // Create many Articles
     *     const article = await prisma.article.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ArticleCreateManyArgs>(
      args?: SelectSubset<T, ArticleCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Article.
     * @param {ArticleDeleteArgs} args - Arguments to delete one Article.
     * @example
     * // Delete one Article
     * const Article = await prisma.article.delete({
     *   where: {
     *     // ... filter to delete one Article
     *   }
     * })
     * 
    **/
    delete<T extends ArticleDeleteArgs>(
      args: SelectSubset<T, ArticleDeleteArgs>
    ): CheckSelect<T, Prisma__ArticleClient<Article>, Prisma__ArticleClient<ArticleGetPayload<T>>>

    /**
     * Update one Article.
     * @param {ArticleUpdateArgs} args - Arguments to update one Article.
     * @example
     * // Update one Article
     * const article = await prisma.article.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ArticleUpdateArgs>(
      args: SelectSubset<T, ArticleUpdateArgs>
    ): CheckSelect<T, Prisma__ArticleClient<Article>, Prisma__ArticleClient<ArticleGetPayload<T>>>

    /**
     * Delete zero or more Articles.
     * @param {ArticleDeleteManyArgs} args - Arguments to filter Articles to delete.
     * @example
     * // Delete a few Articles
     * const { count } = await prisma.article.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ArticleDeleteManyArgs>(
      args?: SelectSubset<T, ArticleDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Articles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Articles
     * const article = await prisma.article.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ArticleUpdateManyArgs>(
      args: SelectSubset<T, ArticleUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Article.
     * @param {ArticleUpsertArgs} args - Arguments to update or create a Article.
     * @example
     * // Update or create a Article
     * const article = await prisma.article.upsert({
     *   create: {
     *     // ... data to create a Article
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Article we want to update
     *   }
     * })
    **/
    upsert<T extends ArticleUpsertArgs>(
      args: SelectSubset<T, ArticleUpsertArgs>
    ): CheckSelect<T, Prisma__ArticleClient<Article>, Prisma__ArticleClient<ArticleGetPayload<T>>>

    /**
     * Count the number of Articles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleCountArgs} args - Arguments to filter Articles to count.
     * @example
     * // Count the number of Articles
     * const count = await prisma.article.count({
     *   where: {
     *     // ... the filter for the Articles we want to count
     *   }
     * })
    **/
    count<T extends ArticleCountArgs>(
      args?: Subset<T, ArticleCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ArticleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Article.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ArticleAggregateArgs>(args: Subset<T, ArticleAggregateArgs>): PrismaPromise<GetArticleAggregateType<T>>

    /**
     * Group by Article.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ArticleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ArticleGroupByArgs['orderBy'] }
        : { orderBy?: ArticleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ArticleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetArticleGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Article.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ArticleClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    category<T extends CategoryArgs = {}>(args?: Subset<T, CategoryArgs>): CheckSelect<T, Prisma__CategoryClient<Category | null >, Prisma__CategoryClient<CategoryGetPayload<T> | null >>;

    user<T extends UserArgs = {}>(args?: Subset<T, UserArgs>): CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>;

    comments<T extends CommentFindManyArgs = {}>(args?: Subset<T, CommentFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Comment>>, PrismaPromise<Array<CommentGetPayload<T>>>>;

    content<T extends ContentArgs = {}>(args?: Subset<T, ContentArgs>): CheckSelect<T, Prisma__ContentClient<Content | null >, Prisma__ContentClient<ContentGetPayload<T> | null >>;

    favoritings<T extends FavoriteFindManyArgs = {}>(args?: Subset<T, FavoriteFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Favorite>>, PrismaPromise<Array<FavoriteGetPayload<T>>>>;

    likes<T extends LikeFindManyArgs = {}>(args?: Subset<T, LikeFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Like>>, PrismaPromise<Array<LikeGetPayload<T>>>>;

    tags<T extends TagsOnArticlesFindManyArgs = {}>(args?: Subset<T, TagsOnArticlesFindManyArgs>): CheckSelect<T, PrismaPromise<Array<TagsOnArticles>>, PrismaPromise<Array<TagsOnArticlesGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Article findUnique
   */
  export type ArticleFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Article
     * 
    **/
    select?: ArticleSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ArticleInclude | null
    /**
     * Throw an Error if a Article can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Article to fetch.
     * 
    **/
    where: ArticleWhereUniqueInput
  }


  /**
   * Article findFirst
   */
  export type ArticleFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Article
     * 
    **/
    select?: ArticleSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ArticleInclude | null
    /**
     * Throw an Error if a Article can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Article to fetch.
     * 
    **/
    where?: ArticleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Articles to fetch.
     * 
    **/
    orderBy?: Enumerable<ArticleOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Articles.
     * 
    **/
    cursor?: ArticleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Articles from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Articles.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Articles.
     * 
    **/
    distinct?: Enumerable<ArticleScalarFieldEnum>
  }


  /**
   * Article findMany
   */
  export type ArticleFindManyArgs = {
    /**
     * Select specific fields to fetch from the Article
     * 
    **/
    select?: ArticleSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ArticleInclude | null
    /**
     * Filter, which Articles to fetch.
     * 
    **/
    where?: ArticleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Articles to fetch.
     * 
    **/
    orderBy?: Enumerable<ArticleOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Articles.
     * 
    **/
    cursor?: ArticleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Articles from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Articles.
     * 
    **/
    skip?: number
    distinct?: Enumerable<ArticleScalarFieldEnum>
  }


  /**
   * Article create
   */
  export type ArticleCreateArgs = {
    /**
     * Select specific fields to fetch from the Article
     * 
    **/
    select?: ArticleSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ArticleInclude | null
    /**
     * The data needed to create a Article.
     * 
    **/
    data: XOR<ArticleCreateInput, ArticleUncheckedCreateInput>
  }


  /**
   * Article createMany
   */
  export type ArticleCreateManyArgs = {
    data: Enumerable<ArticleCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Article update
   */
  export type ArticleUpdateArgs = {
    /**
     * Select specific fields to fetch from the Article
     * 
    **/
    select?: ArticleSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ArticleInclude | null
    /**
     * The data needed to update a Article.
     * 
    **/
    data: XOR<ArticleUpdateInput, ArticleUncheckedUpdateInput>
    /**
     * Choose, which Article to update.
     * 
    **/
    where: ArticleWhereUniqueInput
  }


  /**
   * Article updateMany
   */
  export type ArticleUpdateManyArgs = {
    data: XOR<ArticleUpdateManyMutationInput, ArticleUncheckedUpdateManyInput>
    where?: ArticleWhereInput
  }


  /**
   * Article upsert
   */
  export type ArticleUpsertArgs = {
    /**
     * Select specific fields to fetch from the Article
     * 
    **/
    select?: ArticleSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ArticleInclude | null
    /**
     * The filter to search for the Article to update in case it exists.
     * 
    **/
    where: ArticleWhereUniqueInput
    /**
     * In case the Article found by the `where` argument doesn't exist, create a new Article with this data.
     * 
    **/
    create: XOR<ArticleCreateInput, ArticleUncheckedCreateInput>
    /**
     * In case the Article was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<ArticleUpdateInput, ArticleUncheckedUpdateInput>
  }


  /**
   * Article delete
   */
  export type ArticleDeleteArgs = {
    /**
     * Select specific fields to fetch from the Article
     * 
    **/
    select?: ArticleSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ArticleInclude | null
    /**
     * Filter which Article to delete.
     * 
    **/
    where: ArticleWhereUniqueInput
  }


  /**
   * Article deleteMany
   */
  export type ArticleDeleteManyArgs = {
    where?: ArticleWhereInput
  }


  /**
   * Article without action
   */
  export type ArticleArgs = {
    /**
     * Select specific fields to fetch from the Article
     * 
    **/
    select?: ArticleSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ArticleInclude | null
  }



  /**
   * Model User
   */


  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
    max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    email: string | null
    name: string | null
    slug: string | null
    url: string | null
    cover: string | null
    bio: string | null
    description: string | null
    mobile: string | null
    openid: string | null
    password: string | null
    loggedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    deleteAt: Date | null
    avatar: string | null
    updatedPwdAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    name: string | null
    slug: string | null
    url: string | null
    cover: string | null
    bio: string | null
    description: string | null
    mobile: string | null
    openid: string | null
    password: string | null
    loggedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    deleteAt: Date | null
    avatar: string | null
    updatedPwdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    name: number
    slug: number
    url: number
    meta: number
    cover: number
    bio: number
    description: number
    mobile: number
    openid: number
    password: number
    loggedAt: number
    createdAt: number
    updatedAt: number
    deleteAt: number
    avatar: number
    updatedPwdAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    slug?: true
    url?: true
    cover?: true
    bio?: true
    description?: true
    mobile?: true
    openid?: true
    password?: true
    loggedAt?: true
    createdAt?: true
    updatedAt?: true
    deleteAt?: true
    avatar?: true
    updatedPwdAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    slug?: true
    url?: true
    cover?: true
    bio?: true
    description?: true
    mobile?: true
    openid?: true
    password?: true
    loggedAt?: true
    createdAt?: true
    updatedAt?: true
    deleteAt?: true
    avatar?: true
    updatedPwdAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    slug?: true
    url?: true
    meta?: true
    cover?: true
    bio?: true
    description?: true
    mobile?: true
    openid?: true
    password?: true
    loggedAt?: true
    createdAt?: true
    updatedAt?: true
    deleteAt?: true
    avatar?: true
    updatedPwdAt?: true
    _all?: true
  }

  export type UserAggregateArgs = {
    /**
     * Filter which User to aggregate.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_count`
    **/
    count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_avg`
    **/
    avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_sum`
    **/
    sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_min`
    **/
    min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_max`
    **/
    max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }


    
    
  export type UserGroupByArgs = {
    where?: UserWhereInput
    orderBy?: Enumerable<UserOrderByInput>
    by: Array<UserScalarFieldEnum>
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }


  export type UserGroupByOutputType = {
    id: number
    email: string | null
    name: string
    slug: string
    url: string | null
    meta: JsonValue | null
    cover: string | null
    bio: string | null
    description: string | null
    mobile: string | null
    openid: string | null
    password: string
    loggedAt: Date
    createdAt: Date
    updatedAt: Date
    deleteAt: Date | null
    avatar: string | null
    updatedPwdAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Promise<
    Array<
      PickArray<UserGroupByOutputType, T['by']> & 
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count' 
            ? T[P] extends boolean 
              ? number 
              : GetScalarType<T[P], UserGroupByOutputType[P]> 
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      > 
    >


  export type UserSelect = {
    id?: boolean
    email?: boolean
    name?: boolean
    slug?: boolean
    url?: boolean
    meta?: boolean
    cover?: boolean
    bio?: boolean
    description?: boolean
    mobile?: boolean
    openid?: boolean
    password?: boolean
    loggedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deleteAt?: boolean
    avatar?: boolean
    articles?: boolean | ArticleFindManyArgs
    comments?: boolean | CommentFindManyArgs
    favorites?: boolean | FavoriteFindManyArgs
    followers?: boolean | FollowerFindManyArgs
    followings?: boolean | FollowerFindManyArgs
    likes?: boolean | LikeFindManyArgs
    updatedPwdAt?: boolean
    _count?: boolean | UserCountOutputTypeArgs
  }

  export type UserInclude = {
    articles?: boolean | ArticleFindManyArgs
    comments?: boolean | CommentFindManyArgs
    favorites?: boolean | FavoriteFindManyArgs
    followers?: boolean | FollowerFindManyArgs
    followings?: boolean | FollowerFindManyArgs
    likes?: boolean | LikeFindManyArgs
    _count?: boolean | UserCountOutputTypeArgs
  }

  export type UserGetPayload<
    S extends boolean | null | undefined | UserArgs,
    U = keyof S
      > = S extends true
        ? User
    : S extends undefined
    ? never
    : S extends UserArgs | UserFindManyArgs
    ?'include' extends U
    ? User  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'articles'
        ? Array < ArticleGetPayload<S['include'][P]>>  :
        P extends 'comments'
        ? Array < CommentGetPayload<S['include'][P]>>  :
        P extends 'favorites'
        ? Array < FavoriteGetPayload<S['include'][P]>>  :
        P extends 'followers'
        ? Array < FollowerGetPayload<S['include'][P]>>  :
        P extends 'followings'
        ? Array < FollowerGetPayload<S['include'][P]>>  :
        P extends 'likes'
        ? Array < LikeGetPayload<S['include'][P]>>  :
        P extends '_count'
        ? UserCountOutputTypeGetPayload<S['include'][P]> | null : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof User ?User [P]
  : 
          P extends 'articles'
        ? Array < ArticleGetPayload<S['select'][P]>>  :
        P extends 'comments'
        ? Array < CommentGetPayload<S['select'][P]>>  :
        P extends 'favorites'
        ? Array < FavoriteGetPayload<S['select'][P]>>  :
        P extends 'followers'
        ? Array < FollowerGetPayload<S['select'][P]>>  :
        P extends 'followings'
        ? Array < FollowerGetPayload<S['select'][P]>>  :
        P extends 'likes'
        ? Array < LikeGetPayload<S['select'][P]>>  :
        P extends '_count'
        ? UserCountOutputTypeGetPayload<S['select'][P]> | null : never
  } 
    : User
  : User


  type UserCountArgs = Merge<
    Omit<UserFindManyArgs, 'select' | 'include'> & {
      select?: UserCountAggregateInputType | true
    }
  >

  export interface UserDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, UserFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'User'> extends True ? CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>> : CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, UserFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'User'> extends True ? CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>> : CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs>(
      args?: SelectSubset<T, UserFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<User>>, PrismaPromise<Array<UserGetPayload<T>>>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs>(
      args: SelectSubset<T, UserCreateArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs>(
      args?: SelectSubset<T, UserCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs>(
      args: SelectSubset<T, UserDeleteArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserUpdateArgs>(
      args: SelectSubset<T, UserUpdateArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs>(
      args?: SelectSubset<T, UserDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserUpdateManyArgs>(
      args: SelectSubset<T, UserUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends UserUpsertArgs>(
      args: SelectSubset<T, UserUpsertArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__UserClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    articles<T extends ArticleFindManyArgs = {}>(args?: Subset<T, ArticleFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Article>>, PrismaPromise<Array<ArticleGetPayload<T>>>>;

    comments<T extends CommentFindManyArgs = {}>(args?: Subset<T, CommentFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Comment>>, PrismaPromise<Array<CommentGetPayload<T>>>>;

    favorites<T extends FavoriteFindManyArgs = {}>(args?: Subset<T, FavoriteFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Favorite>>, PrismaPromise<Array<FavoriteGetPayload<T>>>>;

    followers<T extends FollowerFindManyArgs = {}>(args?: Subset<T, FollowerFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Follower>>, PrismaPromise<Array<FollowerGetPayload<T>>>>;

    followings<T extends FollowerFindManyArgs = {}>(args?: Subset<T, FollowerFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Follower>>, PrismaPromise<Array<FollowerGetPayload<T>>>>;

    likes<T extends LikeFindManyArgs = {}>(args?: Subset<T, LikeFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Like>>, PrismaPromise<Array<LikeGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * User findUnique
   */
  export type UserFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Throw an Error if a User can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which User to fetch.
     * 
    **/
    where: UserWhereUniqueInput
  }


  /**
   * User findFirst
   */
  export type UserFindFirstArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Throw an Error if a User can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which User to fetch.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     * 
    **/
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User findMany
   */
  export type UserFindManyArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter, which Users to fetch.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User create
   */
  export type UserCreateArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * The data needed to create a User.
     * 
    **/
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User createMany
   */
  export type UserCreateManyArgs = {
    data: Enumerable<UserCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * User update
   */
  export type UserUpdateArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * The data needed to update a User.
     * 
    **/
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     * 
    **/
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs = {
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * The filter to search for the User to update in case it exists.
     * 
    **/
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     * 
    **/
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }


  /**
   * User delete
   */
  export type UserDeleteArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter which User to delete.
     * 
    **/
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs = {
    where?: UserWhereInput
  }


  /**
   * User without action
   */
  export type UserArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
  }



  /**
   * Model Tag
   */


  export type AggregateTag = {
    _count: TagCountAggregateOutputType | null
    count: TagCountAggregateOutputType | null
    _avg: TagAvgAggregateOutputType | null
    avg: TagAvgAggregateOutputType | null
    _sum: TagSumAggregateOutputType | null
    sum: TagSumAggregateOutputType | null
    _min: TagMinAggregateOutputType | null
    min: TagMinAggregateOutputType | null
    _max: TagMaxAggregateOutputType | null
    max: TagMaxAggregateOutputType | null
  }

  export type TagAvgAggregateOutputType = {
    id: number | null
  }

  export type TagSumAggregateOutputType = {
    id: number | null
  }

  export type TagMinAggregateOutputType = {
    id: number | null
    slug: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TagMaxAggregateOutputType = {
    id: number | null
    slug: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TagCountAggregateOutputType = {
    id: number
    slug: number
    createdAt: number
    updatedAt: number
    meta: number
    _all: number
  }


  export type TagAvgAggregateInputType = {
    id?: true
  }

  export type TagSumAggregateInputType = {
    id?: true
  }

  export type TagMinAggregateInputType = {
    id?: true
    slug?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TagMaxAggregateInputType = {
    id?: true
    slug?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TagCountAggregateInputType = {
    id?: true
    slug?: true
    createdAt?: true
    updatedAt?: true
    meta?: true
    _all?: true
  }

  export type TagAggregateArgs = {
    /**
     * Filter which Tag to aggregate.
     * 
    **/
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     * 
    **/
    orderBy?: Enumerable<TagOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tags
    **/
    _count?: true | TagCountAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_count`
    **/
    count?: true | TagCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TagAvgAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_avg`
    **/
    avg?: TagAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TagSumAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_sum`
    **/
    sum?: TagSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TagMinAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_min`
    **/
    min?: TagMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TagMaxAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_max`
    **/
    max?: TagMaxAggregateInputType
  }

  export type GetTagAggregateType<T extends TagAggregateArgs> = {
        [P in keyof T & keyof AggregateTag]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTag[P]>
      : GetScalarType<T[P], AggregateTag[P]>
  }


    
    
  export type TagGroupByArgs = {
    where?: TagWhereInput
    orderBy?: Enumerable<TagOrderByInput>
    by: Array<TagScalarFieldEnum>
    having?: TagScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TagCountAggregateInputType | true
    _avg?: TagAvgAggregateInputType
    _sum?: TagSumAggregateInputType
    _min?: TagMinAggregateInputType
    _max?: TagMaxAggregateInputType
  }


  export type TagGroupByOutputType = {
    id: number
    slug: string
    createdAt: Date
    updatedAt: Date
    meta: JsonValue | null
    _count: TagCountAggregateOutputType | null
    _avg: TagAvgAggregateOutputType | null
    _sum: TagSumAggregateOutputType | null
    _min: TagMinAggregateOutputType | null
    _max: TagMaxAggregateOutputType | null
  }

  type GetTagGroupByPayload<T extends TagGroupByArgs> = Promise<
    Array<
      PickArray<TagGroupByOutputType, T['by']> & 
        {
          [P in ((keyof T) & (keyof TagGroupByOutputType))]: P extends '_count' 
            ? T[P] extends boolean 
              ? number 
              : GetScalarType<T[P], TagGroupByOutputType[P]> 
            : GetScalarType<T[P], TagGroupByOutputType[P]>
        }
      > 
    >


  export type TagSelect = {
    id?: boolean
    slug?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    meta?: boolean
    articles?: boolean | TagsOnArticlesFindManyArgs
    _count?: boolean | TagCountOutputTypeArgs
  }

  export type TagInclude = {
    articles?: boolean | TagsOnArticlesFindManyArgs
    _count?: boolean | TagCountOutputTypeArgs
  }

  export type TagGetPayload<
    S extends boolean | null | undefined | TagArgs,
    U = keyof S
      > = S extends true
        ? Tag
    : S extends undefined
    ? never
    : S extends TagArgs | TagFindManyArgs
    ?'include' extends U
    ? Tag  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'articles'
        ? Array < TagsOnArticlesGetPayload<S['include'][P]>>  :
        P extends '_count'
        ? TagCountOutputTypeGetPayload<S['include'][P]> | null : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof Tag ?Tag [P]
  : 
          P extends 'articles'
        ? Array < TagsOnArticlesGetPayload<S['select'][P]>>  :
        P extends '_count'
        ? TagCountOutputTypeGetPayload<S['select'][P]> | null : never
  } 
    : Tag
  : Tag


  type TagCountArgs = Merge<
    Omit<TagFindManyArgs, 'select' | 'include'> & {
      select?: TagCountAggregateInputType | true
    }
  >

  export interface TagDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Tag that matches the filter.
     * @param {TagFindUniqueArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TagFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, TagFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Tag'> extends True ? CheckSelect<T, Prisma__TagClient<Tag>, Prisma__TagClient<TagGetPayload<T>>> : CheckSelect<T, Prisma__TagClient<Tag | null >, Prisma__TagClient<TagGetPayload<T> | null >>

    /**
     * Find the first Tag that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindFirstArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TagFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, TagFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Tag'> extends True ? CheckSelect<T, Prisma__TagClient<Tag>, Prisma__TagClient<TagGetPayload<T>>> : CheckSelect<T, Prisma__TagClient<Tag | null >, Prisma__TagClient<TagGetPayload<T> | null >>

    /**
     * Find zero or more Tags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tags
     * const tags = await prisma.tag.findMany()
     * 
     * // Get first 10 Tags
     * const tags = await prisma.tag.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tagWithIdOnly = await prisma.tag.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends TagFindManyArgs>(
      args?: SelectSubset<T, TagFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Tag>>, PrismaPromise<Array<TagGetPayload<T>>>>

    /**
     * Create a Tag.
     * @param {TagCreateArgs} args - Arguments to create a Tag.
     * @example
     * // Create one Tag
     * const Tag = await prisma.tag.create({
     *   data: {
     *     // ... data to create a Tag
     *   }
     * })
     * 
    **/
    create<T extends TagCreateArgs>(
      args: SelectSubset<T, TagCreateArgs>
    ): CheckSelect<T, Prisma__TagClient<Tag>, Prisma__TagClient<TagGetPayload<T>>>

    /**
     * Create many Tags.
     *     @param {TagCreateManyArgs} args - Arguments to create many Tags.
     *     @example
     *     // Create many Tags
     *     const tag = await prisma.tag.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends TagCreateManyArgs>(
      args?: SelectSubset<T, TagCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Tag.
     * @param {TagDeleteArgs} args - Arguments to delete one Tag.
     * @example
     * // Delete one Tag
     * const Tag = await prisma.tag.delete({
     *   where: {
     *     // ... filter to delete one Tag
     *   }
     * })
     * 
    **/
    delete<T extends TagDeleteArgs>(
      args: SelectSubset<T, TagDeleteArgs>
    ): CheckSelect<T, Prisma__TagClient<Tag>, Prisma__TagClient<TagGetPayload<T>>>

    /**
     * Update one Tag.
     * @param {TagUpdateArgs} args - Arguments to update one Tag.
     * @example
     * // Update one Tag
     * const tag = await prisma.tag.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TagUpdateArgs>(
      args: SelectSubset<T, TagUpdateArgs>
    ): CheckSelect<T, Prisma__TagClient<Tag>, Prisma__TagClient<TagGetPayload<T>>>

    /**
     * Delete zero or more Tags.
     * @param {TagDeleteManyArgs} args - Arguments to filter Tags to delete.
     * @example
     * // Delete a few Tags
     * const { count } = await prisma.tag.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TagDeleteManyArgs>(
      args?: SelectSubset<T, TagDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tags
     * const tag = await prisma.tag.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TagUpdateManyArgs>(
      args: SelectSubset<T, TagUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Tag.
     * @param {TagUpsertArgs} args - Arguments to update or create a Tag.
     * @example
     * // Update or create a Tag
     * const tag = await prisma.tag.upsert({
     *   create: {
     *     // ... data to create a Tag
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tag we want to update
     *   }
     * })
    **/
    upsert<T extends TagUpsertArgs>(
      args: SelectSubset<T, TagUpsertArgs>
    ): CheckSelect<T, Prisma__TagClient<Tag>, Prisma__TagClient<TagGetPayload<T>>>

    /**
     * Count the number of Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagCountArgs} args - Arguments to filter Tags to count.
     * @example
     * // Count the number of Tags
     * const count = await prisma.tag.count({
     *   where: {
     *     // ... the filter for the Tags we want to count
     *   }
     * })
    **/
    count<T extends TagCountArgs>(
      args?: Subset<T, TagCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TagCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TagAggregateArgs>(args: Subset<T, TagAggregateArgs>): PrismaPromise<GetTagAggregateType<T>>

    /**
     * Group by Tag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TagGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TagGroupByArgs['orderBy'] }
        : { orderBy?: TagGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TagGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTagGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tag.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__TagClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    articles<T extends TagsOnArticlesFindManyArgs = {}>(args?: Subset<T, TagsOnArticlesFindManyArgs>): CheckSelect<T, PrismaPromise<Array<TagsOnArticles>>, PrismaPromise<Array<TagsOnArticlesGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Tag findUnique
   */
  export type TagFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Tag
     * 
    **/
    select?: TagSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TagInclude | null
    /**
     * Throw an Error if a Tag can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Tag to fetch.
     * 
    **/
    where: TagWhereUniqueInput
  }


  /**
   * Tag findFirst
   */
  export type TagFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Tag
     * 
    **/
    select?: TagSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TagInclude | null
    /**
     * Throw an Error if a Tag can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Tag to fetch.
     * 
    **/
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     * 
    **/
    orderBy?: Enumerable<TagOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tags.
     * 
    **/
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tags.
     * 
    **/
    distinct?: Enumerable<TagScalarFieldEnum>
  }


  /**
   * Tag findMany
   */
  export type TagFindManyArgs = {
    /**
     * Select specific fields to fetch from the Tag
     * 
    **/
    select?: TagSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TagInclude | null
    /**
     * Filter, which Tags to fetch.
     * 
    **/
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     * 
    **/
    orderBy?: Enumerable<TagOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tags.
     * 
    **/
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     * 
    **/
    skip?: number
    distinct?: Enumerable<TagScalarFieldEnum>
  }


  /**
   * Tag create
   */
  export type TagCreateArgs = {
    /**
     * Select specific fields to fetch from the Tag
     * 
    **/
    select?: TagSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TagInclude | null
    /**
     * The data needed to create a Tag.
     * 
    **/
    data: XOR<TagCreateInput, TagUncheckedCreateInput>
  }


  /**
   * Tag createMany
   */
  export type TagCreateManyArgs = {
    data: Enumerable<TagCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Tag update
   */
  export type TagUpdateArgs = {
    /**
     * Select specific fields to fetch from the Tag
     * 
    **/
    select?: TagSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TagInclude | null
    /**
     * The data needed to update a Tag.
     * 
    **/
    data: XOR<TagUpdateInput, TagUncheckedUpdateInput>
    /**
     * Choose, which Tag to update.
     * 
    **/
    where: TagWhereUniqueInput
  }


  /**
   * Tag updateMany
   */
  export type TagUpdateManyArgs = {
    data: XOR<TagUpdateManyMutationInput, TagUncheckedUpdateManyInput>
    where?: TagWhereInput
  }


  /**
   * Tag upsert
   */
  export type TagUpsertArgs = {
    /**
     * Select specific fields to fetch from the Tag
     * 
    **/
    select?: TagSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TagInclude | null
    /**
     * The filter to search for the Tag to update in case it exists.
     * 
    **/
    where: TagWhereUniqueInput
    /**
     * In case the Tag found by the `where` argument doesn't exist, create a new Tag with this data.
     * 
    **/
    create: XOR<TagCreateInput, TagUncheckedCreateInput>
    /**
     * In case the Tag was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<TagUpdateInput, TagUncheckedUpdateInput>
  }


  /**
   * Tag delete
   */
  export type TagDeleteArgs = {
    /**
     * Select specific fields to fetch from the Tag
     * 
    **/
    select?: TagSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TagInclude | null
    /**
     * Filter which Tag to delete.
     * 
    **/
    where: TagWhereUniqueInput
  }


  /**
   * Tag deleteMany
   */
  export type TagDeleteManyArgs = {
    where?: TagWhereInput
  }


  /**
   * Tag without action
   */
  export type TagArgs = {
    /**
     * Select specific fields to fetch from the Tag
     * 
    **/
    select?: TagSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TagInclude | null
  }



  /**
   * Model Category
   */


  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
    max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryAvgAggregateOutputType = {
    id: number | null
    article_count: number | null
  }

  export type CategorySumAggregateOutputType = {
    id: number | null
    article_count: number | null
  }

  export type CategoryMinAggregateOutputType = {
    id: number | null
    slug: string | null
    name: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
    article_count: number | null
  }

  export type CategoryMaxAggregateOutputType = {
    id: number | null
    slug: string | null
    name: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
    article_count: number | null
  }

  export type CategoryCountAggregateOutputType = {
    id: number
    slug: number
    name: number
    description: number
    createdAt: number
    updatedAt: number
    article_count: number
    meta: number
    _all: number
  }


  export type CategoryAvgAggregateInputType = {
    id?: true
    article_count?: true
  }

  export type CategorySumAggregateInputType = {
    id?: true
    article_count?: true
  }

  export type CategoryMinAggregateInputType = {
    id?: true
    slug?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    article_count?: true
  }

  export type CategoryMaxAggregateInputType = {
    id?: true
    slug?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    article_count?: true
  }

  export type CategoryCountAggregateInputType = {
    id?: true
    slug?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    article_count?: true
    meta?: true
    _all?: true
  }

  export type CategoryAggregateArgs = {
    /**
     * Filter which Category to aggregate.
     * 
    **/
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     * 
    **/
    orderBy?: Enumerable<CategoryOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_count`
    **/
    count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoryAvgAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_avg`
    **/
    avg?: CategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategorySumAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_sum`
    **/
    sum?: CategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_min`
    **/
    min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_max`
    **/
    max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }


    
    
  export type CategoryGroupByArgs = {
    where?: CategoryWhereInput
    orderBy?: Enumerable<CategoryOrderByInput>
    by: Array<CategoryScalarFieldEnum>
    having?: CategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _avg?: CategoryAvgAggregateInputType
    _sum?: CategorySumAggregateInputType
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }


  export type CategoryGroupByOutputType = {
    id: number
    slug: string
    name: string
    description: string | null
    createdAt: Date
    updatedAt: Date
    article_count: number
    meta: JsonValue | null
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends CategoryGroupByArgs> = Promise<
    Array<
      PickArray<CategoryGroupByOutputType, T['by']> & 
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count' 
            ? T[P] extends boolean 
              ? number 
              : GetScalarType<T[P], CategoryGroupByOutputType[P]> 
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      > 
    >


  export type CategorySelect = {
    id?: boolean
    slug?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    article_count?: boolean
    meta?: boolean
    articles?: boolean | ArticleFindManyArgs
    _count?: boolean | CategoryCountOutputTypeArgs
  }

  export type CategoryInclude = {
    articles?: boolean | ArticleFindManyArgs
    _count?: boolean | CategoryCountOutputTypeArgs
  }

  export type CategoryGetPayload<
    S extends boolean | null | undefined | CategoryArgs,
    U = keyof S
      > = S extends true
        ? Category
    : S extends undefined
    ? never
    : S extends CategoryArgs | CategoryFindManyArgs
    ?'include' extends U
    ? Category  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'articles'
        ? Array < ArticleGetPayload<S['include'][P]>>  :
        P extends '_count'
        ? CategoryCountOutputTypeGetPayload<S['include'][P]> | null : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof Category ?Category [P]
  : 
          P extends 'articles'
        ? Array < ArticleGetPayload<S['select'][P]>>  :
        P extends '_count'
        ? CategoryCountOutputTypeGetPayload<S['select'][P]> | null : never
  } 
    : Category
  : Category


  type CategoryCountArgs = Merge<
    Omit<CategoryFindManyArgs, 'select' | 'include'> & {
      select?: CategoryCountAggregateInputType | true
    }
  >

  export interface CategoryDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Category that matches the filter.
     * @param {CategoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CategoryFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, CategoryFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Category'> extends True ? CheckSelect<T, Prisma__CategoryClient<Category>, Prisma__CategoryClient<CategoryGetPayload<T>>> : CheckSelect<T, Prisma__CategoryClient<Category | null >, Prisma__CategoryClient<CategoryGetPayload<T> | null >>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CategoryFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, CategoryFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Category'> extends True ? CheckSelect<T, Prisma__CategoryClient<Category>, Prisma__CategoryClient<CategoryGetPayload<T>>> : CheckSelect<T, Prisma__CategoryClient<Category | null >, Prisma__CategoryClient<CategoryGetPayload<T> | null >>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryWithIdOnly = await prisma.category.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CategoryFindManyArgs>(
      args?: SelectSubset<T, CategoryFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Category>>, PrismaPromise<Array<CategoryGetPayload<T>>>>

    /**
     * Create a Category.
     * @param {CategoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
    **/
    create<T extends CategoryCreateArgs>(
      args: SelectSubset<T, CategoryCreateArgs>
    ): CheckSelect<T, Prisma__CategoryClient<Category>, Prisma__CategoryClient<CategoryGetPayload<T>>>

    /**
     * Create many Categories.
     *     @param {CategoryCreateManyArgs} args - Arguments to create many Categories.
     *     @example
     *     // Create many Categories
     *     const category = await prisma.category.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CategoryCreateManyArgs>(
      args?: SelectSubset<T, CategoryCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Category.
     * @param {CategoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
    **/
    delete<T extends CategoryDeleteArgs>(
      args: SelectSubset<T, CategoryDeleteArgs>
    ): CheckSelect<T, Prisma__CategoryClient<Category>, Prisma__CategoryClient<CategoryGetPayload<T>>>

    /**
     * Update one Category.
     * @param {CategoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CategoryUpdateArgs>(
      args: SelectSubset<T, CategoryUpdateArgs>
    ): CheckSelect<T, Prisma__CategoryClient<Category>, Prisma__CategoryClient<CategoryGetPayload<T>>>

    /**
     * Delete zero or more Categories.
     * @param {CategoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CategoryDeleteManyArgs>(
      args?: SelectSubset<T, CategoryDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CategoryUpdateManyArgs>(
      args: SelectSubset<T, CategoryUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Category.
     * @param {CategoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
    **/
    upsert<T extends CategoryUpsertArgs>(
      args: SelectSubset<T, CategoryUpsertArgs>
    ): CheckSelect<T, Prisma__CategoryClient<Category>, Prisma__CategoryClient<CategoryGetPayload<T>>>

    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoryCountArgs>(
      args?: Subset<T, CategoryCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryGroupByArgs['orderBy'] }
        : { orderBy?: CategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__CategoryClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    articles<T extends ArticleFindManyArgs = {}>(args?: Subset<T, ArticleFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Article>>, PrismaPromise<Array<ArticleGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Category findUnique
   */
  export type CategoryFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Category
     * 
    **/
    select?: CategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CategoryInclude | null
    /**
     * Throw an Error if a Category can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Category to fetch.
     * 
    **/
    where: CategoryWhereUniqueInput
  }


  /**
   * Category findFirst
   */
  export type CategoryFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Category
     * 
    **/
    select?: CategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CategoryInclude | null
    /**
     * Throw an Error if a Category can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Category to fetch.
     * 
    **/
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     * 
    **/
    orderBy?: Enumerable<CategoryOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     * 
    **/
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     * 
    **/
    distinct?: Enumerable<CategoryScalarFieldEnum>
  }


  /**
   * Category findMany
   */
  export type CategoryFindManyArgs = {
    /**
     * Select specific fields to fetch from the Category
     * 
    **/
    select?: CategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CategoryInclude | null
    /**
     * Filter, which Categories to fetch.
     * 
    **/
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     * 
    **/
    orderBy?: Enumerable<CategoryOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     * 
    **/
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     * 
    **/
    skip?: number
    distinct?: Enumerable<CategoryScalarFieldEnum>
  }


  /**
   * Category create
   */
  export type CategoryCreateArgs = {
    /**
     * Select specific fields to fetch from the Category
     * 
    **/
    select?: CategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CategoryInclude | null
    /**
     * The data needed to create a Category.
     * 
    **/
    data: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
  }


  /**
   * Category createMany
   */
  export type CategoryCreateManyArgs = {
    data: Enumerable<CategoryCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Category update
   */
  export type CategoryUpdateArgs = {
    /**
     * Select specific fields to fetch from the Category
     * 
    **/
    select?: CategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CategoryInclude | null
    /**
     * The data needed to update a Category.
     * 
    **/
    data: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
    /**
     * Choose, which Category to update.
     * 
    **/
    where: CategoryWhereUniqueInput
  }


  /**
   * Category updateMany
   */
  export type CategoryUpdateManyArgs = {
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    where?: CategoryWhereInput
  }


  /**
   * Category upsert
   */
  export type CategoryUpsertArgs = {
    /**
     * Select specific fields to fetch from the Category
     * 
    **/
    select?: CategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CategoryInclude | null
    /**
     * The filter to search for the Category to update in case it exists.
     * 
    **/
    where: CategoryWhereUniqueInput
    /**
     * In case the Category found by the `where` argument doesn't exist, create a new Category with this data.
     * 
    **/
    create: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
    /**
     * In case the Category was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
  }


  /**
   * Category delete
   */
  export type CategoryDeleteArgs = {
    /**
     * Select specific fields to fetch from the Category
     * 
    **/
    select?: CategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CategoryInclude | null
    /**
     * Filter which Category to delete.
     * 
    **/
    where: CategoryWhereUniqueInput
  }


  /**
   * Category deleteMany
   */
  export type CategoryDeleteManyArgs = {
    where?: CategoryWhereInput
  }


  /**
   * Category without action
   */
  export type CategoryArgs = {
    /**
     * Select specific fields to fetch from the Category
     * 
    **/
    select?: CategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CategoryInclude | null
  }



  /**
   * Model Topic
   */


  export type AggregateTopic = {
    _count: TopicCountAggregateOutputType | null
    count: TopicCountAggregateOutputType | null
    _avg: TopicAvgAggregateOutputType | null
    avg: TopicAvgAggregateOutputType | null
    _sum: TopicSumAggregateOutputType | null
    sum: TopicSumAggregateOutputType | null
    _min: TopicMinAggregateOutputType | null
    min: TopicMinAggregateOutputType | null
    _max: TopicMaxAggregateOutputType | null
    max: TopicMaxAggregateOutputType | null
  }

  export type TopicAvgAggregateOutputType = {
    id: number | null
  }

  export type TopicSumAggregateOutputType = {
    id: number | null
  }

  export type TopicMinAggregateOutputType = {
    id: number | null
  }

  export type TopicMaxAggregateOutputType = {
    id: number | null
  }

  export type TopicCountAggregateOutputType = {
    id: number
    _all: number
  }


  export type TopicAvgAggregateInputType = {
    id?: true
  }

  export type TopicSumAggregateInputType = {
    id?: true
  }

  export type TopicMinAggregateInputType = {
    id?: true
  }

  export type TopicMaxAggregateInputType = {
    id?: true
  }

  export type TopicCountAggregateInputType = {
    id?: true
    _all?: true
  }

  export type TopicAggregateArgs = {
    /**
     * Filter which Topic to aggregate.
     * 
    **/
    where?: TopicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Topics to fetch.
     * 
    **/
    orderBy?: Enumerable<TopicOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: TopicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Topics from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Topics.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Topics
    **/
    _count?: true | TopicCountAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_count`
    **/
    count?: true | TopicCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TopicAvgAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_avg`
    **/
    avg?: TopicAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TopicSumAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_sum`
    **/
    sum?: TopicSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TopicMinAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_min`
    **/
    min?: TopicMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TopicMaxAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_max`
    **/
    max?: TopicMaxAggregateInputType
  }

  export type GetTopicAggregateType<T extends TopicAggregateArgs> = {
        [P in keyof T & keyof AggregateTopic]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTopic[P]>
      : GetScalarType<T[P], AggregateTopic[P]>
  }


    
    
  export type TopicGroupByArgs = {
    where?: TopicWhereInput
    orderBy?: Enumerable<TopicOrderByInput>
    by: Array<TopicScalarFieldEnum>
    having?: TopicScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TopicCountAggregateInputType | true
    _avg?: TopicAvgAggregateInputType
    _sum?: TopicSumAggregateInputType
    _min?: TopicMinAggregateInputType
    _max?: TopicMaxAggregateInputType
  }


  export type TopicGroupByOutputType = {
    id: number
    _count: TopicCountAggregateOutputType | null
    _avg: TopicAvgAggregateOutputType | null
    _sum: TopicSumAggregateOutputType | null
    _min: TopicMinAggregateOutputType | null
    _max: TopicMaxAggregateOutputType | null
  }

  type GetTopicGroupByPayload<T extends TopicGroupByArgs> = Promise<
    Array<
      PickArray<TopicGroupByOutputType, T['by']> & 
        {
          [P in ((keyof T) & (keyof TopicGroupByOutputType))]: P extends '_count' 
            ? T[P] extends boolean 
              ? number 
              : GetScalarType<T[P], TopicGroupByOutputType[P]> 
            : GetScalarType<T[P], TopicGroupByOutputType[P]>
        }
      > 
    >


  export type TopicSelect = {
    id?: boolean
  }

  export type TopicGetPayload<
    S extends boolean | null | undefined | TopicArgs,
    U = keyof S
      > = S extends true
        ? Topic
    : S extends undefined
    ? never
    : S extends TopicArgs | TopicFindManyArgs
    ?'include' extends U
    ? Topic 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof Topic ?Topic [P]
  : 
     never
  } 
    : Topic
  : Topic


  type TopicCountArgs = Merge<
    Omit<TopicFindManyArgs, 'select' | 'include'> & {
      select?: TopicCountAggregateInputType | true
    }
  >

  export interface TopicDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Topic that matches the filter.
     * @param {TopicFindUniqueArgs} args - Arguments to find a Topic
     * @example
     * // Get one Topic
     * const topic = await prisma.topic.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TopicFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, TopicFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Topic'> extends True ? CheckSelect<T, Prisma__TopicClient<Topic>, Prisma__TopicClient<TopicGetPayload<T>>> : CheckSelect<T, Prisma__TopicClient<Topic | null >, Prisma__TopicClient<TopicGetPayload<T> | null >>

    /**
     * Find the first Topic that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TopicFindFirstArgs} args - Arguments to find a Topic
     * @example
     * // Get one Topic
     * const topic = await prisma.topic.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TopicFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, TopicFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Topic'> extends True ? CheckSelect<T, Prisma__TopicClient<Topic>, Prisma__TopicClient<TopicGetPayload<T>>> : CheckSelect<T, Prisma__TopicClient<Topic | null >, Prisma__TopicClient<TopicGetPayload<T> | null >>

    /**
     * Find zero or more Topics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TopicFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Topics
     * const topics = await prisma.topic.findMany()
     * 
     * // Get first 10 Topics
     * const topics = await prisma.topic.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const topicWithIdOnly = await prisma.topic.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends TopicFindManyArgs>(
      args?: SelectSubset<T, TopicFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Topic>>, PrismaPromise<Array<TopicGetPayload<T>>>>

    /**
     * Create a Topic.
     * @param {TopicCreateArgs} args - Arguments to create a Topic.
     * @example
     * // Create one Topic
     * const Topic = await prisma.topic.create({
     *   data: {
     *     // ... data to create a Topic
     *   }
     * })
     * 
    **/
    create<T extends TopicCreateArgs>(
      args: SelectSubset<T, TopicCreateArgs>
    ): CheckSelect<T, Prisma__TopicClient<Topic>, Prisma__TopicClient<TopicGetPayload<T>>>

    /**
     * Create many Topics.
     *     @param {TopicCreateManyArgs} args - Arguments to create many Topics.
     *     @example
     *     // Create many Topics
     *     const topic = await prisma.topic.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends TopicCreateManyArgs>(
      args?: SelectSubset<T, TopicCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Topic.
     * @param {TopicDeleteArgs} args - Arguments to delete one Topic.
     * @example
     * // Delete one Topic
     * const Topic = await prisma.topic.delete({
     *   where: {
     *     // ... filter to delete one Topic
     *   }
     * })
     * 
    **/
    delete<T extends TopicDeleteArgs>(
      args: SelectSubset<T, TopicDeleteArgs>
    ): CheckSelect<T, Prisma__TopicClient<Topic>, Prisma__TopicClient<TopicGetPayload<T>>>

    /**
     * Update one Topic.
     * @param {TopicUpdateArgs} args - Arguments to update one Topic.
     * @example
     * // Update one Topic
     * const topic = await prisma.topic.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TopicUpdateArgs>(
      args: SelectSubset<T, TopicUpdateArgs>
    ): CheckSelect<T, Prisma__TopicClient<Topic>, Prisma__TopicClient<TopicGetPayload<T>>>

    /**
     * Delete zero or more Topics.
     * @param {TopicDeleteManyArgs} args - Arguments to filter Topics to delete.
     * @example
     * // Delete a few Topics
     * const { count } = await prisma.topic.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TopicDeleteManyArgs>(
      args?: SelectSubset<T, TopicDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Topics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TopicUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Topics
     * const topic = await prisma.topic.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TopicUpdateManyArgs>(
      args: SelectSubset<T, TopicUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Topic.
     * @param {TopicUpsertArgs} args - Arguments to update or create a Topic.
     * @example
     * // Update or create a Topic
     * const topic = await prisma.topic.upsert({
     *   create: {
     *     // ... data to create a Topic
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Topic we want to update
     *   }
     * })
    **/
    upsert<T extends TopicUpsertArgs>(
      args: SelectSubset<T, TopicUpsertArgs>
    ): CheckSelect<T, Prisma__TopicClient<Topic>, Prisma__TopicClient<TopicGetPayload<T>>>

    /**
     * Count the number of Topics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TopicCountArgs} args - Arguments to filter Topics to count.
     * @example
     * // Count the number of Topics
     * const count = await prisma.topic.count({
     *   where: {
     *     // ... the filter for the Topics we want to count
     *   }
     * })
    **/
    count<T extends TopicCountArgs>(
      args?: Subset<T, TopicCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TopicCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Topic.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TopicAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TopicAggregateArgs>(args: Subset<T, TopicAggregateArgs>): PrismaPromise<GetTopicAggregateType<T>>

    /**
     * Group by Topic.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TopicGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TopicGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TopicGroupByArgs['orderBy'] }
        : { orderBy?: TopicGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TopicGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTopicGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Topic.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__TopicClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Topic findUnique
   */
  export type TopicFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Topic
     * 
    **/
    select?: TopicSelect | null
    /**
     * Throw an Error if a Topic can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Topic to fetch.
     * 
    **/
    where: TopicWhereUniqueInput
  }


  /**
   * Topic findFirst
   */
  export type TopicFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Topic
     * 
    **/
    select?: TopicSelect | null
    /**
     * Throw an Error if a Topic can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Topic to fetch.
     * 
    **/
    where?: TopicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Topics to fetch.
     * 
    **/
    orderBy?: Enumerable<TopicOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Topics.
     * 
    **/
    cursor?: TopicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Topics from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Topics.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Topics.
     * 
    **/
    distinct?: Enumerable<TopicScalarFieldEnum>
  }


  /**
   * Topic findMany
   */
  export type TopicFindManyArgs = {
    /**
     * Select specific fields to fetch from the Topic
     * 
    **/
    select?: TopicSelect | null
    /**
     * Filter, which Topics to fetch.
     * 
    **/
    where?: TopicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Topics to fetch.
     * 
    **/
    orderBy?: Enumerable<TopicOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Topics.
     * 
    **/
    cursor?: TopicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Topics from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Topics.
     * 
    **/
    skip?: number
    distinct?: Enumerable<TopicScalarFieldEnum>
  }


  /**
   * Topic create
   */
  export type TopicCreateArgs = {
    /**
     * Select specific fields to fetch from the Topic
     * 
    **/
    select?: TopicSelect | null
    /**
     * The data needed to create a Topic.
     * 
    **/
    data?: XOR<TopicCreateInput, TopicUncheckedCreateInput>
  }


  /**
   * Topic createMany
   */
  export type TopicCreateManyArgs = {
    data: Enumerable<TopicCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Topic update
   */
  export type TopicUpdateArgs = {
    /**
     * Select specific fields to fetch from the Topic
     * 
    **/
    select?: TopicSelect | null
    /**
     * The data needed to update a Topic.
     * 
    **/
    data: XOR<TopicUpdateInput, TopicUncheckedUpdateInput>
    /**
     * Choose, which Topic to update.
     * 
    **/
    where: TopicWhereUniqueInput
  }


  /**
   * Topic updateMany
   */
  export type TopicUpdateManyArgs = {
    data: XOR<TopicUpdateManyMutationInput, TopicUncheckedUpdateManyInput>
    where?: TopicWhereInput
  }


  /**
   * Topic upsert
   */
  export type TopicUpsertArgs = {
    /**
     * Select specific fields to fetch from the Topic
     * 
    **/
    select?: TopicSelect | null
    /**
     * The filter to search for the Topic to update in case it exists.
     * 
    **/
    where: TopicWhereUniqueInput
    /**
     * In case the Topic found by the `where` argument doesn't exist, create a new Topic with this data.
     * 
    **/
    create: XOR<TopicCreateInput, TopicUncheckedCreateInput>
    /**
     * In case the Topic was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<TopicUpdateInput, TopicUncheckedUpdateInput>
  }


  /**
   * Topic delete
   */
  export type TopicDeleteArgs = {
    /**
     * Select specific fields to fetch from the Topic
     * 
    **/
    select?: TopicSelect | null
    /**
     * Filter which Topic to delete.
     * 
    **/
    where: TopicWhereUniqueInput
  }


  /**
   * Topic deleteMany
   */
  export type TopicDeleteManyArgs = {
    where?: TopicWhereInput
  }


  /**
   * Topic without action
   */
  export type TopicArgs = {
    /**
     * Select specific fields to fetch from the Topic
     * 
    **/
    select?: TopicSelect | null
  }



  /**
   * Model Setting
   */


  export type AggregateSetting = {
    _count: SettingCountAggregateOutputType | null
    count: SettingCountAggregateOutputType | null
    _avg: SettingAvgAggregateOutputType | null
    avg: SettingAvgAggregateOutputType | null
    _sum: SettingSumAggregateOutputType | null
    sum: SettingSumAggregateOutputType | null
    _min: SettingMinAggregateOutputType | null
    min: SettingMinAggregateOutputType | null
    _max: SettingMaxAggregateOutputType | null
    max: SettingMaxAggregateOutputType | null
  }

  export type SettingAvgAggregateOutputType = {
    id: number | null
  }

  export type SettingSumAggregateOutputType = {
    id: number | null
  }

  export type SettingMinAggregateOutputType = {
    id: number | null
  }

  export type SettingMaxAggregateOutputType = {
    id: number | null
  }

  export type SettingCountAggregateOutputType = {
    id: number
    _all: number
  }


  export type SettingAvgAggregateInputType = {
    id?: true
  }

  export type SettingSumAggregateInputType = {
    id?: true
  }

  export type SettingMinAggregateInputType = {
    id?: true
  }

  export type SettingMaxAggregateInputType = {
    id?: true
  }

  export type SettingCountAggregateInputType = {
    id?: true
    _all?: true
  }

  export type SettingAggregateArgs = {
    /**
     * Filter which Setting to aggregate.
     * 
    **/
    where?: SettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Settings to fetch.
     * 
    **/
    orderBy?: Enumerable<SettingOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: SettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Settings from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Settings.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Settings
    **/
    _count?: true | SettingCountAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_count`
    **/
    count?: true | SettingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SettingAvgAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_avg`
    **/
    avg?: SettingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SettingSumAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_sum`
    **/
    sum?: SettingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SettingMinAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_min`
    **/
    min?: SettingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SettingMaxAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_max`
    **/
    max?: SettingMaxAggregateInputType
  }

  export type GetSettingAggregateType<T extends SettingAggregateArgs> = {
        [P in keyof T & keyof AggregateSetting]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSetting[P]>
      : GetScalarType<T[P], AggregateSetting[P]>
  }


    
    
  export type SettingGroupByArgs = {
    where?: SettingWhereInput
    orderBy?: Enumerable<SettingOrderByInput>
    by: Array<SettingScalarFieldEnum>
    having?: SettingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SettingCountAggregateInputType | true
    _avg?: SettingAvgAggregateInputType
    _sum?: SettingSumAggregateInputType
    _min?: SettingMinAggregateInputType
    _max?: SettingMaxAggregateInputType
  }


  export type SettingGroupByOutputType = {
    id: number
    _count: SettingCountAggregateOutputType | null
    _avg: SettingAvgAggregateOutputType | null
    _sum: SettingSumAggregateOutputType | null
    _min: SettingMinAggregateOutputType | null
    _max: SettingMaxAggregateOutputType | null
  }

  type GetSettingGroupByPayload<T extends SettingGroupByArgs> = Promise<
    Array<
      PickArray<SettingGroupByOutputType, T['by']> & 
        {
          [P in ((keyof T) & (keyof SettingGroupByOutputType))]: P extends '_count' 
            ? T[P] extends boolean 
              ? number 
              : GetScalarType<T[P], SettingGroupByOutputType[P]> 
            : GetScalarType<T[P], SettingGroupByOutputType[P]>
        }
      > 
    >


  export type SettingSelect = {
    id?: boolean
  }

  export type SettingGetPayload<
    S extends boolean | null | undefined | SettingArgs,
    U = keyof S
      > = S extends true
        ? Setting
    : S extends undefined
    ? never
    : S extends SettingArgs | SettingFindManyArgs
    ?'include' extends U
    ? Setting 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof Setting ?Setting [P]
  : 
     never
  } 
    : Setting
  : Setting


  type SettingCountArgs = Merge<
    Omit<SettingFindManyArgs, 'select' | 'include'> & {
      select?: SettingCountAggregateInputType | true
    }
  >

  export interface SettingDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Setting that matches the filter.
     * @param {SettingFindUniqueArgs} args - Arguments to find a Setting
     * @example
     * // Get one Setting
     * const setting = await prisma.setting.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SettingFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, SettingFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Setting'> extends True ? CheckSelect<T, Prisma__SettingClient<Setting>, Prisma__SettingClient<SettingGetPayload<T>>> : CheckSelect<T, Prisma__SettingClient<Setting | null >, Prisma__SettingClient<SettingGetPayload<T> | null >>

    /**
     * Find the first Setting that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingFindFirstArgs} args - Arguments to find a Setting
     * @example
     * // Get one Setting
     * const setting = await prisma.setting.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SettingFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, SettingFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Setting'> extends True ? CheckSelect<T, Prisma__SettingClient<Setting>, Prisma__SettingClient<SettingGetPayload<T>>> : CheckSelect<T, Prisma__SettingClient<Setting | null >, Prisma__SettingClient<SettingGetPayload<T> | null >>

    /**
     * Find zero or more Settings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Settings
     * const settings = await prisma.setting.findMany()
     * 
     * // Get first 10 Settings
     * const settings = await prisma.setting.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const settingWithIdOnly = await prisma.setting.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends SettingFindManyArgs>(
      args?: SelectSubset<T, SettingFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Setting>>, PrismaPromise<Array<SettingGetPayload<T>>>>

    /**
     * Create a Setting.
     * @param {SettingCreateArgs} args - Arguments to create a Setting.
     * @example
     * // Create one Setting
     * const Setting = await prisma.setting.create({
     *   data: {
     *     // ... data to create a Setting
     *   }
     * })
     * 
    **/
    create<T extends SettingCreateArgs>(
      args: SelectSubset<T, SettingCreateArgs>
    ): CheckSelect<T, Prisma__SettingClient<Setting>, Prisma__SettingClient<SettingGetPayload<T>>>

    /**
     * Create many Settings.
     *     @param {SettingCreateManyArgs} args - Arguments to create many Settings.
     *     @example
     *     // Create many Settings
     *     const setting = await prisma.setting.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends SettingCreateManyArgs>(
      args?: SelectSubset<T, SettingCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Setting.
     * @param {SettingDeleteArgs} args - Arguments to delete one Setting.
     * @example
     * // Delete one Setting
     * const Setting = await prisma.setting.delete({
     *   where: {
     *     // ... filter to delete one Setting
     *   }
     * })
     * 
    **/
    delete<T extends SettingDeleteArgs>(
      args: SelectSubset<T, SettingDeleteArgs>
    ): CheckSelect<T, Prisma__SettingClient<Setting>, Prisma__SettingClient<SettingGetPayload<T>>>

    /**
     * Update one Setting.
     * @param {SettingUpdateArgs} args - Arguments to update one Setting.
     * @example
     * // Update one Setting
     * const setting = await prisma.setting.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SettingUpdateArgs>(
      args: SelectSubset<T, SettingUpdateArgs>
    ): CheckSelect<T, Prisma__SettingClient<Setting>, Prisma__SettingClient<SettingGetPayload<T>>>

    /**
     * Delete zero or more Settings.
     * @param {SettingDeleteManyArgs} args - Arguments to filter Settings to delete.
     * @example
     * // Delete a few Settings
     * const { count } = await prisma.setting.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SettingDeleteManyArgs>(
      args?: SelectSubset<T, SettingDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Settings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Settings
     * const setting = await prisma.setting.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SettingUpdateManyArgs>(
      args: SelectSubset<T, SettingUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Setting.
     * @param {SettingUpsertArgs} args - Arguments to update or create a Setting.
     * @example
     * // Update or create a Setting
     * const setting = await prisma.setting.upsert({
     *   create: {
     *     // ... data to create a Setting
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Setting we want to update
     *   }
     * })
    **/
    upsert<T extends SettingUpsertArgs>(
      args: SelectSubset<T, SettingUpsertArgs>
    ): CheckSelect<T, Prisma__SettingClient<Setting>, Prisma__SettingClient<SettingGetPayload<T>>>

    /**
     * Count the number of Settings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingCountArgs} args - Arguments to filter Settings to count.
     * @example
     * // Count the number of Settings
     * const count = await prisma.setting.count({
     *   where: {
     *     // ... the filter for the Settings we want to count
     *   }
     * })
    **/
    count<T extends SettingCountArgs>(
      args?: Subset<T, SettingCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SettingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Setting.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SettingAggregateArgs>(args: Subset<T, SettingAggregateArgs>): PrismaPromise<GetSettingAggregateType<T>>

    /**
     * Group by Setting.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SettingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SettingGroupByArgs['orderBy'] }
        : { orderBy?: SettingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SettingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSettingGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Setting.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__SettingClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Setting findUnique
   */
  export type SettingFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Setting
     * 
    **/
    select?: SettingSelect | null
    /**
     * Throw an Error if a Setting can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Setting to fetch.
     * 
    **/
    where: SettingWhereUniqueInput
  }


  /**
   * Setting findFirst
   */
  export type SettingFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Setting
     * 
    **/
    select?: SettingSelect | null
    /**
     * Throw an Error if a Setting can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Setting to fetch.
     * 
    **/
    where?: SettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Settings to fetch.
     * 
    **/
    orderBy?: Enumerable<SettingOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Settings.
     * 
    **/
    cursor?: SettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Settings from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Settings.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Settings.
     * 
    **/
    distinct?: Enumerable<SettingScalarFieldEnum>
  }


  /**
   * Setting findMany
   */
  export type SettingFindManyArgs = {
    /**
     * Select specific fields to fetch from the Setting
     * 
    **/
    select?: SettingSelect | null
    /**
     * Filter, which Settings to fetch.
     * 
    **/
    where?: SettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Settings to fetch.
     * 
    **/
    orderBy?: Enumerable<SettingOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Settings.
     * 
    **/
    cursor?: SettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Settings from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Settings.
     * 
    **/
    skip?: number
    distinct?: Enumerable<SettingScalarFieldEnum>
  }


  /**
   * Setting create
   */
  export type SettingCreateArgs = {
    /**
     * Select specific fields to fetch from the Setting
     * 
    **/
    select?: SettingSelect | null
    /**
     * The data needed to create a Setting.
     * 
    **/
    data?: XOR<SettingCreateInput, SettingUncheckedCreateInput>
  }


  /**
   * Setting createMany
   */
  export type SettingCreateManyArgs = {
    data: Enumerable<SettingCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Setting update
   */
  export type SettingUpdateArgs = {
    /**
     * Select specific fields to fetch from the Setting
     * 
    **/
    select?: SettingSelect | null
    /**
     * The data needed to update a Setting.
     * 
    **/
    data: XOR<SettingUpdateInput, SettingUncheckedUpdateInput>
    /**
     * Choose, which Setting to update.
     * 
    **/
    where: SettingWhereUniqueInput
  }


  /**
   * Setting updateMany
   */
  export type SettingUpdateManyArgs = {
    data: XOR<SettingUpdateManyMutationInput, SettingUncheckedUpdateManyInput>
    where?: SettingWhereInput
  }


  /**
   * Setting upsert
   */
  export type SettingUpsertArgs = {
    /**
     * Select specific fields to fetch from the Setting
     * 
    **/
    select?: SettingSelect | null
    /**
     * The filter to search for the Setting to update in case it exists.
     * 
    **/
    where: SettingWhereUniqueInput
    /**
     * In case the Setting found by the `where` argument doesn't exist, create a new Setting with this data.
     * 
    **/
    create: XOR<SettingCreateInput, SettingUncheckedCreateInput>
    /**
     * In case the Setting was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<SettingUpdateInput, SettingUncheckedUpdateInput>
  }


  /**
   * Setting delete
   */
  export type SettingDeleteArgs = {
    /**
     * Select specific fields to fetch from the Setting
     * 
    **/
    select?: SettingSelect | null
    /**
     * Filter which Setting to delete.
     * 
    **/
    where: SettingWhereUniqueInput
  }


  /**
   * Setting deleteMany
   */
  export type SettingDeleteManyArgs = {
    where?: SettingWhereInput
  }


  /**
   * Setting without action
   */
  export type SettingArgs = {
    /**
     * Select specific fields to fetch from the Setting
     * 
    **/
    select?: SettingSelect | null
  }



  /**
   * Model Comment
   */


  export type AggregateComment = {
    _count: CommentCountAggregateOutputType | null
    count: CommentCountAggregateOutputType | null
    _avg: CommentAvgAggregateOutputType | null
    avg: CommentAvgAggregateOutputType | null
    _sum: CommentSumAggregateOutputType | null
    sum: CommentSumAggregateOutputType | null
    _min: CommentMinAggregateOutputType | null
    min: CommentMinAggregateOutputType | null
    _max: CommentMaxAggregateOutputType | null
    max: CommentMaxAggregateOutputType | null
  }

  export type CommentAvgAggregateOutputType = {
    id: number | null
    articleId: number | null
    userId: number | null
  }

  export type CommentSumAggregateOutputType = {
    id: number | null
    articleId: number | null
    userId: number | null
  }

  export type CommentMinAggregateOutputType = {
    id: number | null
    articleId: number | null
    userId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CommentMaxAggregateOutputType = {
    id: number | null
    articleId: number | null
    userId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CommentCountAggregateOutputType = {
    id: number
    articleId: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CommentAvgAggregateInputType = {
    id?: true
    articleId?: true
    userId?: true
  }

  export type CommentSumAggregateInputType = {
    id?: true
    articleId?: true
    userId?: true
  }

  export type CommentMinAggregateInputType = {
    id?: true
    articleId?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CommentMaxAggregateInputType = {
    id?: true
    articleId?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CommentCountAggregateInputType = {
    id?: true
    articleId?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CommentAggregateArgs = {
    /**
     * Filter which Comment to aggregate.
     * 
    **/
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     * 
    **/
    orderBy?: Enumerable<CommentOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Comments
    **/
    _count?: true | CommentCountAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_count`
    **/
    count?: true | CommentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CommentAvgAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_avg`
    **/
    avg?: CommentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CommentSumAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_sum`
    **/
    sum?: CommentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommentMinAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_min`
    **/
    min?: CommentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommentMaxAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_max`
    **/
    max?: CommentMaxAggregateInputType
  }

  export type GetCommentAggregateType<T extends CommentAggregateArgs> = {
        [P in keyof T & keyof AggregateComment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComment[P]>
      : GetScalarType<T[P], AggregateComment[P]>
  }


    
    
  export type CommentGroupByArgs = {
    where?: CommentWhereInput
    orderBy?: Enumerable<CommentOrderByInput>
    by: Array<CommentScalarFieldEnum>
    having?: CommentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommentCountAggregateInputType | true
    _avg?: CommentAvgAggregateInputType
    _sum?: CommentSumAggregateInputType
    _min?: CommentMinAggregateInputType
    _max?: CommentMaxAggregateInputType
  }


  export type CommentGroupByOutputType = {
    id: number
    articleId: number
    userId: number
    createdAt: Date
    updatedAt: Date
    _count: CommentCountAggregateOutputType | null
    _avg: CommentAvgAggregateOutputType | null
    _sum: CommentSumAggregateOutputType | null
    _min: CommentMinAggregateOutputType | null
    _max: CommentMaxAggregateOutputType | null
  }

  type GetCommentGroupByPayload<T extends CommentGroupByArgs> = Promise<
    Array<
      PickArray<CommentGroupByOutputType, T['by']> & 
        {
          [P in ((keyof T) & (keyof CommentGroupByOutputType))]: P extends '_count' 
            ? T[P] extends boolean 
              ? number 
              : GetScalarType<T[P], CommentGroupByOutputType[P]> 
            : GetScalarType<T[P], CommentGroupByOutputType[P]>
        }
      > 
    >


  export type CommentSelect = {
    id?: boolean
    articleId?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    article?: boolean | ArticleArgs
    user?: boolean | UserArgs
  }

  export type CommentInclude = {
    article?: boolean | ArticleArgs
    user?: boolean | UserArgs
  }

  export type CommentGetPayload<
    S extends boolean | null | undefined | CommentArgs,
    U = keyof S
      > = S extends true
        ? Comment
    : S extends undefined
    ? never
    : S extends CommentArgs | CommentFindManyArgs
    ?'include' extends U
    ? Comment  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'article'
        ? ArticleGetPayload<S['include'][P]> :
        P extends 'user'
        ? UserGetPayload<S['include'][P]> : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof Comment ?Comment [P]
  : 
          P extends 'article'
        ? ArticleGetPayload<S['select'][P]> :
        P extends 'user'
        ? UserGetPayload<S['select'][P]> : never
  } 
    : Comment
  : Comment


  type CommentCountArgs = Merge<
    Omit<CommentFindManyArgs, 'select' | 'include'> & {
      select?: CommentCountAggregateInputType | true
    }
  >

  export interface CommentDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Comment that matches the filter.
     * @param {CommentFindUniqueArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CommentFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, CommentFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Comment'> extends True ? CheckSelect<T, Prisma__CommentClient<Comment>, Prisma__CommentClient<CommentGetPayload<T>>> : CheckSelect<T, Prisma__CommentClient<Comment | null >, Prisma__CommentClient<CommentGetPayload<T> | null >>

    /**
     * Find the first Comment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindFirstArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CommentFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, CommentFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Comment'> extends True ? CheckSelect<T, Prisma__CommentClient<Comment>, Prisma__CommentClient<CommentGetPayload<T>>> : CheckSelect<T, Prisma__CommentClient<Comment | null >, Prisma__CommentClient<CommentGetPayload<T> | null >>

    /**
     * Find zero or more Comments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Comments
     * const comments = await prisma.comment.findMany()
     * 
     * // Get first 10 Comments
     * const comments = await prisma.comment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const commentWithIdOnly = await prisma.comment.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CommentFindManyArgs>(
      args?: SelectSubset<T, CommentFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Comment>>, PrismaPromise<Array<CommentGetPayload<T>>>>

    /**
     * Create a Comment.
     * @param {CommentCreateArgs} args - Arguments to create a Comment.
     * @example
     * // Create one Comment
     * const Comment = await prisma.comment.create({
     *   data: {
     *     // ... data to create a Comment
     *   }
     * })
     * 
    **/
    create<T extends CommentCreateArgs>(
      args: SelectSubset<T, CommentCreateArgs>
    ): CheckSelect<T, Prisma__CommentClient<Comment>, Prisma__CommentClient<CommentGetPayload<T>>>

    /**
     * Create many Comments.
     *     @param {CommentCreateManyArgs} args - Arguments to create many Comments.
     *     @example
     *     // Create many Comments
     *     const comment = await prisma.comment.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CommentCreateManyArgs>(
      args?: SelectSubset<T, CommentCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Comment.
     * @param {CommentDeleteArgs} args - Arguments to delete one Comment.
     * @example
     * // Delete one Comment
     * const Comment = await prisma.comment.delete({
     *   where: {
     *     // ... filter to delete one Comment
     *   }
     * })
     * 
    **/
    delete<T extends CommentDeleteArgs>(
      args: SelectSubset<T, CommentDeleteArgs>
    ): CheckSelect<T, Prisma__CommentClient<Comment>, Prisma__CommentClient<CommentGetPayload<T>>>

    /**
     * Update one Comment.
     * @param {CommentUpdateArgs} args - Arguments to update one Comment.
     * @example
     * // Update one Comment
     * const comment = await prisma.comment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CommentUpdateArgs>(
      args: SelectSubset<T, CommentUpdateArgs>
    ): CheckSelect<T, Prisma__CommentClient<Comment>, Prisma__CommentClient<CommentGetPayload<T>>>

    /**
     * Delete zero or more Comments.
     * @param {CommentDeleteManyArgs} args - Arguments to filter Comments to delete.
     * @example
     * // Delete a few Comments
     * const { count } = await prisma.comment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CommentDeleteManyArgs>(
      args?: SelectSubset<T, CommentDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Comments
     * const comment = await prisma.comment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CommentUpdateManyArgs>(
      args: SelectSubset<T, CommentUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Comment.
     * @param {CommentUpsertArgs} args - Arguments to update or create a Comment.
     * @example
     * // Update or create a Comment
     * const comment = await prisma.comment.upsert({
     *   create: {
     *     // ... data to create a Comment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Comment we want to update
     *   }
     * })
    **/
    upsert<T extends CommentUpsertArgs>(
      args: SelectSubset<T, CommentUpsertArgs>
    ): CheckSelect<T, Prisma__CommentClient<Comment>, Prisma__CommentClient<CommentGetPayload<T>>>

    /**
     * Count the number of Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentCountArgs} args - Arguments to filter Comments to count.
     * @example
     * // Count the number of Comments
     * const count = await prisma.comment.count({
     *   where: {
     *     // ... the filter for the Comments we want to count
     *   }
     * })
    **/
    count<T extends CommentCountArgs>(
      args?: Subset<T, CommentCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Comment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CommentAggregateArgs>(args: Subset<T, CommentAggregateArgs>): PrismaPromise<GetCommentAggregateType<T>>

    /**
     * Group by Comment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CommentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CommentGroupByArgs['orderBy'] }
        : { orderBy?: CommentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CommentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommentGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Comment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__CommentClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    article<T extends ArticleArgs = {}>(args?: Subset<T, ArticleArgs>): CheckSelect<T, Prisma__ArticleClient<Article | null >, Prisma__ArticleClient<ArticleGetPayload<T> | null >>;

    user<T extends UserArgs = {}>(args?: Subset<T, UserArgs>): CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Comment findUnique
   */
  export type CommentFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Comment
     * 
    **/
    select?: CommentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CommentInclude | null
    /**
     * Throw an Error if a Comment can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Comment to fetch.
     * 
    **/
    where: CommentWhereUniqueInput
  }


  /**
   * Comment findFirst
   */
  export type CommentFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Comment
     * 
    **/
    select?: CommentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CommentInclude | null
    /**
     * Throw an Error if a Comment can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Comment to fetch.
     * 
    **/
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     * 
    **/
    orderBy?: Enumerable<CommentOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comments.
     * 
    **/
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     * 
    **/
    distinct?: Enumerable<CommentScalarFieldEnum>
  }


  /**
   * Comment findMany
   */
  export type CommentFindManyArgs = {
    /**
     * Select specific fields to fetch from the Comment
     * 
    **/
    select?: CommentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CommentInclude | null
    /**
     * Filter, which Comments to fetch.
     * 
    **/
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     * 
    **/
    orderBy?: Enumerable<CommentOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Comments.
     * 
    **/
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     * 
    **/
    skip?: number
    distinct?: Enumerable<CommentScalarFieldEnum>
  }


  /**
   * Comment create
   */
  export type CommentCreateArgs = {
    /**
     * Select specific fields to fetch from the Comment
     * 
    **/
    select?: CommentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CommentInclude | null
    /**
     * The data needed to create a Comment.
     * 
    **/
    data: XOR<CommentCreateInput, CommentUncheckedCreateInput>
  }


  /**
   * Comment createMany
   */
  export type CommentCreateManyArgs = {
    data: Enumerable<CommentCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Comment update
   */
  export type CommentUpdateArgs = {
    /**
     * Select specific fields to fetch from the Comment
     * 
    **/
    select?: CommentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CommentInclude | null
    /**
     * The data needed to update a Comment.
     * 
    **/
    data: XOR<CommentUpdateInput, CommentUncheckedUpdateInput>
    /**
     * Choose, which Comment to update.
     * 
    **/
    where: CommentWhereUniqueInput
  }


  /**
   * Comment updateMany
   */
  export type CommentUpdateManyArgs = {
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyInput>
    where?: CommentWhereInput
  }


  /**
   * Comment upsert
   */
  export type CommentUpsertArgs = {
    /**
     * Select specific fields to fetch from the Comment
     * 
    **/
    select?: CommentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CommentInclude | null
    /**
     * The filter to search for the Comment to update in case it exists.
     * 
    **/
    where: CommentWhereUniqueInput
    /**
     * In case the Comment found by the `where` argument doesn't exist, create a new Comment with this data.
     * 
    **/
    create: XOR<CommentCreateInput, CommentUncheckedCreateInput>
    /**
     * In case the Comment was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<CommentUpdateInput, CommentUncheckedUpdateInput>
  }


  /**
   * Comment delete
   */
  export type CommentDeleteArgs = {
    /**
     * Select specific fields to fetch from the Comment
     * 
    **/
    select?: CommentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CommentInclude | null
    /**
     * Filter which Comment to delete.
     * 
    **/
    where: CommentWhereUniqueInput
  }


  /**
   * Comment deleteMany
   */
  export type CommentDeleteManyArgs = {
    where?: CommentWhereInput
  }


  /**
   * Comment without action
   */
  export type CommentArgs = {
    /**
     * Select specific fields to fetch from the Comment
     * 
    **/
    select?: CommentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CommentInclude | null
  }



  /**
   * Model Favorite
   */


  export type AggregateFavorite = {
    _count: FavoriteCountAggregateOutputType | null
    count: FavoriteCountAggregateOutputType | null
    _avg: FavoriteAvgAggregateOutputType | null
    avg: FavoriteAvgAggregateOutputType | null
    _sum: FavoriteSumAggregateOutputType | null
    sum: FavoriteSumAggregateOutputType | null
    _min: FavoriteMinAggregateOutputType | null
    min: FavoriteMinAggregateOutputType | null
    _max: FavoriteMaxAggregateOutputType | null
    max: FavoriteMaxAggregateOutputType | null
  }

  export type FavoriteAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    articleId: number | null
  }

  export type FavoriteSumAggregateOutputType = {
    id: number | null
    userId: number | null
    articleId: number | null
  }

  export type FavoriteMinAggregateOutputType = {
    id: number | null
    userId: number | null
    articleId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FavoriteMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    articleId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FavoriteCountAggregateOutputType = {
    id: number
    userId: number
    articleId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type FavoriteAvgAggregateInputType = {
    id?: true
    userId?: true
    articleId?: true
  }

  export type FavoriteSumAggregateInputType = {
    id?: true
    userId?: true
    articleId?: true
  }

  export type FavoriteMinAggregateInputType = {
    id?: true
    userId?: true
    articleId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FavoriteMaxAggregateInputType = {
    id?: true
    userId?: true
    articleId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FavoriteCountAggregateInputType = {
    id?: true
    userId?: true
    articleId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type FavoriteAggregateArgs = {
    /**
     * Filter which Favorite to aggregate.
     * 
    **/
    where?: FavoriteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Favorites to fetch.
     * 
    **/
    orderBy?: Enumerable<FavoriteOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: FavoriteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Favorites from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Favorites.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Favorites
    **/
    _count?: true | FavoriteCountAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_count`
    **/
    count?: true | FavoriteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FavoriteAvgAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_avg`
    **/
    avg?: FavoriteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FavoriteSumAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_sum`
    **/
    sum?: FavoriteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FavoriteMinAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_min`
    **/
    min?: FavoriteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FavoriteMaxAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_max`
    **/
    max?: FavoriteMaxAggregateInputType
  }

  export type GetFavoriteAggregateType<T extends FavoriteAggregateArgs> = {
        [P in keyof T & keyof AggregateFavorite]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFavorite[P]>
      : GetScalarType<T[P], AggregateFavorite[P]>
  }


    
    
  export type FavoriteGroupByArgs = {
    where?: FavoriteWhereInput
    orderBy?: Enumerable<FavoriteOrderByInput>
    by: Array<FavoriteScalarFieldEnum>
    having?: FavoriteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FavoriteCountAggregateInputType | true
    _avg?: FavoriteAvgAggregateInputType
    _sum?: FavoriteSumAggregateInputType
    _min?: FavoriteMinAggregateInputType
    _max?: FavoriteMaxAggregateInputType
  }


  export type FavoriteGroupByOutputType = {
    id: number
    userId: number
    articleId: number
    createdAt: Date
    updatedAt: Date
    _count: FavoriteCountAggregateOutputType | null
    _avg: FavoriteAvgAggregateOutputType | null
    _sum: FavoriteSumAggregateOutputType | null
    _min: FavoriteMinAggregateOutputType | null
    _max: FavoriteMaxAggregateOutputType | null
  }

  type GetFavoriteGroupByPayload<T extends FavoriteGroupByArgs> = Promise<
    Array<
      PickArray<FavoriteGroupByOutputType, T['by']> & 
        {
          [P in ((keyof T) & (keyof FavoriteGroupByOutputType))]: P extends '_count' 
            ? T[P] extends boolean 
              ? number 
              : GetScalarType<T[P], FavoriteGroupByOutputType[P]> 
            : GetScalarType<T[P], FavoriteGroupByOutputType[P]>
        }
      > 
    >


  export type FavoriteSelect = {
    id?: boolean
    userId?: boolean
    articleId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    article?: boolean | ArticleArgs
    user?: boolean | UserArgs
  }

  export type FavoriteInclude = {
    article?: boolean | ArticleArgs
    user?: boolean | UserArgs
  }

  export type FavoriteGetPayload<
    S extends boolean | null | undefined | FavoriteArgs,
    U = keyof S
      > = S extends true
        ? Favorite
    : S extends undefined
    ? never
    : S extends FavoriteArgs | FavoriteFindManyArgs
    ?'include' extends U
    ? Favorite  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'article'
        ? ArticleGetPayload<S['include'][P]> :
        P extends 'user'
        ? UserGetPayload<S['include'][P]> : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof Favorite ?Favorite [P]
  : 
          P extends 'article'
        ? ArticleGetPayload<S['select'][P]> :
        P extends 'user'
        ? UserGetPayload<S['select'][P]> : never
  } 
    : Favorite
  : Favorite


  type FavoriteCountArgs = Merge<
    Omit<FavoriteFindManyArgs, 'select' | 'include'> & {
      select?: FavoriteCountAggregateInputType | true
    }
  >

  export interface FavoriteDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Favorite that matches the filter.
     * @param {FavoriteFindUniqueArgs} args - Arguments to find a Favorite
     * @example
     * // Get one Favorite
     * const favorite = await prisma.favorite.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends FavoriteFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, FavoriteFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Favorite'> extends True ? CheckSelect<T, Prisma__FavoriteClient<Favorite>, Prisma__FavoriteClient<FavoriteGetPayload<T>>> : CheckSelect<T, Prisma__FavoriteClient<Favorite | null >, Prisma__FavoriteClient<FavoriteGetPayload<T> | null >>

    /**
     * Find the first Favorite that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteFindFirstArgs} args - Arguments to find a Favorite
     * @example
     * // Get one Favorite
     * const favorite = await prisma.favorite.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends FavoriteFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, FavoriteFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Favorite'> extends True ? CheckSelect<T, Prisma__FavoriteClient<Favorite>, Prisma__FavoriteClient<FavoriteGetPayload<T>>> : CheckSelect<T, Prisma__FavoriteClient<Favorite | null >, Prisma__FavoriteClient<FavoriteGetPayload<T> | null >>

    /**
     * Find zero or more Favorites that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Favorites
     * const favorites = await prisma.favorite.findMany()
     * 
     * // Get first 10 Favorites
     * const favorites = await prisma.favorite.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const favoriteWithIdOnly = await prisma.favorite.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends FavoriteFindManyArgs>(
      args?: SelectSubset<T, FavoriteFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Favorite>>, PrismaPromise<Array<FavoriteGetPayload<T>>>>

    /**
     * Create a Favorite.
     * @param {FavoriteCreateArgs} args - Arguments to create a Favorite.
     * @example
     * // Create one Favorite
     * const Favorite = await prisma.favorite.create({
     *   data: {
     *     // ... data to create a Favorite
     *   }
     * })
     * 
    **/
    create<T extends FavoriteCreateArgs>(
      args: SelectSubset<T, FavoriteCreateArgs>
    ): CheckSelect<T, Prisma__FavoriteClient<Favorite>, Prisma__FavoriteClient<FavoriteGetPayload<T>>>

    /**
     * Create many Favorites.
     *     @param {FavoriteCreateManyArgs} args - Arguments to create many Favorites.
     *     @example
     *     // Create many Favorites
     *     const favorite = await prisma.favorite.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends FavoriteCreateManyArgs>(
      args?: SelectSubset<T, FavoriteCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Favorite.
     * @param {FavoriteDeleteArgs} args - Arguments to delete one Favorite.
     * @example
     * // Delete one Favorite
     * const Favorite = await prisma.favorite.delete({
     *   where: {
     *     // ... filter to delete one Favorite
     *   }
     * })
     * 
    **/
    delete<T extends FavoriteDeleteArgs>(
      args: SelectSubset<T, FavoriteDeleteArgs>
    ): CheckSelect<T, Prisma__FavoriteClient<Favorite>, Prisma__FavoriteClient<FavoriteGetPayload<T>>>

    /**
     * Update one Favorite.
     * @param {FavoriteUpdateArgs} args - Arguments to update one Favorite.
     * @example
     * // Update one Favorite
     * const favorite = await prisma.favorite.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends FavoriteUpdateArgs>(
      args: SelectSubset<T, FavoriteUpdateArgs>
    ): CheckSelect<T, Prisma__FavoriteClient<Favorite>, Prisma__FavoriteClient<FavoriteGetPayload<T>>>

    /**
     * Delete zero or more Favorites.
     * @param {FavoriteDeleteManyArgs} args - Arguments to filter Favorites to delete.
     * @example
     * // Delete a few Favorites
     * const { count } = await prisma.favorite.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends FavoriteDeleteManyArgs>(
      args?: SelectSubset<T, FavoriteDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Favorites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Favorites
     * const favorite = await prisma.favorite.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends FavoriteUpdateManyArgs>(
      args: SelectSubset<T, FavoriteUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Favorite.
     * @param {FavoriteUpsertArgs} args - Arguments to update or create a Favorite.
     * @example
     * // Update or create a Favorite
     * const favorite = await prisma.favorite.upsert({
     *   create: {
     *     // ... data to create a Favorite
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Favorite we want to update
     *   }
     * })
    **/
    upsert<T extends FavoriteUpsertArgs>(
      args: SelectSubset<T, FavoriteUpsertArgs>
    ): CheckSelect<T, Prisma__FavoriteClient<Favorite>, Prisma__FavoriteClient<FavoriteGetPayload<T>>>

    /**
     * Count the number of Favorites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteCountArgs} args - Arguments to filter Favorites to count.
     * @example
     * // Count the number of Favorites
     * const count = await prisma.favorite.count({
     *   where: {
     *     // ... the filter for the Favorites we want to count
     *   }
     * })
    **/
    count<T extends FavoriteCountArgs>(
      args?: Subset<T, FavoriteCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FavoriteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Favorite.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FavoriteAggregateArgs>(args: Subset<T, FavoriteAggregateArgs>): PrismaPromise<GetFavoriteAggregateType<T>>

    /**
     * Group by Favorite.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FavoriteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FavoriteGroupByArgs['orderBy'] }
        : { orderBy?: FavoriteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FavoriteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFavoriteGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Favorite.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__FavoriteClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    article<T extends ArticleArgs = {}>(args?: Subset<T, ArticleArgs>): CheckSelect<T, Prisma__ArticleClient<Article | null >, Prisma__ArticleClient<ArticleGetPayload<T> | null >>;

    user<T extends UserArgs = {}>(args?: Subset<T, UserArgs>): CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Favorite findUnique
   */
  export type FavoriteFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Favorite
     * 
    **/
    select?: FavoriteSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FavoriteInclude | null
    /**
     * Throw an Error if a Favorite can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Favorite to fetch.
     * 
    **/
    where: FavoriteWhereUniqueInput
  }


  /**
   * Favorite findFirst
   */
  export type FavoriteFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Favorite
     * 
    **/
    select?: FavoriteSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FavoriteInclude | null
    /**
     * Throw an Error if a Favorite can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Favorite to fetch.
     * 
    **/
    where?: FavoriteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Favorites to fetch.
     * 
    **/
    orderBy?: Enumerable<FavoriteOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Favorites.
     * 
    **/
    cursor?: FavoriteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Favorites from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Favorites.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Favorites.
     * 
    **/
    distinct?: Enumerable<FavoriteScalarFieldEnum>
  }


  /**
   * Favorite findMany
   */
  export type FavoriteFindManyArgs = {
    /**
     * Select specific fields to fetch from the Favorite
     * 
    **/
    select?: FavoriteSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FavoriteInclude | null
    /**
     * Filter, which Favorites to fetch.
     * 
    **/
    where?: FavoriteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Favorites to fetch.
     * 
    **/
    orderBy?: Enumerable<FavoriteOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Favorites.
     * 
    **/
    cursor?: FavoriteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Favorites from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Favorites.
     * 
    **/
    skip?: number
    distinct?: Enumerable<FavoriteScalarFieldEnum>
  }


  /**
   * Favorite create
   */
  export type FavoriteCreateArgs = {
    /**
     * Select specific fields to fetch from the Favorite
     * 
    **/
    select?: FavoriteSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FavoriteInclude | null
    /**
     * The data needed to create a Favorite.
     * 
    **/
    data: XOR<FavoriteCreateInput, FavoriteUncheckedCreateInput>
  }


  /**
   * Favorite createMany
   */
  export type FavoriteCreateManyArgs = {
    data: Enumerable<FavoriteCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Favorite update
   */
  export type FavoriteUpdateArgs = {
    /**
     * Select specific fields to fetch from the Favorite
     * 
    **/
    select?: FavoriteSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FavoriteInclude | null
    /**
     * The data needed to update a Favorite.
     * 
    **/
    data: XOR<FavoriteUpdateInput, FavoriteUncheckedUpdateInput>
    /**
     * Choose, which Favorite to update.
     * 
    **/
    where: FavoriteWhereUniqueInput
  }


  /**
   * Favorite updateMany
   */
  export type FavoriteUpdateManyArgs = {
    data: XOR<FavoriteUpdateManyMutationInput, FavoriteUncheckedUpdateManyInput>
    where?: FavoriteWhereInput
  }


  /**
   * Favorite upsert
   */
  export type FavoriteUpsertArgs = {
    /**
     * Select specific fields to fetch from the Favorite
     * 
    **/
    select?: FavoriteSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FavoriteInclude | null
    /**
     * The filter to search for the Favorite to update in case it exists.
     * 
    **/
    where: FavoriteWhereUniqueInput
    /**
     * In case the Favorite found by the `where` argument doesn't exist, create a new Favorite with this data.
     * 
    **/
    create: XOR<FavoriteCreateInput, FavoriteUncheckedCreateInput>
    /**
     * In case the Favorite was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<FavoriteUpdateInput, FavoriteUncheckedUpdateInput>
  }


  /**
   * Favorite delete
   */
  export type FavoriteDeleteArgs = {
    /**
     * Select specific fields to fetch from the Favorite
     * 
    **/
    select?: FavoriteSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FavoriteInclude | null
    /**
     * Filter which Favorite to delete.
     * 
    **/
    where: FavoriteWhereUniqueInput
  }


  /**
   * Favorite deleteMany
   */
  export type FavoriteDeleteManyArgs = {
    where?: FavoriteWhereInput
  }


  /**
   * Favorite without action
   */
  export type FavoriteArgs = {
    /**
     * Select specific fields to fetch from the Favorite
     * 
    **/
    select?: FavoriteSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FavoriteInclude | null
  }



  /**
   * Model Content
   */


  export type AggregateContent = {
    _count: ContentCountAggregateOutputType | null
    count: ContentCountAggregateOutputType | null
    _avg: ContentAvgAggregateOutputType | null
    avg: ContentAvgAggregateOutputType | null
    _sum: ContentSumAggregateOutputType | null
    sum: ContentSumAggregateOutputType | null
    _min: ContentMinAggregateOutputType | null
    min: ContentMinAggregateOutputType | null
    _max: ContentMaxAggregateOutputType | null
    max: ContentMaxAggregateOutputType | null
  }

  export type ContentAvgAggregateOutputType = {
    id: number | null
    articleId: number | null
  }

  export type ContentSumAggregateOutputType = {
    id: number | null
    articleId: number | null
  }

  export type ContentMinAggregateOutputType = {
    id: number | null
    articleId: number | null
    html: string | null
    markdown: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ContentMaxAggregateOutputType = {
    id: number | null
    articleId: number | null
    html: string | null
    markdown: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ContentCountAggregateOutputType = {
    id: number
    articleId: number
    html: number
    markdown: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ContentAvgAggregateInputType = {
    id?: true
    articleId?: true
  }

  export type ContentSumAggregateInputType = {
    id?: true
    articleId?: true
  }

  export type ContentMinAggregateInputType = {
    id?: true
    articleId?: true
    html?: true
    markdown?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ContentMaxAggregateInputType = {
    id?: true
    articleId?: true
    html?: true
    markdown?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ContentCountAggregateInputType = {
    id?: true
    articleId?: true
    html?: true
    markdown?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ContentAggregateArgs = {
    /**
     * Filter which Content to aggregate.
     * 
    **/
    where?: ContentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contents to fetch.
     * 
    **/
    orderBy?: Enumerable<ContentOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: ContentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contents from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contents.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Contents
    **/
    _count?: true | ContentCountAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_count`
    **/
    count?: true | ContentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ContentAvgAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_avg`
    **/
    avg?: ContentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ContentSumAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_sum`
    **/
    sum?: ContentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContentMinAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_min`
    **/
    min?: ContentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContentMaxAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_max`
    **/
    max?: ContentMaxAggregateInputType
  }

  export type GetContentAggregateType<T extends ContentAggregateArgs> = {
        [P in keyof T & keyof AggregateContent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContent[P]>
      : GetScalarType<T[P], AggregateContent[P]>
  }


    
    
  export type ContentGroupByArgs = {
    where?: ContentWhereInput
    orderBy?: Enumerable<ContentOrderByInput>
    by: Array<ContentScalarFieldEnum>
    having?: ContentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContentCountAggregateInputType | true
    _avg?: ContentAvgAggregateInputType
    _sum?: ContentSumAggregateInputType
    _min?: ContentMinAggregateInputType
    _max?: ContentMaxAggregateInputType
  }


  export type ContentGroupByOutputType = {
    id: number
    articleId: number
    html: string | null
    markdown: string | null
    createdAt: Date
    updatedAt: Date
    _count: ContentCountAggregateOutputType | null
    _avg: ContentAvgAggregateOutputType | null
    _sum: ContentSumAggregateOutputType | null
    _min: ContentMinAggregateOutputType | null
    _max: ContentMaxAggregateOutputType | null
  }

  type GetContentGroupByPayload<T extends ContentGroupByArgs> = Promise<
    Array<
      PickArray<ContentGroupByOutputType, T['by']> & 
        {
          [P in ((keyof T) & (keyof ContentGroupByOutputType))]: P extends '_count' 
            ? T[P] extends boolean 
              ? number 
              : GetScalarType<T[P], ContentGroupByOutputType[P]> 
            : GetScalarType<T[P], ContentGroupByOutputType[P]>
        }
      > 
    >


  export type ContentSelect = {
    id?: boolean
    articleId?: boolean
    html?: boolean
    markdown?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    article?: boolean | ArticleArgs
  }

  export type ContentInclude = {
    article?: boolean | ArticleArgs
  }

  export type ContentGetPayload<
    S extends boolean | null | undefined | ContentArgs,
    U = keyof S
      > = S extends true
        ? Content
    : S extends undefined
    ? never
    : S extends ContentArgs | ContentFindManyArgs
    ?'include' extends U
    ? Content  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'article'
        ? ArticleGetPayload<S['include'][P]> : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof Content ?Content [P]
  : 
          P extends 'article'
        ? ArticleGetPayload<S['select'][P]> : never
  } 
    : Content
  : Content


  type ContentCountArgs = Merge<
    Omit<ContentFindManyArgs, 'select' | 'include'> & {
      select?: ContentCountAggregateInputType | true
    }
  >

  export interface ContentDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Content that matches the filter.
     * @param {ContentFindUniqueArgs} args - Arguments to find a Content
     * @example
     * // Get one Content
     * const content = await prisma.content.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ContentFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ContentFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Content'> extends True ? CheckSelect<T, Prisma__ContentClient<Content>, Prisma__ContentClient<ContentGetPayload<T>>> : CheckSelect<T, Prisma__ContentClient<Content | null >, Prisma__ContentClient<ContentGetPayload<T> | null >>

    /**
     * Find the first Content that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentFindFirstArgs} args - Arguments to find a Content
     * @example
     * // Get one Content
     * const content = await prisma.content.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ContentFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ContentFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Content'> extends True ? CheckSelect<T, Prisma__ContentClient<Content>, Prisma__ContentClient<ContentGetPayload<T>>> : CheckSelect<T, Prisma__ContentClient<Content | null >, Prisma__ContentClient<ContentGetPayload<T> | null >>

    /**
     * Find zero or more Contents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Contents
     * const contents = await prisma.content.findMany()
     * 
     * // Get first 10 Contents
     * const contents = await prisma.content.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contentWithIdOnly = await prisma.content.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ContentFindManyArgs>(
      args?: SelectSubset<T, ContentFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Content>>, PrismaPromise<Array<ContentGetPayload<T>>>>

    /**
     * Create a Content.
     * @param {ContentCreateArgs} args - Arguments to create a Content.
     * @example
     * // Create one Content
     * const Content = await prisma.content.create({
     *   data: {
     *     // ... data to create a Content
     *   }
     * })
     * 
    **/
    create<T extends ContentCreateArgs>(
      args: SelectSubset<T, ContentCreateArgs>
    ): CheckSelect<T, Prisma__ContentClient<Content>, Prisma__ContentClient<ContentGetPayload<T>>>

    /**
     * Create many Contents.
     *     @param {ContentCreateManyArgs} args - Arguments to create many Contents.
     *     @example
     *     // Create many Contents
     *     const content = await prisma.content.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ContentCreateManyArgs>(
      args?: SelectSubset<T, ContentCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Content.
     * @param {ContentDeleteArgs} args - Arguments to delete one Content.
     * @example
     * // Delete one Content
     * const Content = await prisma.content.delete({
     *   where: {
     *     // ... filter to delete one Content
     *   }
     * })
     * 
    **/
    delete<T extends ContentDeleteArgs>(
      args: SelectSubset<T, ContentDeleteArgs>
    ): CheckSelect<T, Prisma__ContentClient<Content>, Prisma__ContentClient<ContentGetPayload<T>>>

    /**
     * Update one Content.
     * @param {ContentUpdateArgs} args - Arguments to update one Content.
     * @example
     * // Update one Content
     * const content = await prisma.content.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ContentUpdateArgs>(
      args: SelectSubset<T, ContentUpdateArgs>
    ): CheckSelect<T, Prisma__ContentClient<Content>, Prisma__ContentClient<ContentGetPayload<T>>>

    /**
     * Delete zero or more Contents.
     * @param {ContentDeleteManyArgs} args - Arguments to filter Contents to delete.
     * @example
     * // Delete a few Contents
     * const { count } = await prisma.content.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ContentDeleteManyArgs>(
      args?: SelectSubset<T, ContentDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Contents
     * const content = await prisma.content.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ContentUpdateManyArgs>(
      args: SelectSubset<T, ContentUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Content.
     * @param {ContentUpsertArgs} args - Arguments to update or create a Content.
     * @example
     * // Update or create a Content
     * const content = await prisma.content.upsert({
     *   create: {
     *     // ... data to create a Content
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Content we want to update
     *   }
     * })
    **/
    upsert<T extends ContentUpsertArgs>(
      args: SelectSubset<T, ContentUpsertArgs>
    ): CheckSelect<T, Prisma__ContentClient<Content>, Prisma__ContentClient<ContentGetPayload<T>>>

    /**
     * Count the number of Contents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentCountArgs} args - Arguments to filter Contents to count.
     * @example
     * // Count the number of Contents
     * const count = await prisma.content.count({
     *   where: {
     *     // ... the filter for the Contents we want to count
     *   }
     * })
    **/
    count<T extends ContentCountArgs>(
      args?: Subset<T, ContentCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Content.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ContentAggregateArgs>(args: Subset<T, ContentAggregateArgs>): PrismaPromise<GetContentAggregateType<T>>

    /**
     * Group by Content.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ContentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContentGroupByArgs['orderBy'] }
        : { orderBy?: ContentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ContentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContentGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Content.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ContentClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    article<T extends ArticleArgs = {}>(args?: Subset<T, ArticleArgs>): CheckSelect<T, Prisma__ArticleClient<Article | null >, Prisma__ArticleClient<ArticleGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Content findUnique
   */
  export type ContentFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Content
     * 
    **/
    select?: ContentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ContentInclude | null
    /**
     * Throw an Error if a Content can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Content to fetch.
     * 
    **/
    where: ContentWhereUniqueInput
  }


  /**
   * Content findFirst
   */
  export type ContentFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Content
     * 
    **/
    select?: ContentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ContentInclude | null
    /**
     * Throw an Error if a Content can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Content to fetch.
     * 
    **/
    where?: ContentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contents to fetch.
     * 
    **/
    orderBy?: Enumerable<ContentOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contents.
     * 
    **/
    cursor?: ContentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contents from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contents.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contents.
     * 
    **/
    distinct?: Enumerable<ContentScalarFieldEnum>
  }


  /**
   * Content findMany
   */
  export type ContentFindManyArgs = {
    /**
     * Select specific fields to fetch from the Content
     * 
    **/
    select?: ContentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ContentInclude | null
    /**
     * Filter, which Contents to fetch.
     * 
    **/
    where?: ContentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contents to fetch.
     * 
    **/
    orderBy?: Enumerable<ContentOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Contents.
     * 
    **/
    cursor?: ContentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contents from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contents.
     * 
    **/
    skip?: number
    distinct?: Enumerable<ContentScalarFieldEnum>
  }


  /**
   * Content create
   */
  export type ContentCreateArgs = {
    /**
     * Select specific fields to fetch from the Content
     * 
    **/
    select?: ContentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ContentInclude | null
    /**
     * The data needed to create a Content.
     * 
    **/
    data: XOR<ContentCreateInput, ContentUncheckedCreateInput>
  }


  /**
   * Content createMany
   */
  export type ContentCreateManyArgs = {
    data: Enumerable<ContentCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Content update
   */
  export type ContentUpdateArgs = {
    /**
     * Select specific fields to fetch from the Content
     * 
    **/
    select?: ContentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ContentInclude | null
    /**
     * The data needed to update a Content.
     * 
    **/
    data: XOR<ContentUpdateInput, ContentUncheckedUpdateInput>
    /**
     * Choose, which Content to update.
     * 
    **/
    where: ContentWhereUniqueInput
  }


  /**
   * Content updateMany
   */
  export type ContentUpdateManyArgs = {
    data: XOR<ContentUpdateManyMutationInput, ContentUncheckedUpdateManyInput>
    where?: ContentWhereInput
  }


  /**
   * Content upsert
   */
  export type ContentUpsertArgs = {
    /**
     * Select specific fields to fetch from the Content
     * 
    **/
    select?: ContentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ContentInclude | null
    /**
     * The filter to search for the Content to update in case it exists.
     * 
    **/
    where: ContentWhereUniqueInput
    /**
     * In case the Content found by the `where` argument doesn't exist, create a new Content with this data.
     * 
    **/
    create: XOR<ContentCreateInput, ContentUncheckedCreateInput>
    /**
     * In case the Content was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<ContentUpdateInput, ContentUncheckedUpdateInput>
  }


  /**
   * Content delete
   */
  export type ContentDeleteArgs = {
    /**
     * Select specific fields to fetch from the Content
     * 
    **/
    select?: ContentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ContentInclude | null
    /**
     * Filter which Content to delete.
     * 
    **/
    where: ContentWhereUniqueInput
  }


  /**
   * Content deleteMany
   */
  export type ContentDeleteManyArgs = {
    where?: ContentWhereInput
  }


  /**
   * Content without action
   */
  export type ContentArgs = {
    /**
     * Select specific fields to fetch from the Content
     * 
    **/
    select?: ContentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ContentInclude | null
  }



  /**
   * Model Collection
   */


  export type AggregateCollection = {
    _count: CollectionCountAggregateOutputType | null
    count: CollectionCountAggregateOutputType | null
    _avg: CollectionAvgAggregateOutputType | null
    avg: CollectionAvgAggregateOutputType | null
    _sum: CollectionSumAggregateOutputType | null
    sum: CollectionSumAggregateOutputType | null
    _min: CollectionMinAggregateOutputType | null
    min: CollectionMinAggregateOutputType | null
    _max: CollectionMaxAggregateOutputType | null
    max: CollectionMaxAggregateOutputType | null
  }

  export type CollectionAvgAggregateOutputType = {
    id: number | null
  }

  export type CollectionSumAggregateOutputType = {
    id: number | null
  }

  export type CollectionMinAggregateOutputType = {
    id: number | null
  }

  export type CollectionMaxAggregateOutputType = {
    id: number | null
  }

  export type CollectionCountAggregateOutputType = {
    id: number
    _all: number
  }


  export type CollectionAvgAggregateInputType = {
    id?: true
  }

  export type CollectionSumAggregateInputType = {
    id?: true
  }

  export type CollectionMinAggregateInputType = {
    id?: true
  }

  export type CollectionMaxAggregateInputType = {
    id?: true
  }

  export type CollectionCountAggregateInputType = {
    id?: true
    _all?: true
  }

  export type CollectionAggregateArgs = {
    /**
     * Filter which Collection to aggregate.
     * 
    **/
    where?: CollectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Collections to fetch.
     * 
    **/
    orderBy?: Enumerable<CollectionOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: CollectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Collections from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Collections.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Collections
    **/
    _count?: true | CollectionCountAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_count`
    **/
    count?: true | CollectionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CollectionAvgAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_avg`
    **/
    avg?: CollectionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CollectionSumAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_sum`
    **/
    sum?: CollectionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CollectionMinAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_min`
    **/
    min?: CollectionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CollectionMaxAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_max`
    **/
    max?: CollectionMaxAggregateInputType
  }

  export type GetCollectionAggregateType<T extends CollectionAggregateArgs> = {
        [P in keyof T & keyof AggregateCollection]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCollection[P]>
      : GetScalarType<T[P], AggregateCollection[P]>
  }


    
    
  export type CollectionGroupByArgs = {
    where?: CollectionWhereInput
    orderBy?: Enumerable<CollectionOrderByInput>
    by: Array<CollectionScalarFieldEnum>
    having?: CollectionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CollectionCountAggregateInputType | true
    _avg?: CollectionAvgAggregateInputType
    _sum?: CollectionSumAggregateInputType
    _min?: CollectionMinAggregateInputType
    _max?: CollectionMaxAggregateInputType
  }


  export type CollectionGroupByOutputType = {
    id: number
    _count: CollectionCountAggregateOutputType | null
    _avg: CollectionAvgAggregateOutputType | null
    _sum: CollectionSumAggregateOutputType | null
    _min: CollectionMinAggregateOutputType | null
    _max: CollectionMaxAggregateOutputType | null
  }

  type GetCollectionGroupByPayload<T extends CollectionGroupByArgs> = Promise<
    Array<
      PickArray<CollectionGroupByOutputType, T['by']> & 
        {
          [P in ((keyof T) & (keyof CollectionGroupByOutputType))]: P extends '_count' 
            ? T[P] extends boolean 
              ? number 
              : GetScalarType<T[P], CollectionGroupByOutputType[P]> 
            : GetScalarType<T[P], CollectionGroupByOutputType[P]>
        }
      > 
    >


  export type CollectionSelect = {
    id?: boolean
  }

  export type CollectionGetPayload<
    S extends boolean | null | undefined | CollectionArgs,
    U = keyof S
      > = S extends true
        ? Collection
    : S extends undefined
    ? never
    : S extends CollectionArgs | CollectionFindManyArgs
    ?'include' extends U
    ? Collection 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof Collection ?Collection [P]
  : 
     never
  } 
    : Collection
  : Collection


  type CollectionCountArgs = Merge<
    Omit<CollectionFindManyArgs, 'select' | 'include'> & {
      select?: CollectionCountAggregateInputType | true
    }
  >

  export interface CollectionDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Collection that matches the filter.
     * @param {CollectionFindUniqueArgs} args - Arguments to find a Collection
     * @example
     * // Get one Collection
     * const collection = await prisma.collection.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CollectionFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, CollectionFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Collection'> extends True ? CheckSelect<T, Prisma__CollectionClient<Collection>, Prisma__CollectionClient<CollectionGetPayload<T>>> : CheckSelect<T, Prisma__CollectionClient<Collection | null >, Prisma__CollectionClient<CollectionGetPayload<T> | null >>

    /**
     * Find the first Collection that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollectionFindFirstArgs} args - Arguments to find a Collection
     * @example
     * // Get one Collection
     * const collection = await prisma.collection.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CollectionFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, CollectionFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Collection'> extends True ? CheckSelect<T, Prisma__CollectionClient<Collection>, Prisma__CollectionClient<CollectionGetPayload<T>>> : CheckSelect<T, Prisma__CollectionClient<Collection | null >, Prisma__CollectionClient<CollectionGetPayload<T> | null >>

    /**
     * Find zero or more Collections that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollectionFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Collections
     * const collections = await prisma.collection.findMany()
     * 
     * // Get first 10 Collections
     * const collections = await prisma.collection.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const collectionWithIdOnly = await prisma.collection.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CollectionFindManyArgs>(
      args?: SelectSubset<T, CollectionFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Collection>>, PrismaPromise<Array<CollectionGetPayload<T>>>>

    /**
     * Create a Collection.
     * @param {CollectionCreateArgs} args - Arguments to create a Collection.
     * @example
     * // Create one Collection
     * const Collection = await prisma.collection.create({
     *   data: {
     *     // ... data to create a Collection
     *   }
     * })
     * 
    **/
    create<T extends CollectionCreateArgs>(
      args: SelectSubset<T, CollectionCreateArgs>
    ): CheckSelect<T, Prisma__CollectionClient<Collection>, Prisma__CollectionClient<CollectionGetPayload<T>>>

    /**
     * Create many Collections.
     *     @param {CollectionCreateManyArgs} args - Arguments to create many Collections.
     *     @example
     *     // Create many Collections
     *     const collection = await prisma.collection.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CollectionCreateManyArgs>(
      args?: SelectSubset<T, CollectionCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Collection.
     * @param {CollectionDeleteArgs} args - Arguments to delete one Collection.
     * @example
     * // Delete one Collection
     * const Collection = await prisma.collection.delete({
     *   where: {
     *     // ... filter to delete one Collection
     *   }
     * })
     * 
    **/
    delete<T extends CollectionDeleteArgs>(
      args: SelectSubset<T, CollectionDeleteArgs>
    ): CheckSelect<T, Prisma__CollectionClient<Collection>, Prisma__CollectionClient<CollectionGetPayload<T>>>

    /**
     * Update one Collection.
     * @param {CollectionUpdateArgs} args - Arguments to update one Collection.
     * @example
     * // Update one Collection
     * const collection = await prisma.collection.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CollectionUpdateArgs>(
      args: SelectSubset<T, CollectionUpdateArgs>
    ): CheckSelect<T, Prisma__CollectionClient<Collection>, Prisma__CollectionClient<CollectionGetPayload<T>>>

    /**
     * Delete zero or more Collections.
     * @param {CollectionDeleteManyArgs} args - Arguments to filter Collections to delete.
     * @example
     * // Delete a few Collections
     * const { count } = await prisma.collection.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CollectionDeleteManyArgs>(
      args?: SelectSubset<T, CollectionDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Collections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollectionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Collections
     * const collection = await prisma.collection.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CollectionUpdateManyArgs>(
      args: SelectSubset<T, CollectionUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Collection.
     * @param {CollectionUpsertArgs} args - Arguments to update or create a Collection.
     * @example
     * // Update or create a Collection
     * const collection = await prisma.collection.upsert({
     *   create: {
     *     // ... data to create a Collection
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Collection we want to update
     *   }
     * })
    **/
    upsert<T extends CollectionUpsertArgs>(
      args: SelectSubset<T, CollectionUpsertArgs>
    ): CheckSelect<T, Prisma__CollectionClient<Collection>, Prisma__CollectionClient<CollectionGetPayload<T>>>

    /**
     * Count the number of Collections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollectionCountArgs} args - Arguments to filter Collections to count.
     * @example
     * // Count the number of Collections
     * const count = await prisma.collection.count({
     *   where: {
     *     // ... the filter for the Collections we want to count
     *   }
     * })
    **/
    count<T extends CollectionCountArgs>(
      args?: Subset<T, CollectionCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CollectionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Collection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollectionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CollectionAggregateArgs>(args: Subset<T, CollectionAggregateArgs>): PrismaPromise<GetCollectionAggregateType<T>>

    /**
     * Group by Collection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollectionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CollectionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CollectionGroupByArgs['orderBy'] }
        : { orderBy?: CollectionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CollectionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCollectionGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Collection.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__CollectionClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Collection findUnique
   */
  export type CollectionFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Collection
     * 
    **/
    select?: CollectionSelect | null
    /**
     * Throw an Error if a Collection can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Collection to fetch.
     * 
    **/
    where: CollectionWhereUniqueInput
  }


  /**
   * Collection findFirst
   */
  export type CollectionFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Collection
     * 
    **/
    select?: CollectionSelect | null
    /**
     * Throw an Error if a Collection can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Collection to fetch.
     * 
    **/
    where?: CollectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Collections to fetch.
     * 
    **/
    orderBy?: Enumerable<CollectionOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Collections.
     * 
    **/
    cursor?: CollectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Collections from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Collections.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Collections.
     * 
    **/
    distinct?: Enumerable<CollectionScalarFieldEnum>
  }


  /**
   * Collection findMany
   */
  export type CollectionFindManyArgs = {
    /**
     * Select specific fields to fetch from the Collection
     * 
    **/
    select?: CollectionSelect | null
    /**
     * Filter, which Collections to fetch.
     * 
    **/
    where?: CollectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Collections to fetch.
     * 
    **/
    orderBy?: Enumerable<CollectionOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Collections.
     * 
    **/
    cursor?: CollectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Collections from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Collections.
     * 
    **/
    skip?: number
    distinct?: Enumerable<CollectionScalarFieldEnum>
  }


  /**
   * Collection create
   */
  export type CollectionCreateArgs = {
    /**
     * Select specific fields to fetch from the Collection
     * 
    **/
    select?: CollectionSelect | null
    /**
     * The data needed to create a Collection.
     * 
    **/
    data?: XOR<CollectionCreateInput, CollectionUncheckedCreateInput>
  }


  /**
   * Collection createMany
   */
  export type CollectionCreateManyArgs = {
    data: Enumerable<CollectionCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Collection update
   */
  export type CollectionUpdateArgs = {
    /**
     * Select specific fields to fetch from the Collection
     * 
    **/
    select?: CollectionSelect | null
    /**
     * The data needed to update a Collection.
     * 
    **/
    data: XOR<CollectionUpdateInput, CollectionUncheckedUpdateInput>
    /**
     * Choose, which Collection to update.
     * 
    **/
    where: CollectionWhereUniqueInput
  }


  /**
   * Collection updateMany
   */
  export type CollectionUpdateManyArgs = {
    data: XOR<CollectionUpdateManyMutationInput, CollectionUncheckedUpdateManyInput>
    where?: CollectionWhereInput
  }


  /**
   * Collection upsert
   */
  export type CollectionUpsertArgs = {
    /**
     * Select specific fields to fetch from the Collection
     * 
    **/
    select?: CollectionSelect | null
    /**
     * The filter to search for the Collection to update in case it exists.
     * 
    **/
    where: CollectionWhereUniqueInput
    /**
     * In case the Collection found by the `where` argument doesn't exist, create a new Collection with this data.
     * 
    **/
    create: XOR<CollectionCreateInput, CollectionUncheckedCreateInput>
    /**
     * In case the Collection was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<CollectionUpdateInput, CollectionUncheckedUpdateInput>
  }


  /**
   * Collection delete
   */
  export type CollectionDeleteArgs = {
    /**
     * Select specific fields to fetch from the Collection
     * 
    **/
    select?: CollectionSelect | null
    /**
     * Filter which Collection to delete.
     * 
    **/
    where: CollectionWhereUniqueInput
  }


  /**
   * Collection deleteMany
   */
  export type CollectionDeleteManyArgs = {
    where?: CollectionWhereInput
  }


  /**
   * Collection without action
   */
  export type CollectionArgs = {
    /**
     * Select specific fields to fetch from the Collection
     * 
    **/
    select?: CollectionSelect | null
  }



  /**
   * Model Like
   */


  export type AggregateLike = {
    _count: LikeCountAggregateOutputType | null
    count: LikeCountAggregateOutputType | null
    _avg: LikeAvgAggregateOutputType | null
    avg: LikeAvgAggregateOutputType | null
    _sum: LikeSumAggregateOutputType | null
    sum: LikeSumAggregateOutputType | null
    _min: LikeMinAggregateOutputType | null
    min: LikeMinAggregateOutputType | null
    _max: LikeMaxAggregateOutputType | null
    max: LikeMaxAggregateOutputType | null
  }

  export type LikeAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    articleId: number | null
  }

  export type LikeSumAggregateOutputType = {
    id: number | null
    userId: number | null
    articleId: number | null
  }

  export type LikeMinAggregateOutputType = {
    id: number | null
    userId: number | null
    articleId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LikeMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    articleId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LikeCountAggregateOutputType = {
    id: number
    userId: number
    articleId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type LikeAvgAggregateInputType = {
    id?: true
    userId?: true
    articleId?: true
  }

  export type LikeSumAggregateInputType = {
    id?: true
    userId?: true
    articleId?: true
  }

  export type LikeMinAggregateInputType = {
    id?: true
    userId?: true
    articleId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LikeMaxAggregateInputType = {
    id?: true
    userId?: true
    articleId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LikeCountAggregateInputType = {
    id?: true
    userId?: true
    articleId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type LikeAggregateArgs = {
    /**
     * Filter which Like to aggregate.
     * 
    **/
    where?: LikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Likes to fetch.
     * 
    **/
    orderBy?: Enumerable<LikeOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: LikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Likes from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Likes.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Likes
    **/
    _count?: true | LikeCountAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_count`
    **/
    count?: true | LikeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LikeAvgAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_avg`
    **/
    avg?: LikeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LikeSumAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_sum`
    **/
    sum?: LikeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LikeMinAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_min`
    **/
    min?: LikeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LikeMaxAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_max`
    **/
    max?: LikeMaxAggregateInputType
  }

  export type GetLikeAggregateType<T extends LikeAggregateArgs> = {
        [P in keyof T & keyof AggregateLike]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLike[P]>
      : GetScalarType<T[P], AggregateLike[P]>
  }


    
    
  export type LikeGroupByArgs = {
    where?: LikeWhereInput
    orderBy?: Enumerable<LikeOrderByInput>
    by: Array<LikeScalarFieldEnum>
    having?: LikeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LikeCountAggregateInputType | true
    _avg?: LikeAvgAggregateInputType
    _sum?: LikeSumAggregateInputType
    _min?: LikeMinAggregateInputType
    _max?: LikeMaxAggregateInputType
  }


  export type LikeGroupByOutputType = {
    id: number
    userId: number
    articleId: number
    createdAt: Date
    updatedAt: Date
    _count: LikeCountAggregateOutputType | null
    _avg: LikeAvgAggregateOutputType | null
    _sum: LikeSumAggregateOutputType | null
    _min: LikeMinAggregateOutputType | null
    _max: LikeMaxAggregateOutputType | null
  }

  type GetLikeGroupByPayload<T extends LikeGroupByArgs> = Promise<
    Array<
      PickArray<LikeGroupByOutputType, T['by']> & 
        {
          [P in ((keyof T) & (keyof LikeGroupByOutputType))]: P extends '_count' 
            ? T[P] extends boolean 
              ? number 
              : GetScalarType<T[P], LikeGroupByOutputType[P]> 
            : GetScalarType<T[P], LikeGroupByOutputType[P]>
        }
      > 
    >


  export type LikeSelect = {
    id?: boolean
    userId?: boolean
    articleId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    article?: boolean | ArticleArgs
    user?: boolean | UserArgs
  }

  export type LikeInclude = {
    article?: boolean | ArticleArgs
    user?: boolean | UserArgs
  }

  export type LikeGetPayload<
    S extends boolean | null | undefined | LikeArgs,
    U = keyof S
      > = S extends true
        ? Like
    : S extends undefined
    ? never
    : S extends LikeArgs | LikeFindManyArgs
    ?'include' extends U
    ? Like  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'article'
        ? ArticleGetPayload<S['include'][P]> :
        P extends 'user'
        ? UserGetPayload<S['include'][P]> : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof Like ?Like [P]
  : 
          P extends 'article'
        ? ArticleGetPayload<S['select'][P]> :
        P extends 'user'
        ? UserGetPayload<S['select'][P]> : never
  } 
    : Like
  : Like


  type LikeCountArgs = Merge<
    Omit<LikeFindManyArgs, 'select' | 'include'> & {
      select?: LikeCountAggregateInputType | true
    }
  >

  export interface LikeDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Like that matches the filter.
     * @param {LikeFindUniqueArgs} args - Arguments to find a Like
     * @example
     * // Get one Like
     * const like = await prisma.like.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends LikeFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, LikeFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Like'> extends True ? CheckSelect<T, Prisma__LikeClient<Like>, Prisma__LikeClient<LikeGetPayload<T>>> : CheckSelect<T, Prisma__LikeClient<Like | null >, Prisma__LikeClient<LikeGetPayload<T> | null >>

    /**
     * Find the first Like that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikeFindFirstArgs} args - Arguments to find a Like
     * @example
     * // Get one Like
     * const like = await prisma.like.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends LikeFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, LikeFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Like'> extends True ? CheckSelect<T, Prisma__LikeClient<Like>, Prisma__LikeClient<LikeGetPayload<T>>> : CheckSelect<T, Prisma__LikeClient<Like | null >, Prisma__LikeClient<LikeGetPayload<T> | null >>

    /**
     * Find zero or more Likes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikeFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Likes
     * const likes = await prisma.like.findMany()
     * 
     * // Get first 10 Likes
     * const likes = await prisma.like.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const likeWithIdOnly = await prisma.like.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends LikeFindManyArgs>(
      args?: SelectSubset<T, LikeFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Like>>, PrismaPromise<Array<LikeGetPayload<T>>>>

    /**
     * Create a Like.
     * @param {LikeCreateArgs} args - Arguments to create a Like.
     * @example
     * // Create one Like
     * const Like = await prisma.like.create({
     *   data: {
     *     // ... data to create a Like
     *   }
     * })
     * 
    **/
    create<T extends LikeCreateArgs>(
      args: SelectSubset<T, LikeCreateArgs>
    ): CheckSelect<T, Prisma__LikeClient<Like>, Prisma__LikeClient<LikeGetPayload<T>>>

    /**
     * Create many Likes.
     *     @param {LikeCreateManyArgs} args - Arguments to create many Likes.
     *     @example
     *     // Create many Likes
     *     const like = await prisma.like.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends LikeCreateManyArgs>(
      args?: SelectSubset<T, LikeCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Like.
     * @param {LikeDeleteArgs} args - Arguments to delete one Like.
     * @example
     * // Delete one Like
     * const Like = await prisma.like.delete({
     *   where: {
     *     // ... filter to delete one Like
     *   }
     * })
     * 
    **/
    delete<T extends LikeDeleteArgs>(
      args: SelectSubset<T, LikeDeleteArgs>
    ): CheckSelect<T, Prisma__LikeClient<Like>, Prisma__LikeClient<LikeGetPayload<T>>>

    /**
     * Update one Like.
     * @param {LikeUpdateArgs} args - Arguments to update one Like.
     * @example
     * // Update one Like
     * const like = await prisma.like.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends LikeUpdateArgs>(
      args: SelectSubset<T, LikeUpdateArgs>
    ): CheckSelect<T, Prisma__LikeClient<Like>, Prisma__LikeClient<LikeGetPayload<T>>>

    /**
     * Delete zero or more Likes.
     * @param {LikeDeleteManyArgs} args - Arguments to filter Likes to delete.
     * @example
     * // Delete a few Likes
     * const { count } = await prisma.like.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends LikeDeleteManyArgs>(
      args?: SelectSubset<T, LikeDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Likes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Likes
     * const like = await prisma.like.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends LikeUpdateManyArgs>(
      args: SelectSubset<T, LikeUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Like.
     * @param {LikeUpsertArgs} args - Arguments to update or create a Like.
     * @example
     * // Update or create a Like
     * const like = await prisma.like.upsert({
     *   create: {
     *     // ... data to create a Like
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Like we want to update
     *   }
     * })
    **/
    upsert<T extends LikeUpsertArgs>(
      args: SelectSubset<T, LikeUpsertArgs>
    ): CheckSelect<T, Prisma__LikeClient<Like>, Prisma__LikeClient<LikeGetPayload<T>>>

    /**
     * Count the number of Likes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikeCountArgs} args - Arguments to filter Likes to count.
     * @example
     * // Count the number of Likes
     * const count = await prisma.like.count({
     *   where: {
     *     // ... the filter for the Likes we want to count
     *   }
     * })
    **/
    count<T extends LikeCountArgs>(
      args?: Subset<T, LikeCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LikeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Like.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LikeAggregateArgs>(args: Subset<T, LikeAggregateArgs>): PrismaPromise<GetLikeAggregateType<T>>

    /**
     * Group by Like.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LikeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LikeGroupByArgs['orderBy'] }
        : { orderBy?: LikeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LikeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLikeGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Like.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__LikeClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    article<T extends ArticleArgs = {}>(args?: Subset<T, ArticleArgs>): CheckSelect<T, Prisma__ArticleClient<Article | null >, Prisma__ArticleClient<ArticleGetPayload<T> | null >>;

    user<T extends UserArgs = {}>(args?: Subset<T, UserArgs>): CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Like findUnique
   */
  export type LikeFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Like
     * 
    **/
    select?: LikeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: LikeInclude | null
    /**
     * Throw an Error if a Like can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Like to fetch.
     * 
    **/
    where: LikeWhereUniqueInput
  }


  /**
   * Like findFirst
   */
  export type LikeFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Like
     * 
    **/
    select?: LikeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: LikeInclude | null
    /**
     * Throw an Error if a Like can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Like to fetch.
     * 
    **/
    where?: LikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Likes to fetch.
     * 
    **/
    orderBy?: Enumerable<LikeOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Likes.
     * 
    **/
    cursor?: LikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Likes from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Likes.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Likes.
     * 
    **/
    distinct?: Enumerable<LikeScalarFieldEnum>
  }


  /**
   * Like findMany
   */
  export type LikeFindManyArgs = {
    /**
     * Select specific fields to fetch from the Like
     * 
    **/
    select?: LikeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: LikeInclude | null
    /**
     * Filter, which Likes to fetch.
     * 
    **/
    where?: LikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Likes to fetch.
     * 
    **/
    orderBy?: Enumerable<LikeOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Likes.
     * 
    **/
    cursor?: LikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Likes from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Likes.
     * 
    **/
    skip?: number
    distinct?: Enumerable<LikeScalarFieldEnum>
  }


  /**
   * Like create
   */
  export type LikeCreateArgs = {
    /**
     * Select specific fields to fetch from the Like
     * 
    **/
    select?: LikeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: LikeInclude | null
    /**
     * The data needed to create a Like.
     * 
    **/
    data: XOR<LikeCreateInput, LikeUncheckedCreateInput>
  }


  /**
   * Like createMany
   */
  export type LikeCreateManyArgs = {
    data: Enumerable<LikeCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Like update
   */
  export type LikeUpdateArgs = {
    /**
     * Select specific fields to fetch from the Like
     * 
    **/
    select?: LikeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: LikeInclude | null
    /**
     * The data needed to update a Like.
     * 
    **/
    data: XOR<LikeUpdateInput, LikeUncheckedUpdateInput>
    /**
     * Choose, which Like to update.
     * 
    **/
    where: LikeWhereUniqueInput
  }


  /**
   * Like updateMany
   */
  export type LikeUpdateManyArgs = {
    data: XOR<LikeUpdateManyMutationInput, LikeUncheckedUpdateManyInput>
    where?: LikeWhereInput
  }


  /**
   * Like upsert
   */
  export type LikeUpsertArgs = {
    /**
     * Select specific fields to fetch from the Like
     * 
    **/
    select?: LikeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: LikeInclude | null
    /**
     * The filter to search for the Like to update in case it exists.
     * 
    **/
    where: LikeWhereUniqueInput
    /**
     * In case the Like found by the `where` argument doesn't exist, create a new Like with this data.
     * 
    **/
    create: XOR<LikeCreateInput, LikeUncheckedCreateInput>
    /**
     * In case the Like was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<LikeUpdateInput, LikeUncheckedUpdateInput>
  }


  /**
   * Like delete
   */
  export type LikeDeleteArgs = {
    /**
     * Select specific fields to fetch from the Like
     * 
    **/
    select?: LikeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: LikeInclude | null
    /**
     * Filter which Like to delete.
     * 
    **/
    where: LikeWhereUniqueInput
  }


  /**
   * Like deleteMany
   */
  export type LikeDeleteManyArgs = {
    where?: LikeWhereInput
  }


  /**
   * Like without action
   */
  export type LikeArgs = {
    /**
     * Select specific fields to fetch from the Like
     * 
    **/
    select?: LikeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: LikeInclude | null
  }



  /**
   * Model Media
   */


  export type AggregateMedia = {
    _count: MediaCountAggregateOutputType | null
    count: MediaCountAggregateOutputType | null
    _avg: MediaAvgAggregateOutputType | null
    avg: MediaAvgAggregateOutputType | null
    _sum: MediaSumAggregateOutputType | null
    sum: MediaSumAggregateOutputType | null
    _min: MediaMinAggregateOutputType | null
    min: MediaMinAggregateOutputType | null
    _max: MediaMaxAggregateOutputType | null
    max: MediaMaxAggregateOutputType | null
  }

  export type MediaAvgAggregateOutputType = {
    id: number | null
  }

  export type MediaSumAggregateOutputType = {
    id: number | null
  }

  export type MediaMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    alt: string | null
    description: string | null
    filename: string | null
    path: string | null
    type: string | null
  }

  export type MediaMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    alt: string | null
    description: string | null
    filename: string | null
    path: string | null
    type: string | null
  }

  export type MediaCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    alt: number
    description: number
    filename: number
    path: number
    type: number
    _all: number
  }


  export type MediaAvgAggregateInputType = {
    id?: true
  }

  export type MediaSumAggregateInputType = {
    id?: true
  }

  export type MediaMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    alt?: true
    description?: true
    filename?: true
    path?: true
    type?: true
  }

  export type MediaMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    alt?: true
    description?: true
    filename?: true
    path?: true
    type?: true
  }

  export type MediaCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    alt?: true
    description?: true
    filename?: true
    path?: true
    type?: true
    _all?: true
  }

  export type MediaAggregateArgs = {
    /**
     * Filter which Media to aggregate.
     * 
    **/
    where?: MediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Media to fetch.
     * 
    **/
    orderBy?: Enumerable<MediaOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: MediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Media from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Media.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Media
    **/
    _count?: true | MediaCountAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_count`
    **/
    count?: true | MediaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MediaAvgAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_avg`
    **/
    avg?: MediaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MediaSumAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_sum`
    **/
    sum?: MediaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MediaMinAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_min`
    **/
    min?: MediaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MediaMaxAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_max`
    **/
    max?: MediaMaxAggregateInputType
  }

  export type GetMediaAggregateType<T extends MediaAggregateArgs> = {
        [P in keyof T & keyof AggregateMedia]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMedia[P]>
      : GetScalarType<T[P], AggregateMedia[P]>
  }


    
    
  export type MediaGroupByArgs = {
    where?: MediaWhereInput
    orderBy?: Enumerable<MediaOrderByInput>
    by: Array<MediaScalarFieldEnum>
    having?: MediaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MediaCountAggregateInputType | true
    _avg?: MediaAvgAggregateInputType
    _sum?: MediaSumAggregateInputType
    _min?: MediaMinAggregateInputType
    _max?: MediaMaxAggregateInputType
  }


  export type MediaGroupByOutputType = {
    id: number
    createdAt: Date
    updatedAt: Date
    alt: string
    description: string | null
    filename: string
    path: string
    type: string
    _count: MediaCountAggregateOutputType | null
    _avg: MediaAvgAggregateOutputType | null
    _sum: MediaSumAggregateOutputType | null
    _min: MediaMinAggregateOutputType | null
    _max: MediaMaxAggregateOutputType | null
  }

  type GetMediaGroupByPayload<T extends MediaGroupByArgs> = Promise<
    Array<
      PickArray<MediaGroupByOutputType, T['by']> & 
        {
          [P in ((keyof T) & (keyof MediaGroupByOutputType))]: P extends '_count' 
            ? T[P] extends boolean 
              ? number 
              : GetScalarType<T[P], MediaGroupByOutputType[P]> 
            : GetScalarType<T[P], MediaGroupByOutputType[P]>
        }
      > 
    >


  export type MediaSelect = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    alt?: boolean
    description?: boolean
    filename?: boolean
    path?: boolean
    type?: boolean
  }

  export type MediaGetPayload<
    S extends boolean | null | undefined | MediaArgs,
    U = keyof S
      > = S extends true
        ? Media
    : S extends undefined
    ? never
    : S extends MediaArgs | MediaFindManyArgs
    ?'include' extends U
    ? Media 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof Media ?Media [P]
  : 
     never
  } 
    : Media
  : Media


  type MediaCountArgs = Merge<
    Omit<MediaFindManyArgs, 'select' | 'include'> & {
      select?: MediaCountAggregateInputType | true
    }
  >

  export interface MediaDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Media that matches the filter.
     * @param {MediaFindUniqueArgs} args - Arguments to find a Media
     * @example
     * // Get one Media
     * const media = await prisma.media.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends MediaFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, MediaFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Media'> extends True ? CheckSelect<T, Prisma__MediaClient<Media>, Prisma__MediaClient<MediaGetPayload<T>>> : CheckSelect<T, Prisma__MediaClient<Media | null >, Prisma__MediaClient<MediaGetPayload<T> | null >>

    /**
     * Find the first Media that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaFindFirstArgs} args - Arguments to find a Media
     * @example
     * // Get one Media
     * const media = await prisma.media.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends MediaFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, MediaFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Media'> extends True ? CheckSelect<T, Prisma__MediaClient<Media>, Prisma__MediaClient<MediaGetPayload<T>>> : CheckSelect<T, Prisma__MediaClient<Media | null >, Prisma__MediaClient<MediaGetPayload<T> | null >>

    /**
     * Find zero or more Media that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Media
     * const media = await prisma.media.findMany()
     * 
     * // Get first 10 Media
     * const media = await prisma.media.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mediaWithIdOnly = await prisma.media.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends MediaFindManyArgs>(
      args?: SelectSubset<T, MediaFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Media>>, PrismaPromise<Array<MediaGetPayload<T>>>>

    /**
     * Create a Media.
     * @param {MediaCreateArgs} args - Arguments to create a Media.
     * @example
     * // Create one Media
     * const Media = await prisma.media.create({
     *   data: {
     *     // ... data to create a Media
     *   }
     * })
     * 
    **/
    create<T extends MediaCreateArgs>(
      args: SelectSubset<T, MediaCreateArgs>
    ): CheckSelect<T, Prisma__MediaClient<Media>, Prisma__MediaClient<MediaGetPayload<T>>>

    /**
     * Create many Media.
     *     @param {MediaCreateManyArgs} args - Arguments to create many Media.
     *     @example
     *     // Create many Media
     *     const media = await prisma.media.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends MediaCreateManyArgs>(
      args?: SelectSubset<T, MediaCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Media.
     * @param {MediaDeleteArgs} args - Arguments to delete one Media.
     * @example
     * // Delete one Media
     * const Media = await prisma.media.delete({
     *   where: {
     *     // ... filter to delete one Media
     *   }
     * })
     * 
    **/
    delete<T extends MediaDeleteArgs>(
      args: SelectSubset<T, MediaDeleteArgs>
    ): CheckSelect<T, Prisma__MediaClient<Media>, Prisma__MediaClient<MediaGetPayload<T>>>

    /**
     * Update one Media.
     * @param {MediaUpdateArgs} args - Arguments to update one Media.
     * @example
     * // Update one Media
     * const media = await prisma.media.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends MediaUpdateArgs>(
      args: SelectSubset<T, MediaUpdateArgs>
    ): CheckSelect<T, Prisma__MediaClient<Media>, Prisma__MediaClient<MediaGetPayload<T>>>

    /**
     * Delete zero or more Media.
     * @param {MediaDeleteManyArgs} args - Arguments to filter Media to delete.
     * @example
     * // Delete a few Media
     * const { count } = await prisma.media.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends MediaDeleteManyArgs>(
      args?: SelectSubset<T, MediaDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Media.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Media
     * const media = await prisma.media.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends MediaUpdateManyArgs>(
      args: SelectSubset<T, MediaUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Media.
     * @param {MediaUpsertArgs} args - Arguments to update or create a Media.
     * @example
     * // Update or create a Media
     * const media = await prisma.media.upsert({
     *   create: {
     *     // ... data to create a Media
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Media we want to update
     *   }
     * })
    **/
    upsert<T extends MediaUpsertArgs>(
      args: SelectSubset<T, MediaUpsertArgs>
    ): CheckSelect<T, Prisma__MediaClient<Media>, Prisma__MediaClient<MediaGetPayload<T>>>

    /**
     * Count the number of Media.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaCountArgs} args - Arguments to filter Media to count.
     * @example
     * // Count the number of Media
     * const count = await prisma.media.count({
     *   where: {
     *     // ... the filter for the Media we want to count
     *   }
     * })
    **/
    count<T extends MediaCountArgs>(
      args?: Subset<T, MediaCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MediaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Media.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MediaAggregateArgs>(args: Subset<T, MediaAggregateArgs>): PrismaPromise<GetMediaAggregateType<T>>

    /**
     * Group by Media.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MediaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MediaGroupByArgs['orderBy'] }
        : { orderBy?: MediaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MediaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMediaGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Media.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__MediaClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Media findUnique
   */
  export type MediaFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Media
     * 
    **/
    select?: MediaSelect | null
    /**
     * Throw an Error if a Media can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Media to fetch.
     * 
    **/
    where: MediaWhereUniqueInput
  }


  /**
   * Media findFirst
   */
  export type MediaFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Media
     * 
    **/
    select?: MediaSelect | null
    /**
     * Throw an Error if a Media can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Media to fetch.
     * 
    **/
    where?: MediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Media to fetch.
     * 
    **/
    orderBy?: Enumerable<MediaOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Media.
     * 
    **/
    cursor?: MediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Media from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Media.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Media.
     * 
    **/
    distinct?: Enumerable<MediaScalarFieldEnum>
  }


  /**
   * Media findMany
   */
  export type MediaFindManyArgs = {
    /**
     * Select specific fields to fetch from the Media
     * 
    **/
    select?: MediaSelect | null
    /**
     * Filter, which Media to fetch.
     * 
    **/
    where?: MediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Media to fetch.
     * 
    **/
    orderBy?: Enumerable<MediaOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Media.
     * 
    **/
    cursor?: MediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Media from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Media.
     * 
    **/
    skip?: number
    distinct?: Enumerable<MediaScalarFieldEnum>
  }


  /**
   * Media create
   */
  export type MediaCreateArgs = {
    /**
     * Select specific fields to fetch from the Media
     * 
    **/
    select?: MediaSelect | null
    /**
     * The data needed to create a Media.
     * 
    **/
    data: XOR<MediaCreateInput, MediaUncheckedCreateInput>
  }


  /**
   * Media createMany
   */
  export type MediaCreateManyArgs = {
    data: Enumerable<MediaCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Media update
   */
  export type MediaUpdateArgs = {
    /**
     * Select specific fields to fetch from the Media
     * 
    **/
    select?: MediaSelect | null
    /**
     * The data needed to update a Media.
     * 
    **/
    data: XOR<MediaUpdateInput, MediaUncheckedUpdateInput>
    /**
     * Choose, which Media to update.
     * 
    **/
    where: MediaWhereUniqueInput
  }


  /**
   * Media updateMany
   */
  export type MediaUpdateManyArgs = {
    data: XOR<MediaUpdateManyMutationInput, MediaUncheckedUpdateManyInput>
    where?: MediaWhereInput
  }


  /**
   * Media upsert
   */
  export type MediaUpsertArgs = {
    /**
     * Select specific fields to fetch from the Media
     * 
    **/
    select?: MediaSelect | null
    /**
     * The filter to search for the Media to update in case it exists.
     * 
    **/
    where: MediaWhereUniqueInput
    /**
     * In case the Media found by the `where` argument doesn't exist, create a new Media with this data.
     * 
    **/
    create: XOR<MediaCreateInput, MediaUncheckedCreateInput>
    /**
     * In case the Media was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<MediaUpdateInput, MediaUncheckedUpdateInput>
  }


  /**
   * Media delete
   */
  export type MediaDeleteArgs = {
    /**
     * Select specific fields to fetch from the Media
     * 
    **/
    select?: MediaSelect | null
    /**
     * Filter which Media to delete.
     * 
    **/
    where: MediaWhereUniqueInput
  }


  /**
   * Media deleteMany
   */
  export type MediaDeleteManyArgs = {
    where?: MediaWhereInput
  }


  /**
   * Media without action
   */
  export type MediaArgs = {
    /**
     * Select specific fields to fetch from the Media
     * 
    **/
    select?: MediaSelect | null
  }



  /**
   * Model Menu
   */


  export type AggregateMenu = {
    _count: MenuCountAggregateOutputType | null
    count: MenuCountAggregateOutputType | null
    _avg: MenuAvgAggregateOutputType | null
    avg: MenuAvgAggregateOutputType | null
    _sum: MenuSumAggregateOutputType | null
    sum: MenuSumAggregateOutputType | null
    _min: MenuMinAggregateOutputType | null
    min: MenuMinAggregateOutputType | null
    _max: MenuMaxAggregateOutputType | null
    max: MenuMaxAggregateOutputType | null
  }

  export type MenuAvgAggregateOutputType = {
    id: number | null
  }

  export type MenuSumAggregateOutputType = {
    id: number | null
  }

  export type MenuMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MenuMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MenuCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MenuAvgAggregateInputType = {
    id?: true
  }

  export type MenuSumAggregateInputType = {
    id?: true
  }

  export type MenuMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MenuMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MenuCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MenuAggregateArgs = {
    /**
     * Filter which Menu to aggregate.
     * 
    **/
    where?: MenuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Menus to fetch.
     * 
    **/
    orderBy?: Enumerable<MenuOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: MenuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Menus from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Menus.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Menus
    **/
    _count?: true | MenuCountAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_count`
    **/
    count?: true | MenuCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MenuAvgAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_avg`
    **/
    avg?: MenuAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MenuSumAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_sum`
    **/
    sum?: MenuSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MenuMinAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_min`
    **/
    min?: MenuMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MenuMaxAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_max`
    **/
    max?: MenuMaxAggregateInputType
  }

  export type GetMenuAggregateType<T extends MenuAggregateArgs> = {
        [P in keyof T & keyof AggregateMenu]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMenu[P]>
      : GetScalarType<T[P], AggregateMenu[P]>
  }


    
    
  export type MenuGroupByArgs = {
    where?: MenuWhereInput
    orderBy?: Enumerable<MenuOrderByInput>
    by: Array<MenuScalarFieldEnum>
    having?: MenuScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MenuCountAggregateInputType | true
    _avg?: MenuAvgAggregateInputType
    _sum?: MenuSumAggregateInputType
    _min?: MenuMinAggregateInputType
    _max?: MenuMaxAggregateInputType
  }


  export type MenuGroupByOutputType = {
    id: number
    createdAt: Date
    updatedAt: Date
    _count: MenuCountAggregateOutputType | null
    _avg: MenuAvgAggregateOutputType | null
    _sum: MenuSumAggregateOutputType | null
    _min: MenuMinAggregateOutputType | null
    _max: MenuMaxAggregateOutputType | null
  }

  type GetMenuGroupByPayload<T extends MenuGroupByArgs> = Promise<
    Array<
      PickArray<MenuGroupByOutputType, T['by']> & 
        {
          [P in ((keyof T) & (keyof MenuGroupByOutputType))]: P extends '_count' 
            ? T[P] extends boolean 
              ? number 
              : GetScalarType<T[P], MenuGroupByOutputType[P]> 
            : GetScalarType<T[P], MenuGroupByOutputType[P]>
        }
      > 
    >


  export type MenuSelect = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MenuGetPayload<
    S extends boolean | null | undefined | MenuArgs,
    U = keyof S
      > = S extends true
        ? Menu
    : S extends undefined
    ? never
    : S extends MenuArgs | MenuFindManyArgs
    ?'include' extends U
    ? Menu 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof Menu ?Menu [P]
  : 
     never
  } 
    : Menu
  : Menu


  type MenuCountArgs = Merge<
    Omit<MenuFindManyArgs, 'select' | 'include'> & {
      select?: MenuCountAggregateInputType | true
    }
  >

  export interface MenuDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Menu that matches the filter.
     * @param {MenuFindUniqueArgs} args - Arguments to find a Menu
     * @example
     * // Get one Menu
     * const menu = await prisma.menu.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends MenuFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, MenuFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Menu'> extends True ? CheckSelect<T, Prisma__MenuClient<Menu>, Prisma__MenuClient<MenuGetPayload<T>>> : CheckSelect<T, Prisma__MenuClient<Menu | null >, Prisma__MenuClient<MenuGetPayload<T> | null >>

    /**
     * Find the first Menu that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuFindFirstArgs} args - Arguments to find a Menu
     * @example
     * // Get one Menu
     * const menu = await prisma.menu.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends MenuFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, MenuFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Menu'> extends True ? CheckSelect<T, Prisma__MenuClient<Menu>, Prisma__MenuClient<MenuGetPayload<T>>> : CheckSelect<T, Prisma__MenuClient<Menu | null >, Prisma__MenuClient<MenuGetPayload<T> | null >>

    /**
     * Find zero or more Menus that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Menus
     * const menus = await prisma.menu.findMany()
     * 
     * // Get first 10 Menus
     * const menus = await prisma.menu.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const menuWithIdOnly = await prisma.menu.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends MenuFindManyArgs>(
      args?: SelectSubset<T, MenuFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Menu>>, PrismaPromise<Array<MenuGetPayload<T>>>>

    /**
     * Create a Menu.
     * @param {MenuCreateArgs} args - Arguments to create a Menu.
     * @example
     * // Create one Menu
     * const Menu = await prisma.menu.create({
     *   data: {
     *     // ... data to create a Menu
     *   }
     * })
     * 
    **/
    create<T extends MenuCreateArgs>(
      args: SelectSubset<T, MenuCreateArgs>
    ): CheckSelect<T, Prisma__MenuClient<Menu>, Prisma__MenuClient<MenuGetPayload<T>>>

    /**
     * Create many Menus.
     *     @param {MenuCreateManyArgs} args - Arguments to create many Menus.
     *     @example
     *     // Create many Menus
     *     const menu = await prisma.menu.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends MenuCreateManyArgs>(
      args?: SelectSubset<T, MenuCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Menu.
     * @param {MenuDeleteArgs} args - Arguments to delete one Menu.
     * @example
     * // Delete one Menu
     * const Menu = await prisma.menu.delete({
     *   where: {
     *     // ... filter to delete one Menu
     *   }
     * })
     * 
    **/
    delete<T extends MenuDeleteArgs>(
      args: SelectSubset<T, MenuDeleteArgs>
    ): CheckSelect<T, Prisma__MenuClient<Menu>, Prisma__MenuClient<MenuGetPayload<T>>>

    /**
     * Update one Menu.
     * @param {MenuUpdateArgs} args - Arguments to update one Menu.
     * @example
     * // Update one Menu
     * const menu = await prisma.menu.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends MenuUpdateArgs>(
      args: SelectSubset<T, MenuUpdateArgs>
    ): CheckSelect<T, Prisma__MenuClient<Menu>, Prisma__MenuClient<MenuGetPayload<T>>>

    /**
     * Delete zero or more Menus.
     * @param {MenuDeleteManyArgs} args - Arguments to filter Menus to delete.
     * @example
     * // Delete a few Menus
     * const { count } = await prisma.menu.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends MenuDeleteManyArgs>(
      args?: SelectSubset<T, MenuDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Menus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Menus
     * const menu = await prisma.menu.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends MenuUpdateManyArgs>(
      args: SelectSubset<T, MenuUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Menu.
     * @param {MenuUpsertArgs} args - Arguments to update or create a Menu.
     * @example
     * // Update or create a Menu
     * const menu = await prisma.menu.upsert({
     *   create: {
     *     // ... data to create a Menu
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Menu we want to update
     *   }
     * })
    **/
    upsert<T extends MenuUpsertArgs>(
      args: SelectSubset<T, MenuUpsertArgs>
    ): CheckSelect<T, Prisma__MenuClient<Menu>, Prisma__MenuClient<MenuGetPayload<T>>>

    /**
     * Count the number of Menus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuCountArgs} args - Arguments to filter Menus to count.
     * @example
     * // Count the number of Menus
     * const count = await prisma.menu.count({
     *   where: {
     *     // ... the filter for the Menus we want to count
     *   }
     * })
    **/
    count<T extends MenuCountArgs>(
      args?: Subset<T, MenuCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MenuCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Menu.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MenuAggregateArgs>(args: Subset<T, MenuAggregateArgs>): PrismaPromise<GetMenuAggregateType<T>>

    /**
     * Group by Menu.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MenuGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MenuGroupByArgs['orderBy'] }
        : { orderBy?: MenuGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MenuGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMenuGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Menu.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__MenuClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Menu findUnique
   */
  export type MenuFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Menu
     * 
    **/
    select?: MenuSelect | null
    /**
     * Throw an Error if a Menu can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Menu to fetch.
     * 
    **/
    where: MenuWhereUniqueInput
  }


  /**
   * Menu findFirst
   */
  export type MenuFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Menu
     * 
    **/
    select?: MenuSelect | null
    /**
     * Throw an Error if a Menu can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Menu to fetch.
     * 
    **/
    where?: MenuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Menus to fetch.
     * 
    **/
    orderBy?: Enumerable<MenuOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Menus.
     * 
    **/
    cursor?: MenuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Menus from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Menus.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Menus.
     * 
    **/
    distinct?: Enumerable<MenuScalarFieldEnum>
  }


  /**
   * Menu findMany
   */
  export type MenuFindManyArgs = {
    /**
     * Select specific fields to fetch from the Menu
     * 
    **/
    select?: MenuSelect | null
    /**
     * Filter, which Menus to fetch.
     * 
    **/
    where?: MenuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Menus to fetch.
     * 
    **/
    orderBy?: Enumerable<MenuOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Menus.
     * 
    **/
    cursor?: MenuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Menus from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Menus.
     * 
    **/
    skip?: number
    distinct?: Enumerable<MenuScalarFieldEnum>
  }


  /**
   * Menu create
   */
  export type MenuCreateArgs = {
    /**
     * Select specific fields to fetch from the Menu
     * 
    **/
    select?: MenuSelect | null
    /**
     * The data needed to create a Menu.
     * 
    **/
    data: XOR<MenuCreateInput, MenuUncheckedCreateInput>
  }


  /**
   * Menu createMany
   */
  export type MenuCreateManyArgs = {
    data: Enumerable<MenuCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Menu update
   */
  export type MenuUpdateArgs = {
    /**
     * Select specific fields to fetch from the Menu
     * 
    **/
    select?: MenuSelect | null
    /**
     * The data needed to update a Menu.
     * 
    **/
    data: XOR<MenuUpdateInput, MenuUncheckedUpdateInput>
    /**
     * Choose, which Menu to update.
     * 
    **/
    where: MenuWhereUniqueInput
  }


  /**
   * Menu updateMany
   */
  export type MenuUpdateManyArgs = {
    data: XOR<MenuUpdateManyMutationInput, MenuUncheckedUpdateManyInput>
    where?: MenuWhereInput
  }


  /**
   * Menu upsert
   */
  export type MenuUpsertArgs = {
    /**
     * Select specific fields to fetch from the Menu
     * 
    **/
    select?: MenuSelect | null
    /**
     * The filter to search for the Menu to update in case it exists.
     * 
    **/
    where: MenuWhereUniqueInput
    /**
     * In case the Menu found by the `where` argument doesn't exist, create a new Menu with this data.
     * 
    **/
    create: XOR<MenuCreateInput, MenuUncheckedCreateInput>
    /**
     * In case the Menu was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<MenuUpdateInput, MenuUncheckedUpdateInput>
  }


  /**
   * Menu delete
   */
  export type MenuDeleteArgs = {
    /**
     * Select specific fields to fetch from the Menu
     * 
    **/
    select?: MenuSelect | null
    /**
     * Filter which Menu to delete.
     * 
    **/
    where: MenuWhereUniqueInput
  }


  /**
   * Menu deleteMany
   */
  export type MenuDeleteManyArgs = {
    where?: MenuWhereInput
  }


  /**
   * Menu without action
   */
  export type MenuArgs = {
    /**
     * Select specific fields to fetch from the Menu
     * 
    **/
    select?: MenuSelect | null
  }



  /**
   * Model Role
   */


  export type AggregateRole = {
    _count: RoleCountAggregateOutputType | null
    count: RoleCountAggregateOutputType | null
    _avg: RoleAvgAggregateOutputType | null
    avg: RoleAvgAggregateOutputType | null
    _sum: RoleSumAggregateOutputType | null
    sum: RoleSumAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
    max: RoleMaxAggregateOutputType | null
  }

  export type RoleAvgAggregateOutputType = {
    id: number | null
  }

  export type RoleSumAggregateOutputType = {
    id: number | null
  }

  export type RoleMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RoleMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RoleCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RoleAvgAggregateInputType = {
    id?: true
  }

  export type RoleSumAggregateInputType = {
    id?: true
  }

  export type RoleMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RoleMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RoleCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RoleAggregateArgs = {
    /**
     * Filter which Role to aggregate.
     * 
    **/
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     * 
    **/
    orderBy?: Enumerable<RoleOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Roles
    **/
    _count?: true | RoleCountAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_count`
    **/
    count?: true | RoleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RoleAvgAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_avg`
    **/
    avg?: RoleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RoleSumAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_sum`
    **/
    sum?: RoleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoleMinAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_min`
    **/
    min?: RoleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoleMaxAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_max`
    **/
    max?: RoleMaxAggregateInputType
  }

  export type GetRoleAggregateType<T extends RoleAggregateArgs> = {
        [P in keyof T & keyof AggregateRole]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRole[P]>
      : GetScalarType<T[P], AggregateRole[P]>
  }


    
    
  export type RoleGroupByArgs = {
    where?: RoleWhereInput
    orderBy?: Enumerable<RoleOrderByInput>
    by: Array<RoleScalarFieldEnum>
    having?: RoleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoleCountAggregateInputType | true
    _avg?: RoleAvgAggregateInputType
    _sum?: RoleSumAggregateInputType
    _min?: RoleMinAggregateInputType
    _max?: RoleMaxAggregateInputType
  }


  export type RoleGroupByOutputType = {
    id: number
    createdAt: Date
    updatedAt: Date
    _count: RoleCountAggregateOutputType | null
    _avg: RoleAvgAggregateOutputType | null
    _sum: RoleSumAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  type GetRoleGroupByPayload<T extends RoleGroupByArgs> = Promise<
    Array<
      PickArray<RoleGroupByOutputType, T['by']> & 
        {
          [P in ((keyof T) & (keyof RoleGroupByOutputType))]: P extends '_count' 
            ? T[P] extends boolean 
              ? number 
              : GetScalarType<T[P], RoleGroupByOutputType[P]> 
            : GetScalarType<T[P], RoleGroupByOutputType[P]>
        }
      > 
    >


  export type RoleSelect = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RoleGetPayload<
    S extends boolean | null | undefined | RoleArgs,
    U = keyof S
      > = S extends true
        ? Role
    : S extends undefined
    ? never
    : S extends RoleArgs | RoleFindManyArgs
    ?'include' extends U
    ? Role 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof Role ?Role [P]
  : 
     never
  } 
    : Role
  : Role


  type RoleCountArgs = Merge<
    Omit<RoleFindManyArgs, 'select' | 'include'> & {
      select?: RoleCountAggregateInputType | true
    }
  >

  export interface RoleDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Role that matches the filter.
     * @param {RoleFindUniqueArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends RoleFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, RoleFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Role'> extends True ? CheckSelect<T, Prisma__RoleClient<Role>, Prisma__RoleClient<RoleGetPayload<T>>> : CheckSelect<T, Prisma__RoleClient<Role | null >, Prisma__RoleClient<RoleGetPayload<T> | null >>

    /**
     * Find the first Role that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindFirstArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends RoleFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, RoleFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Role'> extends True ? CheckSelect<T, Prisma__RoleClient<Role>, Prisma__RoleClient<RoleGetPayload<T>>> : CheckSelect<T, Prisma__RoleClient<Role | null >, Prisma__RoleClient<RoleGetPayload<T> | null >>

    /**
     * Find zero or more Roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Roles
     * const roles = await prisma.role.findMany()
     * 
     * // Get first 10 Roles
     * const roles = await prisma.role.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roleWithIdOnly = await prisma.role.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends RoleFindManyArgs>(
      args?: SelectSubset<T, RoleFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Role>>, PrismaPromise<Array<RoleGetPayload<T>>>>

    /**
     * Create a Role.
     * @param {RoleCreateArgs} args - Arguments to create a Role.
     * @example
     * // Create one Role
     * const Role = await prisma.role.create({
     *   data: {
     *     // ... data to create a Role
     *   }
     * })
     * 
    **/
    create<T extends RoleCreateArgs>(
      args: SelectSubset<T, RoleCreateArgs>
    ): CheckSelect<T, Prisma__RoleClient<Role>, Prisma__RoleClient<RoleGetPayload<T>>>

    /**
     * Create many Roles.
     *     @param {RoleCreateManyArgs} args - Arguments to create many Roles.
     *     @example
     *     // Create many Roles
     *     const role = await prisma.role.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends RoleCreateManyArgs>(
      args?: SelectSubset<T, RoleCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Role.
     * @param {RoleDeleteArgs} args - Arguments to delete one Role.
     * @example
     * // Delete one Role
     * const Role = await prisma.role.delete({
     *   where: {
     *     // ... filter to delete one Role
     *   }
     * })
     * 
    **/
    delete<T extends RoleDeleteArgs>(
      args: SelectSubset<T, RoleDeleteArgs>
    ): CheckSelect<T, Prisma__RoleClient<Role>, Prisma__RoleClient<RoleGetPayload<T>>>

    /**
     * Update one Role.
     * @param {RoleUpdateArgs} args - Arguments to update one Role.
     * @example
     * // Update one Role
     * const role = await prisma.role.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends RoleUpdateArgs>(
      args: SelectSubset<T, RoleUpdateArgs>
    ): CheckSelect<T, Prisma__RoleClient<Role>, Prisma__RoleClient<RoleGetPayload<T>>>

    /**
     * Delete zero or more Roles.
     * @param {RoleDeleteManyArgs} args - Arguments to filter Roles to delete.
     * @example
     * // Delete a few Roles
     * const { count } = await prisma.role.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends RoleDeleteManyArgs>(
      args?: SelectSubset<T, RoleDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Roles
     * const role = await prisma.role.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends RoleUpdateManyArgs>(
      args: SelectSubset<T, RoleUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Role.
     * @param {RoleUpsertArgs} args - Arguments to update or create a Role.
     * @example
     * // Update or create a Role
     * const role = await prisma.role.upsert({
     *   create: {
     *     // ... data to create a Role
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Role we want to update
     *   }
     * })
    **/
    upsert<T extends RoleUpsertArgs>(
      args: SelectSubset<T, RoleUpsertArgs>
    ): CheckSelect<T, Prisma__RoleClient<Role>, Prisma__RoleClient<RoleGetPayload<T>>>

    /**
     * Count the number of Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleCountArgs} args - Arguments to filter Roles to count.
     * @example
     * // Count the number of Roles
     * const count = await prisma.role.count({
     *   where: {
     *     // ... the filter for the Roles we want to count
     *   }
     * })
    **/
    count<T extends RoleCountArgs>(
      args?: Subset<T, RoleCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RoleAggregateArgs>(args: Subset<T, RoleAggregateArgs>): PrismaPromise<GetRoleAggregateType<T>>

    /**
     * Group by Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RoleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoleGroupByArgs['orderBy'] }
        : { orderBy?: RoleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RoleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoleGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Role.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__RoleClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Role findUnique
   */
  export type RoleFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Role
     * 
    **/
    select?: RoleSelect | null
    /**
     * Throw an Error if a Role can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Role to fetch.
     * 
    **/
    where: RoleWhereUniqueInput
  }


  /**
   * Role findFirst
   */
  export type RoleFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Role
     * 
    **/
    select?: RoleSelect | null
    /**
     * Throw an Error if a Role can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Role to fetch.
     * 
    **/
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     * 
    **/
    orderBy?: Enumerable<RoleOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     * 
    **/
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     * 
    **/
    distinct?: Enumerable<RoleScalarFieldEnum>
  }


  /**
   * Role findMany
   */
  export type RoleFindManyArgs = {
    /**
     * Select specific fields to fetch from the Role
     * 
    **/
    select?: RoleSelect | null
    /**
     * Filter, which Roles to fetch.
     * 
    **/
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     * 
    **/
    orderBy?: Enumerable<RoleOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Roles.
     * 
    **/
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     * 
    **/
    skip?: number
    distinct?: Enumerable<RoleScalarFieldEnum>
  }


  /**
   * Role create
   */
  export type RoleCreateArgs = {
    /**
     * Select specific fields to fetch from the Role
     * 
    **/
    select?: RoleSelect | null
    /**
     * The data needed to create a Role.
     * 
    **/
    data: XOR<RoleCreateInput, RoleUncheckedCreateInput>
  }


  /**
   * Role createMany
   */
  export type RoleCreateManyArgs = {
    data: Enumerable<RoleCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Role update
   */
  export type RoleUpdateArgs = {
    /**
     * Select specific fields to fetch from the Role
     * 
    **/
    select?: RoleSelect | null
    /**
     * The data needed to update a Role.
     * 
    **/
    data: XOR<RoleUpdateInput, RoleUncheckedUpdateInput>
    /**
     * Choose, which Role to update.
     * 
    **/
    where: RoleWhereUniqueInput
  }


  /**
   * Role updateMany
   */
  export type RoleUpdateManyArgs = {
    data: XOR<RoleUpdateManyMutationInput, RoleUncheckedUpdateManyInput>
    where?: RoleWhereInput
  }


  /**
   * Role upsert
   */
  export type RoleUpsertArgs = {
    /**
     * Select specific fields to fetch from the Role
     * 
    **/
    select?: RoleSelect | null
    /**
     * The filter to search for the Role to update in case it exists.
     * 
    **/
    where: RoleWhereUniqueInput
    /**
     * In case the Role found by the `where` argument doesn't exist, create a new Role with this data.
     * 
    **/
    create: XOR<RoleCreateInput, RoleUncheckedCreateInput>
    /**
     * In case the Role was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<RoleUpdateInput, RoleUncheckedUpdateInput>
  }


  /**
   * Role delete
   */
  export type RoleDeleteArgs = {
    /**
     * Select specific fields to fetch from the Role
     * 
    **/
    select?: RoleSelect | null
    /**
     * Filter which Role to delete.
     * 
    **/
    where: RoleWhereUniqueInput
  }


  /**
   * Role deleteMany
   */
  export type RoleDeleteManyArgs = {
    where?: RoleWhereInput
  }


  /**
   * Role without action
   */
  export type RoleArgs = {
    /**
     * Select specific fields to fetch from the Role
     * 
    **/
    select?: RoleSelect | null
  }



  /**
   * Model Permission
   */


  export type AggregatePermission = {
    _count: PermissionCountAggregateOutputType | null
    count: PermissionCountAggregateOutputType | null
    _avg: PermissionAvgAggregateOutputType | null
    avg: PermissionAvgAggregateOutputType | null
    _sum: PermissionSumAggregateOutputType | null
    sum: PermissionSumAggregateOutputType | null
    _min: PermissionMinAggregateOutputType | null
    min: PermissionMinAggregateOutputType | null
    _max: PermissionMaxAggregateOutputType | null
    max: PermissionMaxAggregateOutputType | null
  }

  export type PermissionAvgAggregateOutputType = {
    id: number | null
  }

  export type PermissionSumAggregateOutputType = {
    id: number | null
  }

  export type PermissionMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PermissionMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PermissionCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PermissionAvgAggregateInputType = {
    id?: true
  }

  export type PermissionSumAggregateInputType = {
    id?: true
  }

  export type PermissionMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PermissionMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PermissionCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PermissionAggregateArgs = {
    /**
     * Filter which Permission to aggregate.
     * 
    **/
    where?: PermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Permissions to fetch.
     * 
    **/
    orderBy?: Enumerable<PermissionOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: PermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Permissions from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Permissions.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Permissions
    **/
    _count?: true | PermissionCountAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_count`
    **/
    count?: true | PermissionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PermissionAvgAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_avg`
    **/
    avg?: PermissionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PermissionSumAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_sum`
    **/
    sum?: PermissionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PermissionMinAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_min`
    **/
    min?: PermissionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PermissionMaxAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_max`
    **/
    max?: PermissionMaxAggregateInputType
  }

  export type GetPermissionAggregateType<T extends PermissionAggregateArgs> = {
        [P in keyof T & keyof AggregatePermission]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePermission[P]>
      : GetScalarType<T[P], AggregatePermission[P]>
  }


    
    
  export type PermissionGroupByArgs = {
    where?: PermissionWhereInput
    orderBy?: Enumerable<PermissionOrderByInput>
    by: Array<PermissionScalarFieldEnum>
    having?: PermissionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PermissionCountAggregateInputType | true
    _avg?: PermissionAvgAggregateInputType
    _sum?: PermissionSumAggregateInputType
    _min?: PermissionMinAggregateInputType
    _max?: PermissionMaxAggregateInputType
  }


  export type PermissionGroupByOutputType = {
    id: number
    createdAt: Date
    updatedAt: Date
    _count: PermissionCountAggregateOutputType | null
    _avg: PermissionAvgAggregateOutputType | null
    _sum: PermissionSumAggregateOutputType | null
    _min: PermissionMinAggregateOutputType | null
    _max: PermissionMaxAggregateOutputType | null
  }

  type GetPermissionGroupByPayload<T extends PermissionGroupByArgs> = Promise<
    Array<
      PickArray<PermissionGroupByOutputType, T['by']> & 
        {
          [P in ((keyof T) & (keyof PermissionGroupByOutputType))]: P extends '_count' 
            ? T[P] extends boolean 
              ? number 
              : GetScalarType<T[P], PermissionGroupByOutputType[P]> 
            : GetScalarType<T[P], PermissionGroupByOutputType[P]>
        }
      > 
    >


  export type PermissionSelect = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PermissionGetPayload<
    S extends boolean | null | undefined | PermissionArgs,
    U = keyof S
      > = S extends true
        ? Permission
    : S extends undefined
    ? never
    : S extends PermissionArgs | PermissionFindManyArgs
    ?'include' extends U
    ? Permission 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof Permission ?Permission [P]
  : 
     never
  } 
    : Permission
  : Permission


  type PermissionCountArgs = Merge<
    Omit<PermissionFindManyArgs, 'select' | 'include'> & {
      select?: PermissionCountAggregateInputType | true
    }
  >

  export interface PermissionDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Permission that matches the filter.
     * @param {PermissionFindUniqueArgs} args - Arguments to find a Permission
     * @example
     * // Get one Permission
     * const permission = await prisma.permission.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PermissionFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, PermissionFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Permission'> extends True ? CheckSelect<T, Prisma__PermissionClient<Permission>, Prisma__PermissionClient<PermissionGetPayload<T>>> : CheckSelect<T, Prisma__PermissionClient<Permission | null >, Prisma__PermissionClient<PermissionGetPayload<T> | null >>

    /**
     * Find the first Permission that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionFindFirstArgs} args - Arguments to find a Permission
     * @example
     * // Get one Permission
     * const permission = await prisma.permission.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PermissionFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, PermissionFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Permission'> extends True ? CheckSelect<T, Prisma__PermissionClient<Permission>, Prisma__PermissionClient<PermissionGetPayload<T>>> : CheckSelect<T, Prisma__PermissionClient<Permission | null >, Prisma__PermissionClient<PermissionGetPayload<T> | null >>

    /**
     * Find zero or more Permissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Permissions
     * const permissions = await prisma.permission.findMany()
     * 
     * // Get first 10 Permissions
     * const permissions = await prisma.permission.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const permissionWithIdOnly = await prisma.permission.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends PermissionFindManyArgs>(
      args?: SelectSubset<T, PermissionFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Permission>>, PrismaPromise<Array<PermissionGetPayload<T>>>>

    /**
     * Create a Permission.
     * @param {PermissionCreateArgs} args - Arguments to create a Permission.
     * @example
     * // Create one Permission
     * const Permission = await prisma.permission.create({
     *   data: {
     *     // ... data to create a Permission
     *   }
     * })
     * 
    **/
    create<T extends PermissionCreateArgs>(
      args: SelectSubset<T, PermissionCreateArgs>
    ): CheckSelect<T, Prisma__PermissionClient<Permission>, Prisma__PermissionClient<PermissionGetPayload<T>>>

    /**
     * Create many Permissions.
     *     @param {PermissionCreateManyArgs} args - Arguments to create many Permissions.
     *     @example
     *     // Create many Permissions
     *     const permission = await prisma.permission.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PermissionCreateManyArgs>(
      args?: SelectSubset<T, PermissionCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Permission.
     * @param {PermissionDeleteArgs} args - Arguments to delete one Permission.
     * @example
     * // Delete one Permission
     * const Permission = await prisma.permission.delete({
     *   where: {
     *     // ... filter to delete one Permission
     *   }
     * })
     * 
    **/
    delete<T extends PermissionDeleteArgs>(
      args: SelectSubset<T, PermissionDeleteArgs>
    ): CheckSelect<T, Prisma__PermissionClient<Permission>, Prisma__PermissionClient<PermissionGetPayload<T>>>

    /**
     * Update one Permission.
     * @param {PermissionUpdateArgs} args - Arguments to update one Permission.
     * @example
     * // Update one Permission
     * const permission = await prisma.permission.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PermissionUpdateArgs>(
      args: SelectSubset<T, PermissionUpdateArgs>
    ): CheckSelect<T, Prisma__PermissionClient<Permission>, Prisma__PermissionClient<PermissionGetPayload<T>>>

    /**
     * Delete zero or more Permissions.
     * @param {PermissionDeleteManyArgs} args - Arguments to filter Permissions to delete.
     * @example
     * // Delete a few Permissions
     * const { count } = await prisma.permission.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PermissionDeleteManyArgs>(
      args?: SelectSubset<T, PermissionDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Permissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Permissions
     * const permission = await prisma.permission.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PermissionUpdateManyArgs>(
      args: SelectSubset<T, PermissionUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Permission.
     * @param {PermissionUpsertArgs} args - Arguments to update or create a Permission.
     * @example
     * // Update or create a Permission
     * const permission = await prisma.permission.upsert({
     *   create: {
     *     // ... data to create a Permission
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Permission we want to update
     *   }
     * })
    **/
    upsert<T extends PermissionUpsertArgs>(
      args: SelectSubset<T, PermissionUpsertArgs>
    ): CheckSelect<T, Prisma__PermissionClient<Permission>, Prisma__PermissionClient<PermissionGetPayload<T>>>

    /**
     * Count the number of Permissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionCountArgs} args - Arguments to filter Permissions to count.
     * @example
     * // Count the number of Permissions
     * const count = await prisma.permission.count({
     *   where: {
     *     // ... the filter for the Permissions we want to count
     *   }
     * })
    **/
    count<T extends PermissionCountArgs>(
      args?: Subset<T, PermissionCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PermissionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Permission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PermissionAggregateArgs>(args: Subset<T, PermissionAggregateArgs>): PrismaPromise<GetPermissionAggregateType<T>>

    /**
     * Group by Permission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PermissionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PermissionGroupByArgs['orderBy'] }
        : { orderBy?: PermissionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PermissionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPermissionGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Permission.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__PermissionClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Permission findUnique
   */
  export type PermissionFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Permission
     * 
    **/
    select?: PermissionSelect | null
    /**
     * Throw an Error if a Permission can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Permission to fetch.
     * 
    **/
    where: PermissionWhereUniqueInput
  }


  /**
   * Permission findFirst
   */
  export type PermissionFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Permission
     * 
    **/
    select?: PermissionSelect | null
    /**
     * Throw an Error if a Permission can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Permission to fetch.
     * 
    **/
    where?: PermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Permissions to fetch.
     * 
    **/
    orderBy?: Enumerable<PermissionOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Permissions.
     * 
    **/
    cursor?: PermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Permissions from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Permissions.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Permissions.
     * 
    **/
    distinct?: Enumerable<PermissionScalarFieldEnum>
  }


  /**
   * Permission findMany
   */
  export type PermissionFindManyArgs = {
    /**
     * Select specific fields to fetch from the Permission
     * 
    **/
    select?: PermissionSelect | null
    /**
     * Filter, which Permissions to fetch.
     * 
    **/
    where?: PermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Permissions to fetch.
     * 
    **/
    orderBy?: Enumerable<PermissionOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Permissions.
     * 
    **/
    cursor?: PermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Permissions from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Permissions.
     * 
    **/
    skip?: number
    distinct?: Enumerable<PermissionScalarFieldEnum>
  }


  /**
   * Permission create
   */
  export type PermissionCreateArgs = {
    /**
     * Select specific fields to fetch from the Permission
     * 
    **/
    select?: PermissionSelect | null
    /**
     * The data needed to create a Permission.
     * 
    **/
    data: XOR<PermissionCreateInput, PermissionUncheckedCreateInput>
  }


  /**
   * Permission createMany
   */
  export type PermissionCreateManyArgs = {
    data: Enumerable<PermissionCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Permission update
   */
  export type PermissionUpdateArgs = {
    /**
     * Select specific fields to fetch from the Permission
     * 
    **/
    select?: PermissionSelect | null
    /**
     * The data needed to update a Permission.
     * 
    **/
    data: XOR<PermissionUpdateInput, PermissionUncheckedUpdateInput>
    /**
     * Choose, which Permission to update.
     * 
    **/
    where: PermissionWhereUniqueInput
  }


  /**
   * Permission updateMany
   */
  export type PermissionUpdateManyArgs = {
    data: XOR<PermissionUpdateManyMutationInput, PermissionUncheckedUpdateManyInput>
    where?: PermissionWhereInput
  }


  /**
   * Permission upsert
   */
  export type PermissionUpsertArgs = {
    /**
     * Select specific fields to fetch from the Permission
     * 
    **/
    select?: PermissionSelect | null
    /**
     * The filter to search for the Permission to update in case it exists.
     * 
    **/
    where: PermissionWhereUniqueInput
    /**
     * In case the Permission found by the `where` argument doesn't exist, create a new Permission with this data.
     * 
    **/
    create: XOR<PermissionCreateInput, PermissionUncheckedCreateInput>
    /**
     * In case the Permission was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<PermissionUpdateInput, PermissionUncheckedUpdateInput>
  }


  /**
   * Permission delete
   */
  export type PermissionDeleteArgs = {
    /**
     * Select specific fields to fetch from the Permission
     * 
    **/
    select?: PermissionSelect | null
    /**
     * Filter which Permission to delete.
     * 
    **/
    where: PermissionWhereUniqueInput
  }


  /**
   * Permission deleteMany
   */
  export type PermissionDeleteManyArgs = {
    where?: PermissionWhereInput
  }


  /**
   * Permission without action
   */
  export type PermissionArgs = {
    /**
     * Select specific fields to fetch from the Permission
     * 
    **/
    select?: PermissionSelect | null
  }



  /**
   * Model TagsOnArticles
   */


  export type AggregateTagsOnArticles = {
    _count: TagsOnArticlesCountAggregateOutputType | null
    count: TagsOnArticlesCountAggregateOutputType | null
    _avg: TagsOnArticlesAvgAggregateOutputType | null
    avg: TagsOnArticlesAvgAggregateOutputType | null
    _sum: TagsOnArticlesSumAggregateOutputType | null
    sum: TagsOnArticlesSumAggregateOutputType | null
    _min: TagsOnArticlesMinAggregateOutputType | null
    min: TagsOnArticlesMinAggregateOutputType | null
    _max: TagsOnArticlesMaxAggregateOutputType | null
    max: TagsOnArticlesMaxAggregateOutputType | null
  }

  export type TagsOnArticlesAvgAggregateOutputType = {
    articleId: number | null
    tagId: number | null
  }

  export type TagsOnArticlesSumAggregateOutputType = {
    articleId: number | null
    tagId: number | null
  }

  export type TagsOnArticlesMinAggregateOutputType = {
    articleId: number | null
    tagId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TagsOnArticlesMaxAggregateOutputType = {
    articleId: number | null
    tagId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TagsOnArticlesCountAggregateOutputType = {
    articleId: number
    tagId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TagsOnArticlesAvgAggregateInputType = {
    articleId?: true
    tagId?: true
  }

  export type TagsOnArticlesSumAggregateInputType = {
    articleId?: true
    tagId?: true
  }

  export type TagsOnArticlesMinAggregateInputType = {
    articleId?: true
    tagId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TagsOnArticlesMaxAggregateInputType = {
    articleId?: true
    tagId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TagsOnArticlesCountAggregateInputType = {
    articleId?: true
    tagId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TagsOnArticlesAggregateArgs = {
    /**
     * Filter which TagsOnArticles to aggregate.
     * 
    **/
    where?: TagsOnArticlesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TagsOnArticles to fetch.
     * 
    **/
    orderBy?: Enumerable<TagsOnArticlesOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: TagsOnArticlesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TagsOnArticles from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TagsOnArticles.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TagsOnArticles
    **/
    _count?: true | TagsOnArticlesCountAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_count`
    **/
    count?: true | TagsOnArticlesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TagsOnArticlesAvgAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_avg`
    **/
    avg?: TagsOnArticlesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TagsOnArticlesSumAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_sum`
    **/
    sum?: TagsOnArticlesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TagsOnArticlesMinAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_min`
    **/
    min?: TagsOnArticlesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TagsOnArticlesMaxAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_max`
    **/
    max?: TagsOnArticlesMaxAggregateInputType
  }

  export type GetTagsOnArticlesAggregateType<T extends TagsOnArticlesAggregateArgs> = {
        [P in keyof T & keyof AggregateTagsOnArticles]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTagsOnArticles[P]>
      : GetScalarType<T[P], AggregateTagsOnArticles[P]>
  }


    
    
  export type TagsOnArticlesGroupByArgs = {
    where?: TagsOnArticlesWhereInput
    orderBy?: Enumerable<TagsOnArticlesOrderByInput>
    by: Array<TagsOnArticlesScalarFieldEnum>
    having?: TagsOnArticlesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TagsOnArticlesCountAggregateInputType | true
    _avg?: TagsOnArticlesAvgAggregateInputType
    _sum?: TagsOnArticlesSumAggregateInputType
    _min?: TagsOnArticlesMinAggregateInputType
    _max?: TagsOnArticlesMaxAggregateInputType
  }


  export type TagsOnArticlesGroupByOutputType = {
    articleId: number
    tagId: number
    createdAt: Date
    updatedAt: Date
    _count: TagsOnArticlesCountAggregateOutputType | null
    _avg: TagsOnArticlesAvgAggregateOutputType | null
    _sum: TagsOnArticlesSumAggregateOutputType | null
    _min: TagsOnArticlesMinAggregateOutputType | null
    _max: TagsOnArticlesMaxAggregateOutputType | null
  }

  type GetTagsOnArticlesGroupByPayload<T extends TagsOnArticlesGroupByArgs> = Promise<
    Array<
      PickArray<TagsOnArticlesGroupByOutputType, T['by']> & 
        {
          [P in ((keyof T) & (keyof TagsOnArticlesGroupByOutputType))]: P extends '_count' 
            ? T[P] extends boolean 
              ? number 
              : GetScalarType<T[P], TagsOnArticlesGroupByOutputType[P]> 
            : GetScalarType<T[P], TagsOnArticlesGroupByOutputType[P]>
        }
      > 
    >


  export type TagsOnArticlesSelect = {
    articleId?: boolean
    tagId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    article?: boolean | ArticleArgs
    tag?: boolean | TagArgs
  }

  export type TagsOnArticlesInclude = {
    article?: boolean | ArticleArgs
    tag?: boolean | TagArgs
  }

  export type TagsOnArticlesGetPayload<
    S extends boolean | null | undefined | TagsOnArticlesArgs,
    U = keyof S
      > = S extends true
        ? TagsOnArticles
    : S extends undefined
    ? never
    : S extends TagsOnArticlesArgs | TagsOnArticlesFindManyArgs
    ?'include' extends U
    ? TagsOnArticles  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'article'
        ? ArticleGetPayload<S['include'][P]> :
        P extends 'tag'
        ? TagGetPayload<S['include'][P]> : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof TagsOnArticles ?TagsOnArticles [P]
  : 
          P extends 'article'
        ? ArticleGetPayload<S['select'][P]> :
        P extends 'tag'
        ? TagGetPayload<S['select'][P]> : never
  } 
    : TagsOnArticles
  : TagsOnArticles


  type TagsOnArticlesCountArgs = Merge<
    Omit<TagsOnArticlesFindManyArgs, 'select' | 'include'> & {
      select?: TagsOnArticlesCountAggregateInputType | true
    }
  >

  export interface TagsOnArticlesDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one TagsOnArticles that matches the filter.
     * @param {TagsOnArticlesFindUniqueArgs} args - Arguments to find a TagsOnArticles
     * @example
     * // Get one TagsOnArticles
     * const tagsOnArticles = await prisma.tagsOnArticles.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TagsOnArticlesFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, TagsOnArticlesFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'TagsOnArticles'> extends True ? CheckSelect<T, Prisma__TagsOnArticlesClient<TagsOnArticles>, Prisma__TagsOnArticlesClient<TagsOnArticlesGetPayload<T>>> : CheckSelect<T, Prisma__TagsOnArticlesClient<TagsOnArticles | null >, Prisma__TagsOnArticlesClient<TagsOnArticlesGetPayload<T> | null >>

    /**
     * Find the first TagsOnArticles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagsOnArticlesFindFirstArgs} args - Arguments to find a TagsOnArticles
     * @example
     * // Get one TagsOnArticles
     * const tagsOnArticles = await prisma.tagsOnArticles.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TagsOnArticlesFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, TagsOnArticlesFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'TagsOnArticles'> extends True ? CheckSelect<T, Prisma__TagsOnArticlesClient<TagsOnArticles>, Prisma__TagsOnArticlesClient<TagsOnArticlesGetPayload<T>>> : CheckSelect<T, Prisma__TagsOnArticlesClient<TagsOnArticles | null >, Prisma__TagsOnArticlesClient<TagsOnArticlesGetPayload<T> | null >>

    /**
     * Find zero or more TagsOnArticles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagsOnArticlesFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TagsOnArticles
     * const tagsOnArticles = await prisma.tagsOnArticles.findMany()
     * 
     * // Get first 10 TagsOnArticles
     * const tagsOnArticles = await prisma.tagsOnArticles.findMany({ take: 10 })
     * 
     * // Only select the `articleId`
     * const tagsOnArticlesWithArticleIdOnly = await prisma.tagsOnArticles.findMany({ select: { articleId: true } })
     * 
    **/
    findMany<T extends TagsOnArticlesFindManyArgs>(
      args?: SelectSubset<T, TagsOnArticlesFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<TagsOnArticles>>, PrismaPromise<Array<TagsOnArticlesGetPayload<T>>>>

    /**
     * Create a TagsOnArticles.
     * @param {TagsOnArticlesCreateArgs} args - Arguments to create a TagsOnArticles.
     * @example
     * // Create one TagsOnArticles
     * const TagsOnArticles = await prisma.tagsOnArticles.create({
     *   data: {
     *     // ... data to create a TagsOnArticles
     *   }
     * })
     * 
    **/
    create<T extends TagsOnArticlesCreateArgs>(
      args: SelectSubset<T, TagsOnArticlesCreateArgs>
    ): CheckSelect<T, Prisma__TagsOnArticlesClient<TagsOnArticles>, Prisma__TagsOnArticlesClient<TagsOnArticlesGetPayload<T>>>

    /**
     * Create many TagsOnArticles.
     *     @param {TagsOnArticlesCreateManyArgs} args - Arguments to create many TagsOnArticles.
     *     @example
     *     // Create many TagsOnArticles
     *     const tagsOnArticles = await prisma.tagsOnArticles.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends TagsOnArticlesCreateManyArgs>(
      args?: SelectSubset<T, TagsOnArticlesCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a TagsOnArticles.
     * @param {TagsOnArticlesDeleteArgs} args - Arguments to delete one TagsOnArticles.
     * @example
     * // Delete one TagsOnArticles
     * const TagsOnArticles = await prisma.tagsOnArticles.delete({
     *   where: {
     *     // ... filter to delete one TagsOnArticles
     *   }
     * })
     * 
    **/
    delete<T extends TagsOnArticlesDeleteArgs>(
      args: SelectSubset<T, TagsOnArticlesDeleteArgs>
    ): CheckSelect<T, Prisma__TagsOnArticlesClient<TagsOnArticles>, Prisma__TagsOnArticlesClient<TagsOnArticlesGetPayload<T>>>

    /**
     * Update one TagsOnArticles.
     * @param {TagsOnArticlesUpdateArgs} args - Arguments to update one TagsOnArticles.
     * @example
     * // Update one TagsOnArticles
     * const tagsOnArticles = await prisma.tagsOnArticles.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TagsOnArticlesUpdateArgs>(
      args: SelectSubset<T, TagsOnArticlesUpdateArgs>
    ): CheckSelect<T, Prisma__TagsOnArticlesClient<TagsOnArticles>, Prisma__TagsOnArticlesClient<TagsOnArticlesGetPayload<T>>>

    /**
     * Delete zero or more TagsOnArticles.
     * @param {TagsOnArticlesDeleteManyArgs} args - Arguments to filter TagsOnArticles to delete.
     * @example
     * // Delete a few TagsOnArticles
     * const { count } = await prisma.tagsOnArticles.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TagsOnArticlesDeleteManyArgs>(
      args?: SelectSubset<T, TagsOnArticlesDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more TagsOnArticles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagsOnArticlesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TagsOnArticles
     * const tagsOnArticles = await prisma.tagsOnArticles.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TagsOnArticlesUpdateManyArgs>(
      args: SelectSubset<T, TagsOnArticlesUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one TagsOnArticles.
     * @param {TagsOnArticlesUpsertArgs} args - Arguments to update or create a TagsOnArticles.
     * @example
     * // Update or create a TagsOnArticles
     * const tagsOnArticles = await prisma.tagsOnArticles.upsert({
     *   create: {
     *     // ... data to create a TagsOnArticles
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TagsOnArticles we want to update
     *   }
     * })
    **/
    upsert<T extends TagsOnArticlesUpsertArgs>(
      args: SelectSubset<T, TagsOnArticlesUpsertArgs>
    ): CheckSelect<T, Prisma__TagsOnArticlesClient<TagsOnArticles>, Prisma__TagsOnArticlesClient<TagsOnArticlesGetPayload<T>>>

    /**
     * Count the number of TagsOnArticles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagsOnArticlesCountArgs} args - Arguments to filter TagsOnArticles to count.
     * @example
     * // Count the number of TagsOnArticles
     * const count = await prisma.tagsOnArticles.count({
     *   where: {
     *     // ... the filter for the TagsOnArticles we want to count
     *   }
     * })
    **/
    count<T extends TagsOnArticlesCountArgs>(
      args?: Subset<T, TagsOnArticlesCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TagsOnArticlesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TagsOnArticles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagsOnArticlesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TagsOnArticlesAggregateArgs>(args: Subset<T, TagsOnArticlesAggregateArgs>): PrismaPromise<GetTagsOnArticlesAggregateType<T>>

    /**
     * Group by TagsOnArticles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagsOnArticlesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TagsOnArticlesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TagsOnArticlesGroupByArgs['orderBy'] }
        : { orderBy?: TagsOnArticlesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TagsOnArticlesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTagsOnArticlesGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for TagsOnArticles.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__TagsOnArticlesClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    article<T extends ArticleArgs = {}>(args?: Subset<T, ArticleArgs>): CheckSelect<T, Prisma__ArticleClient<Article | null >, Prisma__ArticleClient<ArticleGetPayload<T> | null >>;

    tag<T extends TagArgs = {}>(args?: Subset<T, TagArgs>): CheckSelect<T, Prisma__TagClient<Tag | null >, Prisma__TagClient<TagGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * TagsOnArticles findUnique
   */
  export type TagsOnArticlesFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the TagsOnArticles
     * 
    **/
    select?: TagsOnArticlesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TagsOnArticlesInclude | null
    /**
     * Throw an Error if a TagsOnArticles can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which TagsOnArticles to fetch.
     * 
    **/
    where: TagsOnArticlesWhereUniqueInput
  }


  /**
   * TagsOnArticles findFirst
   */
  export type TagsOnArticlesFindFirstArgs = {
    /**
     * Select specific fields to fetch from the TagsOnArticles
     * 
    **/
    select?: TagsOnArticlesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TagsOnArticlesInclude | null
    /**
     * Throw an Error if a TagsOnArticles can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which TagsOnArticles to fetch.
     * 
    **/
    where?: TagsOnArticlesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TagsOnArticles to fetch.
     * 
    **/
    orderBy?: Enumerable<TagsOnArticlesOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TagsOnArticles.
     * 
    **/
    cursor?: TagsOnArticlesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TagsOnArticles from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TagsOnArticles.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TagsOnArticles.
     * 
    **/
    distinct?: Enumerable<TagsOnArticlesScalarFieldEnum>
  }


  /**
   * TagsOnArticles findMany
   */
  export type TagsOnArticlesFindManyArgs = {
    /**
     * Select specific fields to fetch from the TagsOnArticles
     * 
    **/
    select?: TagsOnArticlesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TagsOnArticlesInclude | null
    /**
     * Filter, which TagsOnArticles to fetch.
     * 
    **/
    where?: TagsOnArticlesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TagsOnArticles to fetch.
     * 
    **/
    orderBy?: Enumerable<TagsOnArticlesOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TagsOnArticles.
     * 
    **/
    cursor?: TagsOnArticlesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TagsOnArticles from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TagsOnArticles.
     * 
    **/
    skip?: number
    distinct?: Enumerable<TagsOnArticlesScalarFieldEnum>
  }


  /**
   * TagsOnArticles create
   */
  export type TagsOnArticlesCreateArgs = {
    /**
     * Select specific fields to fetch from the TagsOnArticles
     * 
    **/
    select?: TagsOnArticlesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TagsOnArticlesInclude | null
    /**
     * The data needed to create a TagsOnArticles.
     * 
    **/
    data: XOR<TagsOnArticlesCreateInput, TagsOnArticlesUncheckedCreateInput>
  }


  /**
   * TagsOnArticles createMany
   */
  export type TagsOnArticlesCreateManyArgs = {
    data: Enumerable<TagsOnArticlesCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * TagsOnArticles update
   */
  export type TagsOnArticlesUpdateArgs = {
    /**
     * Select specific fields to fetch from the TagsOnArticles
     * 
    **/
    select?: TagsOnArticlesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TagsOnArticlesInclude | null
    /**
     * The data needed to update a TagsOnArticles.
     * 
    **/
    data: XOR<TagsOnArticlesUpdateInput, TagsOnArticlesUncheckedUpdateInput>
    /**
     * Choose, which TagsOnArticles to update.
     * 
    **/
    where: TagsOnArticlesWhereUniqueInput
  }


  /**
   * TagsOnArticles updateMany
   */
  export type TagsOnArticlesUpdateManyArgs = {
    data: XOR<TagsOnArticlesUpdateManyMutationInput, TagsOnArticlesUncheckedUpdateManyInput>
    where?: TagsOnArticlesWhereInput
  }


  /**
   * TagsOnArticles upsert
   */
  export type TagsOnArticlesUpsertArgs = {
    /**
     * Select specific fields to fetch from the TagsOnArticles
     * 
    **/
    select?: TagsOnArticlesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TagsOnArticlesInclude | null
    /**
     * The filter to search for the TagsOnArticles to update in case it exists.
     * 
    **/
    where: TagsOnArticlesWhereUniqueInput
    /**
     * In case the TagsOnArticles found by the `where` argument doesn't exist, create a new TagsOnArticles with this data.
     * 
    **/
    create: XOR<TagsOnArticlesCreateInput, TagsOnArticlesUncheckedCreateInput>
    /**
     * In case the TagsOnArticles was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<TagsOnArticlesUpdateInput, TagsOnArticlesUncheckedUpdateInput>
  }


  /**
   * TagsOnArticles delete
   */
  export type TagsOnArticlesDeleteArgs = {
    /**
     * Select specific fields to fetch from the TagsOnArticles
     * 
    **/
    select?: TagsOnArticlesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TagsOnArticlesInclude | null
    /**
     * Filter which TagsOnArticles to delete.
     * 
    **/
    where: TagsOnArticlesWhereUniqueInput
  }


  /**
   * TagsOnArticles deleteMany
   */
  export type TagsOnArticlesDeleteManyArgs = {
    where?: TagsOnArticlesWhereInput
  }


  /**
   * TagsOnArticles without action
   */
  export type TagsOnArticlesArgs = {
    /**
     * Select specific fields to fetch from the TagsOnArticles
     * 
    **/
    select?: TagsOnArticlesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TagsOnArticlesInclude | null
  }



  /**
   * Model Follower
   */


  export type AggregateFollower = {
    _count: FollowerCountAggregateOutputType | null
    count: FollowerCountAggregateOutputType | null
    _avg: FollowerAvgAggregateOutputType | null
    avg: FollowerAvgAggregateOutputType | null
    _sum: FollowerSumAggregateOutputType | null
    sum: FollowerSumAggregateOutputType | null
    _min: FollowerMinAggregateOutputType | null
    min: FollowerMinAggregateOutputType | null
    _max: FollowerMaxAggregateOutputType | null
    max: FollowerMaxAggregateOutputType | null
  }

  export type FollowerAvgAggregateOutputType = {
    followerId: number | null
    followingId: number | null
  }

  export type FollowerSumAggregateOutputType = {
    followerId: number | null
    followingId: number | null
  }

  export type FollowerMinAggregateOutputType = {
    followerId: number | null
    followingId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FollowerMaxAggregateOutputType = {
    followerId: number | null
    followingId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FollowerCountAggregateOutputType = {
    followerId: number
    followingId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type FollowerAvgAggregateInputType = {
    followerId?: true
    followingId?: true
  }

  export type FollowerSumAggregateInputType = {
    followerId?: true
    followingId?: true
  }

  export type FollowerMinAggregateInputType = {
    followerId?: true
    followingId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FollowerMaxAggregateInputType = {
    followerId?: true
    followingId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FollowerCountAggregateInputType = {
    followerId?: true
    followingId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type FollowerAggregateArgs = {
    /**
     * Filter which Follower to aggregate.
     * 
    **/
    where?: FollowerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Followers to fetch.
     * 
    **/
    orderBy?: Enumerable<FollowerOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: FollowerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Followers from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Followers.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Followers
    **/
    _count?: true | FollowerCountAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_count`
    **/
    count?: true | FollowerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FollowerAvgAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_avg`
    **/
    avg?: FollowerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FollowerSumAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_sum`
    **/
    sum?: FollowerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FollowerMinAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_min`
    **/
    min?: FollowerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FollowerMaxAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_max`
    **/
    max?: FollowerMaxAggregateInputType
  }

  export type GetFollowerAggregateType<T extends FollowerAggregateArgs> = {
        [P in keyof T & keyof AggregateFollower]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFollower[P]>
      : GetScalarType<T[P], AggregateFollower[P]>
  }


    
    
  export type FollowerGroupByArgs = {
    where?: FollowerWhereInput
    orderBy?: Enumerable<FollowerOrderByInput>
    by: Array<FollowerScalarFieldEnum>
    having?: FollowerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FollowerCountAggregateInputType | true
    _avg?: FollowerAvgAggregateInputType
    _sum?: FollowerSumAggregateInputType
    _min?: FollowerMinAggregateInputType
    _max?: FollowerMaxAggregateInputType
  }


  export type FollowerGroupByOutputType = {
    followerId: number
    followingId: number
    createdAt: Date
    updatedAt: Date
    _count: FollowerCountAggregateOutputType | null
    _avg: FollowerAvgAggregateOutputType | null
    _sum: FollowerSumAggregateOutputType | null
    _min: FollowerMinAggregateOutputType | null
    _max: FollowerMaxAggregateOutputType | null
  }

  type GetFollowerGroupByPayload<T extends FollowerGroupByArgs> = Promise<
    Array<
      PickArray<FollowerGroupByOutputType, T['by']> & 
        {
          [P in ((keyof T) & (keyof FollowerGroupByOutputType))]: P extends '_count' 
            ? T[P] extends boolean 
              ? number 
              : GetScalarType<T[P], FollowerGroupByOutputType[P]> 
            : GetScalarType<T[P], FollowerGroupByOutputType[P]>
        }
      > 
    >


  export type FollowerSelect = {
    followerId?: boolean
    followingId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    follower?: boolean | UserArgs
    following?: boolean | UserArgs
  }

  export type FollowerInclude = {
    follower?: boolean | UserArgs
    following?: boolean | UserArgs
  }

  export type FollowerGetPayload<
    S extends boolean | null | undefined | FollowerArgs,
    U = keyof S
      > = S extends true
        ? Follower
    : S extends undefined
    ? never
    : S extends FollowerArgs | FollowerFindManyArgs
    ?'include' extends U
    ? Follower  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'follower'
        ? UserGetPayload<S['include'][P]> :
        P extends 'following'
        ? UserGetPayload<S['include'][P]> : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof Follower ?Follower [P]
  : 
          P extends 'follower'
        ? UserGetPayload<S['select'][P]> :
        P extends 'following'
        ? UserGetPayload<S['select'][P]> : never
  } 
    : Follower
  : Follower


  type FollowerCountArgs = Merge<
    Omit<FollowerFindManyArgs, 'select' | 'include'> & {
      select?: FollowerCountAggregateInputType | true
    }
  >

  export interface FollowerDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Follower that matches the filter.
     * @param {FollowerFindUniqueArgs} args - Arguments to find a Follower
     * @example
     * // Get one Follower
     * const follower = await prisma.follower.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends FollowerFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, FollowerFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Follower'> extends True ? CheckSelect<T, Prisma__FollowerClient<Follower>, Prisma__FollowerClient<FollowerGetPayload<T>>> : CheckSelect<T, Prisma__FollowerClient<Follower | null >, Prisma__FollowerClient<FollowerGetPayload<T> | null >>

    /**
     * Find the first Follower that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowerFindFirstArgs} args - Arguments to find a Follower
     * @example
     * // Get one Follower
     * const follower = await prisma.follower.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends FollowerFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, FollowerFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Follower'> extends True ? CheckSelect<T, Prisma__FollowerClient<Follower>, Prisma__FollowerClient<FollowerGetPayload<T>>> : CheckSelect<T, Prisma__FollowerClient<Follower | null >, Prisma__FollowerClient<FollowerGetPayload<T> | null >>

    /**
     * Find zero or more Followers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowerFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Followers
     * const followers = await prisma.follower.findMany()
     * 
     * // Get first 10 Followers
     * const followers = await prisma.follower.findMany({ take: 10 })
     * 
     * // Only select the `followerId`
     * const followerWithFollowerIdOnly = await prisma.follower.findMany({ select: { followerId: true } })
     * 
    **/
    findMany<T extends FollowerFindManyArgs>(
      args?: SelectSubset<T, FollowerFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Follower>>, PrismaPromise<Array<FollowerGetPayload<T>>>>

    /**
     * Create a Follower.
     * @param {FollowerCreateArgs} args - Arguments to create a Follower.
     * @example
     * // Create one Follower
     * const Follower = await prisma.follower.create({
     *   data: {
     *     // ... data to create a Follower
     *   }
     * })
     * 
    **/
    create<T extends FollowerCreateArgs>(
      args: SelectSubset<T, FollowerCreateArgs>
    ): CheckSelect<T, Prisma__FollowerClient<Follower>, Prisma__FollowerClient<FollowerGetPayload<T>>>

    /**
     * Create many Followers.
     *     @param {FollowerCreateManyArgs} args - Arguments to create many Followers.
     *     @example
     *     // Create many Followers
     *     const follower = await prisma.follower.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends FollowerCreateManyArgs>(
      args?: SelectSubset<T, FollowerCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Follower.
     * @param {FollowerDeleteArgs} args - Arguments to delete one Follower.
     * @example
     * // Delete one Follower
     * const Follower = await prisma.follower.delete({
     *   where: {
     *     // ... filter to delete one Follower
     *   }
     * })
     * 
    **/
    delete<T extends FollowerDeleteArgs>(
      args: SelectSubset<T, FollowerDeleteArgs>
    ): CheckSelect<T, Prisma__FollowerClient<Follower>, Prisma__FollowerClient<FollowerGetPayload<T>>>

    /**
     * Update one Follower.
     * @param {FollowerUpdateArgs} args - Arguments to update one Follower.
     * @example
     * // Update one Follower
     * const follower = await prisma.follower.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends FollowerUpdateArgs>(
      args: SelectSubset<T, FollowerUpdateArgs>
    ): CheckSelect<T, Prisma__FollowerClient<Follower>, Prisma__FollowerClient<FollowerGetPayload<T>>>

    /**
     * Delete zero or more Followers.
     * @param {FollowerDeleteManyArgs} args - Arguments to filter Followers to delete.
     * @example
     * // Delete a few Followers
     * const { count } = await prisma.follower.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends FollowerDeleteManyArgs>(
      args?: SelectSubset<T, FollowerDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Followers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Followers
     * const follower = await prisma.follower.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends FollowerUpdateManyArgs>(
      args: SelectSubset<T, FollowerUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Follower.
     * @param {FollowerUpsertArgs} args - Arguments to update or create a Follower.
     * @example
     * // Update or create a Follower
     * const follower = await prisma.follower.upsert({
     *   create: {
     *     // ... data to create a Follower
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Follower we want to update
     *   }
     * })
    **/
    upsert<T extends FollowerUpsertArgs>(
      args: SelectSubset<T, FollowerUpsertArgs>
    ): CheckSelect<T, Prisma__FollowerClient<Follower>, Prisma__FollowerClient<FollowerGetPayload<T>>>

    /**
     * Count the number of Followers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowerCountArgs} args - Arguments to filter Followers to count.
     * @example
     * // Count the number of Followers
     * const count = await prisma.follower.count({
     *   where: {
     *     // ... the filter for the Followers we want to count
     *   }
     * })
    **/
    count<T extends FollowerCountArgs>(
      args?: Subset<T, FollowerCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FollowerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Follower.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FollowerAggregateArgs>(args: Subset<T, FollowerAggregateArgs>): PrismaPromise<GetFollowerAggregateType<T>>

    /**
     * Group by Follower.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FollowerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FollowerGroupByArgs['orderBy'] }
        : { orderBy?: FollowerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FollowerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFollowerGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Follower.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__FollowerClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    follower<T extends UserArgs = {}>(args?: Subset<T, UserArgs>): CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>;

    following<T extends UserArgs = {}>(args?: Subset<T, UserArgs>): CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Follower findUnique
   */
  export type FollowerFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Follower
     * 
    **/
    select?: FollowerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FollowerInclude | null
    /**
     * Throw an Error if a Follower can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Follower to fetch.
     * 
    **/
    where: FollowerWhereUniqueInput
  }


  /**
   * Follower findFirst
   */
  export type FollowerFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Follower
     * 
    **/
    select?: FollowerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FollowerInclude | null
    /**
     * Throw an Error if a Follower can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Follower to fetch.
     * 
    **/
    where?: FollowerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Followers to fetch.
     * 
    **/
    orderBy?: Enumerable<FollowerOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Followers.
     * 
    **/
    cursor?: FollowerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Followers from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Followers.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Followers.
     * 
    **/
    distinct?: Enumerable<FollowerScalarFieldEnum>
  }


  /**
   * Follower findMany
   */
  export type FollowerFindManyArgs = {
    /**
     * Select specific fields to fetch from the Follower
     * 
    **/
    select?: FollowerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FollowerInclude | null
    /**
     * Filter, which Followers to fetch.
     * 
    **/
    where?: FollowerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Followers to fetch.
     * 
    **/
    orderBy?: Enumerable<FollowerOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Followers.
     * 
    **/
    cursor?: FollowerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Followers from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Followers.
     * 
    **/
    skip?: number
    distinct?: Enumerable<FollowerScalarFieldEnum>
  }


  /**
   * Follower create
   */
  export type FollowerCreateArgs = {
    /**
     * Select specific fields to fetch from the Follower
     * 
    **/
    select?: FollowerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FollowerInclude | null
    /**
     * The data needed to create a Follower.
     * 
    **/
    data: XOR<FollowerCreateInput, FollowerUncheckedCreateInput>
  }


  /**
   * Follower createMany
   */
  export type FollowerCreateManyArgs = {
    data: Enumerable<FollowerCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Follower update
   */
  export type FollowerUpdateArgs = {
    /**
     * Select specific fields to fetch from the Follower
     * 
    **/
    select?: FollowerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FollowerInclude | null
    /**
     * The data needed to update a Follower.
     * 
    **/
    data: XOR<FollowerUpdateInput, FollowerUncheckedUpdateInput>
    /**
     * Choose, which Follower to update.
     * 
    **/
    where: FollowerWhereUniqueInput
  }


  /**
   * Follower updateMany
   */
  export type FollowerUpdateManyArgs = {
    data: XOR<FollowerUpdateManyMutationInput, FollowerUncheckedUpdateManyInput>
    where?: FollowerWhereInput
  }


  /**
   * Follower upsert
   */
  export type FollowerUpsertArgs = {
    /**
     * Select specific fields to fetch from the Follower
     * 
    **/
    select?: FollowerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FollowerInclude | null
    /**
     * The filter to search for the Follower to update in case it exists.
     * 
    **/
    where: FollowerWhereUniqueInput
    /**
     * In case the Follower found by the `where` argument doesn't exist, create a new Follower with this data.
     * 
    **/
    create: XOR<FollowerCreateInput, FollowerUncheckedCreateInput>
    /**
     * In case the Follower was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<FollowerUpdateInput, FollowerUncheckedUpdateInput>
  }


  /**
   * Follower delete
   */
  export type FollowerDeleteArgs = {
    /**
     * Select specific fields to fetch from the Follower
     * 
    **/
    select?: FollowerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FollowerInclude | null
    /**
     * Filter which Follower to delete.
     * 
    **/
    where: FollowerWhereUniqueInput
  }


  /**
   * Follower deleteMany
   */
  export type FollowerDeleteManyArgs = {
    where?: FollowerWhereInput
  }


  /**
   * Follower without action
   */
  export type FollowerArgs = {
    /**
     * Select specific fields to fetch from the Follower
     * 
    **/
    select?: FollowerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FollowerInclude | null
  }



  /**
   * Model Verification
   */


  export type AggregateVerification = {
    _count: VerificationCountAggregateOutputType | null
    count: VerificationCountAggregateOutputType | null
    _avg: VerificationAvgAggregateOutputType | null
    avg: VerificationAvgAggregateOutputType | null
    _sum: VerificationSumAggregateOutputType | null
    sum: VerificationSumAggregateOutputType | null
    _min: VerificationMinAggregateOutputType | null
    min: VerificationMinAggregateOutputType | null
    _max: VerificationMaxAggregateOutputType | null
    max: VerificationMaxAggregateOutputType | null
  }

  export type VerificationAvgAggregateOutputType = {
    id: number | null
  }

  export type VerificationSumAggregateOutputType = {
    id: number | null
  }

  export type VerificationMinAggregateOutputType = {
    id: number | null
    code: string | null
    token: string | null
    captcha: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VerificationMaxAggregateOutputType = {
    id: number | null
    code: string | null
    token: string | null
    captcha: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VerificationCountAggregateOutputType = {
    id: number
    code: number
    token: number
    captcha: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type VerificationAvgAggregateInputType = {
    id?: true
  }

  export type VerificationSumAggregateInputType = {
    id?: true
  }

  export type VerificationMinAggregateInputType = {
    id?: true
    code?: true
    token?: true
    captcha?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VerificationMaxAggregateInputType = {
    id?: true
    code?: true
    token?: true
    captcha?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VerificationCountAggregateInputType = {
    id?: true
    code?: true
    token?: true
    captcha?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type VerificationAggregateArgs = {
    /**
     * Filter which Verification to aggregate.
     * 
    **/
    where?: VerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Verifications to fetch.
     * 
    **/
    orderBy?: Enumerable<VerificationOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: VerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Verifications from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Verifications.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Verifications
    **/
    _count?: true | VerificationCountAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_count`
    **/
    count?: true | VerificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VerificationAvgAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_avg`
    **/
    avg?: VerificationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VerificationSumAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_sum`
    **/
    sum?: VerificationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VerificationMinAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_min`
    **/
    min?: VerificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VerificationMaxAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_max`
    **/
    max?: VerificationMaxAggregateInputType
  }

  export type GetVerificationAggregateType<T extends VerificationAggregateArgs> = {
        [P in keyof T & keyof AggregateVerification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVerification[P]>
      : GetScalarType<T[P], AggregateVerification[P]>
  }


    
    
  export type VerificationGroupByArgs = {
    where?: VerificationWhereInput
    orderBy?: Enumerable<VerificationOrderByInput>
    by: Array<VerificationScalarFieldEnum>
    having?: VerificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VerificationCountAggregateInputType | true
    _avg?: VerificationAvgAggregateInputType
    _sum?: VerificationSumAggregateInputType
    _min?: VerificationMinAggregateInputType
    _max?: VerificationMaxAggregateInputType
  }


  export type VerificationGroupByOutputType = {
    id: number
    code: string
    token: string
    captcha: string | null
    createdAt: Date
    updatedAt: Date
    _count: VerificationCountAggregateOutputType | null
    _avg: VerificationAvgAggregateOutputType | null
    _sum: VerificationSumAggregateOutputType | null
    _min: VerificationMinAggregateOutputType | null
    _max: VerificationMaxAggregateOutputType | null
  }

  type GetVerificationGroupByPayload<T extends VerificationGroupByArgs> = Promise<
    Array<
      PickArray<VerificationGroupByOutputType, T['by']> & 
        {
          [P in ((keyof T) & (keyof VerificationGroupByOutputType))]: P extends '_count' 
            ? T[P] extends boolean 
              ? number 
              : GetScalarType<T[P], VerificationGroupByOutputType[P]> 
            : GetScalarType<T[P], VerificationGroupByOutputType[P]>
        }
      > 
    >


  export type VerificationSelect = {
    id?: boolean
    code?: boolean
    token?: boolean
    captcha?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type VerificationGetPayload<
    S extends boolean | null | undefined | VerificationArgs,
    U = keyof S
      > = S extends true
        ? Verification
    : S extends undefined
    ? never
    : S extends VerificationArgs | VerificationFindManyArgs
    ?'include' extends U
    ? Verification 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof Verification ?Verification [P]
  : 
     never
  } 
    : Verification
  : Verification


  type VerificationCountArgs = Merge<
    Omit<VerificationFindManyArgs, 'select' | 'include'> & {
      select?: VerificationCountAggregateInputType | true
    }
  >

  export interface VerificationDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Verification that matches the filter.
     * @param {VerificationFindUniqueArgs} args - Arguments to find a Verification
     * @example
     * // Get one Verification
     * const verification = await prisma.verification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends VerificationFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, VerificationFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Verification'> extends True ? CheckSelect<T, Prisma__VerificationClient<Verification>, Prisma__VerificationClient<VerificationGetPayload<T>>> : CheckSelect<T, Prisma__VerificationClient<Verification | null >, Prisma__VerificationClient<VerificationGetPayload<T> | null >>

    /**
     * Find the first Verification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationFindFirstArgs} args - Arguments to find a Verification
     * @example
     * // Get one Verification
     * const verification = await prisma.verification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends VerificationFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, VerificationFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Verification'> extends True ? CheckSelect<T, Prisma__VerificationClient<Verification>, Prisma__VerificationClient<VerificationGetPayload<T>>> : CheckSelect<T, Prisma__VerificationClient<Verification | null >, Prisma__VerificationClient<VerificationGetPayload<T> | null >>

    /**
     * Find zero or more Verifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Verifications
     * const verifications = await prisma.verification.findMany()
     * 
     * // Get first 10 Verifications
     * const verifications = await prisma.verification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const verificationWithIdOnly = await prisma.verification.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends VerificationFindManyArgs>(
      args?: SelectSubset<T, VerificationFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Verification>>, PrismaPromise<Array<VerificationGetPayload<T>>>>

    /**
     * Create a Verification.
     * @param {VerificationCreateArgs} args - Arguments to create a Verification.
     * @example
     * // Create one Verification
     * const Verification = await prisma.verification.create({
     *   data: {
     *     // ... data to create a Verification
     *   }
     * })
     * 
    **/
    create<T extends VerificationCreateArgs>(
      args: SelectSubset<T, VerificationCreateArgs>
    ): CheckSelect<T, Prisma__VerificationClient<Verification>, Prisma__VerificationClient<VerificationGetPayload<T>>>

    /**
     * Create many Verifications.
     *     @param {VerificationCreateManyArgs} args - Arguments to create many Verifications.
     *     @example
     *     // Create many Verifications
     *     const verification = await prisma.verification.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends VerificationCreateManyArgs>(
      args?: SelectSubset<T, VerificationCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Verification.
     * @param {VerificationDeleteArgs} args - Arguments to delete one Verification.
     * @example
     * // Delete one Verification
     * const Verification = await prisma.verification.delete({
     *   where: {
     *     // ... filter to delete one Verification
     *   }
     * })
     * 
    **/
    delete<T extends VerificationDeleteArgs>(
      args: SelectSubset<T, VerificationDeleteArgs>
    ): CheckSelect<T, Prisma__VerificationClient<Verification>, Prisma__VerificationClient<VerificationGetPayload<T>>>

    /**
     * Update one Verification.
     * @param {VerificationUpdateArgs} args - Arguments to update one Verification.
     * @example
     * // Update one Verification
     * const verification = await prisma.verification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends VerificationUpdateArgs>(
      args: SelectSubset<T, VerificationUpdateArgs>
    ): CheckSelect<T, Prisma__VerificationClient<Verification>, Prisma__VerificationClient<VerificationGetPayload<T>>>

    /**
     * Delete zero or more Verifications.
     * @param {VerificationDeleteManyArgs} args - Arguments to filter Verifications to delete.
     * @example
     * // Delete a few Verifications
     * const { count } = await prisma.verification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends VerificationDeleteManyArgs>(
      args?: SelectSubset<T, VerificationDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Verifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Verifications
     * const verification = await prisma.verification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends VerificationUpdateManyArgs>(
      args: SelectSubset<T, VerificationUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Verification.
     * @param {VerificationUpsertArgs} args - Arguments to update or create a Verification.
     * @example
     * // Update or create a Verification
     * const verification = await prisma.verification.upsert({
     *   create: {
     *     // ... data to create a Verification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Verification we want to update
     *   }
     * })
    **/
    upsert<T extends VerificationUpsertArgs>(
      args: SelectSubset<T, VerificationUpsertArgs>
    ): CheckSelect<T, Prisma__VerificationClient<Verification>, Prisma__VerificationClient<VerificationGetPayload<T>>>

    /**
     * Count the number of Verifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationCountArgs} args - Arguments to filter Verifications to count.
     * @example
     * // Count the number of Verifications
     * const count = await prisma.verification.count({
     *   where: {
     *     // ... the filter for the Verifications we want to count
     *   }
     * })
    **/
    count<T extends VerificationCountArgs>(
      args?: Subset<T, VerificationCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VerificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Verification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VerificationAggregateArgs>(args: Subset<T, VerificationAggregateArgs>): PrismaPromise<GetVerificationAggregateType<T>>

    /**
     * Group by Verification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VerificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VerificationGroupByArgs['orderBy'] }
        : { orderBy?: VerificationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VerificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVerificationGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Verification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__VerificationClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Verification findUnique
   */
  export type VerificationFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Verification
     * 
    **/
    select?: VerificationSelect | null
    /**
     * Throw an Error if a Verification can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Verification to fetch.
     * 
    **/
    where: VerificationWhereUniqueInput
  }


  /**
   * Verification findFirst
   */
  export type VerificationFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Verification
     * 
    **/
    select?: VerificationSelect | null
    /**
     * Throw an Error if a Verification can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Verification to fetch.
     * 
    **/
    where?: VerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Verifications to fetch.
     * 
    **/
    orderBy?: Enumerable<VerificationOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Verifications.
     * 
    **/
    cursor?: VerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Verifications from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Verifications.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Verifications.
     * 
    **/
    distinct?: Enumerable<VerificationScalarFieldEnum>
  }


  /**
   * Verification findMany
   */
  export type VerificationFindManyArgs = {
    /**
     * Select specific fields to fetch from the Verification
     * 
    **/
    select?: VerificationSelect | null
    /**
     * Filter, which Verifications to fetch.
     * 
    **/
    where?: VerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Verifications to fetch.
     * 
    **/
    orderBy?: Enumerable<VerificationOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Verifications.
     * 
    **/
    cursor?: VerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Verifications from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Verifications.
     * 
    **/
    skip?: number
    distinct?: Enumerable<VerificationScalarFieldEnum>
  }


  /**
   * Verification create
   */
  export type VerificationCreateArgs = {
    /**
     * Select specific fields to fetch from the Verification
     * 
    **/
    select?: VerificationSelect | null
    /**
     * The data needed to create a Verification.
     * 
    **/
    data: XOR<VerificationCreateInput, VerificationUncheckedCreateInput>
  }


  /**
   * Verification createMany
   */
  export type VerificationCreateManyArgs = {
    data: Enumerable<VerificationCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Verification update
   */
  export type VerificationUpdateArgs = {
    /**
     * Select specific fields to fetch from the Verification
     * 
    **/
    select?: VerificationSelect | null
    /**
     * The data needed to update a Verification.
     * 
    **/
    data: XOR<VerificationUpdateInput, VerificationUncheckedUpdateInput>
    /**
     * Choose, which Verification to update.
     * 
    **/
    where: VerificationWhereUniqueInput
  }


  /**
   * Verification updateMany
   */
  export type VerificationUpdateManyArgs = {
    data: XOR<VerificationUpdateManyMutationInput, VerificationUncheckedUpdateManyInput>
    where?: VerificationWhereInput
  }


  /**
   * Verification upsert
   */
  export type VerificationUpsertArgs = {
    /**
     * Select specific fields to fetch from the Verification
     * 
    **/
    select?: VerificationSelect | null
    /**
     * The filter to search for the Verification to update in case it exists.
     * 
    **/
    where: VerificationWhereUniqueInput
    /**
     * In case the Verification found by the `where` argument doesn't exist, create a new Verification with this data.
     * 
    **/
    create: XOR<VerificationCreateInput, VerificationUncheckedCreateInput>
    /**
     * In case the Verification was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<VerificationUpdateInput, VerificationUncheckedUpdateInput>
  }


  /**
   * Verification delete
   */
  export type VerificationDeleteArgs = {
    /**
     * Select specific fields to fetch from the Verification
     * 
    **/
    select?: VerificationSelect | null
    /**
     * Filter which Verification to delete.
     * 
    **/
    where: VerificationWhereUniqueInput
  }


  /**
   * Verification deleteMany
   */
  export type VerificationDeleteManyArgs = {
    where?: VerificationWhereInput
  }


  /**
   * Verification without action
   */
  export type VerificationArgs = {
    /**
     * Select specific fields to fetch from the Verification
     * 
    **/
    select?: VerificationSelect | null
  }



  /**
   * Model Ip
   */


  export type AggregateIp = {
    _count: IpCountAggregateOutputType | null
    count: IpCountAggregateOutputType | null
    _min: IpMinAggregateOutputType | null
    min: IpMinAggregateOutputType | null
    _max: IpMaxAggregateOutputType | null
    max: IpMaxAggregateOutputType | null
  }

  export type IpMinAggregateOutputType = {
    ip: string | null
  }

  export type IpMaxAggregateOutputType = {
    ip: string | null
  }

  export type IpCountAggregateOutputType = {
    ip: number
    _all: number
  }


  export type IpMinAggregateInputType = {
    ip?: true
  }

  export type IpMaxAggregateInputType = {
    ip?: true
  }

  export type IpCountAggregateInputType = {
    ip?: true
    _all?: true
  }

  export type IpAggregateArgs = {
    /**
     * Filter which Ip to aggregate.
     * 
    **/
    where?: IpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ips to fetch.
     * 
    **/
    orderBy?: Enumerable<IpOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: IpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ips from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ips.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Ips
    **/
    _count?: true | IpCountAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_count`
    **/
    count?: true | IpCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IpMinAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_min`
    **/
    min?: IpMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IpMaxAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_max`
    **/
    max?: IpMaxAggregateInputType
  }

  export type GetIpAggregateType<T extends IpAggregateArgs> = {
        [P in keyof T & keyof AggregateIp]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIp[P]>
      : GetScalarType<T[P], AggregateIp[P]>
  }


    
    
  export type IpGroupByArgs = {
    where?: IpWhereInput
    orderBy?: Enumerable<IpOrderByInput>
    by: Array<IpScalarFieldEnum>
    having?: IpScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IpCountAggregateInputType | true
    _min?: IpMinAggregateInputType
    _max?: IpMaxAggregateInputType
  }


  export type IpGroupByOutputType = {
    ip: string
    _count: IpCountAggregateOutputType | null
    _min: IpMinAggregateOutputType | null
    _max: IpMaxAggregateOutputType | null
  }

  type GetIpGroupByPayload<T extends IpGroupByArgs> = Promise<
    Array<
      PickArray<IpGroupByOutputType, T['by']> & 
        {
          [P in ((keyof T) & (keyof IpGroupByOutputType))]: P extends '_count' 
            ? T[P] extends boolean 
              ? number 
              : GetScalarType<T[P], IpGroupByOutputType[P]> 
            : GetScalarType<T[P], IpGroupByOutputType[P]>
        }
      > 
    >


  export type IpSelect = {
    ip?: boolean
  }

  export type IpGetPayload<
    S extends boolean | null | undefined | IpArgs,
    U = keyof S
      > = S extends true
        ? Ip
    : S extends undefined
    ? never
    : S extends IpArgs | IpFindManyArgs
    ?'include' extends U
    ? Ip 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof Ip ?Ip [P]
  : 
     never
  } 
    : Ip
  : Ip


  type IpCountArgs = Merge<
    Omit<IpFindManyArgs, 'select' | 'include'> & {
      select?: IpCountAggregateInputType | true
    }
  >

  export interface IpDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Ip that matches the filter.
     * @param {IpFindUniqueArgs} args - Arguments to find a Ip
     * @example
     * // Get one Ip
     * const ip = await prisma.ip.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends IpFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, IpFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Ip'> extends True ? CheckSelect<T, Prisma__IpClient<Ip>, Prisma__IpClient<IpGetPayload<T>>> : CheckSelect<T, Prisma__IpClient<Ip | null >, Prisma__IpClient<IpGetPayload<T> | null >>

    /**
     * Find the first Ip that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IpFindFirstArgs} args - Arguments to find a Ip
     * @example
     * // Get one Ip
     * const ip = await prisma.ip.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends IpFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, IpFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Ip'> extends True ? CheckSelect<T, Prisma__IpClient<Ip>, Prisma__IpClient<IpGetPayload<T>>> : CheckSelect<T, Prisma__IpClient<Ip | null >, Prisma__IpClient<IpGetPayload<T> | null >>

    /**
     * Find zero or more Ips that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IpFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ips
     * const ips = await prisma.ip.findMany()
     * 
     * // Get first 10 Ips
     * const ips = await prisma.ip.findMany({ take: 10 })
     * 
     * // Only select the `ip`
     * const ipWithIpOnly = await prisma.ip.findMany({ select: { ip: true } })
     * 
    **/
    findMany<T extends IpFindManyArgs>(
      args?: SelectSubset<T, IpFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Ip>>, PrismaPromise<Array<IpGetPayload<T>>>>

    /**
     * Create a Ip.
     * @param {IpCreateArgs} args - Arguments to create a Ip.
     * @example
     * // Create one Ip
     * const Ip = await prisma.ip.create({
     *   data: {
     *     // ... data to create a Ip
     *   }
     * })
     * 
    **/
    create<T extends IpCreateArgs>(
      args: SelectSubset<T, IpCreateArgs>
    ): CheckSelect<T, Prisma__IpClient<Ip>, Prisma__IpClient<IpGetPayload<T>>>

    /**
     * Create many Ips.
     *     @param {IpCreateManyArgs} args - Arguments to create many Ips.
     *     @example
     *     // Create many Ips
     *     const ip = await prisma.ip.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends IpCreateManyArgs>(
      args?: SelectSubset<T, IpCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Ip.
     * @param {IpDeleteArgs} args - Arguments to delete one Ip.
     * @example
     * // Delete one Ip
     * const Ip = await prisma.ip.delete({
     *   where: {
     *     // ... filter to delete one Ip
     *   }
     * })
     * 
    **/
    delete<T extends IpDeleteArgs>(
      args: SelectSubset<T, IpDeleteArgs>
    ): CheckSelect<T, Prisma__IpClient<Ip>, Prisma__IpClient<IpGetPayload<T>>>

    /**
     * Update one Ip.
     * @param {IpUpdateArgs} args - Arguments to update one Ip.
     * @example
     * // Update one Ip
     * const ip = await prisma.ip.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends IpUpdateArgs>(
      args: SelectSubset<T, IpUpdateArgs>
    ): CheckSelect<T, Prisma__IpClient<Ip>, Prisma__IpClient<IpGetPayload<T>>>

    /**
     * Delete zero or more Ips.
     * @param {IpDeleteManyArgs} args - Arguments to filter Ips to delete.
     * @example
     * // Delete a few Ips
     * const { count } = await prisma.ip.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends IpDeleteManyArgs>(
      args?: SelectSubset<T, IpDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ips.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IpUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ips
     * const ip = await prisma.ip.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends IpUpdateManyArgs>(
      args: SelectSubset<T, IpUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Ip.
     * @param {IpUpsertArgs} args - Arguments to update or create a Ip.
     * @example
     * // Update or create a Ip
     * const ip = await prisma.ip.upsert({
     *   create: {
     *     // ... data to create a Ip
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ip we want to update
     *   }
     * })
    **/
    upsert<T extends IpUpsertArgs>(
      args: SelectSubset<T, IpUpsertArgs>
    ): CheckSelect<T, Prisma__IpClient<Ip>, Prisma__IpClient<IpGetPayload<T>>>

    /**
     * Count the number of Ips.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IpCountArgs} args - Arguments to filter Ips to count.
     * @example
     * // Count the number of Ips
     * const count = await prisma.ip.count({
     *   where: {
     *     // ... the filter for the Ips we want to count
     *   }
     * })
    **/
    count<T extends IpCountArgs>(
      args?: Subset<T, IpCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IpCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ip.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IpAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends IpAggregateArgs>(args: Subset<T, IpAggregateArgs>): PrismaPromise<GetIpAggregateType<T>>

    /**
     * Group by Ip.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IpGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends IpGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: IpGroupByArgs['orderBy'] }
        : { orderBy?: IpGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, IpGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIpGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Ip.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__IpClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Ip findUnique
   */
  export type IpFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Ip
     * 
    **/
    select?: IpSelect | null
    /**
     * Throw an Error if a Ip can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Ip to fetch.
     * 
    **/
    where: IpWhereUniqueInput
  }


  /**
   * Ip findFirst
   */
  export type IpFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Ip
     * 
    **/
    select?: IpSelect | null
    /**
     * Throw an Error if a Ip can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Ip to fetch.
     * 
    **/
    where?: IpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ips to fetch.
     * 
    **/
    orderBy?: Enumerable<IpOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ips.
     * 
    **/
    cursor?: IpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ips from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ips.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ips.
     * 
    **/
    distinct?: Enumerable<IpScalarFieldEnum>
  }


  /**
   * Ip findMany
   */
  export type IpFindManyArgs = {
    /**
     * Select specific fields to fetch from the Ip
     * 
    **/
    select?: IpSelect | null
    /**
     * Filter, which Ips to fetch.
     * 
    **/
    where?: IpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ips to fetch.
     * 
    **/
    orderBy?: Enumerable<IpOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Ips.
     * 
    **/
    cursor?: IpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ips from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ips.
     * 
    **/
    skip?: number
    distinct?: Enumerable<IpScalarFieldEnum>
  }


  /**
   * Ip create
   */
  export type IpCreateArgs = {
    /**
     * Select specific fields to fetch from the Ip
     * 
    **/
    select?: IpSelect | null
    /**
     * The data needed to create a Ip.
     * 
    **/
    data: XOR<IpCreateInput, IpUncheckedCreateInput>
  }


  /**
   * Ip createMany
   */
  export type IpCreateManyArgs = {
    data: Enumerable<IpCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Ip update
   */
  export type IpUpdateArgs = {
    /**
     * Select specific fields to fetch from the Ip
     * 
    **/
    select?: IpSelect | null
    /**
     * The data needed to update a Ip.
     * 
    **/
    data: XOR<IpUpdateInput, IpUncheckedUpdateInput>
    /**
     * Choose, which Ip to update.
     * 
    **/
    where: IpWhereUniqueInput
  }


  /**
   * Ip updateMany
   */
  export type IpUpdateManyArgs = {
    data: XOR<IpUpdateManyMutationInput, IpUncheckedUpdateManyInput>
    where?: IpWhereInput
  }


  /**
   * Ip upsert
   */
  export type IpUpsertArgs = {
    /**
     * Select specific fields to fetch from the Ip
     * 
    **/
    select?: IpSelect | null
    /**
     * The filter to search for the Ip to update in case it exists.
     * 
    **/
    where: IpWhereUniqueInput
    /**
     * In case the Ip found by the `where` argument doesn't exist, create a new Ip with this data.
     * 
    **/
    create: XOR<IpCreateInput, IpUncheckedCreateInput>
    /**
     * In case the Ip was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<IpUpdateInput, IpUncheckedUpdateInput>
  }


  /**
   * Ip delete
   */
  export type IpDeleteArgs = {
    /**
     * Select specific fields to fetch from the Ip
     * 
    **/
    select?: IpSelect | null
    /**
     * Filter which Ip to delete.
     * 
    **/
    where: IpWhereUniqueInput
  }


  /**
   * Ip deleteMany
   */
  export type IpDeleteManyArgs = {
    where?: IpWhereInput
  }


  /**
   * Ip without action
   */
  export type IpArgs = {
    /**
     * Select specific fields to fetch from the Ip
     * 
    **/
    select?: IpSelect | null
  }



  /**
   * Model View
   */


  export type AggregateView = {
    _count: ViewCountAggregateOutputType | null
    count: ViewCountAggregateOutputType | null
    _avg: ViewAvgAggregateOutputType | null
    avg: ViewAvgAggregateOutputType | null
    _sum: ViewSumAggregateOutputType | null
    sum: ViewSumAggregateOutputType | null
    _min: ViewMinAggregateOutputType | null
    min: ViewMinAggregateOutputType | null
    _max: ViewMaxAggregateOutputType | null
    max: ViewMaxAggregateOutputType | null
  }

  export type ViewAvgAggregateOutputType = {
    id: number | null
  }

  export type ViewSumAggregateOutputType = {
    id: number | null
  }

  export type ViewMinAggregateOutputType = {
    id: number | null
    ip: string | null
    url: string | null
    bid: string | null
    area: string | null
    createdAt: Date | null
    updatedAt: Date | null
    ua: string | null
  }

  export type ViewMaxAggregateOutputType = {
    id: number | null
    ip: string | null
    url: string | null
    bid: string | null
    area: string | null
    createdAt: Date | null
    updatedAt: Date | null
    ua: string | null
  }

  export type ViewCountAggregateOutputType = {
    id: number
    ip: number
    url: number
    bid: number
    area: number
    areaInfo: number
    createdAt: number
    updatedAt: number
    ua: number
    _all: number
  }


  export type ViewAvgAggregateInputType = {
    id?: true
  }

  export type ViewSumAggregateInputType = {
    id?: true
  }

  export type ViewMinAggregateInputType = {
    id?: true
    ip?: true
    url?: true
    bid?: true
    area?: true
    createdAt?: true
    updatedAt?: true
    ua?: true
  }

  export type ViewMaxAggregateInputType = {
    id?: true
    ip?: true
    url?: true
    bid?: true
    area?: true
    createdAt?: true
    updatedAt?: true
    ua?: true
  }

  export type ViewCountAggregateInputType = {
    id?: true
    ip?: true
    url?: true
    bid?: true
    area?: true
    areaInfo?: true
    createdAt?: true
    updatedAt?: true
    ua?: true
    _all?: true
  }

  export type ViewAggregateArgs = {
    /**
     * Filter which View to aggregate.
     * 
    **/
    where?: ViewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Views to fetch.
     * 
    **/
    orderBy?: Enumerable<ViewOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: ViewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Views from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Views.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Views
    **/
    _count?: true | ViewCountAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_count`
    **/
    count?: true | ViewCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ViewAvgAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_avg`
    **/
    avg?: ViewAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ViewSumAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_sum`
    **/
    sum?: ViewSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ViewMinAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_min`
    **/
    min?: ViewMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ViewMaxAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_max`
    **/
    max?: ViewMaxAggregateInputType
  }

  export type GetViewAggregateType<T extends ViewAggregateArgs> = {
        [P in keyof T & keyof AggregateView]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateView[P]>
      : GetScalarType<T[P], AggregateView[P]>
  }


    
    
  export type ViewGroupByArgs = {
    where?: ViewWhereInput
    orderBy?: Enumerable<ViewOrderByInput>
    by: Array<ViewScalarFieldEnum>
    having?: ViewScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ViewCountAggregateInputType | true
    _avg?: ViewAvgAggregateInputType
    _sum?: ViewSumAggregateInputType
    _min?: ViewMinAggregateInputType
    _max?: ViewMaxAggregateInputType
  }


  export type ViewGroupByOutputType = {
    id: number
    ip: string
    url: string
    bid: string | null
    area: string | null
    areaInfo: JsonValue
    createdAt: Date
    updatedAt: Date
    ua: string | null
    _count: ViewCountAggregateOutputType | null
    _avg: ViewAvgAggregateOutputType | null
    _sum: ViewSumAggregateOutputType | null
    _min: ViewMinAggregateOutputType | null
    _max: ViewMaxAggregateOutputType | null
  }

  type GetViewGroupByPayload<T extends ViewGroupByArgs> = Promise<
    Array<
      PickArray<ViewGroupByOutputType, T['by']> & 
        {
          [P in ((keyof T) & (keyof ViewGroupByOutputType))]: P extends '_count' 
            ? T[P] extends boolean 
              ? number 
              : GetScalarType<T[P], ViewGroupByOutputType[P]> 
            : GetScalarType<T[P], ViewGroupByOutputType[P]>
        }
      > 
    >


  export type ViewSelect = {
    id?: boolean
    ip?: boolean
    url?: boolean
    bid?: boolean
    area?: boolean
    areaInfo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ua?: boolean
  }

  export type ViewGetPayload<
    S extends boolean | null | undefined | ViewArgs,
    U = keyof S
      > = S extends true
        ? View
    : S extends undefined
    ? never
    : S extends ViewArgs | ViewFindManyArgs
    ?'include' extends U
    ? View 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof View ?View [P]
  : 
     never
  } 
    : View
  : View


  type ViewCountArgs = Merge<
    Omit<ViewFindManyArgs, 'select' | 'include'> & {
      select?: ViewCountAggregateInputType | true
    }
  >

  export interface ViewDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one View that matches the filter.
     * @param {ViewFindUniqueArgs} args - Arguments to find a View
     * @example
     * // Get one View
     * const view = await prisma.view.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ViewFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ViewFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'View'> extends True ? CheckSelect<T, Prisma__ViewClient<View>, Prisma__ViewClient<ViewGetPayload<T>>> : CheckSelect<T, Prisma__ViewClient<View | null >, Prisma__ViewClient<ViewGetPayload<T> | null >>

    /**
     * Find the first View that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViewFindFirstArgs} args - Arguments to find a View
     * @example
     * // Get one View
     * const view = await prisma.view.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ViewFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ViewFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'View'> extends True ? CheckSelect<T, Prisma__ViewClient<View>, Prisma__ViewClient<ViewGetPayload<T>>> : CheckSelect<T, Prisma__ViewClient<View | null >, Prisma__ViewClient<ViewGetPayload<T> | null >>

    /**
     * Find zero or more Views that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViewFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Views
     * const views = await prisma.view.findMany()
     * 
     * // Get first 10 Views
     * const views = await prisma.view.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const viewWithIdOnly = await prisma.view.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ViewFindManyArgs>(
      args?: SelectSubset<T, ViewFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<View>>, PrismaPromise<Array<ViewGetPayload<T>>>>

    /**
     * Create a View.
     * @param {ViewCreateArgs} args - Arguments to create a View.
     * @example
     * // Create one View
     * const View = await prisma.view.create({
     *   data: {
     *     // ... data to create a View
     *   }
     * })
     * 
    **/
    create<T extends ViewCreateArgs>(
      args: SelectSubset<T, ViewCreateArgs>
    ): CheckSelect<T, Prisma__ViewClient<View>, Prisma__ViewClient<ViewGetPayload<T>>>

    /**
     * Create many Views.
     *     @param {ViewCreateManyArgs} args - Arguments to create many Views.
     *     @example
     *     // Create many Views
     *     const view = await prisma.view.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ViewCreateManyArgs>(
      args?: SelectSubset<T, ViewCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a View.
     * @param {ViewDeleteArgs} args - Arguments to delete one View.
     * @example
     * // Delete one View
     * const View = await prisma.view.delete({
     *   where: {
     *     // ... filter to delete one View
     *   }
     * })
     * 
    **/
    delete<T extends ViewDeleteArgs>(
      args: SelectSubset<T, ViewDeleteArgs>
    ): CheckSelect<T, Prisma__ViewClient<View>, Prisma__ViewClient<ViewGetPayload<T>>>

    /**
     * Update one View.
     * @param {ViewUpdateArgs} args - Arguments to update one View.
     * @example
     * // Update one View
     * const view = await prisma.view.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ViewUpdateArgs>(
      args: SelectSubset<T, ViewUpdateArgs>
    ): CheckSelect<T, Prisma__ViewClient<View>, Prisma__ViewClient<ViewGetPayload<T>>>

    /**
     * Delete zero or more Views.
     * @param {ViewDeleteManyArgs} args - Arguments to filter Views to delete.
     * @example
     * // Delete a few Views
     * const { count } = await prisma.view.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ViewDeleteManyArgs>(
      args?: SelectSubset<T, ViewDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Views.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViewUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Views
     * const view = await prisma.view.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ViewUpdateManyArgs>(
      args: SelectSubset<T, ViewUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one View.
     * @param {ViewUpsertArgs} args - Arguments to update or create a View.
     * @example
     * // Update or create a View
     * const view = await prisma.view.upsert({
     *   create: {
     *     // ... data to create a View
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the View we want to update
     *   }
     * })
    **/
    upsert<T extends ViewUpsertArgs>(
      args: SelectSubset<T, ViewUpsertArgs>
    ): CheckSelect<T, Prisma__ViewClient<View>, Prisma__ViewClient<ViewGetPayload<T>>>

    /**
     * Count the number of Views.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViewCountArgs} args - Arguments to filter Views to count.
     * @example
     * // Count the number of Views
     * const count = await prisma.view.count({
     *   where: {
     *     // ... the filter for the Views we want to count
     *   }
     * })
    **/
    count<T extends ViewCountArgs>(
      args?: Subset<T, ViewCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ViewCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a View.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViewAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ViewAggregateArgs>(args: Subset<T, ViewAggregateArgs>): PrismaPromise<GetViewAggregateType<T>>

    /**
     * Group by View.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViewGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ViewGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ViewGroupByArgs['orderBy'] }
        : { orderBy?: ViewGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ViewGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetViewGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for View.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ViewClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * View findUnique
   */
  export type ViewFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the View
     * 
    **/
    select?: ViewSelect | null
    /**
     * Throw an Error if a View can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which View to fetch.
     * 
    **/
    where: ViewWhereUniqueInput
  }


  /**
   * View findFirst
   */
  export type ViewFindFirstArgs = {
    /**
     * Select specific fields to fetch from the View
     * 
    **/
    select?: ViewSelect | null
    /**
     * Throw an Error if a View can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which View to fetch.
     * 
    **/
    where?: ViewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Views to fetch.
     * 
    **/
    orderBy?: Enumerable<ViewOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Views.
     * 
    **/
    cursor?: ViewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Views from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Views.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Views.
     * 
    **/
    distinct?: Enumerable<ViewScalarFieldEnum>
  }


  /**
   * View findMany
   */
  export type ViewFindManyArgs = {
    /**
     * Select specific fields to fetch from the View
     * 
    **/
    select?: ViewSelect | null
    /**
     * Filter, which Views to fetch.
     * 
    **/
    where?: ViewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Views to fetch.
     * 
    **/
    orderBy?: Enumerable<ViewOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Views.
     * 
    **/
    cursor?: ViewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Views from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Views.
     * 
    **/
    skip?: number
    distinct?: Enumerable<ViewScalarFieldEnum>
  }


  /**
   * View create
   */
  export type ViewCreateArgs = {
    /**
     * Select specific fields to fetch from the View
     * 
    **/
    select?: ViewSelect | null
    /**
     * The data needed to create a View.
     * 
    **/
    data: XOR<ViewCreateInput, ViewUncheckedCreateInput>
  }


  /**
   * View createMany
   */
  export type ViewCreateManyArgs = {
    data: Enumerable<ViewCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * View update
   */
  export type ViewUpdateArgs = {
    /**
     * Select specific fields to fetch from the View
     * 
    **/
    select?: ViewSelect | null
    /**
     * The data needed to update a View.
     * 
    **/
    data: XOR<ViewUpdateInput, ViewUncheckedUpdateInput>
    /**
     * Choose, which View to update.
     * 
    **/
    where: ViewWhereUniqueInput
  }


  /**
   * View updateMany
   */
  export type ViewUpdateManyArgs = {
    data: XOR<ViewUpdateManyMutationInput, ViewUncheckedUpdateManyInput>
    where?: ViewWhereInput
  }


  /**
   * View upsert
   */
  export type ViewUpsertArgs = {
    /**
     * Select specific fields to fetch from the View
     * 
    **/
    select?: ViewSelect | null
    /**
     * The filter to search for the View to update in case it exists.
     * 
    **/
    where: ViewWhereUniqueInput
    /**
     * In case the View found by the `where` argument doesn't exist, create a new View with this data.
     * 
    **/
    create: XOR<ViewCreateInput, ViewUncheckedCreateInput>
    /**
     * In case the View was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<ViewUpdateInput, ViewUncheckedUpdateInput>
  }


  /**
   * View delete
   */
  export type ViewDeleteArgs = {
    /**
     * Select specific fields to fetch from the View
     * 
    **/
    select?: ViewSelect | null
    /**
     * Filter which View to delete.
     * 
    **/
    where: ViewWhereUniqueInput
  }


  /**
   * View deleteMany
   */
  export type ViewDeleteManyArgs = {
    where?: ViewWhereInput
  }


  /**
   * View without action
   */
  export type ViewArgs = {
    /**
     * Select specific fields to fetch from the View
     * 
    **/
    select?: ViewSelect | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const ArticleScalarFieldEnum: {
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
  };

  export type ArticleScalarFieldEnum = (typeof ArticleScalarFieldEnum)[keyof typeof ArticleScalarFieldEnum]


  export const UserScalarFieldEnum: {
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
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const TagScalarFieldEnum: {
    id: 'id',
    slug: 'slug',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    meta: 'meta'
  };

  export type TagScalarFieldEnum = (typeof TagScalarFieldEnum)[keyof typeof TagScalarFieldEnum]


  export const CategoryScalarFieldEnum: {
    id: 'id',
    slug: 'slug',
    name: 'name',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    article_count: 'article_count',
    meta: 'meta'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const TopicScalarFieldEnum: {
    id: 'id'
  };

  export type TopicScalarFieldEnum = (typeof TopicScalarFieldEnum)[keyof typeof TopicScalarFieldEnum]


  export const SettingScalarFieldEnum: {
    id: 'id'
  };

  export type SettingScalarFieldEnum = (typeof SettingScalarFieldEnum)[keyof typeof SettingScalarFieldEnum]


  export const CommentScalarFieldEnum: {
    id: 'id',
    articleId: 'articleId',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CommentScalarFieldEnum = (typeof CommentScalarFieldEnum)[keyof typeof CommentScalarFieldEnum]


  export const FavoriteScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    articleId: 'articleId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type FavoriteScalarFieldEnum = (typeof FavoriteScalarFieldEnum)[keyof typeof FavoriteScalarFieldEnum]


  export const ContentScalarFieldEnum: {
    id: 'id',
    articleId: 'articleId',
    html: 'html',
    markdown: 'markdown',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ContentScalarFieldEnum = (typeof ContentScalarFieldEnum)[keyof typeof ContentScalarFieldEnum]


  export const CollectionScalarFieldEnum: {
    id: 'id'
  };

  export type CollectionScalarFieldEnum = (typeof CollectionScalarFieldEnum)[keyof typeof CollectionScalarFieldEnum]


  export const LikeScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    articleId: 'articleId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type LikeScalarFieldEnum = (typeof LikeScalarFieldEnum)[keyof typeof LikeScalarFieldEnum]


  export const MediaScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    alt: 'alt',
    description: 'description',
    filename: 'filename',
    path: 'path',
    type: 'type'
  };

  export type MediaScalarFieldEnum = (typeof MediaScalarFieldEnum)[keyof typeof MediaScalarFieldEnum]


  export const MenuScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MenuScalarFieldEnum = (typeof MenuScalarFieldEnum)[keyof typeof MenuScalarFieldEnum]


  export const RoleScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RoleScalarFieldEnum = (typeof RoleScalarFieldEnum)[keyof typeof RoleScalarFieldEnum]


  export const PermissionScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PermissionScalarFieldEnum = (typeof PermissionScalarFieldEnum)[keyof typeof PermissionScalarFieldEnum]


  export const TagsOnArticlesScalarFieldEnum: {
    articleId: 'articleId',
    tagId: 'tagId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TagsOnArticlesScalarFieldEnum = (typeof TagsOnArticlesScalarFieldEnum)[keyof typeof TagsOnArticlesScalarFieldEnum]


  export const FollowerScalarFieldEnum: {
    followerId: 'followerId',
    followingId: 'followingId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type FollowerScalarFieldEnum = (typeof FollowerScalarFieldEnum)[keyof typeof FollowerScalarFieldEnum]


  export const VerificationScalarFieldEnum: {
    id: 'id',
    code: 'code',
    token: 'token',
    captcha: 'captcha',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type VerificationScalarFieldEnum = (typeof VerificationScalarFieldEnum)[keyof typeof VerificationScalarFieldEnum]


  export const IpScalarFieldEnum: {
    ip: 'ip'
  };

  export type IpScalarFieldEnum = (typeof IpScalarFieldEnum)[keyof typeof IpScalarFieldEnum]


  export const ViewScalarFieldEnum: {
    id: 'id',
    ip: 'ip',
    url: 'url',
    bid: 'bid',
    area: 'area',
    areaInfo: 'areaInfo',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    ua: 'ua'
  };

  export type ViewScalarFieldEnum = (typeof ViewScalarFieldEnum)[keyof typeof ViewScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  /**
   * Deep Input Types
   */


  export type ArticleWhereInput = {
    AND?: Enumerable<ArticleWhereInput>
    OR?: Enumerable<ArticleWhereInput>
    NOT?: Enumerable<ArticleWhereInput>
    id?: IntFilter | number
    title?: StringFilter | string
    public?: BoolFilter | boolean
    slug?: StringFilter | string
    image?: StringNullableFilter | string | null
    excerpt?: StringNullableFilter | string | null
    meta?: JsonNullableFilter
    cover?: StringNullableFilter | string | null
    status?: EnumArticleStatusFilter | ArticleStatus
    browseCount?: IntFilter | number
    commentsCount?: IntFilter | number
    likesCount?: IntFilter | number
    userId?: IntFilter | number
    categoryId?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    category?: XOR<CategoryRelationFilter, CategoryWhereInput>
    user?: XOR<UserRelationFilter, UserWhereInput>
    comments?: CommentListRelationFilter
    content?: XOR<ContentRelationFilter, ContentWhereInput> | null
    favoritings?: FavoriteListRelationFilter
    likes?: LikeListRelationFilter
    tags?: TagsOnArticlesListRelationFilter
  }

  export type ArticleOrderByInput = {
    id?: SortOrder
    title?: SortOrder
    public?: SortOrder
    slug?: SortOrder
    image?: SortOrder
    excerpt?: SortOrder
    meta?: SortOrder
    cover?: SortOrder
    status?: SortOrder
    browseCount?: SortOrder
    commentsCount?: SortOrder
    likesCount?: SortOrder
    userId?: SortOrder
    categoryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ArticleWhereUniqueInput = {
    id?: number
    slug?: string
  }

  export type ArticleScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ArticleScalarWhereWithAggregatesInput>
    OR?: Enumerable<ArticleScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ArticleScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    title?: StringWithAggregatesFilter | string
    public?: BoolWithAggregatesFilter | boolean
    slug?: StringWithAggregatesFilter | string
    image?: StringNullableWithAggregatesFilter | string | null
    excerpt?: StringNullableWithAggregatesFilter | string | null
    meta?: JsonNullableWithAggregatesFilter
    cover?: StringNullableWithAggregatesFilter | string | null
    status?: EnumArticleStatusWithAggregatesFilter | ArticleStatus
    browseCount?: IntWithAggregatesFilter | number
    commentsCount?: IntWithAggregatesFilter | number
    likesCount?: IntWithAggregatesFilter | number
    userId?: IntWithAggregatesFilter | number
    categoryId?: IntWithAggregatesFilter | number
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type UserWhereInput = {
    AND?: Enumerable<UserWhereInput>
    OR?: Enumerable<UserWhereInput>
    NOT?: Enumerable<UserWhereInput>
    id?: IntFilter | number
    email?: StringNullableFilter | string | null
    name?: StringFilter | string
    slug?: StringFilter | string
    url?: StringNullableFilter | string | null
    meta?: JsonNullableFilter
    cover?: StringNullableFilter | string | null
    bio?: StringNullableFilter | string | null
    description?: StringNullableFilter | string | null
    mobile?: StringNullableFilter | string | null
    openid?: StringNullableFilter | string | null
    password?: StringFilter | string
    loggedAt?: DateTimeFilter | Date | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    deleteAt?: DateTimeNullableFilter | Date | string | null
    avatar?: StringNullableFilter | string | null
    articles?: ArticleListRelationFilter
    comments?: CommentListRelationFilter
    favorites?: FavoriteListRelationFilter
    followers?: FollowerListRelationFilter
    followings?: FollowerListRelationFilter
    likes?: LikeListRelationFilter
    updatedPwdAt?: DateTimeFilter | Date | string
  }

  export type UserOrderByInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    url?: SortOrder
    meta?: SortOrder
    cover?: SortOrder
    bio?: SortOrder
    description?: SortOrder
    mobile?: SortOrder
    openid?: SortOrder
    password?: SortOrder
    loggedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deleteAt?: SortOrder
    avatar?: SortOrder
    updatedPwdAt?: SortOrder
  }

  export type UserWhereUniqueInput = {
    id?: number
    email?: string
    slug?: string
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: Enumerable<UserScalarWhereWithAggregatesInput>
    OR?: Enumerable<UserScalarWhereWithAggregatesInput>
    NOT?: Enumerable<UserScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    email?: StringNullableWithAggregatesFilter | string | null
    name?: StringWithAggregatesFilter | string
    slug?: StringWithAggregatesFilter | string
    url?: StringNullableWithAggregatesFilter | string | null
    meta?: JsonNullableWithAggregatesFilter
    cover?: StringNullableWithAggregatesFilter | string | null
    bio?: StringNullableWithAggregatesFilter | string | null
    description?: StringNullableWithAggregatesFilter | string | null
    mobile?: StringNullableWithAggregatesFilter | string | null
    openid?: StringNullableWithAggregatesFilter | string | null
    password?: StringWithAggregatesFilter | string
    loggedAt?: DateTimeWithAggregatesFilter | Date | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
    deleteAt?: DateTimeNullableWithAggregatesFilter | Date | string | null
    avatar?: StringNullableWithAggregatesFilter | string | null
    updatedPwdAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type TagWhereInput = {
    AND?: Enumerable<TagWhereInput>
    OR?: Enumerable<TagWhereInput>
    NOT?: Enumerable<TagWhereInput>
    id?: IntFilter | number
    slug?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    meta?: JsonNullableFilter
    articles?: TagsOnArticlesListRelationFilter
  }

  export type TagOrderByInput = {
    id?: SortOrder
    slug?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    meta?: SortOrder
  }

  export type TagWhereUniqueInput = {
    id?: number
    slug?: string
  }

  export type TagScalarWhereWithAggregatesInput = {
    AND?: Enumerable<TagScalarWhereWithAggregatesInput>
    OR?: Enumerable<TagScalarWhereWithAggregatesInput>
    NOT?: Enumerable<TagScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    slug?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
    meta?: JsonNullableWithAggregatesFilter
  }

  export type CategoryWhereInput = {
    AND?: Enumerable<CategoryWhereInput>
    OR?: Enumerable<CategoryWhereInput>
    NOT?: Enumerable<CategoryWhereInput>
    id?: IntFilter | number
    slug?: StringFilter | string
    name?: StringFilter | string
    description?: StringNullableFilter | string | null
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    article_count?: IntFilter | number
    meta?: JsonNullableFilter
    articles?: ArticleListRelationFilter
  }

  export type CategoryOrderByInput = {
    id?: SortOrder
    slug?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    article_count?: SortOrder
    meta?: SortOrder
  }

  export type CategoryWhereUniqueInput = {
    id?: number
    slug?: string
  }

  export type CategoryScalarWhereWithAggregatesInput = {
    AND?: Enumerable<CategoryScalarWhereWithAggregatesInput>
    OR?: Enumerable<CategoryScalarWhereWithAggregatesInput>
    NOT?: Enumerable<CategoryScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    slug?: StringWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
    description?: StringNullableWithAggregatesFilter | string | null
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
    article_count?: IntWithAggregatesFilter | number
    meta?: JsonNullableWithAggregatesFilter
  }

  export type TopicWhereInput = {
    AND?: Enumerable<TopicWhereInput>
    OR?: Enumerable<TopicWhereInput>
    NOT?: Enumerable<TopicWhereInput>
    id?: IntFilter | number
  }

  export type TopicOrderByInput = {
    id?: SortOrder
  }

  export type TopicWhereUniqueInput = {
    id?: number
  }

  export type TopicScalarWhereWithAggregatesInput = {
    AND?: Enumerable<TopicScalarWhereWithAggregatesInput>
    OR?: Enumerable<TopicScalarWhereWithAggregatesInput>
    NOT?: Enumerable<TopicScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
  }

  export type SettingWhereInput = {
    AND?: Enumerable<SettingWhereInput>
    OR?: Enumerable<SettingWhereInput>
    NOT?: Enumerable<SettingWhereInput>
    id?: IntFilter | number
  }

  export type SettingOrderByInput = {
    id?: SortOrder
  }

  export type SettingWhereUniqueInput = {
    id?: number
  }

  export type SettingScalarWhereWithAggregatesInput = {
    AND?: Enumerable<SettingScalarWhereWithAggregatesInput>
    OR?: Enumerable<SettingScalarWhereWithAggregatesInput>
    NOT?: Enumerable<SettingScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
  }

  export type CommentWhereInput = {
    AND?: Enumerable<CommentWhereInput>
    OR?: Enumerable<CommentWhereInput>
    NOT?: Enumerable<CommentWhereInput>
    id?: IntFilter | number
    articleId?: IntFilter | number
    userId?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    article?: XOR<ArticleRelationFilter, ArticleWhereInput>
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type CommentOrderByInput = {
    id?: SortOrder
    articleId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CommentWhereUniqueInput = {
    id?: number
  }

  export type CommentScalarWhereWithAggregatesInput = {
    AND?: Enumerable<CommentScalarWhereWithAggregatesInput>
    OR?: Enumerable<CommentScalarWhereWithAggregatesInput>
    NOT?: Enumerable<CommentScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    articleId?: IntWithAggregatesFilter | number
    userId?: IntWithAggregatesFilter | number
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type FavoriteWhereInput = {
    AND?: Enumerable<FavoriteWhereInput>
    OR?: Enumerable<FavoriteWhereInput>
    NOT?: Enumerable<FavoriteWhereInput>
    id?: IntFilter | number
    userId?: IntFilter | number
    articleId?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    article?: XOR<ArticleRelationFilter, ArticleWhereInput>
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type FavoriteOrderByInput = {
    id?: SortOrder
    userId?: SortOrder
    articleId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FavoriteWhereUniqueInput = {
    id?: number
  }

  export type FavoriteScalarWhereWithAggregatesInput = {
    AND?: Enumerable<FavoriteScalarWhereWithAggregatesInput>
    OR?: Enumerable<FavoriteScalarWhereWithAggregatesInput>
    NOT?: Enumerable<FavoriteScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    userId?: IntWithAggregatesFilter | number
    articleId?: IntWithAggregatesFilter | number
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type ContentWhereInput = {
    AND?: Enumerable<ContentWhereInput>
    OR?: Enumerable<ContentWhereInput>
    NOT?: Enumerable<ContentWhereInput>
    id?: IntFilter | number
    articleId?: IntFilter | number
    html?: StringNullableFilter | string | null
    markdown?: StringNullableFilter | string | null
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    article?: XOR<ArticleRelationFilter, ArticleWhereInput>
  }

  export type ContentOrderByInput = {
    id?: SortOrder
    articleId?: SortOrder
    html?: SortOrder
    markdown?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContentWhereUniqueInput = {
    id?: number
    articleId?: number
  }

  export type ContentScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ContentScalarWhereWithAggregatesInput>
    OR?: Enumerable<ContentScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ContentScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    articleId?: IntWithAggregatesFilter | number
    html?: StringNullableWithAggregatesFilter | string | null
    markdown?: StringNullableWithAggregatesFilter | string | null
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type CollectionWhereInput = {
    AND?: Enumerable<CollectionWhereInput>
    OR?: Enumerable<CollectionWhereInput>
    NOT?: Enumerable<CollectionWhereInput>
    id?: IntFilter | number
  }

  export type CollectionOrderByInput = {
    id?: SortOrder
  }

  export type CollectionWhereUniqueInput = {
    id?: number
  }

  export type CollectionScalarWhereWithAggregatesInput = {
    AND?: Enumerable<CollectionScalarWhereWithAggregatesInput>
    OR?: Enumerable<CollectionScalarWhereWithAggregatesInput>
    NOT?: Enumerable<CollectionScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
  }

  export type LikeWhereInput = {
    AND?: Enumerable<LikeWhereInput>
    OR?: Enumerable<LikeWhereInput>
    NOT?: Enumerable<LikeWhereInput>
    id?: IntFilter | number
    userId?: IntFilter | number
    articleId?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    article?: XOR<ArticleRelationFilter, ArticleWhereInput>
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type LikeOrderByInput = {
    id?: SortOrder
    userId?: SortOrder
    articleId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LikeWhereUniqueInput = {
    id?: number
  }

  export type LikeScalarWhereWithAggregatesInput = {
    AND?: Enumerable<LikeScalarWhereWithAggregatesInput>
    OR?: Enumerable<LikeScalarWhereWithAggregatesInput>
    NOT?: Enumerable<LikeScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    userId?: IntWithAggregatesFilter | number
    articleId?: IntWithAggregatesFilter | number
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type MediaWhereInput = {
    AND?: Enumerable<MediaWhereInput>
    OR?: Enumerable<MediaWhereInput>
    NOT?: Enumerable<MediaWhereInput>
    id?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    alt?: StringFilter | string
    description?: StringNullableFilter | string | null
    filename?: StringFilter | string
    path?: StringFilter | string
    type?: StringFilter | string
  }

  export type MediaOrderByInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    alt?: SortOrder
    description?: SortOrder
    filename?: SortOrder
    path?: SortOrder
    type?: SortOrder
  }

  export type MediaWhereUniqueInput = {
    id?: number
    path?: string
  }

  export type MediaScalarWhereWithAggregatesInput = {
    AND?: Enumerable<MediaScalarWhereWithAggregatesInput>
    OR?: Enumerable<MediaScalarWhereWithAggregatesInput>
    NOT?: Enumerable<MediaScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
    alt?: StringWithAggregatesFilter | string
    description?: StringNullableWithAggregatesFilter | string | null
    filename?: StringWithAggregatesFilter | string
    path?: StringWithAggregatesFilter | string
    type?: StringWithAggregatesFilter | string
  }

  export type MenuWhereInput = {
    AND?: Enumerable<MenuWhereInput>
    OR?: Enumerable<MenuWhereInput>
    NOT?: Enumerable<MenuWhereInput>
    id?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type MenuOrderByInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MenuWhereUniqueInput = {
    id?: number
  }

  export type MenuScalarWhereWithAggregatesInput = {
    AND?: Enumerable<MenuScalarWhereWithAggregatesInput>
    OR?: Enumerable<MenuScalarWhereWithAggregatesInput>
    NOT?: Enumerable<MenuScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type RoleWhereInput = {
    AND?: Enumerable<RoleWhereInput>
    OR?: Enumerable<RoleWhereInput>
    NOT?: Enumerable<RoleWhereInput>
    id?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type RoleOrderByInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RoleWhereUniqueInput = {
    id?: number
  }

  export type RoleScalarWhereWithAggregatesInput = {
    AND?: Enumerable<RoleScalarWhereWithAggregatesInput>
    OR?: Enumerable<RoleScalarWhereWithAggregatesInput>
    NOT?: Enumerable<RoleScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type PermissionWhereInput = {
    AND?: Enumerable<PermissionWhereInput>
    OR?: Enumerable<PermissionWhereInput>
    NOT?: Enumerable<PermissionWhereInput>
    id?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type PermissionOrderByInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PermissionWhereUniqueInput = {
    id?: number
  }

  export type PermissionScalarWhereWithAggregatesInput = {
    AND?: Enumerable<PermissionScalarWhereWithAggregatesInput>
    OR?: Enumerable<PermissionScalarWhereWithAggregatesInput>
    NOT?: Enumerable<PermissionScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type TagsOnArticlesWhereInput = {
    AND?: Enumerable<TagsOnArticlesWhereInput>
    OR?: Enumerable<TagsOnArticlesWhereInput>
    NOT?: Enumerable<TagsOnArticlesWhereInput>
    articleId?: IntFilter | number
    tagId?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    article?: XOR<ArticleRelationFilter, ArticleWhereInput>
    tag?: XOR<TagRelationFilter, TagWhereInput>
  }

  export type TagsOnArticlesOrderByInput = {
    articleId?: SortOrder
    tagId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TagsOnArticlesWhereUniqueInput = {
    articleId_tagId?: TagsOnArticlesArticleIdTagIdCompoundUniqueInput
  }

  export type TagsOnArticlesScalarWhereWithAggregatesInput = {
    AND?: Enumerable<TagsOnArticlesScalarWhereWithAggregatesInput>
    OR?: Enumerable<TagsOnArticlesScalarWhereWithAggregatesInput>
    NOT?: Enumerable<TagsOnArticlesScalarWhereWithAggregatesInput>
    articleId?: IntWithAggregatesFilter | number
    tagId?: IntWithAggregatesFilter | number
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type FollowerWhereInput = {
    AND?: Enumerable<FollowerWhereInput>
    OR?: Enumerable<FollowerWhereInput>
    NOT?: Enumerable<FollowerWhereInput>
    followerId?: IntFilter | number
    followingId?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    follower?: XOR<UserRelationFilter, UserWhereInput>
    following?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type FollowerOrderByInput = {
    followerId?: SortOrder
    followingId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FollowerWhereUniqueInput = {
    followerId_followingId?: FollowerFollowerIdFollowingIdCompoundUniqueInput
  }

  export type FollowerScalarWhereWithAggregatesInput = {
    AND?: Enumerable<FollowerScalarWhereWithAggregatesInput>
    OR?: Enumerable<FollowerScalarWhereWithAggregatesInput>
    NOT?: Enumerable<FollowerScalarWhereWithAggregatesInput>
    followerId?: IntWithAggregatesFilter | number
    followingId?: IntWithAggregatesFilter | number
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type VerificationWhereInput = {
    AND?: Enumerable<VerificationWhereInput>
    OR?: Enumerable<VerificationWhereInput>
    NOT?: Enumerable<VerificationWhereInput>
    id?: IntFilter | number
    code?: StringFilter | string
    token?: StringFilter | string
    captcha?: StringNullableFilter | string | null
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type VerificationOrderByInput = {
    id?: SortOrder
    code?: SortOrder
    token?: SortOrder
    captcha?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VerificationWhereUniqueInput = {
    id?: number
  }

  export type VerificationScalarWhereWithAggregatesInput = {
    AND?: Enumerable<VerificationScalarWhereWithAggregatesInput>
    OR?: Enumerable<VerificationScalarWhereWithAggregatesInput>
    NOT?: Enumerable<VerificationScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    code?: StringWithAggregatesFilter | string
    token?: StringWithAggregatesFilter | string
    captcha?: StringNullableWithAggregatesFilter | string | null
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type IpWhereInput = {
    AND?: Enumerable<IpWhereInput>
    OR?: Enumerable<IpWhereInput>
    NOT?: Enumerable<IpWhereInput>
    ip?: StringFilter | string
  }

  export type IpOrderByInput = {
    ip?: SortOrder
  }

  export type IpWhereUniqueInput = {
    ip?: string
  }

  export type IpScalarWhereWithAggregatesInput = {
    AND?: Enumerable<IpScalarWhereWithAggregatesInput>
    OR?: Enumerable<IpScalarWhereWithAggregatesInput>
    NOT?: Enumerable<IpScalarWhereWithAggregatesInput>
    ip?: StringWithAggregatesFilter | string
  }

  export type ViewWhereInput = {
    AND?: Enumerable<ViewWhereInput>
    OR?: Enumerable<ViewWhereInput>
    NOT?: Enumerable<ViewWhereInput>
    id?: IntFilter | number
    ip?: StringFilter | string
    url?: StringFilter | string
    bid?: StringNullableFilter | string | null
    area?: StringNullableFilter | string | null
    areaInfo?: JsonFilter
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    ua?: StringNullableFilter | string | null
  }

  export type ViewOrderByInput = {
    id?: SortOrder
    ip?: SortOrder
    url?: SortOrder
    bid?: SortOrder
    area?: SortOrder
    areaInfo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ua?: SortOrder
  }

  export type ViewWhereUniqueInput = {
    id?: number
  }

  export type ViewScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ViewScalarWhereWithAggregatesInput>
    OR?: Enumerable<ViewScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ViewScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    ip?: StringWithAggregatesFilter | string
    url?: StringWithAggregatesFilter | string
    bid?: StringNullableWithAggregatesFilter | string | null
    area?: StringNullableWithAggregatesFilter | string | null
    areaInfo?: JsonWithAggregatesFilter
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
    ua?: StringNullableWithAggregatesFilter | string | null
  }

  export type ArticleCreateInput = {
    title: string
    public?: boolean
    slug: string
    image?: string | null
    excerpt?: string | null
    meta?: InputJsonValue | null
    cover?: string | null
    status?: ArticleStatus
    browseCount?: number
    commentsCount?: number
    likesCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    category: CategoryCreateNestedOneWithoutArticlesInput
    user: UserCreateNestedOneWithoutArticlesInput
    comments?: CommentCreateNestedManyWithoutArticleInput
    content?: ContentCreateNestedOneWithoutArticleInput
    favoritings?: FavoriteCreateNestedManyWithoutArticleInput
    likes?: LikeCreateNestedManyWithoutArticleInput
    tags?: TagsOnArticlesCreateNestedManyWithoutArticleInput
  }

  export type ArticleUncheckedCreateInput = {
    id?: number
    title: string
    public?: boolean
    slug: string
    image?: string | null
    excerpt?: string | null
    meta?: InputJsonValue | null
    cover?: string | null
    status?: ArticleStatus
    browseCount?: number
    commentsCount?: number
    likesCount?: number
    userId: number
    categoryId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    comments?: CommentUncheckedCreateNestedManyWithoutArticleInput
    content?: ContentUncheckedCreateNestedOneWithoutArticleInput
    favoritings?: FavoriteUncheckedCreateNestedManyWithoutArticleInput
    likes?: LikeUncheckedCreateNestedManyWithoutArticleInput
    tags?: TagsOnArticlesUncheckedCreateNestedManyWithoutArticleInput
  }

  export type ArticleUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    public?: BoolFieldUpdateOperationsInput | boolean
    slug?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
    meta?: InputJsonValue | null
    cover?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumArticleStatusFieldUpdateOperationsInput | ArticleStatus
    browseCount?: IntFieldUpdateOperationsInput | number
    commentsCount?: IntFieldUpdateOperationsInput | number
    likesCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneRequiredWithoutArticlesInput
    user?: UserUpdateOneRequiredWithoutArticlesInput
    comments?: CommentUpdateManyWithoutArticleInput
    content?: ContentUpdateOneWithoutArticleInput
    favoritings?: FavoriteUpdateManyWithoutArticleInput
    likes?: LikeUpdateManyWithoutArticleInput
    tags?: TagsOnArticlesUpdateManyWithoutArticleInput
  }

  export type ArticleUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    public?: BoolFieldUpdateOperationsInput | boolean
    slug?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
    meta?: InputJsonValue | null
    cover?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumArticleStatusFieldUpdateOperationsInput | ArticleStatus
    browseCount?: IntFieldUpdateOperationsInput | number
    commentsCount?: IntFieldUpdateOperationsInput | number
    likesCount?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: CommentUncheckedUpdateManyWithoutArticleInput
    content?: ContentUncheckedUpdateOneWithoutArticleInput
    favoritings?: FavoriteUncheckedUpdateManyWithoutArticleInput
    likes?: LikeUncheckedUpdateManyWithoutArticleInput
    tags?: TagsOnArticlesUncheckedUpdateManyWithoutArticleInput
  }

  export type ArticleCreateManyInput = {
    id?: number
    title: string
    public?: boolean
    slug: string
    image?: string | null
    excerpt?: string | null
    meta?: InputJsonValue | null
    cover?: string | null
    status?: ArticleStatus
    browseCount?: number
    commentsCount?: number
    likesCount?: number
    userId: number
    categoryId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ArticleUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    public?: BoolFieldUpdateOperationsInput | boolean
    slug?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
    meta?: InputJsonValue | null
    cover?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumArticleStatusFieldUpdateOperationsInput | ArticleStatus
    browseCount?: IntFieldUpdateOperationsInput | number
    commentsCount?: IntFieldUpdateOperationsInput | number
    likesCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArticleUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    public?: BoolFieldUpdateOperationsInput | boolean
    slug?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
    meta?: InputJsonValue | null
    cover?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumArticleStatusFieldUpdateOperationsInput | ArticleStatus
    browseCount?: IntFieldUpdateOperationsInput | number
    commentsCount?: IntFieldUpdateOperationsInput | number
    likesCount?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    email?: string | null
    name: string
    slug: string
    url?: string | null
    meta?: InputJsonValue | null
    cover?: string | null
    bio?: string | null
    description?: string | null
    mobile?: string | null
    openid?: string | null
    password: string
    loggedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    deleteAt?: Date | string | null
    avatar?: string | null
    updatedPwdAt?: Date | string
    articles?: ArticleCreateNestedManyWithoutUserInput
    comments?: CommentCreateNestedManyWithoutUserInput
    favorites?: FavoriteCreateNestedManyWithoutUserInput
    followers?: FollowerCreateNestedManyWithoutFollowerInput
    followings?: FollowerCreateNestedManyWithoutFollowingInput
    likes?: LikeCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    email?: string | null
    name: string
    slug: string
    url?: string | null
    meta?: InputJsonValue | null
    cover?: string | null
    bio?: string | null
    description?: string | null
    mobile?: string | null
    openid?: string | null
    password: string
    loggedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    deleteAt?: Date | string | null
    avatar?: string | null
    updatedPwdAt?: Date | string
    articles?: ArticleUncheckedCreateNestedManyWithoutUserInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    favorites?: FavoriteUncheckedCreateNestedManyWithoutUserInput
    followers?: FollowerUncheckedCreateNestedManyWithoutFollowerInput
    followings?: FollowerUncheckedCreateNestedManyWithoutFollowingInput
    likes?: LikeUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    meta?: InputJsonValue | null
    cover?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    openid?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    loggedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleteAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    updatedPwdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    articles?: ArticleUpdateManyWithoutUserInput
    comments?: CommentUpdateManyWithoutUserInput
    favorites?: FavoriteUpdateManyWithoutUserInput
    followers?: FollowerUpdateManyWithoutFollowerInput
    followings?: FollowerUpdateManyWithoutFollowingInput
    likes?: LikeUpdateManyWithoutUserInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    meta?: InputJsonValue | null
    cover?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    openid?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    loggedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleteAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    updatedPwdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    articles?: ArticleUncheckedUpdateManyWithoutUserInput
    comments?: CommentUncheckedUpdateManyWithoutUserInput
    favorites?: FavoriteUncheckedUpdateManyWithoutUserInput
    followers?: FollowerUncheckedUpdateManyWithoutFollowerInput
    followings?: FollowerUncheckedUpdateManyWithoutFollowingInput
    likes?: LikeUncheckedUpdateManyWithoutUserInput
  }

  export type UserCreateManyInput = {
    id?: number
    email?: string | null
    name: string
    slug: string
    url?: string | null
    meta?: InputJsonValue | null
    cover?: string | null
    bio?: string | null
    description?: string | null
    mobile?: string | null
    openid?: string | null
    password: string
    loggedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    deleteAt?: Date | string | null
    avatar?: string | null
    updatedPwdAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    meta?: InputJsonValue | null
    cover?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    openid?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    loggedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleteAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    updatedPwdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    meta?: InputJsonValue | null
    cover?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    openid?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    loggedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleteAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    updatedPwdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TagCreateInput = {
    slug: string
    createdAt?: Date | string
    updatedAt?: Date | string
    meta?: InputJsonValue | null
    articles?: TagsOnArticlesCreateNestedManyWithoutTagInput
  }

  export type TagUncheckedCreateInput = {
    id?: number
    slug: string
    createdAt?: Date | string
    updatedAt?: Date | string
    meta?: InputJsonValue | null
    articles?: TagsOnArticlesUncheckedCreateNestedManyWithoutTagInput
  }

  export type TagUpdateInput = {
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    meta?: InputJsonValue | null
    articles?: TagsOnArticlesUpdateManyWithoutTagInput
  }

  export type TagUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    meta?: InputJsonValue | null
    articles?: TagsOnArticlesUncheckedUpdateManyWithoutTagInput
  }

  export type TagCreateManyInput = {
    id?: number
    slug: string
    createdAt?: Date | string
    updatedAt?: Date | string
    meta?: InputJsonValue | null
  }

  export type TagUpdateManyMutationInput = {
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    meta?: InputJsonValue | null
  }

  export type TagUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    meta?: InputJsonValue | null
  }

  export type CategoryCreateInput = {
    slug: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    article_count?: number
    meta?: InputJsonValue | null
    articles?: ArticleCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateInput = {
    id?: number
    slug: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    article_count?: number
    meta?: InputJsonValue | null
    articles?: ArticleUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUpdateInput = {
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    article_count?: IntFieldUpdateOperationsInput | number
    meta?: InputJsonValue | null
    articles?: ArticleUpdateManyWithoutCategoryInput
  }

  export type CategoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    article_count?: IntFieldUpdateOperationsInput | number
    meta?: InputJsonValue | null
    articles?: ArticleUncheckedUpdateManyWithoutCategoryInput
  }

  export type CategoryCreateManyInput = {
    id?: number
    slug: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    article_count?: number
    meta?: InputJsonValue | null
  }

  export type CategoryUpdateManyMutationInput = {
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    article_count?: IntFieldUpdateOperationsInput | number
    meta?: InputJsonValue | null
  }

  export type CategoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    article_count?: IntFieldUpdateOperationsInput | number
    meta?: InputJsonValue | null
  }

  export type TopicCreateInput = {

  }

  export type TopicUncheckedCreateInput = {
    id?: number
  }

  export type TopicUpdateInput = {

  }

  export type TopicUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
  }

  export type TopicCreateManyInput = {
    id?: number
  }

  export type TopicUpdateManyMutationInput = {

  }

  export type TopicUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
  }

  export type SettingCreateInput = {

  }

  export type SettingUncheckedCreateInput = {
    id?: number
  }

  export type SettingUpdateInput = {

  }

  export type SettingUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
  }

  export type SettingCreateManyInput = {
    id?: number
  }

  export type SettingUpdateManyMutationInput = {

  }

  export type SettingUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
  }

  export type CommentCreateInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    article: ArticleCreateNestedOneWithoutCommentsInput
    user: UserCreateNestedOneWithoutCommentsInput
  }

  export type CommentUncheckedCreateInput = {
    id?: number
    articleId: number
    userId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommentUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    article?: ArticleUpdateOneRequiredWithoutCommentsInput
    user?: UserUpdateOneRequiredWithoutCommentsInput
  }

  export type CommentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    articleId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentCreateManyInput = {
    id?: number
    articleId: number
    userId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommentUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    articleId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoriteCreateInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    article: ArticleCreateNestedOneWithoutFavoritingsInput
    user: UserCreateNestedOneWithoutFavoritesInput
  }

  export type FavoriteUncheckedCreateInput = {
    id?: number
    userId: number
    articleId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FavoriteUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    article?: ArticleUpdateOneRequiredWithoutFavoritingsInput
    user?: UserUpdateOneRequiredWithoutFavoritesInput
  }

  export type FavoriteUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    articleId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoriteCreateManyInput = {
    id?: number
    userId: number
    articleId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FavoriteUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoriteUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    articleId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContentCreateInput = {
    html?: string | null
    markdown?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    article: ArticleCreateNestedOneWithoutContentInput
  }

  export type ContentUncheckedCreateInput = {
    id?: number
    articleId: number
    html?: string | null
    markdown?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContentUpdateInput = {
    html?: NullableStringFieldUpdateOperationsInput | string | null
    markdown?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    article?: ArticleUpdateOneRequiredWithoutContentInput
  }

  export type ContentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    articleId?: IntFieldUpdateOperationsInput | number
    html?: NullableStringFieldUpdateOperationsInput | string | null
    markdown?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContentCreateManyInput = {
    id?: number
    articleId: number
    html?: string | null
    markdown?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContentUpdateManyMutationInput = {
    html?: NullableStringFieldUpdateOperationsInput | string | null
    markdown?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    articleId?: IntFieldUpdateOperationsInput | number
    html?: NullableStringFieldUpdateOperationsInput | string | null
    markdown?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CollectionCreateInput = {

  }

  export type CollectionUncheckedCreateInput = {
    id?: number
  }

  export type CollectionUpdateInput = {

  }

  export type CollectionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
  }

  export type CollectionCreateManyInput = {
    id?: number
  }

  export type CollectionUpdateManyMutationInput = {

  }

  export type CollectionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
  }

  export type LikeCreateInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    article: ArticleCreateNestedOneWithoutLikesInput
    user: UserCreateNestedOneWithoutLikesInput
  }

  export type LikeUncheckedCreateInput = {
    id?: number
    userId: number
    articleId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LikeUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    article?: ArticleUpdateOneRequiredWithoutLikesInput
    user?: UserUpdateOneRequiredWithoutLikesInput
  }

  export type LikeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    articleId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LikeCreateManyInput = {
    id?: number
    userId: number
    articleId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LikeUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LikeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    articleId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MediaCreateInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    alt: string
    description?: string | null
    filename: string
    path: string
    type: string
  }

  export type MediaUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    alt: string
    description?: string | null
    filename: string
    path: string
    type: string
  }

  export type MediaUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    alt?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    filename?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
  }

  export type MediaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    alt?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    filename?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
  }

  export type MediaCreateManyInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    alt: string
    description?: string | null
    filename: string
    path: string
    type: string
  }

  export type MediaUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    alt?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    filename?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
  }

  export type MediaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    alt?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    filename?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
  }

  export type MenuCreateInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MenuUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MenuUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MenuUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MenuCreateManyInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MenuUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MenuUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoleCreateInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RoleUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RoleUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoleUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoleCreateManyInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RoleUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoleUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PermissionCreateInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PermissionUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PermissionUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PermissionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PermissionCreateManyInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PermissionUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PermissionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TagsOnArticlesCreateInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    article: ArticleCreateNestedOneWithoutTagsInput
    tag: TagCreateNestedOneWithoutArticlesInput
  }

  export type TagsOnArticlesUncheckedCreateInput = {
    articleId: number
    tagId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TagsOnArticlesUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    article?: ArticleUpdateOneRequiredWithoutTagsInput
    tag?: TagUpdateOneRequiredWithoutArticlesInput
  }

  export type TagsOnArticlesUncheckedUpdateInput = {
    articleId?: IntFieldUpdateOperationsInput | number
    tagId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TagsOnArticlesCreateManyInput = {
    articleId: number
    tagId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TagsOnArticlesUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TagsOnArticlesUncheckedUpdateManyInput = {
    articleId?: IntFieldUpdateOperationsInput | number
    tagId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FollowerCreateInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    follower: UserCreateNestedOneWithoutFollowersInput
    following: UserCreateNestedOneWithoutFollowingsInput
  }

  export type FollowerUncheckedCreateInput = {
    followerId: number
    followingId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FollowerUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    follower?: UserUpdateOneRequiredWithoutFollowersInput
    following?: UserUpdateOneRequiredWithoutFollowingsInput
  }

  export type FollowerUncheckedUpdateInput = {
    followerId?: IntFieldUpdateOperationsInput | number
    followingId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FollowerCreateManyInput = {
    followerId: number
    followingId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FollowerUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FollowerUncheckedUpdateManyInput = {
    followerId?: IntFieldUpdateOperationsInput | number
    followingId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationCreateInput = {
    code: string
    token: string
    captcha?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VerificationUncheckedCreateInput = {
    id?: number
    code: string
    token: string
    captcha?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VerificationUpdateInput = {
    code?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    captcha?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    captcha?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationCreateManyInput = {
    id?: number
    code: string
    token: string
    captcha?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VerificationUpdateManyMutationInput = {
    code?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    captcha?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    captcha?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IpCreateInput = {
    ip: string
  }

  export type IpUncheckedCreateInput = {
    ip: string
  }

  export type IpUpdateInput = {
    ip?: StringFieldUpdateOperationsInput | string
  }

  export type IpUncheckedUpdateInput = {
    ip?: StringFieldUpdateOperationsInput | string
  }

  export type IpCreateManyInput = {
    ip: string
  }

  export type IpUpdateManyMutationInput = {
    ip?: StringFieldUpdateOperationsInput | string
  }

  export type IpUncheckedUpdateManyInput = {
    ip?: StringFieldUpdateOperationsInput | string
  }

  export type ViewCreateInput = {
    ip: string
    url: string
    bid?: string | null
    area?: string | null
    areaInfo?: InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    ua?: string | null
  }

  export type ViewUncheckedCreateInput = {
    id?: number
    ip: string
    url: string
    bid?: string | null
    area?: string | null
    areaInfo?: InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    ua?: string | null
  }

  export type ViewUpdateInput = {
    ip?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    bid?: NullableStringFieldUpdateOperationsInput | string | null
    area?: NullableStringFieldUpdateOperationsInput | string | null
    areaInfo?: InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ua?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ViewUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    ip?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    bid?: NullableStringFieldUpdateOperationsInput | string | null
    area?: NullableStringFieldUpdateOperationsInput | string | null
    areaInfo?: InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ua?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ViewCreateManyInput = {
    id?: number
    ip: string
    url: string
    bid?: string | null
    area?: string | null
    areaInfo?: InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    ua?: string | null
  }

  export type ViewUpdateManyMutationInput = {
    ip?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    bid?: NullableStringFieldUpdateOperationsInput | string | null
    area?: NullableStringFieldUpdateOperationsInput | string | null
    areaInfo?: InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ua?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ViewUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    ip?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    bid?: NullableStringFieldUpdateOperationsInput | string | null
    area?: NullableStringFieldUpdateOperationsInput | string | null
    areaInfo?: InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ua?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type BoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type StringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }
  export type JsonNullableFilter = 
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase>, Exclude<keyof Required<JsonNullableFilterBase>, 'path'>>,
        Required<JsonNullableFilterBase>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase>, 'path'>>

  export type JsonNullableFilterBase = {
    equals?: InputJsonValue | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    path?: string
    string_contains?: string
    string_starts_with?: string
    string_ends_with?: string
    array_contains?: InputJsonValue
    array_starts_with?: InputJsonValue
    array_ends_with?: InputJsonValue
    not?: InputJsonValue | null
  }

  export type EnumArticleStatusFilter = {
    equals?: ArticleStatus
    in?: Enumerable<ArticleStatus>
    notIn?: Enumerable<ArticleStatus>
    not?: NestedEnumArticleStatusFilter | ArticleStatus
  }

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type CategoryRelationFilter = {
    is?: CategoryWhereInput
    isNot?: CategoryWhereInput
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type CommentListRelationFilter = {
    every?: CommentWhereInput
    some?: CommentWhereInput
    none?: CommentWhereInput
  }

  export type ContentRelationFilter = {
    is?: ContentWhereInput | null
    isNot?: ContentWhereInput | null
  }

  export type FavoriteListRelationFilter = {
    every?: FavoriteWhereInput
    some?: FavoriteWhereInput
    none?: FavoriteWhereInput
  }

  export type LikeListRelationFilter = {
    every?: LikeWhereInput
    some?: LikeWhereInput
    none?: LikeWhereInput
  }

  export type TagsOnArticlesListRelationFilter = {
    every?: TagsOnArticlesWhereInput
    some?: TagsOnArticlesWhereInput
    none?: TagsOnArticlesWhereInput
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    count?: NestedIntFilter
    _avg?: NestedFloatFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    sum?: NestedIntFilter
    _min?: NestedIntFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    min?: NestedIntFilter
    _max?: NestedIntFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    max?: NestedIntFilter
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    count?: NestedIntFilter
    _min?: NestedStringFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    min?: NestedStringFilter
    _max?: NestedStringFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    max?: NestedStringFilter
  }

  export type BoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    count?: NestedIntFilter
    _min?: NestedBoolFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    min?: NestedBoolFilter
    _max?: NestedBoolFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    max?: NestedBoolFilter
  }

  export type StringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    max?: NestedStringNullableFilter
  }
  export type JsonNullableWithAggregatesFilter = 
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase = {
    equals?: InputJsonValue | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    path?: string
    string_contains?: string
    string_starts_with?: string
    string_ends_with?: string
    array_contains?: InputJsonValue
    array_starts_with?: InputJsonValue
    array_ends_with?: InputJsonValue
    not?: InputJsonValue | null
    _count?: NestedIntNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    count?: NestedIntNullableFilter
    _min?: NestedJsonNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    min?: NestedJsonNullableFilter
    _max?: NestedJsonNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    max?: NestedJsonNullableFilter
  }

  export type EnumArticleStatusWithAggregatesFilter = {
    equals?: ArticleStatus
    in?: Enumerable<ArticleStatus>
    notIn?: Enumerable<ArticleStatus>
    not?: NestedEnumArticleStatusWithAggregatesFilter | ArticleStatus
    _count?: NestedIntFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    count?: NestedIntFilter
    _min?: NestedEnumArticleStatusFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    min?: NestedEnumArticleStatusFilter
    _max?: NestedEnumArticleStatusFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    max?: NestedEnumArticleStatusFilter
  }

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    max?: NestedDateTimeFilter
  }

  export type DateTimeNullableFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableFilter | Date | string | null
  }

  export type ArticleListRelationFilter = {
    every?: ArticleWhereInput
    some?: ArticleWhereInput
    none?: ArticleWhereInput
  }

  export type FollowerListRelationFilter = {
    every?: FollowerWhereInput
    some?: FollowerWhereInput
    none?: FollowerWhereInput
  }

  export type DateTimeNullableWithAggregatesFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableWithAggregatesFilter | Date | string | null
    _count?: NestedIntNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    count?: NestedIntNullableFilter
    _min?: NestedDateTimeNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    min?: NestedDateTimeNullableFilter
    _max?: NestedDateTimeNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    max?: NestedDateTimeNullableFilter
  }

  export type ArticleRelationFilter = {
    is?: ArticleWhereInput
    isNot?: ArticleWhereInput
  }

  export type TagRelationFilter = {
    is?: TagWhereInput
    isNot?: TagWhereInput
  }

  export type TagsOnArticlesArticleIdTagIdCompoundUniqueInput = {
    articleId: number
    tagId: number
  }

  export type FollowerFollowerIdFollowingIdCompoundUniqueInput = {
    followerId: number
    followingId: number
  }
  export type JsonFilter = 
    | PatchUndefined<
        Either<Required<JsonFilterBase>, Exclude<keyof Required<JsonFilterBase>, 'path'>>,
        Required<JsonFilterBase>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase>, 'path'>>

  export type JsonFilterBase = {
    equals?: InputJsonValue
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    path?: string
    string_contains?: string
    string_starts_with?: string
    string_ends_with?: string
    array_contains?: InputJsonValue
    array_starts_with?: InputJsonValue
    array_ends_with?: InputJsonValue
    not?: InputJsonValue
  }
  export type JsonWithAggregatesFilter = 
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase>, Exclude<keyof Required<JsonWithAggregatesFilterBase>, 'path'>>,
        Required<JsonWithAggregatesFilterBase>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase>, 'path'>>

  export type JsonWithAggregatesFilterBase = {
    equals?: InputJsonValue
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    path?: string
    string_contains?: string
    string_starts_with?: string
    string_ends_with?: string
    array_contains?: InputJsonValue
    array_starts_with?: InputJsonValue
    array_ends_with?: InputJsonValue
    not?: InputJsonValue
    _count?: NestedIntFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    count?: NestedIntFilter
    _min?: NestedJsonFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    min?: NestedJsonFilter
    _max?: NestedJsonFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    max?: NestedJsonFilter
  }

  export type CategoryCreateNestedOneWithoutArticlesInput = {
    create?: XOR<CategoryCreateWithoutArticlesInput, CategoryUncheckedCreateWithoutArticlesInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutArticlesInput
    connect?: CategoryWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutArticlesInput = {
    create?: XOR<UserCreateWithoutArticlesInput, UserUncheckedCreateWithoutArticlesInput>
    connectOrCreate?: UserCreateOrConnectWithoutArticlesInput
    connect?: UserWhereUniqueInput
  }

  export type CommentCreateNestedManyWithoutArticleInput = {
    create?: XOR<Enumerable<CommentCreateWithoutArticleInput>, Enumerable<CommentUncheckedCreateWithoutArticleInput>>
    connectOrCreate?: Enumerable<CommentCreateOrConnectWithoutArticleInput>
    createMany?: CommentCreateManyArticleInputEnvelope
    connect?: Enumerable<CommentWhereUniqueInput>
  }

  export type ContentCreateNestedOneWithoutArticleInput = {
    create?: XOR<ContentCreateWithoutArticleInput, ContentUncheckedCreateWithoutArticleInput>
    connectOrCreate?: ContentCreateOrConnectWithoutArticleInput
    connect?: ContentWhereUniqueInput
  }

  export type FavoriteCreateNestedManyWithoutArticleInput = {
    create?: XOR<Enumerable<FavoriteCreateWithoutArticleInput>, Enumerable<FavoriteUncheckedCreateWithoutArticleInput>>
    connectOrCreate?: Enumerable<FavoriteCreateOrConnectWithoutArticleInput>
    createMany?: FavoriteCreateManyArticleInputEnvelope
    connect?: Enumerable<FavoriteWhereUniqueInput>
  }

  export type LikeCreateNestedManyWithoutArticleInput = {
    create?: XOR<Enumerable<LikeCreateWithoutArticleInput>, Enumerable<LikeUncheckedCreateWithoutArticleInput>>
    connectOrCreate?: Enumerable<LikeCreateOrConnectWithoutArticleInput>
    createMany?: LikeCreateManyArticleInputEnvelope
    connect?: Enumerable<LikeWhereUniqueInput>
  }

  export type TagsOnArticlesCreateNestedManyWithoutArticleInput = {
    create?: XOR<Enumerable<TagsOnArticlesCreateWithoutArticleInput>, Enumerable<TagsOnArticlesUncheckedCreateWithoutArticleInput>>
    connectOrCreate?: Enumerable<TagsOnArticlesCreateOrConnectWithoutArticleInput>
    createMany?: TagsOnArticlesCreateManyArticleInputEnvelope
    connect?: Enumerable<TagsOnArticlesWhereUniqueInput>
  }

  export type CommentUncheckedCreateNestedManyWithoutArticleInput = {
    create?: XOR<Enumerable<CommentCreateWithoutArticleInput>, Enumerable<CommentUncheckedCreateWithoutArticleInput>>
    connectOrCreate?: Enumerable<CommentCreateOrConnectWithoutArticleInput>
    createMany?: CommentCreateManyArticleInputEnvelope
    connect?: Enumerable<CommentWhereUniqueInput>
  }

  export type ContentUncheckedCreateNestedOneWithoutArticleInput = {
    create?: XOR<ContentCreateWithoutArticleInput, ContentUncheckedCreateWithoutArticleInput>
    connectOrCreate?: ContentCreateOrConnectWithoutArticleInput
    connect?: ContentWhereUniqueInput
  }

  export type FavoriteUncheckedCreateNestedManyWithoutArticleInput = {
    create?: XOR<Enumerable<FavoriteCreateWithoutArticleInput>, Enumerable<FavoriteUncheckedCreateWithoutArticleInput>>
    connectOrCreate?: Enumerable<FavoriteCreateOrConnectWithoutArticleInput>
    createMany?: FavoriteCreateManyArticleInputEnvelope
    connect?: Enumerable<FavoriteWhereUniqueInput>
  }

  export type LikeUncheckedCreateNestedManyWithoutArticleInput = {
    create?: XOR<Enumerable<LikeCreateWithoutArticleInput>, Enumerable<LikeUncheckedCreateWithoutArticleInput>>
    connectOrCreate?: Enumerable<LikeCreateOrConnectWithoutArticleInput>
    createMany?: LikeCreateManyArticleInputEnvelope
    connect?: Enumerable<LikeWhereUniqueInput>
  }

  export type TagsOnArticlesUncheckedCreateNestedManyWithoutArticleInput = {
    create?: XOR<Enumerable<TagsOnArticlesCreateWithoutArticleInput>, Enumerable<TagsOnArticlesUncheckedCreateWithoutArticleInput>>
    connectOrCreate?: Enumerable<TagsOnArticlesCreateOrConnectWithoutArticleInput>
    createMany?: TagsOnArticlesCreateManyArticleInputEnvelope
    connect?: Enumerable<TagsOnArticlesWhereUniqueInput>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumArticleStatusFieldUpdateOperationsInput = {
    set?: ArticleStatus
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type CategoryUpdateOneRequiredWithoutArticlesInput = {
    create?: XOR<CategoryCreateWithoutArticlesInput, CategoryUncheckedCreateWithoutArticlesInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutArticlesInput
    upsert?: CategoryUpsertWithoutArticlesInput
    connect?: CategoryWhereUniqueInput
    update?: XOR<CategoryUpdateWithoutArticlesInput, CategoryUncheckedUpdateWithoutArticlesInput>
  }

  export type UserUpdateOneRequiredWithoutArticlesInput = {
    create?: XOR<UserCreateWithoutArticlesInput, UserUncheckedCreateWithoutArticlesInput>
    connectOrCreate?: UserCreateOrConnectWithoutArticlesInput
    upsert?: UserUpsertWithoutArticlesInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutArticlesInput, UserUncheckedUpdateWithoutArticlesInput>
  }

  export type CommentUpdateManyWithoutArticleInput = {
    create?: XOR<Enumerable<CommentCreateWithoutArticleInput>, Enumerable<CommentUncheckedCreateWithoutArticleInput>>
    connectOrCreate?: Enumerable<CommentCreateOrConnectWithoutArticleInput>
    upsert?: Enumerable<CommentUpsertWithWhereUniqueWithoutArticleInput>
    createMany?: CommentCreateManyArticleInputEnvelope
    connect?: Enumerable<CommentWhereUniqueInput>
    set?: Enumerable<CommentWhereUniqueInput>
    disconnect?: Enumerable<CommentWhereUniqueInput>
    delete?: Enumerable<CommentWhereUniqueInput>
    update?: Enumerable<CommentUpdateWithWhereUniqueWithoutArticleInput>
    updateMany?: Enumerable<CommentUpdateManyWithWhereWithoutArticleInput>
    deleteMany?: Enumerable<CommentScalarWhereInput>
  }

  export type ContentUpdateOneWithoutArticleInput = {
    create?: XOR<ContentCreateWithoutArticleInput, ContentUncheckedCreateWithoutArticleInput>
    connectOrCreate?: ContentCreateOrConnectWithoutArticleInput
    upsert?: ContentUpsertWithoutArticleInput
    connect?: ContentWhereUniqueInput
    disconnect?: boolean
    delete?: boolean
    update?: XOR<ContentUpdateWithoutArticleInput, ContentUncheckedUpdateWithoutArticleInput>
  }

  export type FavoriteUpdateManyWithoutArticleInput = {
    create?: XOR<Enumerable<FavoriteCreateWithoutArticleInput>, Enumerable<FavoriteUncheckedCreateWithoutArticleInput>>
    connectOrCreate?: Enumerable<FavoriteCreateOrConnectWithoutArticleInput>
    upsert?: Enumerable<FavoriteUpsertWithWhereUniqueWithoutArticleInput>
    createMany?: FavoriteCreateManyArticleInputEnvelope
    connect?: Enumerable<FavoriteWhereUniqueInput>
    set?: Enumerable<FavoriteWhereUniqueInput>
    disconnect?: Enumerable<FavoriteWhereUniqueInput>
    delete?: Enumerable<FavoriteWhereUniqueInput>
    update?: Enumerable<FavoriteUpdateWithWhereUniqueWithoutArticleInput>
    updateMany?: Enumerable<FavoriteUpdateManyWithWhereWithoutArticleInput>
    deleteMany?: Enumerable<FavoriteScalarWhereInput>
  }

  export type LikeUpdateManyWithoutArticleInput = {
    create?: XOR<Enumerable<LikeCreateWithoutArticleInput>, Enumerable<LikeUncheckedCreateWithoutArticleInput>>
    connectOrCreate?: Enumerable<LikeCreateOrConnectWithoutArticleInput>
    upsert?: Enumerable<LikeUpsertWithWhereUniqueWithoutArticleInput>
    createMany?: LikeCreateManyArticleInputEnvelope
    connect?: Enumerable<LikeWhereUniqueInput>
    set?: Enumerable<LikeWhereUniqueInput>
    disconnect?: Enumerable<LikeWhereUniqueInput>
    delete?: Enumerable<LikeWhereUniqueInput>
    update?: Enumerable<LikeUpdateWithWhereUniqueWithoutArticleInput>
    updateMany?: Enumerable<LikeUpdateManyWithWhereWithoutArticleInput>
    deleteMany?: Enumerable<LikeScalarWhereInput>
  }

  export type TagsOnArticlesUpdateManyWithoutArticleInput = {
    create?: XOR<Enumerable<TagsOnArticlesCreateWithoutArticleInput>, Enumerable<TagsOnArticlesUncheckedCreateWithoutArticleInput>>
    connectOrCreate?: Enumerable<TagsOnArticlesCreateOrConnectWithoutArticleInput>
    upsert?: Enumerable<TagsOnArticlesUpsertWithWhereUniqueWithoutArticleInput>
    createMany?: TagsOnArticlesCreateManyArticleInputEnvelope
    connect?: Enumerable<TagsOnArticlesWhereUniqueInput>
    set?: Enumerable<TagsOnArticlesWhereUniqueInput>
    disconnect?: Enumerable<TagsOnArticlesWhereUniqueInput>
    delete?: Enumerable<TagsOnArticlesWhereUniqueInput>
    update?: Enumerable<TagsOnArticlesUpdateWithWhereUniqueWithoutArticleInput>
    updateMany?: Enumerable<TagsOnArticlesUpdateManyWithWhereWithoutArticleInput>
    deleteMany?: Enumerable<TagsOnArticlesScalarWhereInput>
  }

  export type CommentUncheckedUpdateManyWithoutArticleInput = {
    create?: XOR<Enumerable<CommentCreateWithoutArticleInput>, Enumerable<CommentUncheckedCreateWithoutArticleInput>>
    connectOrCreate?: Enumerable<CommentCreateOrConnectWithoutArticleInput>
    upsert?: Enumerable<CommentUpsertWithWhereUniqueWithoutArticleInput>
    createMany?: CommentCreateManyArticleInputEnvelope
    connect?: Enumerable<CommentWhereUniqueInput>
    set?: Enumerable<CommentWhereUniqueInput>
    disconnect?: Enumerable<CommentWhereUniqueInput>
    delete?: Enumerable<CommentWhereUniqueInput>
    update?: Enumerable<CommentUpdateWithWhereUniqueWithoutArticleInput>
    updateMany?: Enumerable<CommentUpdateManyWithWhereWithoutArticleInput>
    deleteMany?: Enumerable<CommentScalarWhereInput>
  }

  export type ContentUncheckedUpdateOneWithoutArticleInput = {
    create?: XOR<ContentCreateWithoutArticleInput, ContentUncheckedCreateWithoutArticleInput>
    connectOrCreate?: ContentCreateOrConnectWithoutArticleInput
    upsert?: ContentUpsertWithoutArticleInput
    connect?: ContentWhereUniqueInput
    disconnect?: boolean
    delete?: boolean
    update?: XOR<ContentUpdateWithoutArticleInput, ContentUncheckedUpdateWithoutArticleInput>
  }

  export type FavoriteUncheckedUpdateManyWithoutArticleInput = {
    create?: XOR<Enumerable<FavoriteCreateWithoutArticleInput>, Enumerable<FavoriteUncheckedCreateWithoutArticleInput>>
    connectOrCreate?: Enumerable<FavoriteCreateOrConnectWithoutArticleInput>
    upsert?: Enumerable<FavoriteUpsertWithWhereUniqueWithoutArticleInput>
    createMany?: FavoriteCreateManyArticleInputEnvelope
    connect?: Enumerable<FavoriteWhereUniqueInput>
    set?: Enumerable<FavoriteWhereUniqueInput>
    disconnect?: Enumerable<FavoriteWhereUniqueInput>
    delete?: Enumerable<FavoriteWhereUniqueInput>
    update?: Enumerable<FavoriteUpdateWithWhereUniqueWithoutArticleInput>
    updateMany?: Enumerable<FavoriteUpdateManyWithWhereWithoutArticleInput>
    deleteMany?: Enumerable<FavoriteScalarWhereInput>
  }

  export type LikeUncheckedUpdateManyWithoutArticleInput = {
    create?: XOR<Enumerable<LikeCreateWithoutArticleInput>, Enumerable<LikeUncheckedCreateWithoutArticleInput>>
    connectOrCreate?: Enumerable<LikeCreateOrConnectWithoutArticleInput>
    upsert?: Enumerable<LikeUpsertWithWhereUniqueWithoutArticleInput>
    createMany?: LikeCreateManyArticleInputEnvelope
    connect?: Enumerable<LikeWhereUniqueInput>
    set?: Enumerable<LikeWhereUniqueInput>
    disconnect?: Enumerable<LikeWhereUniqueInput>
    delete?: Enumerable<LikeWhereUniqueInput>
    update?: Enumerable<LikeUpdateWithWhereUniqueWithoutArticleInput>
    updateMany?: Enumerable<LikeUpdateManyWithWhereWithoutArticleInput>
    deleteMany?: Enumerable<LikeScalarWhereInput>
  }

  export type TagsOnArticlesUncheckedUpdateManyWithoutArticleInput = {
    create?: XOR<Enumerable<TagsOnArticlesCreateWithoutArticleInput>, Enumerable<TagsOnArticlesUncheckedCreateWithoutArticleInput>>
    connectOrCreate?: Enumerable<TagsOnArticlesCreateOrConnectWithoutArticleInput>
    upsert?: Enumerable<TagsOnArticlesUpsertWithWhereUniqueWithoutArticleInput>
    createMany?: TagsOnArticlesCreateManyArticleInputEnvelope
    connect?: Enumerable<TagsOnArticlesWhereUniqueInput>
    set?: Enumerable<TagsOnArticlesWhereUniqueInput>
    disconnect?: Enumerable<TagsOnArticlesWhereUniqueInput>
    delete?: Enumerable<TagsOnArticlesWhereUniqueInput>
    update?: Enumerable<TagsOnArticlesUpdateWithWhereUniqueWithoutArticleInput>
    updateMany?: Enumerable<TagsOnArticlesUpdateManyWithWhereWithoutArticleInput>
    deleteMany?: Enumerable<TagsOnArticlesScalarWhereInput>
  }

  export type ArticleCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<ArticleCreateWithoutUserInput>, Enumerable<ArticleUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<ArticleCreateOrConnectWithoutUserInput>
    createMany?: ArticleCreateManyUserInputEnvelope
    connect?: Enumerable<ArticleWhereUniqueInput>
  }

  export type CommentCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<CommentCreateWithoutUserInput>, Enumerable<CommentUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<CommentCreateOrConnectWithoutUserInput>
    createMany?: CommentCreateManyUserInputEnvelope
    connect?: Enumerable<CommentWhereUniqueInput>
  }

  export type FavoriteCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<FavoriteCreateWithoutUserInput>, Enumerable<FavoriteUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<FavoriteCreateOrConnectWithoutUserInput>
    createMany?: FavoriteCreateManyUserInputEnvelope
    connect?: Enumerable<FavoriteWhereUniqueInput>
  }

  export type FollowerCreateNestedManyWithoutFollowerInput = {
    create?: XOR<Enumerable<FollowerCreateWithoutFollowerInput>, Enumerable<FollowerUncheckedCreateWithoutFollowerInput>>
    connectOrCreate?: Enumerable<FollowerCreateOrConnectWithoutFollowerInput>
    createMany?: FollowerCreateManyFollowerInputEnvelope
    connect?: Enumerable<FollowerWhereUniqueInput>
  }

  export type FollowerCreateNestedManyWithoutFollowingInput = {
    create?: XOR<Enumerable<FollowerCreateWithoutFollowingInput>, Enumerable<FollowerUncheckedCreateWithoutFollowingInput>>
    connectOrCreate?: Enumerable<FollowerCreateOrConnectWithoutFollowingInput>
    createMany?: FollowerCreateManyFollowingInputEnvelope
    connect?: Enumerable<FollowerWhereUniqueInput>
  }

  export type LikeCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<LikeCreateWithoutUserInput>, Enumerable<LikeUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<LikeCreateOrConnectWithoutUserInput>
    createMany?: LikeCreateManyUserInputEnvelope
    connect?: Enumerable<LikeWhereUniqueInput>
  }

  export type ArticleUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<ArticleCreateWithoutUserInput>, Enumerable<ArticleUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<ArticleCreateOrConnectWithoutUserInput>
    createMany?: ArticleCreateManyUserInputEnvelope
    connect?: Enumerable<ArticleWhereUniqueInput>
  }

  export type CommentUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<CommentCreateWithoutUserInput>, Enumerable<CommentUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<CommentCreateOrConnectWithoutUserInput>
    createMany?: CommentCreateManyUserInputEnvelope
    connect?: Enumerable<CommentWhereUniqueInput>
  }

  export type FavoriteUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<FavoriteCreateWithoutUserInput>, Enumerable<FavoriteUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<FavoriteCreateOrConnectWithoutUserInput>
    createMany?: FavoriteCreateManyUserInputEnvelope
    connect?: Enumerable<FavoriteWhereUniqueInput>
  }

  export type FollowerUncheckedCreateNestedManyWithoutFollowerInput = {
    create?: XOR<Enumerable<FollowerCreateWithoutFollowerInput>, Enumerable<FollowerUncheckedCreateWithoutFollowerInput>>
    connectOrCreate?: Enumerable<FollowerCreateOrConnectWithoutFollowerInput>
    createMany?: FollowerCreateManyFollowerInputEnvelope
    connect?: Enumerable<FollowerWhereUniqueInput>
  }

  export type FollowerUncheckedCreateNestedManyWithoutFollowingInput = {
    create?: XOR<Enumerable<FollowerCreateWithoutFollowingInput>, Enumerable<FollowerUncheckedCreateWithoutFollowingInput>>
    connectOrCreate?: Enumerable<FollowerCreateOrConnectWithoutFollowingInput>
    createMany?: FollowerCreateManyFollowingInputEnvelope
    connect?: Enumerable<FollowerWhereUniqueInput>
  }

  export type LikeUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<LikeCreateWithoutUserInput>, Enumerable<LikeUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<LikeCreateOrConnectWithoutUserInput>
    createMany?: LikeCreateManyUserInputEnvelope
    connect?: Enumerable<LikeWhereUniqueInput>
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type ArticleUpdateManyWithoutUserInput = {
    create?: XOR<Enumerable<ArticleCreateWithoutUserInput>, Enumerable<ArticleUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<ArticleCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<ArticleUpsertWithWhereUniqueWithoutUserInput>
    createMany?: ArticleCreateManyUserInputEnvelope
    connect?: Enumerable<ArticleWhereUniqueInput>
    set?: Enumerable<ArticleWhereUniqueInput>
    disconnect?: Enumerable<ArticleWhereUniqueInput>
    delete?: Enumerable<ArticleWhereUniqueInput>
    update?: Enumerable<ArticleUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<ArticleUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<ArticleScalarWhereInput>
  }

  export type CommentUpdateManyWithoutUserInput = {
    create?: XOR<Enumerable<CommentCreateWithoutUserInput>, Enumerable<CommentUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<CommentCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<CommentUpsertWithWhereUniqueWithoutUserInput>
    createMany?: CommentCreateManyUserInputEnvelope
    connect?: Enumerable<CommentWhereUniqueInput>
    set?: Enumerable<CommentWhereUniqueInput>
    disconnect?: Enumerable<CommentWhereUniqueInput>
    delete?: Enumerable<CommentWhereUniqueInput>
    update?: Enumerable<CommentUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<CommentUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<CommentScalarWhereInput>
  }

  export type FavoriteUpdateManyWithoutUserInput = {
    create?: XOR<Enumerable<FavoriteCreateWithoutUserInput>, Enumerable<FavoriteUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<FavoriteCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<FavoriteUpsertWithWhereUniqueWithoutUserInput>
    createMany?: FavoriteCreateManyUserInputEnvelope
    connect?: Enumerable<FavoriteWhereUniqueInput>
    set?: Enumerable<FavoriteWhereUniqueInput>
    disconnect?: Enumerable<FavoriteWhereUniqueInput>
    delete?: Enumerable<FavoriteWhereUniqueInput>
    update?: Enumerable<FavoriteUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<FavoriteUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<FavoriteScalarWhereInput>
  }

  export type FollowerUpdateManyWithoutFollowerInput = {
    create?: XOR<Enumerable<FollowerCreateWithoutFollowerInput>, Enumerable<FollowerUncheckedCreateWithoutFollowerInput>>
    connectOrCreate?: Enumerable<FollowerCreateOrConnectWithoutFollowerInput>
    upsert?: Enumerable<FollowerUpsertWithWhereUniqueWithoutFollowerInput>
    createMany?: FollowerCreateManyFollowerInputEnvelope
    connect?: Enumerable<FollowerWhereUniqueInput>
    set?: Enumerable<FollowerWhereUniqueInput>
    disconnect?: Enumerable<FollowerWhereUniqueInput>
    delete?: Enumerable<FollowerWhereUniqueInput>
    update?: Enumerable<FollowerUpdateWithWhereUniqueWithoutFollowerInput>
    updateMany?: Enumerable<FollowerUpdateManyWithWhereWithoutFollowerInput>
    deleteMany?: Enumerable<FollowerScalarWhereInput>
  }

  export type FollowerUpdateManyWithoutFollowingInput = {
    create?: XOR<Enumerable<FollowerCreateWithoutFollowingInput>, Enumerable<FollowerUncheckedCreateWithoutFollowingInput>>
    connectOrCreate?: Enumerable<FollowerCreateOrConnectWithoutFollowingInput>
    upsert?: Enumerable<FollowerUpsertWithWhereUniqueWithoutFollowingInput>
    createMany?: FollowerCreateManyFollowingInputEnvelope
    connect?: Enumerable<FollowerWhereUniqueInput>
    set?: Enumerable<FollowerWhereUniqueInput>
    disconnect?: Enumerable<FollowerWhereUniqueInput>
    delete?: Enumerable<FollowerWhereUniqueInput>
    update?: Enumerable<FollowerUpdateWithWhereUniqueWithoutFollowingInput>
    updateMany?: Enumerable<FollowerUpdateManyWithWhereWithoutFollowingInput>
    deleteMany?: Enumerable<FollowerScalarWhereInput>
  }

  export type LikeUpdateManyWithoutUserInput = {
    create?: XOR<Enumerable<LikeCreateWithoutUserInput>, Enumerable<LikeUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<LikeCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<LikeUpsertWithWhereUniqueWithoutUserInput>
    createMany?: LikeCreateManyUserInputEnvelope
    connect?: Enumerable<LikeWhereUniqueInput>
    set?: Enumerable<LikeWhereUniqueInput>
    disconnect?: Enumerable<LikeWhereUniqueInput>
    delete?: Enumerable<LikeWhereUniqueInput>
    update?: Enumerable<LikeUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<LikeUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<LikeScalarWhereInput>
  }

  export type ArticleUncheckedUpdateManyWithoutUserInput = {
    create?: XOR<Enumerable<ArticleCreateWithoutUserInput>, Enumerable<ArticleUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<ArticleCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<ArticleUpsertWithWhereUniqueWithoutUserInput>
    createMany?: ArticleCreateManyUserInputEnvelope
    connect?: Enumerable<ArticleWhereUniqueInput>
    set?: Enumerable<ArticleWhereUniqueInput>
    disconnect?: Enumerable<ArticleWhereUniqueInput>
    delete?: Enumerable<ArticleWhereUniqueInput>
    update?: Enumerable<ArticleUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<ArticleUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<ArticleScalarWhereInput>
  }

  export type CommentUncheckedUpdateManyWithoutUserInput = {
    create?: XOR<Enumerable<CommentCreateWithoutUserInput>, Enumerable<CommentUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<CommentCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<CommentUpsertWithWhereUniqueWithoutUserInput>
    createMany?: CommentCreateManyUserInputEnvelope
    connect?: Enumerable<CommentWhereUniqueInput>
    set?: Enumerable<CommentWhereUniqueInput>
    disconnect?: Enumerable<CommentWhereUniqueInput>
    delete?: Enumerable<CommentWhereUniqueInput>
    update?: Enumerable<CommentUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<CommentUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<CommentScalarWhereInput>
  }

  export type FavoriteUncheckedUpdateManyWithoutUserInput = {
    create?: XOR<Enumerable<FavoriteCreateWithoutUserInput>, Enumerable<FavoriteUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<FavoriteCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<FavoriteUpsertWithWhereUniqueWithoutUserInput>
    createMany?: FavoriteCreateManyUserInputEnvelope
    connect?: Enumerable<FavoriteWhereUniqueInput>
    set?: Enumerable<FavoriteWhereUniqueInput>
    disconnect?: Enumerable<FavoriteWhereUniqueInput>
    delete?: Enumerable<FavoriteWhereUniqueInput>
    update?: Enumerable<FavoriteUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<FavoriteUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<FavoriteScalarWhereInput>
  }

  export type FollowerUncheckedUpdateManyWithoutFollowerInput = {
    create?: XOR<Enumerable<FollowerCreateWithoutFollowerInput>, Enumerable<FollowerUncheckedCreateWithoutFollowerInput>>
    connectOrCreate?: Enumerable<FollowerCreateOrConnectWithoutFollowerInput>
    upsert?: Enumerable<FollowerUpsertWithWhereUniqueWithoutFollowerInput>
    createMany?: FollowerCreateManyFollowerInputEnvelope
    connect?: Enumerable<FollowerWhereUniqueInput>
    set?: Enumerable<FollowerWhereUniqueInput>
    disconnect?: Enumerable<FollowerWhereUniqueInput>
    delete?: Enumerable<FollowerWhereUniqueInput>
    update?: Enumerable<FollowerUpdateWithWhereUniqueWithoutFollowerInput>
    updateMany?: Enumerable<FollowerUpdateManyWithWhereWithoutFollowerInput>
    deleteMany?: Enumerable<FollowerScalarWhereInput>
  }

  export type FollowerUncheckedUpdateManyWithoutFollowingInput = {
    create?: XOR<Enumerable<FollowerCreateWithoutFollowingInput>, Enumerable<FollowerUncheckedCreateWithoutFollowingInput>>
    connectOrCreate?: Enumerable<FollowerCreateOrConnectWithoutFollowingInput>
    upsert?: Enumerable<FollowerUpsertWithWhereUniqueWithoutFollowingInput>
    createMany?: FollowerCreateManyFollowingInputEnvelope
    connect?: Enumerable<FollowerWhereUniqueInput>
    set?: Enumerable<FollowerWhereUniqueInput>
    disconnect?: Enumerable<FollowerWhereUniqueInput>
    delete?: Enumerable<FollowerWhereUniqueInput>
    update?: Enumerable<FollowerUpdateWithWhereUniqueWithoutFollowingInput>
    updateMany?: Enumerable<FollowerUpdateManyWithWhereWithoutFollowingInput>
    deleteMany?: Enumerable<FollowerScalarWhereInput>
  }

  export type LikeUncheckedUpdateManyWithoutUserInput = {
    create?: XOR<Enumerable<LikeCreateWithoutUserInput>, Enumerable<LikeUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<LikeCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<LikeUpsertWithWhereUniqueWithoutUserInput>
    createMany?: LikeCreateManyUserInputEnvelope
    connect?: Enumerable<LikeWhereUniqueInput>
    set?: Enumerable<LikeWhereUniqueInput>
    disconnect?: Enumerable<LikeWhereUniqueInput>
    delete?: Enumerable<LikeWhereUniqueInput>
    update?: Enumerable<LikeUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<LikeUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<LikeScalarWhereInput>
  }

  export type TagsOnArticlesCreateNestedManyWithoutTagInput = {
    create?: XOR<Enumerable<TagsOnArticlesCreateWithoutTagInput>, Enumerable<TagsOnArticlesUncheckedCreateWithoutTagInput>>
    connectOrCreate?: Enumerable<TagsOnArticlesCreateOrConnectWithoutTagInput>
    createMany?: TagsOnArticlesCreateManyTagInputEnvelope
    connect?: Enumerable<TagsOnArticlesWhereUniqueInput>
  }

  export type TagsOnArticlesUncheckedCreateNestedManyWithoutTagInput = {
    create?: XOR<Enumerable<TagsOnArticlesCreateWithoutTagInput>, Enumerable<TagsOnArticlesUncheckedCreateWithoutTagInput>>
    connectOrCreate?: Enumerable<TagsOnArticlesCreateOrConnectWithoutTagInput>
    createMany?: TagsOnArticlesCreateManyTagInputEnvelope
    connect?: Enumerable<TagsOnArticlesWhereUniqueInput>
  }

  export type TagsOnArticlesUpdateManyWithoutTagInput = {
    create?: XOR<Enumerable<TagsOnArticlesCreateWithoutTagInput>, Enumerable<TagsOnArticlesUncheckedCreateWithoutTagInput>>
    connectOrCreate?: Enumerable<TagsOnArticlesCreateOrConnectWithoutTagInput>
    upsert?: Enumerable<TagsOnArticlesUpsertWithWhereUniqueWithoutTagInput>
    createMany?: TagsOnArticlesCreateManyTagInputEnvelope
    connect?: Enumerable<TagsOnArticlesWhereUniqueInput>
    set?: Enumerable<TagsOnArticlesWhereUniqueInput>
    disconnect?: Enumerable<TagsOnArticlesWhereUniqueInput>
    delete?: Enumerable<TagsOnArticlesWhereUniqueInput>
    update?: Enumerable<TagsOnArticlesUpdateWithWhereUniqueWithoutTagInput>
    updateMany?: Enumerable<TagsOnArticlesUpdateManyWithWhereWithoutTagInput>
    deleteMany?: Enumerable<TagsOnArticlesScalarWhereInput>
  }

  export type TagsOnArticlesUncheckedUpdateManyWithoutTagInput = {
    create?: XOR<Enumerable<TagsOnArticlesCreateWithoutTagInput>, Enumerable<TagsOnArticlesUncheckedCreateWithoutTagInput>>
    connectOrCreate?: Enumerable<TagsOnArticlesCreateOrConnectWithoutTagInput>
    upsert?: Enumerable<TagsOnArticlesUpsertWithWhereUniqueWithoutTagInput>
    createMany?: TagsOnArticlesCreateManyTagInputEnvelope
    connect?: Enumerable<TagsOnArticlesWhereUniqueInput>
    set?: Enumerable<TagsOnArticlesWhereUniqueInput>
    disconnect?: Enumerable<TagsOnArticlesWhereUniqueInput>
    delete?: Enumerable<TagsOnArticlesWhereUniqueInput>
    update?: Enumerable<TagsOnArticlesUpdateWithWhereUniqueWithoutTagInput>
    updateMany?: Enumerable<TagsOnArticlesUpdateManyWithWhereWithoutTagInput>
    deleteMany?: Enumerable<TagsOnArticlesScalarWhereInput>
  }

  export type ArticleCreateNestedManyWithoutCategoryInput = {
    create?: XOR<Enumerable<ArticleCreateWithoutCategoryInput>, Enumerable<ArticleUncheckedCreateWithoutCategoryInput>>
    connectOrCreate?: Enumerable<ArticleCreateOrConnectWithoutCategoryInput>
    createMany?: ArticleCreateManyCategoryInputEnvelope
    connect?: Enumerable<ArticleWhereUniqueInput>
  }

  export type ArticleUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<Enumerable<ArticleCreateWithoutCategoryInput>, Enumerable<ArticleUncheckedCreateWithoutCategoryInput>>
    connectOrCreate?: Enumerable<ArticleCreateOrConnectWithoutCategoryInput>
    createMany?: ArticleCreateManyCategoryInputEnvelope
    connect?: Enumerable<ArticleWhereUniqueInput>
  }

  export type ArticleUpdateManyWithoutCategoryInput = {
    create?: XOR<Enumerable<ArticleCreateWithoutCategoryInput>, Enumerable<ArticleUncheckedCreateWithoutCategoryInput>>
    connectOrCreate?: Enumerable<ArticleCreateOrConnectWithoutCategoryInput>
    upsert?: Enumerable<ArticleUpsertWithWhereUniqueWithoutCategoryInput>
    createMany?: ArticleCreateManyCategoryInputEnvelope
    connect?: Enumerable<ArticleWhereUniqueInput>
    set?: Enumerable<ArticleWhereUniqueInput>
    disconnect?: Enumerable<ArticleWhereUniqueInput>
    delete?: Enumerable<ArticleWhereUniqueInput>
    update?: Enumerable<ArticleUpdateWithWhereUniqueWithoutCategoryInput>
    updateMany?: Enumerable<ArticleUpdateManyWithWhereWithoutCategoryInput>
    deleteMany?: Enumerable<ArticleScalarWhereInput>
  }

  export type ArticleUncheckedUpdateManyWithoutCategoryInput = {
    create?: XOR<Enumerable<ArticleCreateWithoutCategoryInput>, Enumerable<ArticleUncheckedCreateWithoutCategoryInput>>
    connectOrCreate?: Enumerable<ArticleCreateOrConnectWithoutCategoryInput>
    upsert?: Enumerable<ArticleUpsertWithWhereUniqueWithoutCategoryInput>
    createMany?: ArticleCreateManyCategoryInputEnvelope
    connect?: Enumerable<ArticleWhereUniqueInput>
    set?: Enumerable<ArticleWhereUniqueInput>
    disconnect?: Enumerable<ArticleWhereUniqueInput>
    delete?: Enumerable<ArticleWhereUniqueInput>
    update?: Enumerable<ArticleUpdateWithWhereUniqueWithoutCategoryInput>
    updateMany?: Enumerable<ArticleUpdateManyWithWhereWithoutCategoryInput>
    deleteMany?: Enumerable<ArticleScalarWhereInput>
  }

  export type ArticleCreateNestedOneWithoutCommentsInput = {
    create?: XOR<ArticleCreateWithoutCommentsInput, ArticleUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: ArticleCreateOrConnectWithoutCommentsInput
    connect?: ArticleWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutCommentsInput = {
    create?: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCommentsInput
    connect?: UserWhereUniqueInput
  }

  export type ArticleUpdateOneRequiredWithoutCommentsInput = {
    create?: XOR<ArticleCreateWithoutCommentsInput, ArticleUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: ArticleCreateOrConnectWithoutCommentsInput
    upsert?: ArticleUpsertWithoutCommentsInput
    connect?: ArticleWhereUniqueInput
    update?: XOR<ArticleUpdateWithoutCommentsInput, ArticleUncheckedUpdateWithoutCommentsInput>
  }

  export type UserUpdateOneRequiredWithoutCommentsInput = {
    create?: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCommentsInput
    upsert?: UserUpsertWithoutCommentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutCommentsInput, UserUncheckedUpdateWithoutCommentsInput>
  }

  export type ArticleCreateNestedOneWithoutFavoritingsInput = {
    create?: XOR<ArticleCreateWithoutFavoritingsInput, ArticleUncheckedCreateWithoutFavoritingsInput>
    connectOrCreate?: ArticleCreateOrConnectWithoutFavoritingsInput
    connect?: ArticleWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutFavoritesInput = {
    create?: XOR<UserCreateWithoutFavoritesInput, UserUncheckedCreateWithoutFavoritesInput>
    connectOrCreate?: UserCreateOrConnectWithoutFavoritesInput
    connect?: UserWhereUniqueInput
  }

  export type ArticleUpdateOneRequiredWithoutFavoritingsInput = {
    create?: XOR<ArticleCreateWithoutFavoritingsInput, ArticleUncheckedCreateWithoutFavoritingsInput>
    connectOrCreate?: ArticleCreateOrConnectWithoutFavoritingsInput
    upsert?: ArticleUpsertWithoutFavoritingsInput
    connect?: ArticleWhereUniqueInput
    update?: XOR<ArticleUpdateWithoutFavoritingsInput, ArticleUncheckedUpdateWithoutFavoritingsInput>
  }

  export type UserUpdateOneRequiredWithoutFavoritesInput = {
    create?: XOR<UserCreateWithoutFavoritesInput, UserUncheckedCreateWithoutFavoritesInput>
    connectOrCreate?: UserCreateOrConnectWithoutFavoritesInput
    upsert?: UserUpsertWithoutFavoritesInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutFavoritesInput, UserUncheckedUpdateWithoutFavoritesInput>
  }

  export type ArticleCreateNestedOneWithoutContentInput = {
    create?: XOR<ArticleCreateWithoutContentInput, ArticleUncheckedCreateWithoutContentInput>
    connectOrCreate?: ArticleCreateOrConnectWithoutContentInput
    connect?: ArticleWhereUniqueInput
  }

  export type ArticleUpdateOneRequiredWithoutContentInput = {
    create?: XOR<ArticleCreateWithoutContentInput, ArticleUncheckedCreateWithoutContentInput>
    connectOrCreate?: ArticleCreateOrConnectWithoutContentInput
    upsert?: ArticleUpsertWithoutContentInput
    connect?: ArticleWhereUniqueInput
    update?: XOR<ArticleUpdateWithoutContentInput, ArticleUncheckedUpdateWithoutContentInput>
  }

  export type ArticleCreateNestedOneWithoutLikesInput = {
    create?: XOR<ArticleCreateWithoutLikesInput, ArticleUncheckedCreateWithoutLikesInput>
    connectOrCreate?: ArticleCreateOrConnectWithoutLikesInput
    connect?: ArticleWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutLikesInput = {
    create?: XOR<UserCreateWithoutLikesInput, UserUncheckedCreateWithoutLikesInput>
    connectOrCreate?: UserCreateOrConnectWithoutLikesInput
    connect?: UserWhereUniqueInput
  }

  export type ArticleUpdateOneRequiredWithoutLikesInput = {
    create?: XOR<ArticleCreateWithoutLikesInput, ArticleUncheckedCreateWithoutLikesInput>
    connectOrCreate?: ArticleCreateOrConnectWithoutLikesInput
    upsert?: ArticleUpsertWithoutLikesInput
    connect?: ArticleWhereUniqueInput
    update?: XOR<ArticleUpdateWithoutLikesInput, ArticleUncheckedUpdateWithoutLikesInput>
  }

  export type UserUpdateOneRequiredWithoutLikesInput = {
    create?: XOR<UserCreateWithoutLikesInput, UserUncheckedCreateWithoutLikesInput>
    connectOrCreate?: UserCreateOrConnectWithoutLikesInput
    upsert?: UserUpsertWithoutLikesInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutLikesInput, UserUncheckedUpdateWithoutLikesInput>
  }

  export type ArticleCreateNestedOneWithoutTagsInput = {
    create?: XOR<ArticleCreateWithoutTagsInput, ArticleUncheckedCreateWithoutTagsInput>
    connectOrCreate?: ArticleCreateOrConnectWithoutTagsInput
    connect?: ArticleWhereUniqueInput
  }

  export type TagCreateNestedOneWithoutArticlesInput = {
    create?: XOR<TagCreateWithoutArticlesInput, TagUncheckedCreateWithoutArticlesInput>
    connectOrCreate?: TagCreateOrConnectWithoutArticlesInput
    connect?: TagWhereUniqueInput
  }

  export type ArticleUpdateOneRequiredWithoutTagsInput = {
    create?: XOR<ArticleCreateWithoutTagsInput, ArticleUncheckedCreateWithoutTagsInput>
    connectOrCreate?: ArticleCreateOrConnectWithoutTagsInput
    upsert?: ArticleUpsertWithoutTagsInput
    connect?: ArticleWhereUniqueInput
    update?: XOR<ArticleUpdateWithoutTagsInput, ArticleUncheckedUpdateWithoutTagsInput>
  }

  export type TagUpdateOneRequiredWithoutArticlesInput = {
    create?: XOR<TagCreateWithoutArticlesInput, TagUncheckedCreateWithoutArticlesInput>
    connectOrCreate?: TagCreateOrConnectWithoutArticlesInput
    upsert?: TagUpsertWithoutArticlesInput
    connect?: TagWhereUniqueInput
    update?: XOR<TagUpdateWithoutArticlesInput, TagUncheckedUpdateWithoutArticlesInput>
  }

  export type UserCreateNestedOneWithoutFollowersInput = {
    create?: XOR<UserCreateWithoutFollowersInput, UserUncheckedCreateWithoutFollowersInput>
    connectOrCreate?: UserCreateOrConnectWithoutFollowersInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutFollowingsInput = {
    create?: XOR<UserCreateWithoutFollowingsInput, UserUncheckedCreateWithoutFollowingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutFollowingsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutFollowersInput = {
    create?: XOR<UserCreateWithoutFollowersInput, UserUncheckedCreateWithoutFollowersInput>
    connectOrCreate?: UserCreateOrConnectWithoutFollowersInput
    upsert?: UserUpsertWithoutFollowersInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutFollowersInput, UserUncheckedUpdateWithoutFollowersInput>
  }

  export type UserUpdateOneRequiredWithoutFollowingsInput = {
    create?: XOR<UserCreateWithoutFollowingsInput, UserUncheckedCreateWithoutFollowingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutFollowingsInput
    upsert?: UserUpsertWithoutFollowingsInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutFollowingsInput, UserUncheckedUpdateWithoutFollowingsInput>
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedBoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type NestedStringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type NestedEnumArticleStatusFilter = {
    equals?: ArticleStatus
    in?: Enumerable<ArticleStatus>
    notIn?: Enumerable<ArticleStatus>
    not?: NestedEnumArticleStatusFilter | ArticleStatus
  }

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    count?: NestedIntFilter
    _avg?: NestedFloatFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    sum?: NestedIntFilter
    _min?: NestedIntFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    min?: NestedIntFilter
    _max?: NestedIntFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    max?: NestedIntFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    count?: NestedIntFilter
    _min?: NestedStringFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    min?: NestedStringFilter
    _max?: NestedStringFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    max?: NestedStringFilter
  }

  export type NestedBoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    count?: NestedIntFilter
    _min?: NestedBoolFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    min?: NestedBoolFilter
    _max?: NestedBoolFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    max?: NestedBoolFilter
  }

  export type NestedStringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    max?: NestedStringNullableFilter
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }
  export type NestedJsonNullableFilter = 
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase>, Exclude<keyof Required<NestedJsonNullableFilterBase>, 'path'>>,
        Required<NestedJsonNullableFilterBase>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase>, 'path'>>

  export type NestedJsonNullableFilterBase = {
    equals?: InputJsonValue | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    path?: string
    string_contains?: string
    string_starts_with?: string
    string_ends_with?: string
    array_contains?: InputJsonValue
    array_starts_with?: InputJsonValue
    array_ends_with?: InputJsonValue
    not?: InputJsonValue | null
  }

  export type NestedEnumArticleStatusWithAggregatesFilter = {
    equals?: ArticleStatus
    in?: Enumerable<ArticleStatus>
    notIn?: Enumerable<ArticleStatus>
    not?: NestedEnumArticleStatusWithAggregatesFilter | ArticleStatus
    _count?: NestedIntFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    count?: NestedIntFilter
    _min?: NestedEnumArticleStatusFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    min?: NestedEnumArticleStatusFilter
    _max?: NestedEnumArticleStatusFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    max?: NestedEnumArticleStatusFilter
  }

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    max?: NestedDateTimeFilter
  }

  export type NestedDateTimeNullableFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableFilter | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableWithAggregatesFilter | Date | string | null
    _count?: NestedIntNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    count?: NestedIntNullableFilter
    _min?: NestedDateTimeNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    min?: NestedDateTimeNullableFilter
    _max?: NestedDateTimeNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    max?: NestedDateTimeNullableFilter
  }
  export type NestedJsonFilter = 
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase>, Exclude<keyof Required<NestedJsonFilterBase>, 'path'>>,
        Required<NestedJsonFilterBase>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase>, 'path'>>

  export type NestedJsonFilterBase = {
    equals?: InputJsonValue
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    path?: string
    string_contains?: string
    string_starts_with?: string
    string_ends_with?: string
    array_contains?: InputJsonValue
    array_starts_with?: InputJsonValue
    array_ends_with?: InputJsonValue
    not?: InputJsonValue
  }

  export type CategoryCreateWithoutArticlesInput = {
    slug: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    article_count?: number
    meta?: InputJsonValue | null
  }

  export type CategoryUncheckedCreateWithoutArticlesInput = {
    id?: number
    slug: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    article_count?: number
    meta?: InputJsonValue | null
  }

  export type CategoryCreateOrConnectWithoutArticlesInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutArticlesInput, CategoryUncheckedCreateWithoutArticlesInput>
  }

  export type UserCreateWithoutArticlesInput = {
    email?: string | null
    name: string
    slug: string
    url?: string | null
    meta?: InputJsonValue | null
    cover?: string | null
    bio?: string | null
    description?: string | null
    mobile?: string | null
    openid?: string | null
    password: string
    loggedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    deleteAt?: Date | string | null
    avatar?: string | null
    updatedPwdAt?: Date | string
    comments?: CommentCreateNestedManyWithoutUserInput
    favorites?: FavoriteCreateNestedManyWithoutUserInput
    followers?: FollowerCreateNestedManyWithoutFollowerInput
    followings?: FollowerCreateNestedManyWithoutFollowingInput
    likes?: LikeCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutArticlesInput = {
    id?: number
    email?: string | null
    name: string
    slug: string
    url?: string | null
    meta?: InputJsonValue | null
    cover?: string | null
    bio?: string | null
    description?: string | null
    mobile?: string | null
    openid?: string | null
    password: string
    loggedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    deleteAt?: Date | string | null
    avatar?: string | null
    updatedPwdAt?: Date | string
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    favorites?: FavoriteUncheckedCreateNestedManyWithoutUserInput
    followers?: FollowerUncheckedCreateNestedManyWithoutFollowerInput
    followings?: FollowerUncheckedCreateNestedManyWithoutFollowingInput
    likes?: LikeUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutArticlesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutArticlesInput, UserUncheckedCreateWithoutArticlesInput>
  }

  export type CommentCreateWithoutArticleInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutCommentsInput
  }

  export type CommentUncheckedCreateWithoutArticleInput = {
    id?: number
    userId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommentCreateOrConnectWithoutArticleInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutArticleInput, CommentUncheckedCreateWithoutArticleInput>
  }

  export type CommentCreateManyArticleInputEnvelope = {
    data: Enumerable<CommentCreateManyArticleInput>
    skipDuplicates?: boolean
  }

  export type ContentCreateWithoutArticleInput = {
    html?: string | null
    markdown?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContentUncheckedCreateWithoutArticleInput = {
    id?: number
    html?: string | null
    markdown?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContentCreateOrConnectWithoutArticleInput = {
    where: ContentWhereUniqueInput
    create: XOR<ContentCreateWithoutArticleInput, ContentUncheckedCreateWithoutArticleInput>
  }

  export type FavoriteCreateWithoutArticleInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutFavoritesInput
  }

  export type FavoriteUncheckedCreateWithoutArticleInput = {
    id?: number
    userId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FavoriteCreateOrConnectWithoutArticleInput = {
    where: FavoriteWhereUniqueInput
    create: XOR<FavoriteCreateWithoutArticleInput, FavoriteUncheckedCreateWithoutArticleInput>
  }

  export type FavoriteCreateManyArticleInputEnvelope = {
    data: Enumerable<FavoriteCreateManyArticleInput>
    skipDuplicates?: boolean
  }

  export type LikeCreateWithoutArticleInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutLikesInput
  }

  export type LikeUncheckedCreateWithoutArticleInput = {
    id?: number
    userId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LikeCreateOrConnectWithoutArticleInput = {
    where: LikeWhereUniqueInput
    create: XOR<LikeCreateWithoutArticleInput, LikeUncheckedCreateWithoutArticleInput>
  }

  export type LikeCreateManyArticleInputEnvelope = {
    data: Enumerable<LikeCreateManyArticleInput>
    skipDuplicates?: boolean
  }

  export type TagsOnArticlesCreateWithoutArticleInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    tag: TagCreateNestedOneWithoutArticlesInput
  }

  export type TagsOnArticlesUncheckedCreateWithoutArticleInput = {
    tagId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TagsOnArticlesCreateOrConnectWithoutArticleInput = {
    where: TagsOnArticlesWhereUniqueInput
    create: XOR<TagsOnArticlesCreateWithoutArticleInput, TagsOnArticlesUncheckedCreateWithoutArticleInput>
  }

  export type TagsOnArticlesCreateManyArticleInputEnvelope = {
    data: Enumerable<TagsOnArticlesCreateManyArticleInput>
    skipDuplicates?: boolean
  }

  export type CategoryUpsertWithoutArticlesInput = {
    update: XOR<CategoryUpdateWithoutArticlesInput, CategoryUncheckedUpdateWithoutArticlesInput>
    create: XOR<CategoryCreateWithoutArticlesInput, CategoryUncheckedCreateWithoutArticlesInput>
  }

  export type CategoryUpdateWithoutArticlesInput = {
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    article_count?: IntFieldUpdateOperationsInput | number
    meta?: InputJsonValue | null
  }

  export type CategoryUncheckedUpdateWithoutArticlesInput = {
    id?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    article_count?: IntFieldUpdateOperationsInput | number
    meta?: InputJsonValue | null
  }

  export type UserUpsertWithoutArticlesInput = {
    update: XOR<UserUpdateWithoutArticlesInput, UserUncheckedUpdateWithoutArticlesInput>
    create: XOR<UserCreateWithoutArticlesInput, UserUncheckedCreateWithoutArticlesInput>
  }

  export type UserUpdateWithoutArticlesInput = {
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    meta?: InputJsonValue | null
    cover?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    openid?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    loggedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleteAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    updatedPwdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: CommentUpdateManyWithoutUserInput
    favorites?: FavoriteUpdateManyWithoutUserInput
    followers?: FollowerUpdateManyWithoutFollowerInput
    followings?: FollowerUpdateManyWithoutFollowingInput
    likes?: LikeUpdateManyWithoutUserInput
  }

  export type UserUncheckedUpdateWithoutArticlesInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    meta?: InputJsonValue | null
    cover?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    openid?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    loggedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleteAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    updatedPwdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: CommentUncheckedUpdateManyWithoutUserInput
    favorites?: FavoriteUncheckedUpdateManyWithoutUserInput
    followers?: FollowerUncheckedUpdateManyWithoutFollowerInput
    followings?: FollowerUncheckedUpdateManyWithoutFollowingInput
    likes?: LikeUncheckedUpdateManyWithoutUserInput
  }

  export type CommentUpsertWithWhereUniqueWithoutArticleInput = {
    where: CommentWhereUniqueInput
    update: XOR<CommentUpdateWithoutArticleInput, CommentUncheckedUpdateWithoutArticleInput>
    create: XOR<CommentCreateWithoutArticleInput, CommentUncheckedCreateWithoutArticleInput>
  }

  export type CommentUpdateWithWhereUniqueWithoutArticleInput = {
    where: CommentWhereUniqueInput
    data: XOR<CommentUpdateWithoutArticleInput, CommentUncheckedUpdateWithoutArticleInput>
  }

  export type CommentUpdateManyWithWhereWithoutArticleInput = {
    where: CommentScalarWhereInput
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyWithoutCommentsInput>
  }

  export type CommentScalarWhereInput = {
    AND?: Enumerable<CommentScalarWhereInput>
    OR?: Enumerable<CommentScalarWhereInput>
    NOT?: Enumerable<CommentScalarWhereInput>
    id?: IntFilter | number
    articleId?: IntFilter | number
    userId?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type ContentUpsertWithoutArticleInput = {
    update: XOR<ContentUpdateWithoutArticleInput, ContentUncheckedUpdateWithoutArticleInput>
    create: XOR<ContentCreateWithoutArticleInput, ContentUncheckedCreateWithoutArticleInput>
  }

  export type ContentUpdateWithoutArticleInput = {
    html?: NullableStringFieldUpdateOperationsInput | string | null
    markdown?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContentUncheckedUpdateWithoutArticleInput = {
    id?: IntFieldUpdateOperationsInput | number
    html?: NullableStringFieldUpdateOperationsInput | string | null
    markdown?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoriteUpsertWithWhereUniqueWithoutArticleInput = {
    where: FavoriteWhereUniqueInput
    update: XOR<FavoriteUpdateWithoutArticleInput, FavoriteUncheckedUpdateWithoutArticleInput>
    create: XOR<FavoriteCreateWithoutArticleInput, FavoriteUncheckedCreateWithoutArticleInput>
  }

  export type FavoriteUpdateWithWhereUniqueWithoutArticleInput = {
    where: FavoriteWhereUniqueInput
    data: XOR<FavoriteUpdateWithoutArticleInput, FavoriteUncheckedUpdateWithoutArticleInput>
  }

  export type FavoriteUpdateManyWithWhereWithoutArticleInput = {
    where: FavoriteScalarWhereInput
    data: XOR<FavoriteUpdateManyMutationInput, FavoriteUncheckedUpdateManyWithoutFavoritingsInput>
  }

  export type FavoriteScalarWhereInput = {
    AND?: Enumerable<FavoriteScalarWhereInput>
    OR?: Enumerable<FavoriteScalarWhereInput>
    NOT?: Enumerable<FavoriteScalarWhereInput>
    id?: IntFilter | number
    userId?: IntFilter | number
    articleId?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type LikeUpsertWithWhereUniqueWithoutArticleInput = {
    where: LikeWhereUniqueInput
    update: XOR<LikeUpdateWithoutArticleInput, LikeUncheckedUpdateWithoutArticleInput>
    create: XOR<LikeCreateWithoutArticleInput, LikeUncheckedCreateWithoutArticleInput>
  }

  export type LikeUpdateWithWhereUniqueWithoutArticleInput = {
    where: LikeWhereUniqueInput
    data: XOR<LikeUpdateWithoutArticleInput, LikeUncheckedUpdateWithoutArticleInput>
  }

  export type LikeUpdateManyWithWhereWithoutArticleInput = {
    where: LikeScalarWhereInput
    data: XOR<LikeUpdateManyMutationInput, LikeUncheckedUpdateManyWithoutLikesInput>
  }

  export type LikeScalarWhereInput = {
    AND?: Enumerable<LikeScalarWhereInput>
    OR?: Enumerable<LikeScalarWhereInput>
    NOT?: Enumerable<LikeScalarWhereInput>
    id?: IntFilter | number
    userId?: IntFilter | number
    articleId?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type TagsOnArticlesUpsertWithWhereUniqueWithoutArticleInput = {
    where: TagsOnArticlesWhereUniqueInput
    update: XOR<TagsOnArticlesUpdateWithoutArticleInput, TagsOnArticlesUncheckedUpdateWithoutArticleInput>
    create: XOR<TagsOnArticlesCreateWithoutArticleInput, TagsOnArticlesUncheckedCreateWithoutArticleInput>
  }

  export type TagsOnArticlesUpdateWithWhereUniqueWithoutArticleInput = {
    where: TagsOnArticlesWhereUniqueInput
    data: XOR<TagsOnArticlesUpdateWithoutArticleInput, TagsOnArticlesUncheckedUpdateWithoutArticleInput>
  }

  export type TagsOnArticlesUpdateManyWithWhereWithoutArticleInput = {
    where: TagsOnArticlesScalarWhereInput
    data: XOR<TagsOnArticlesUpdateManyMutationInput, TagsOnArticlesUncheckedUpdateManyWithoutTagsInput>
  }

  export type TagsOnArticlesScalarWhereInput = {
    AND?: Enumerable<TagsOnArticlesScalarWhereInput>
    OR?: Enumerable<TagsOnArticlesScalarWhereInput>
    NOT?: Enumerable<TagsOnArticlesScalarWhereInput>
    articleId?: IntFilter | number
    tagId?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type ArticleCreateWithoutUserInput = {
    title: string
    public?: boolean
    slug: string
    image?: string | null
    excerpt?: string | null
    meta?: InputJsonValue | null
    cover?: string | null
    status?: ArticleStatus
    browseCount?: number
    commentsCount?: number
    likesCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    category: CategoryCreateNestedOneWithoutArticlesInput
    comments?: CommentCreateNestedManyWithoutArticleInput
    content?: ContentCreateNestedOneWithoutArticleInput
    favoritings?: FavoriteCreateNestedManyWithoutArticleInput
    likes?: LikeCreateNestedManyWithoutArticleInput
    tags?: TagsOnArticlesCreateNestedManyWithoutArticleInput
  }

  export type ArticleUncheckedCreateWithoutUserInput = {
    id?: number
    title: string
    public?: boolean
    slug: string
    image?: string | null
    excerpt?: string | null
    meta?: InputJsonValue | null
    cover?: string | null
    status?: ArticleStatus
    browseCount?: number
    commentsCount?: number
    likesCount?: number
    categoryId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    comments?: CommentUncheckedCreateNestedManyWithoutArticleInput
    content?: ContentUncheckedCreateNestedOneWithoutArticleInput
    favoritings?: FavoriteUncheckedCreateNestedManyWithoutArticleInput
    likes?: LikeUncheckedCreateNestedManyWithoutArticleInput
    tags?: TagsOnArticlesUncheckedCreateNestedManyWithoutArticleInput
  }

  export type ArticleCreateOrConnectWithoutUserInput = {
    where: ArticleWhereUniqueInput
    create: XOR<ArticleCreateWithoutUserInput, ArticleUncheckedCreateWithoutUserInput>
  }

  export type ArticleCreateManyUserInputEnvelope = {
    data: Enumerable<ArticleCreateManyUserInput>
    skipDuplicates?: boolean
  }

  export type CommentCreateWithoutUserInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    article: ArticleCreateNestedOneWithoutCommentsInput
  }

  export type CommentUncheckedCreateWithoutUserInput = {
    id?: number
    articleId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommentCreateOrConnectWithoutUserInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput>
  }

  export type CommentCreateManyUserInputEnvelope = {
    data: Enumerable<CommentCreateManyUserInput>
    skipDuplicates?: boolean
  }

  export type FavoriteCreateWithoutUserInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    article: ArticleCreateNestedOneWithoutFavoritingsInput
  }

  export type FavoriteUncheckedCreateWithoutUserInput = {
    id?: number
    articleId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FavoriteCreateOrConnectWithoutUserInput = {
    where: FavoriteWhereUniqueInput
    create: XOR<FavoriteCreateWithoutUserInput, FavoriteUncheckedCreateWithoutUserInput>
  }

  export type FavoriteCreateManyUserInputEnvelope = {
    data: Enumerable<FavoriteCreateManyUserInput>
    skipDuplicates?: boolean
  }

  export type FollowerCreateWithoutFollowerInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    following: UserCreateNestedOneWithoutFollowingsInput
  }

  export type FollowerUncheckedCreateWithoutFollowerInput = {
    followingId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FollowerCreateOrConnectWithoutFollowerInput = {
    where: FollowerWhereUniqueInput
    create: XOR<FollowerCreateWithoutFollowerInput, FollowerUncheckedCreateWithoutFollowerInput>
  }

  export type FollowerCreateManyFollowerInputEnvelope = {
    data: Enumerable<FollowerCreateManyFollowerInput>
    skipDuplicates?: boolean
  }

  export type FollowerCreateWithoutFollowingInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    follower: UserCreateNestedOneWithoutFollowersInput
  }

  export type FollowerUncheckedCreateWithoutFollowingInput = {
    followerId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FollowerCreateOrConnectWithoutFollowingInput = {
    where: FollowerWhereUniqueInput
    create: XOR<FollowerCreateWithoutFollowingInput, FollowerUncheckedCreateWithoutFollowingInput>
  }

  export type FollowerCreateManyFollowingInputEnvelope = {
    data: Enumerable<FollowerCreateManyFollowingInput>
    skipDuplicates?: boolean
  }

  export type LikeCreateWithoutUserInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    article: ArticleCreateNestedOneWithoutLikesInput
  }

  export type LikeUncheckedCreateWithoutUserInput = {
    id?: number
    articleId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LikeCreateOrConnectWithoutUserInput = {
    where: LikeWhereUniqueInput
    create: XOR<LikeCreateWithoutUserInput, LikeUncheckedCreateWithoutUserInput>
  }

  export type LikeCreateManyUserInputEnvelope = {
    data: Enumerable<LikeCreateManyUserInput>
    skipDuplicates?: boolean
  }

  export type ArticleUpsertWithWhereUniqueWithoutUserInput = {
    where: ArticleWhereUniqueInput
    update: XOR<ArticleUpdateWithoutUserInput, ArticleUncheckedUpdateWithoutUserInput>
    create: XOR<ArticleCreateWithoutUserInput, ArticleUncheckedCreateWithoutUserInput>
  }

  export type ArticleUpdateWithWhereUniqueWithoutUserInput = {
    where: ArticleWhereUniqueInput
    data: XOR<ArticleUpdateWithoutUserInput, ArticleUncheckedUpdateWithoutUserInput>
  }

  export type ArticleUpdateManyWithWhereWithoutUserInput = {
    where: ArticleScalarWhereInput
    data: XOR<ArticleUpdateManyMutationInput, ArticleUncheckedUpdateManyWithoutArticlesInput>
  }

  export type ArticleScalarWhereInput = {
    AND?: Enumerable<ArticleScalarWhereInput>
    OR?: Enumerable<ArticleScalarWhereInput>
    NOT?: Enumerable<ArticleScalarWhereInput>
    id?: IntFilter | number
    title?: StringFilter | string
    public?: BoolFilter | boolean
    slug?: StringFilter | string
    image?: StringNullableFilter | string | null
    excerpt?: StringNullableFilter | string | null
    meta?: JsonNullableFilter
    cover?: StringNullableFilter | string | null
    status?: EnumArticleStatusFilter | ArticleStatus
    browseCount?: IntFilter | number
    commentsCount?: IntFilter | number
    likesCount?: IntFilter | number
    userId?: IntFilter | number
    categoryId?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type CommentUpsertWithWhereUniqueWithoutUserInput = {
    where: CommentWhereUniqueInput
    update: XOR<CommentUpdateWithoutUserInput, CommentUncheckedUpdateWithoutUserInput>
    create: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput>
  }

  export type CommentUpdateWithWhereUniqueWithoutUserInput = {
    where: CommentWhereUniqueInput
    data: XOR<CommentUpdateWithoutUserInput, CommentUncheckedUpdateWithoutUserInput>
  }

  export type CommentUpdateManyWithWhereWithoutUserInput = {
    where: CommentScalarWhereInput
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyWithoutCommentsInput>
  }

  export type FavoriteUpsertWithWhereUniqueWithoutUserInput = {
    where: FavoriteWhereUniqueInput
    update: XOR<FavoriteUpdateWithoutUserInput, FavoriteUncheckedUpdateWithoutUserInput>
    create: XOR<FavoriteCreateWithoutUserInput, FavoriteUncheckedCreateWithoutUserInput>
  }

  export type FavoriteUpdateWithWhereUniqueWithoutUserInput = {
    where: FavoriteWhereUniqueInput
    data: XOR<FavoriteUpdateWithoutUserInput, FavoriteUncheckedUpdateWithoutUserInput>
  }

  export type FavoriteUpdateManyWithWhereWithoutUserInput = {
    where: FavoriteScalarWhereInput
    data: XOR<FavoriteUpdateManyMutationInput, FavoriteUncheckedUpdateManyWithoutFavoritesInput>
  }

  export type FollowerUpsertWithWhereUniqueWithoutFollowerInput = {
    where: FollowerWhereUniqueInput
    update: XOR<FollowerUpdateWithoutFollowerInput, FollowerUncheckedUpdateWithoutFollowerInput>
    create: XOR<FollowerCreateWithoutFollowerInput, FollowerUncheckedCreateWithoutFollowerInput>
  }

  export type FollowerUpdateWithWhereUniqueWithoutFollowerInput = {
    where: FollowerWhereUniqueInput
    data: XOR<FollowerUpdateWithoutFollowerInput, FollowerUncheckedUpdateWithoutFollowerInput>
  }

  export type FollowerUpdateManyWithWhereWithoutFollowerInput = {
    where: FollowerScalarWhereInput
    data: XOR<FollowerUpdateManyMutationInput, FollowerUncheckedUpdateManyWithoutFollowersInput>
  }

  export type FollowerScalarWhereInput = {
    AND?: Enumerable<FollowerScalarWhereInput>
    OR?: Enumerable<FollowerScalarWhereInput>
    NOT?: Enumerable<FollowerScalarWhereInput>
    followerId?: IntFilter | number
    followingId?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type FollowerUpsertWithWhereUniqueWithoutFollowingInput = {
    where: FollowerWhereUniqueInput
    update: XOR<FollowerUpdateWithoutFollowingInput, FollowerUncheckedUpdateWithoutFollowingInput>
    create: XOR<FollowerCreateWithoutFollowingInput, FollowerUncheckedCreateWithoutFollowingInput>
  }

  export type FollowerUpdateWithWhereUniqueWithoutFollowingInput = {
    where: FollowerWhereUniqueInput
    data: XOR<FollowerUpdateWithoutFollowingInput, FollowerUncheckedUpdateWithoutFollowingInput>
  }

  export type FollowerUpdateManyWithWhereWithoutFollowingInput = {
    where: FollowerScalarWhereInput
    data: XOR<FollowerUpdateManyMutationInput, FollowerUncheckedUpdateManyWithoutFollowingsInput>
  }

  export type LikeUpsertWithWhereUniqueWithoutUserInput = {
    where: LikeWhereUniqueInput
    update: XOR<LikeUpdateWithoutUserInput, LikeUncheckedUpdateWithoutUserInput>
    create: XOR<LikeCreateWithoutUserInput, LikeUncheckedCreateWithoutUserInput>
  }

  export type LikeUpdateWithWhereUniqueWithoutUserInput = {
    where: LikeWhereUniqueInput
    data: XOR<LikeUpdateWithoutUserInput, LikeUncheckedUpdateWithoutUserInput>
  }

  export type LikeUpdateManyWithWhereWithoutUserInput = {
    where: LikeScalarWhereInput
    data: XOR<LikeUpdateManyMutationInput, LikeUncheckedUpdateManyWithoutLikesInput>
  }

  export type TagsOnArticlesCreateWithoutTagInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    article: ArticleCreateNestedOneWithoutTagsInput
  }

  export type TagsOnArticlesUncheckedCreateWithoutTagInput = {
    articleId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TagsOnArticlesCreateOrConnectWithoutTagInput = {
    where: TagsOnArticlesWhereUniqueInput
    create: XOR<TagsOnArticlesCreateWithoutTagInput, TagsOnArticlesUncheckedCreateWithoutTagInput>
  }

  export type TagsOnArticlesCreateManyTagInputEnvelope = {
    data: Enumerable<TagsOnArticlesCreateManyTagInput>
    skipDuplicates?: boolean
  }

  export type TagsOnArticlesUpsertWithWhereUniqueWithoutTagInput = {
    where: TagsOnArticlesWhereUniqueInput
    update: XOR<TagsOnArticlesUpdateWithoutTagInput, TagsOnArticlesUncheckedUpdateWithoutTagInput>
    create: XOR<TagsOnArticlesCreateWithoutTagInput, TagsOnArticlesUncheckedCreateWithoutTagInput>
  }

  export type TagsOnArticlesUpdateWithWhereUniqueWithoutTagInput = {
    where: TagsOnArticlesWhereUniqueInput
    data: XOR<TagsOnArticlesUpdateWithoutTagInput, TagsOnArticlesUncheckedUpdateWithoutTagInput>
  }

  export type TagsOnArticlesUpdateManyWithWhereWithoutTagInput = {
    where: TagsOnArticlesScalarWhereInput
    data: XOR<TagsOnArticlesUpdateManyMutationInput, TagsOnArticlesUncheckedUpdateManyWithoutArticlesInput>
  }

  export type ArticleCreateWithoutCategoryInput = {
    title: string
    public?: boolean
    slug: string
    image?: string | null
    excerpt?: string | null
    meta?: InputJsonValue | null
    cover?: string | null
    status?: ArticleStatus
    browseCount?: number
    commentsCount?: number
    likesCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutArticlesInput
    comments?: CommentCreateNestedManyWithoutArticleInput
    content?: ContentCreateNestedOneWithoutArticleInput
    favoritings?: FavoriteCreateNestedManyWithoutArticleInput
    likes?: LikeCreateNestedManyWithoutArticleInput
    tags?: TagsOnArticlesCreateNestedManyWithoutArticleInput
  }

  export type ArticleUncheckedCreateWithoutCategoryInput = {
    id?: number
    title: string
    public?: boolean
    slug: string
    image?: string | null
    excerpt?: string | null
    meta?: InputJsonValue | null
    cover?: string | null
    status?: ArticleStatus
    browseCount?: number
    commentsCount?: number
    likesCount?: number
    userId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    comments?: CommentUncheckedCreateNestedManyWithoutArticleInput
    content?: ContentUncheckedCreateNestedOneWithoutArticleInput
    favoritings?: FavoriteUncheckedCreateNestedManyWithoutArticleInput
    likes?: LikeUncheckedCreateNestedManyWithoutArticleInput
    tags?: TagsOnArticlesUncheckedCreateNestedManyWithoutArticleInput
  }

  export type ArticleCreateOrConnectWithoutCategoryInput = {
    where: ArticleWhereUniqueInput
    create: XOR<ArticleCreateWithoutCategoryInput, ArticleUncheckedCreateWithoutCategoryInput>
  }

  export type ArticleCreateManyCategoryInputEnvelope = {
    data: Enumerable<ArticleCreateManyCategoryInput>
    skipDuplicates?: boolean
  }

  export type ArticleUpsertWithWhereUniqueWithoutCategoryInput = {
    where: ArticleWhereUniqueInput
    update: XOR<ArticleUpdateWithoutCategoryInput, ArticleUncheckedUpdateWithoutCategoryInput>
    create: XOR<ArticleCreateWithoutCategoryInput, ArticleUncheckedCreateWithoutCategoryInput>
  }

  export type ArticleUpdateWithWhereUniqueWithoutCategoryInput = {
    where: ArticleWhereUniqueInput
    data: XOR<ArticleUpdateWithoutCategoryInput, ArticleUncheckedUpdateWithoutCategoryInput>
  }

  export type ArticleUpdateManyWithWhereWithoutCategoryInput = {
    where: ArticleScalarWhereInput
    data: XOR<ArticleUpdateManyMutationInput, ArticleUncheckedUpdateManyWithoutArticlesInput>
  }

  export type ArticleCreateWithoutCommentsInput = {
    title: string
    public?: boolean
    slug: string
    image?: string | null
    excerpt?: string | null
    meta?: InputJsonValue | null
    cover?: string | null
    status?: ArticleStatus
    browseCount?: number
    commentsCount?: number
    likesCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    category: CategoryCreateNestedOneWithoutArticlesInput
    user: UserCreateNestedOneWithoutArticlesInput
    content?: ContentCreateNestedOneWithoutArticleInput
    favoritings?: FavoriteCreateNestedManyWithoutArticleInput
    likes?: LikeCreateNestedManyWithoutArticleInput
    tags?: TagsOnArticlesCreateNestedManyWithoutArticleInput
  }

  export type ArticleUncheckedCreateWithoutCommentsInput = {
    id?: number
    title: string
    public?: boolean
    slug: string
    image?: string | null
    excerpt?: string | null
    meta?: InputJsonValue | null
    cover?: string | null
    status?: ArticleStatus
    browseCount?: number
    commentsCount?: number
    likesCount?: number
    userId: number
    categoryId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    content?: ContentUncheckedCreateNestedOneWithoutArticleInput
    favoritings?: FavoriteUncheckedCreateNestedManyWithoutArticleInput
    likes?: LikeUncheckedCreateNestedManyWithoutArticleInput
    tags?: TagsOnArticlesUncheckedCreateNestedManyWithoutArticleInput
  }

  export type ArticleCreateOrConnectWithoutCommentsInput = {
    where: ArticleWhereUniqueInput
    create: XOR<ArticleCreateWithoutCommentsInput, ArticleUncheckedCreateWithoutCommentsInput>
  }

  export type UserCreateWithoutCommentsInput = {
    email?: string | null
    name: string
    slug: string
    url?: string | null
    meta?: InputJsonValue | null
    cover?: string | null
    bio?: string | null
    description?: string | null
    mobile?: string | null
    openid?: string | null
    password: string
    loggedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    deleteAt?: Date | string | null
    avatar?: string | null
    updatedPwdAt?: Date | string
    articles?: ArticleCreateNestedManyWithoutUserInput
    favorites?: FavoriteCreateNestedManyWithoutUserInput
    followers?: FollowerCreateNestedManyWithoutFollowerInput
    followings?: FollowerCreateNestedManyWithoutFollowingInput
    likes?: LikeCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCommentsInput = {
    id?: number
    email?: string | null
    name: string
    slug: string
    url?: string | null
    meta?: InputJsonValue | null
    cover?: string | null
    bio?: string | null
    description?: string | null
    mobile?: string | null
    openid?: string | null
    password: string
    loggedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    deleteAt?: Date | string | null
    avatar?: string | null
    updatedPwdAt?: Date | string
    articles?: ArticleUncheckedCreateNestedManyWithoutUserInput
    favorites?: FavoriteUncheckedCreateNestedManyWithoutUserInput
    followers?: FollowerUncheckedCreateNestedManyWithoutFollowerInput
    followings?: FollowerUncheckedCreateNestedManyWithoutFollowingInput
    likes?: LikeUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCommentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
  }

  export type ArticleUpsertWithoutCommentsInput = {
    update: XOR<ArticleUpdateWithoutCommentsInput, ArticleUncheckedUpdateWithoutCommentsInput>
    create: XOR<ArticleCreateWithoutCommentsInput, ArticleUncheckedCreateWithoutCommentsInput>
  }

  export type ArticleUpdateWithoutCommentsInput = {
    title?: StringFieldUpdateOperationsInput | string
    public?: BoolFieldUpdateOperationsInput | boolean
    slug?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
    meta?: InputJsonValue | null
    cover?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumArticleStatusFieldUpdateOperationsInput | ArticleStatus
    browseCount?: IntFieldUpdateOperationsInput | number
    commentsCount?: IntFieldUpdateOperationsInput | number
    likesCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneRequiredWithoutArticlesInput
    user?: UserUpdateOneRequiredWithoutArticlesInput
    content?: ContentUpdateOneWithoutArticleInput
    favoritings?: FavoriteUpdateManyWithoutArticleInput
    likes?: LikeUpdateManyWithoutArticleInput
    tags?: TagsOnArticlesUpdateManyWithoutArticleInput
  }

  export type ArticleUncheckedUpdateWithoutCommentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    public?: BoolFieldUpdateOperationsInput | boolean
    slug?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
    meta?: InputJsonValue | null
    cover?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumArticleStatusFieldUpdateOperationsInput | ArticleStatus
    browseCount?: IntFieldUpdateOperationsInput | number
    commentsCount?: IntFieldUpdateOperationsInput | number
    likesCount?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: ContentUncheckedUpdateOneWithoutArticleInput
    favoritings?: FavoriteUncheckedUpdateManyWithoutArticleInput
    likes?: LikeUncheckedUpdateManyWithoutArticleInput
    tags?: TagsOnArticlesUncheckedUpdateManyWithoutArticleInput
  }

  export type UserUpsertWithoutCommentsInput = {
    update: XOR<UserUpdateWithoutCommentsInput, UserUncheckedUpdateWithoutCommentsInput>
    create: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
  }

  export type UserUpdateWithoutCommentsInput = {
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    meta?: InputJsonValue | null
    cover?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    openid?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    loggedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleteAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    updatedPwdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    articles?: ArticleUpdateManyWithoutUserInput
    favorites?: FavoriteUpdateManyWithoutUserInput
    followers?: FollowerUpdateManyWithoutFollowerInput
    followings?: FollowerUpdateManyWithoutFollowingInput
    likes?: LikeUpdateManyWithoutUserInput
  }

  export type UserUncheckedUpdateWithoutCommentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    meta?: InputJsonValue | null
    cover?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    openid?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    loggedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleteAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    updatedPwdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    articles?: ArticleUncheckedUpdateManyWithoutUserInput
    favorites?: FavoriteUncheckedUpdateManyWithoutUserInput
    followers?: FollowerUncheckedUpdateManyWithoutFollowerInput
    followings?: FollowerUncheckedUpdateManyWithoutFollowingInput
    likes?: LikeUncheckedUpdateManyWithoutUserInput
  }

  export type ArticleCreateWithoutFavoritingsInput = {
    title: string
    public?: boolean
    slug: string
    image?: string | null
    excerpt?: string | null
    meta?: InputJsonValue | null
    cover?: string | null
    status?: ArticleStatus
    browseCount?: number
    commentsCount?: number
    likesCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    category: CategoryCreateNestedOneWithoutArticlesInput
    user: UserCreateNestedOneWithoutArticlesInput
    comments?: CommentCreateNestedManyWithoutArticleInput
    content?: ContentCreateNestedOneWithoutArticleInput
    likes?: LikeCreateNestedManyWithoutArticleInput
    tags?: TagsOnArticlesCreateNestedManyWithoutArticleInput
  }

  export type ArticleUncheckedCreateWithoutFavoritingsInput = {
    id?: number
    title: string
    public?: boolean
    slug: string
    image?: string | null
    excerpt?: string | null
    meta?: InputJsonValue | null
    cover?: string | null
    status?: ArticleStatus
    browseCount?: number
    commentsCount?: number
    likesCount?: number
    userId: number
    categoryId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    comments?: CommentUncheckedCreateNestedManyWithoutArticleInput
    content?: ContentUncheckedCreateNestedOneWithoutArticleInput
    likes?: LikeUncheckedCreateNestedManyWithoutArticleInput
    tags?: TagsOnArticlesUncheckedCreateNestedManyWithoutArticleInput
  }

  export type ArticleCreateOrConnectWithoutFavoritingsInput = {
    where: ArticleWhereUniqueInput
    create: XOR<ArticleCreateWithoutFavoritingsInput, ArticleUncheckedCreateWithoutFavoritingsInput>
  }

  export type UserCreateWithoutFavoritesInput = {
    email?: string | null
    name: string
    slug: string
    url?: string | null
    meta?: InputJsonValue | null
    cover?: string | null
    bio?: string | null
    description?: string | null
    mobile?: string | null
    openid?: string | null
    password: string
    loggedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    deleteAt?: Date | string | null
    avatar?: string | null
    updatedPwdAt?: Date | string
    articles?: ArticleCreateNestedManyWithoutUserInput
    comments?: CommentCreateNestedManyWithoutUserInput
    followers?: FollowerCreateNestedManyWithoutFollowerInput
    followings?: FollowerCreateNestedManyWithoutFollowingInput
    likes?: LikeCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutFavoritesInput = {
    id?: number
    email?: string | null
    name: string
    slug: string
    url?: string | null
    meta?: InputJsonValue | null
    cover?: string | null
    bio?: string | null
    description?: string | null
    mobile?: string | null
    openid?: string | null
    password: string
    loggedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    deleteAt?: Date | string | null
    avatar?: string | null
    updatedPwdAt?: Date | string
    articles?: ArticleUncheckedCreateNestedManyWithoutUserInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    followers?: FollowerUncheckedCreateNestedManyWithoutFollowerInput
    followings?: FollowerUncheckedCreateNestedManyWithoutFollowingInput
    likes?: LikeUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutFavoritesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFavoritesInput, UserUncheckedCreateWithoutFavoritesInput>
  }

  export type ArticleUpsertWithoutFavoritingsInput = {
    update: XOR<ArticleUpdateWithoutFavoritingsInput, ArticleUncheckedUpdateWithoutFavoritingsInput>
    create: XOR<ArticleCreateWithoutFavoritingsInput, ArticleUncheckedCreateWithoutFavoritingsInput>
  }

  export type ArticleUpdateWithoutFavoritingsInput = {
    title?: StringFieldUpdateOperationsInput | string
    public?: BoolFieldUpdateOperationsInput | boolean
    slug?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
    meta?: InputJsonValue | null
    cover?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumArticleStatusFieldUpdateOperationsInput | ArticleStatus
    browseCount?: IntFieldUpdateOperationsInput | number
    commentsCount?: IntFieldUpdateOperationsInput | number
    likesCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneRequiredWithoutArticlesInput
    user?: UserUpdateOneRequiredWithoutArticlesInput
    comments?: CommentUpdateManyWithoutArticleInput
    content?: ContentUpdateOneWithoutArticleInput
    likes?: LikeUpdateManyWithoutArticleInput
    tags?: TagsOnArticlesUpdateManyWithoutArticleInput
  }

  export type ArticleUncheckedUpdateWithoutFavoritingsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    public?: BoolFieldUpdateOperationsInput | boolean
    slug?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
    meta?: InputJsonValue | null
    cover?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumArticleStatusFieldUpdateOperationsInput | ArticleStatus
    browseCount?: IntFieldUpdateOperationsInput | number
    commentsCount?: IntFieldUpdateOperationsInput | number
    likesCount?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: CommentUncheckedUpdateManyWithoutArticleInput
    content?: ContentUncheckedUpdateOneWithoutArticleInput
    likes?: LikeUncheckedUpdateManyWithoutArticleInput
    tags?: TagsOnArticlesUncheckedUpdateManyWithoutArticleInput
  }

  export type UserUpsertWithoutFavoritesInput = {
    update: XOR<UserUpdateWithoutFavoritesInput, UserUncheckedUpdateWithoutFavoritesInput>
    create: XOR<UserCreateWithoutFavoritesInput, UserUncheckedCreateWithoutFavoritesInput>
  }

  export type UserUpdateWithoutFavoritesInput = {
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    meta?: InputJsonValue | null
    cover?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    openid?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    loggedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleteAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    updatedPwdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    articles?: ArticleUpdateManyWithoutUserInput
    comments?: CommentUpdateManyWithoutUserInput
    followers?: FollowerUpdateManyWithoutFollowerInput
    followings?: FollowerUpdateManyWithoutFollowingInput
    likes?: LikeUpdateManyWithoutUserInput
  }

  export type UserUncheckedUpdateWithoutFavoritesInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    meta?: InputJsonValue | null
    cover?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    openid?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    loggedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleteAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    updatedPwdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    articles?: ArticleUncheckedUpdateManyWithoutUserInput
    comments?: CommentUncheckedUpdateManyWithoutUserInput
    followers?: FollowerUncheckedUpdateManyWithoutFollowerInput
    followings?: FollowerUncheckedUpdateManyWithoutFollowingInput
    likes?: LikeUncheckedUpdateManyWithoutUserInput
  }

  export type ArticleCreateWithoutContentInput = {
    title: string
    public?: boolean
    slug: string
    image?: string | null
    excerpt?: string | null
    meta?: InputJsonValue | null
    cover?: string | null
    status?: ArticleStatus
    browseCount?: number
    commentsCount?: number
    likesCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    category: CategoryCreateNestedOneWithoutArticlesInput
    user: UserCreateNestedOneWithoutArticlesInput
    comments?: CommentCreateNestedManyWithoutArticleInput
    favoritings?: FavoriteCreateNestedManyWithoutArticleInput
    likes?: LikeCreateNestedManyWithoutArticleInput
    tags?: TagsOnArticlesCreateNestedManyWithoutArticleInput
  }

  export type ArticleUncheckedCreateWithoutContentInput = {
    id?: number
    title: string
    public?: boolean
    slug: string
    image?: string | null
    excerpt?: string | null
    meta?: InputJsonValue | null
    cover?: string | null
    status?: ArticleStatus
    browseCount?: number
    commentsCount?: number
    likesCount?: number
    userId: number
    categoryId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    comments?: CommentUncheckedCreateNestedManyWithoutArticleInput
    favoritings?: FavoriteUncheckedCreateNestedManyWithoutArticleInput
    likes?: LikeUncheckedCreateNestedManyWithoutArticleInput
    tags?: TagsOnArticlesUncheckedCreateNestedManyWithoutArticleInput
  }

  export type ArticleCreateOrConnectWithoutContentInput = {
    where: ArticleWhereUniqueInput
    create: XOR<ArticleCreateWithoutContentInput, ArticleUncheckedCreateWithoutContentInput>
  }

  export type ArticleUpsertWithoutContentInput = {
    update: XOR<ArticleUpdateWithoutContentInput, ArticleUncheckedUpdateWithoutContentInput>
    create: XOR<ArticleCreateWithoutContentInput, ArticleUncheckedCreateWithoutContentInput>
  }

  export type ArticleUpdateWithoutContentInput = {
    title?: StringFieldUpdateOperationsInput | string
    public?: BoolFieldUpdateOperationsInput | boolean
    slug?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
    meta?: InputJsonValue | null
    cover?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumArticleStatusFieldUpdateOperationsInput | ArticleStatus
    browseCount?: IntFieldUpdateOperationsInput | number
    commentsCount?: IntFieldUpdateOperationsInput | number
    likesCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneRequiredWithoutArticlesInput
    user?: UserUpdateOneRequiredWithoutArticlesInput
    comments?: CommentUpdateManyWithoutArticleInput
    favoritings?: FavoriteUpdateManyWithoutArticleInput
    likes?: LikeUpdateManyWithoutArticleInput
    tags?: TagsOnArticlesUpdateManyWithoutArticleInput
  }

  export type ArticleUncheckedUpdateWithoutContentInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    public?: BoolFieldUpdateOperationsInput | boolean
    slug?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
    meta?: InputJsonValue | null
    cover?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumArticleStatusFieldUpdateOperationsInput | ArticleStatus
    browseCount?: IntFieldUpdateOperationsInput | number
    commentsCount?: IntFieldUpdateOperationsInput | number
    likesCount?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: CommentUncheckedUpdateManyWithoutArticleInput
    favoritings?: FavoriteUncheckedUpdateManyWithoutArticleInput
    likes?: LikeUncheckedUpdateManyWithoutArticleInput
    tags?: TagsOnArticlesUncheckedUpdateManyWithoutArticleInput
  }

  export type ArticleCreateWithoutLikesInput = {
    title: string
    public?: boolean
    slug: string
    image?: string | null
    excerpt?: string | null
    meta?: InputJsonValue | null
    cover?: string | null
    status?: ArticleStatus
    browseCount?: number
    commentsCount?: number
    likesCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    category: CategoryCreateNestedOneWithoutArticlesInput
    user: UserCreateNestedOneWithoutArticlesInput
    comments?: CommentCreateNestedManyWithoutArticleInput
    content?: ContentCreateNestedOneWithoutArticleInput
    favoritings?: FavoriteCreateNestedManyWithoutArticleInput
    tags?: TagsOnArticlesCreateNestedManyWithoutArticleInput
  }

  export type ArticleUncheckedCreateWithoutLikesInput = {
    id?: number
    title: string
    public?: boolean
    slug: string
    image?: string | null
    excerpt?: string | null
    meta?: InputJsonValue | null
    cover?: string | null
    status?: ArticleStatus
    browseCount?: number
    commentsCount?: number
    likesCount?: number
    userId: number
    categoryId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    comments?: CommentUncheckedCreateNestedManyWithoutArticleInput
    content?: ContentUncheckedCreateNestedOneWithoutArticleInput
    favoritings?: FavoriteUncheckedCreateNestedManyWithoutArticleInput
    tags?: TagsOnArticlesUncheckedCreateNestedManyWithoutArticleInput
  }

  export type ArticleCreateOrConnectWithoutLikesInput = {
    where: ArticleWhereUniqueInput
    create: XOR<ArticleCreateWithoutLikesInput, ArticleUncheckedCreateWithoutLikesInput>
  }

  export type UserCreateWithoutLikesInput = {
    email?: string | null
    name: string
    slug: string
    url?: string | null
    meta?: InputJsonValue | null
    cover?: string | null
    bio?: string | null
    description?: string | null
    mobile?: string | null
    openid?: string | null
    password: string
    loggedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    deleteAt?: Date | string | null
    avatar?: string | null
    updatedPwdAt?: Date | string
    articles?: ArticleCreateNestedManyWithoutUserInput
    comments?: CommentCreateNestedManyWithoutUserInput
    favorites?: FavoriteCreateNestedManyWithoutUserInput
    followers?: FollowerCreateNestedManyWithoutFollowerInput
    followings?: FollowerCreateNestedManyWithoutFollowingInput
  }

  export type UserUncheckedCreateWithoutLikesInput = {
    id?: number
    email?: string | null
    name: string
    slug: string
    url?: string | null
    meta?: InputJsonValue | null
    cover?: string | null
    bio?: string | null
    description?: string | null
    mobile?: string | null
    openid?: string | null
    password: string
    loggedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    deleteAt?: Date | string | null
    avatar?: string | null
    updatedPwdAt?: Date | string
    articles?: ArticleUncheckedCreateNestedManyWithoutUserInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    favorites?: FavoriteUncheckedCreateNestedManyWithoutUserInput
    followers?: FollowerUncheckedCreateNestedManyWithoutFollowerInput
    followings?: FollowerUncheckedCreateNestedManyWithoutFollowingInput
  }

  export type UserCreateOrConnectWithoutLikesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutLikesInput, UserUncheckedCreateWithoutLikesInput>
  }

  export type ArticleUpsertWithoutLikesInput = {
    update: XOR<ArticleUpdateWithoutLikesInput, ArticleUncheckedUpdateWithoutLikesInput>
    create: XOR<ArticleCreateWithoutLikesInput, ArticleUncheckedCreateWithoutLikesInput>
  }

  export type ArticleUpdateWithoutLikesInput = {
    title?: StringFieldUpdateOperationsInput | string
    public?: BoolFieldUpdateOperationsInput | boolean
    slug?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
    meta?: InputJsonValue | null
    cover?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumArticleStatusFieldUpdateOperationsInput | ArticleStatus
    browseCount?: IntFieldUpdateOperationsInput | number
    commentsCount?: IntFieldUpdateOperationsInput | number
    likesCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneRequiredWithoutArticlesInput
    user?: UserUpdateOneRequiredWithoutArticlesInput
    comments?: CommentUpdateManyWithoutArticleInput
    content?: ContentUpdateOneWithoutArticleInput
    favoritings?: FavoriteUpdateManyWithoutArticleInput
    tags?: TagsOnArticlesUpdateManyWithoutArticleInput
  }

  export type ArticleUncheckedUpdateWithoutLikesInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    public?: BoolFieldUpdateOperationsInput | boolean
    slug?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
    meta?: InputJsonValue | null
    cover?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumArticleStatusFieldUpdateOperationsInput | ArticleStatus
    browseCount?: IntFieldUpdateOperationsInput | number
    commentsCount?: IntFieldUpdateOperationsInput | number
    likesCount?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: CommentUncheckedUpdateManyWithoutArticleInput
    content?: ContentUncheckedUpdateOneWithoutArticleInput
    favoritings?: FavoriteUncheckedUpdateManyWithoutArticleInput
    tags?: TagsOnArticlesUncheckedUpdateManyWithoutArticleInput
  }

  export type UserUpsertWithoutLikesInput = {
    update: XOR<UserUpdateWithoutLikesInput, UserUncheckedUpdateWithoutLikesInput>
    create: XOR<UserCreateWithoutLikesInput, UserUncheckedCreateWithoutLikesInput>
  }

  export type UserUpdateWithoutLikesInput = {
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    meta?: InputJsonValue | null
    cover?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    openid?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    loggedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleteAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    updatedPwdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    articles?: ArticleUpdateManyWithoutUserInput
    comments?: CommentUpdateManyWithoutUserInput
    favorites?: FavoriteUpdateManyWithoutUserInput
    followers?: FollowerUpdateManyWithoutFollowerInput
    followings?: FollowerUpdateManyWithoutFollowingInput
  }

  export type UserUncheckedUpdateWithoutLikesInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    meta?: InputJsonValue | null
    cover?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    openid?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    loggedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleteAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    updatedPwdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    articles?: ArticleUncheckedUpdateManyWithoutUserInput
    comments?: CommentUncheckedUpdateManyWithoutUserInput
    favorites?: FavoriteUncheckedUpdateManyWithoutUserInput
    followers?: FollowerUncheckedUpdateManyWithoutFollowerInput
    followings?: FollowerUncheckedUpdateManyWithoutFollowingInput
  }

  export type ArticleCreateWithoutTagsInput = {
    title: string
    public?: boolean
    slug: string
    image?: string | null
    excerpt?: string | null
    meta?: InputJsonValue | null
    cover?: string | null
    status?: ArticleStatus
    browseCount?: number
    commentsCount?: number
    likesCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    category: CategoryCreateNestedOneWithoutArticlesInput
    user: UserCreateNestedOneWithoutArticlesInput
    comments?: CommentCreateNestedManyWithoutArticleInput
    content?: ContentCreateNestedOneWithoutArticleInput
    favoritings?: FavoriteCreateNestedManyWithoutArticleInput
    likes?: LikeCreateNestedManyWithoutArticleInput
  }

  export type ArticleUncheckedCreateWithoutTagsInput = {
    id?: number
    title: string
    public?: boolean
    slug: string
    image?: string | null
    excerpt?: string | null
    meta?: InputJsonValue | null
    cover?: string | null
    status?: ArticleStatus
    browseCount?: number
    commentsCount?: number
    likesCount?: number
    userId: number
    categoryId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    comments?: CommentUncheckedCreateNestedManyWithoutArticleInput
    content?: ContentUncheckedCreateNestedOneWithoutArticleInput
    favoritings?: FavoriteUncheckedCreateNestedManyWithoutArticleInput
    likes?: LikeUncheckedCreateNestedManyWithoutArticleInput
  }

  export type ArticleCreateOrConnectWithoutTagsInput = {
    where: ArticleWhereUniqueInput
    create: XOR<ArticleCreateWithoutTagsInput, ArticleUncheckedCreateWithoutTagsInput>
  }

  export type TagCreateWithoutArticlesInput = {
    slug: string
    createdAt?: Date | string
    updatedAt?: Date | string
    meta?: InputJsonValue | null
  }

  export type TagUncheckedCreateWithoutArticlesInput = {
    id?: number
    slug: string
    createdAt?: Date | string
    updatedAt?: Date | string
    meta?: InputJsonValue | null
  }

  export type TagCreateOrConnectWithoutArticlesInput = {
    where: TagWhereUniqueInput
    create: XOR<TagCreateWithoutArticlesInput, TagUncheckedCreateWithoutArticlesInput>
  }

  export type ArticleUpsertWithoutTagsInput = {
    update: XOR<ArticleUpdateWithoutTagsInput, ArticleUncheckedUpdateWithoutTagsInput>
    create: XOR<ArticleCreateWithoutTagsInput, ArticleUncheckedCreateWithoutTagsInput>
  }

  export type ArticleUpdateWithoutTagsInput = {
    title?: StringFieldUpdateOperationsInput | string
    public?: BoolFieldUpdateOperationsInput | boolean
    slug?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
    meta?: InputJsonValue | null
    cover?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumArticleStatusFieldUpdateOperationsInput | ArticleStatus
    browseCount?: IntFieldUpdateOperationsInput | number
    commentsCount?: IntFieldUpdateOperationsInput | number
    likesCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneRequiredWithoutArticlesInput
    user?: UserUpdateOneRequiredWithoutArticlesInput
    comments?: CommentUpdateManyWithoutArticleInput
    content?: ContentUpdateOneWithoutArticleInput
    favoritings?: FavoriteUpdateManyWithoutArticleInput
    likes?: LikeUpdateManyWithoutArticleInput
  }

  export type ArticleUncheckedUpdateWithoutTagsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    public?: BoolFieldUpdateOperationsInput | boolean
    slug?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
    meta?: InputJsonValue | null
    cover?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumArticleStatusFieldUpdateOperationsInput | ArticleStatus
    browseCount?: IntFieldUpdateOperationsInput | number
    commentsCount?: IntFieldUpdateOperationsInput | number
    likesCount?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: CommentUncheckedUpdateManyWithoutArticleInput
    content?: ContentUncheckedUpdateOneWithoutArticleInput
    favoritings?: FavoriteUncheckedUpdateManyWithoutArticleInput
    likes?: LikeUncheckedUpdateManyWithoutArticleInput
  }

  export type TagUpsertWithoutArticlesInput = {
    update: XOR<TagUpdateWithoutArticlesInput, TagUncheckedUpdateWithoutArticlesInput>
    create: XOR<TagCreateWithoutArticlesInput, TagUncheckedCreateWithoutArticlesInput>
  }

  export type TagUpdateWithoutArticlesInput = {
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    meta?: InputJsonValue | null
  }

  export type TagUncheckedUpdateWithoutArticlesInput = {
    id?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    meta?: InputJsonValue | null
  }

  export type UserCreateWithoutFollowersInput = {
    email?: string | null
    name: string
    slug: string
    url?: string | null
    meta?: InputJsonValue | null
    cover?: string | null
    bio?: string | null
    description?: string | null
    mobile?: string | null
    openid?: string | null
    password: string
    loggedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    deleteAt?: Date | string | null
    avatar?: string | null
    updatedPwdAt?: Date | string
    articles?: ArticleCreateNestedManyWithoutUserInput
    comments?: CommentCreateNestedManyWithoutUserInput
    favorites?: FavoriteCreateNestedManyWithoutUserInput
    followings?: FollowerCreateNestedManyWithoutFollowingInput
    likes?: LikeCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutFollowersInput = {
    id?: number
    email?: string | null
    name: string
    slug: string
    url?: string | null
    meta?: InputJsonValue | null
    cover?: string | null
    bio?: string | null
    description?: string | null
    mobile?: string | null
    openid?: string | null
    password: string
    loggedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    deleteAt?: Date | string | null
    avatar?: string | null
    updatedPwdAt?: Date | string
    articles?: ArticleUncheckedCreateNestedManyWithoutUserInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    favorites?: FavoriteUncheckedCreateNestedManyWithoutUserInput
    followings?: FollowerUncheckedCreateNestedManyWithoutFollowingInput
    likes?: LikeUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutFollowersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFollowersInput, UserUncheckedCreateWithoutFollowersInput>
  }

  export type UserCreateWithoutFollowingsInput = {
    email?: string | null
    name: string
    slug: string
    url?: string | null
    meta?: InputJsonValue | null
    cover?: string | null
    bio?: string | null
    description?: string | null
    mobile?: string | null
    openid?: string | null
    password: string
    loggedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    deleteAt?: Date | string | null
    avatar?: string | null
    updatedPwdAt?: Date | string
    articles?: ArticleCreateNestedManyWithoutUserInput
    comments?: CommentCreateNestedManyWithoutUserInput
    favorites?: FavoriteCreateNestedManyWithoutUserInput
    followers?: FollowerCreateNestedManyWithoutFollowerInput
    likes?: LikeCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutFollowingsInput = {
    id?: number
    email?: string | null
    name: string
    slug: string
    url?: string | null
    meta?: InputJsonValue | null
    cover?: string | null
    bio?: string | null
    description?: string | null
    mobile?: string | null
    openid?: string | null
    password: string
    loggedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    deleteAt?: Date | string | null
    avatar?: string | null
    updatedPwdAt?: Date | string
    articles?: ArticleUncheckedCreateNestedManyWithoutUserInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    favorites?: FavoriteUncheckedCreateNestedManyWithoutUserInput
    followers?: FollowerUncheckedCreateNestedManyWithoutFollowerInput
    likes?: LikeUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutFollowingsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFollowingsInput, UserUncheckedCreateWithoutFollowingsInput>
  }

  export type UserUpsertWithoutFollowersInput = {
    update: XOR<UserUpdateWithoutFollowersInput, UserUncheckedUpdateWithoutFollowersInput>
    create: XOR<UserCreateWithoutFollowersInput, UserUncheckedCreateWithoutFollowersInput>
  }

  export type UserUpdateWithoutFollowersInput = {
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    meta?: InputJsonValue | null
    cover?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    openid?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    loggedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleteAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    updatedPwdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    articles?: ArticleUpdateManyWithoutUserInput
    comments?: CommentUpdateManyWithoutUserInput
    favorites?: FavoriteUpdateManyWithoutUserInput
    followings?: FollowerUpdateManyWithoutFollowingInput
    likes?: LikeUpdateManyWithoutUserInput
  }

  export type UserUncheckedUpdateWithoutFollowersInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    meta?: InputJsonValue | null
    cover?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    openid?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    loggedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleteAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    updatedPwdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    articles?: ArticleUncheckedUpdateManyWithoutUserInput
    comments?: CommentUncheckedUpdateManyWithoutUserInput
    favorites?: FavoriteUncheckedUpdateManyWithoutUserInput
    followings?: FollowerUncheckedUpdateManyWithoutFollowingInput
    likes?: LikeUncheckedUpdateManyWithoutUserInput
  }

  export type UserUpsertWithoutFollowingsInput = {
    update: XOR<UserUpdateWithoutFollowingsInput, UserUncheckedUpdateWithoutFollowingsInput>
    create: XOR<UserCreateWithoutFollowingsInput, UserUncheckedCreateWithoutFollowingsInput>
  }

  export type UserUpdateWithoutFollowingsInput = {
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    meta?: InputJsonValue | null
    cover?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    openid?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    loggedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleteAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    updatedPwdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    articles?: ArticleUpdateManyWithoutUserInput
    comments?: CommentUpdateManyWithoutUserInput
    favorites?: FavoriteUpdateManyWithoutUserInput
    followers?: FollowerUpdateManyWithoutFollowerInput
    likes?: LikeUpdateManyWithoutUserInput
  }

  export type UserUncheckedUpdateWithoutFollowingsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    meta?: InputJsonValue | null
    cover?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    openid?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    loggedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleteAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    updatedPwdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    articles?: ArticleUncheckedUpdateManyWithoutUserInput
    comments?: CommentUncheckedUpdateManyWithoutUserInput
    favorites?: FavoriteUncheckedUpdateManyWithoutUserInput
    followers?: FollowerUncheckedUpdateManyWithoutFollowerInput
    likes?: LikeUncheckedUpdateManyWithoutUserInput
  }

  export type CommentCreateManyArticleInput = {
    id?: number
    userId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FavoriteCreateManyArticleInput = {
    id?: number
    userId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LikeCreateManyArticleInput = {
    id?: number
    userId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TagsOnArticlesCreateManyArticleInput = {
    tagId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommentUpdateWithoutArticleInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCommentsInput
  }

  export type CommentUncheckedUpdateWithoutArticleInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUncheckedUpdateManyWithoutCommentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoriteUpdateWithoutArticleInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutFavoritesInput
  }

  export type FavoriteUncheckedUpdateWithoutArticleInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoriteUncheckedUpdateManyWithoutFavoritingsInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LikeUpdateWithoutArticleInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutLikesInput
  }

  export type LikeUncheckedUpdateWithoutArticleInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LikeUncheckedUpdateManyWithoutLikesInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TagsOnArticlesUpdateWithoutArticleInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tag?: TagUpdateOneRequiredWithoutArticlesInput
  }

  export type TagsOnArticlesUncheckedUpdateWithoutArticleInput = {
    tagId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TagsOnArticlesUncheckedUpdateManyWithoutTagsInput = {
    tagId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArticleCreateManyUserInput = {
    id?: number
    title: string
    public?: boolean
    slug: string
    image?: string | null
    excerpt?: string | null
    meta?: InputJsonValue | null
    cover?: string | null
    status?: ArticleStatus
    browseCount?: number
    commentsCount?: number
    likesCount?: number
    categoryId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommentCreateManyUserInput = {
    id?: number
    articleId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FavoriteCreateManyUserInput = {
    id?: number
    articleId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FollowerCreateManyFollowerInput = {
    followingId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FollowerCreateManyFollowingInput = {
    followerId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LikeCreateManyUserInput = {
    id?: number
    articleId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ArticleUpdateWithoutUserInput = {
    title?: StringFieldUpdateOperationsInput | string
    public?: BoolFieldUpdateOperationsInput | boolean
    slug?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
    meta?: InputJsonValue | null
    cover?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumArticleStatusFieldUpdateOperationsInput | ArticleStatus
    browseCount?: IntFieldUpdateOperationsInput | number
    commentsCount?: IntFieldUpdateOperationsInput | number
    likesCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneRequiredWithoutArticlesInput
    comments?: CommentUpdateManyWithoutArticleInput
    content?: ContentUpdateOneWithoutArticleInput
    favoritings?: FavoriteUpdateManyWithoutArticleInput
    likes?: LikeUpdateManyWithoutArticleInput
    tags?: TagsOnArticlesUpdateManyWithoutArticleInput
  }

  export type ArticleUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    public?: BoolFieldUpdateOperationsInput | boolean
    slug?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
    meta?: InputJsonValue | null
    cover?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumArticleStatusFieldUpdateOperationsInput | ArticleStatus
    browseCount?: IntFieldUpdateOperationsInput | number
    commentsCount?: IntFieldUpdateOperationsInput | number
    likesCount?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: CommentUncheckedUpdateManyWithoutArticleInput
    content?: ContentUncheckedUpdateOneWithoutArticleInput
    favoritings?: FavoriteUncheckedUpdateManyWithoutArticleInput
    likes?: LikeUncheckedUpdateManyWithoutArticleInput
    tags?: TagsOnArticlesUncheckedUpdateManyWithoutArticleInput
  }

  export type ArticleUncheckedUpdateManyWithoutArticlesInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    public?: BoolFieldUpdateOperationsInput | boolean
    slug?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
    meta?: InputJsonValue | null
    cover?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumArticleStatusFieldUpdateOperationsInput | ArticleStatus
    browseCount?: IntFieldUpdateOperationsInput | number
    commentsCount?: IntFieldUpdateOperationsInput | number
    likesCount?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUpdateWithoutUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    article?: ArticleUpdateOneRequiredWithoutCommentsInput
  }

  export type CommentUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    articleId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoriteUpdateWithoutUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    article?: ArticleUpdateOneRequiredWithoutFavoritingsInput
  }

  export type FavoriteUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    articleId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoriteUncheckedUpdateManyWithoutFavoritesInput = {
    id?: IntFieldUpdateOperationsInput | number
    articleId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FollowerUpdateWithoutFollowerInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    following?: UserUpdateOneRequiredWithoutFollowingsInput
  }

  export type FollowerUncheckedUpdateWithoutFollowerInput = {
    followingId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FollowerUncheckedUpdateManyWithoutFollowersInput = {
    followingId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FollowerUpdateWithoutFollowingInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    follower?: UserUpdateOneRequiredWithoutFollowersInput
  }

  export type FollowerUncheckedUpdateWithoutFollowingInput = {
    followerId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FollowerUncheckedUpdateManyWithoutFollowingsInput = {
    followerId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LikeUpdateWithoutUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    article?: ArticleUpdateOneRequiredWithoutLikesInput
  }

  export type LikeUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    articleId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TagsOnArticlesCreateManyTagInput = {
    articleId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TagsOnArticlesUpdateWithoutTagInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    article?: ArticleUpdateOneRequiredWithoutTagsInput
  }

  export type TagsOnArticlesUncheckedUpdateWithoutTagInput = {
    articleId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TagsOnArticlesUncheckedUpdateManyWithoutArticlesInput = {
    articleId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArticleCreateManyCategoryInput = {
    id?: number
    title: string
    public?: boolean
    slug: string
    image?: string | null
    excerpt?: string | null
    meta?: InputJsonValue | null
    cover?: string | null
    status?: ArticleStatus
    browseCount?: number
    commentsCount?: number
    likesCount?: number
    userId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ArticleUpdateWithoutCategoryInput = {
    title?: StringFieldUpdateOperationsInput | string
    public?: BoolFieldUpdateOperationsInput | boolean
    slug?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
    meta?: InputJsonValue | null
    cover?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumArticleStatusFieldUpdateOperationsInput | ArticleStatus
    browseCount?: IntFieldUpdateOperationsInput | number
    commentsCount?: IntFieldUpdateOperationsInput | number
    likesCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutArticlesInput
    comments?: CommentUpdateManyWithoutArticleInput
    content?: ContentUpdateOneWithoutArticleInput
    favoritings?: FavoriteUpdateManyWithoutArticleInput
    likes?: LikeUpdateManyWithoutArticleInput
    tags?: TagsOnArticlesUpdateManyWithoutArticleInput
  }

  export type ArticleUncheckedUpdateWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    public?: BoolFieldUpdateOperationsInput | boolean
    slug?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
    meta?: InputJsonValue | null
    cover?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumArticleStatusFieldUpdateOperationsInput | ArticleStatus
    browseCount?: IntFieldUpdateOperationsInput | number
    commentsCount?: IntFieldUpdateOperationsInput | number
    likesCount?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: CommentUncheckedUpdateManyWithoutArticleInput
    content?: ContentUncheckedUpdateOneWithoutArticleInput
    favoritings?: FavoriteUncheckedUpdateManyWithoutArticleInput
    likes?: LikeUncheckedUpdateManyWithoutArticleInput
    tags?: TagsOnArticlesUncheckedUpdateManyWithoutArticleInput
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.DMMF.Document;
}