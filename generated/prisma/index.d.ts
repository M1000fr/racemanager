
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model SimulatorAccount
 * 
 */
export type SimulatorAccount = $Result.DefaultSelection<Prisma.$SimulatorAccountPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more SimulatorAccounts
 * const simulatorAccounts = await prisma.simulatorAccount.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more SimulatorAccounts
   * const simulatorAccounts = await prisma.simulatorAccount.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.simulatorAccount`: Exposes CRUD operations for the **SimulatorAccount** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SimulatorAccounts
    * const simulatorAccounts = await prisma.simulatorAccount.findMany()
    * ```
    */
  get simulatorAccount(): Prisma.SimulatorAccountDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

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

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

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

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

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
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
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
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
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

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

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

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



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
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    SimulatorAccount: 'SimulatorAccount'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "simulatorAccount"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      SimulatorAccount: {
        payload: Prisma.$SimulatorAccountPayload<ExtArgs>
        fields: Prisma.SimulatorAccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SimulatorAccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SimulatorAccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SimulatorAccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SimulatorAccountPayload>
          }
          findFirst: {
            args: Prisma.SimulatorAccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SimulatorAccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SimulatorAccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SimulatorAccountPayload>
          }
          findMany: {
            args: Prisma.SimulatorAccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SimulatorAccountPayload>[]
          }
          create: {
            args: Prisma.SimulatorAccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SimulatorAccountPayload>
          }
          createMany: {
            args: Prisma.SimulatorAccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SimulatorAccountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SimulatorAccountPayload>[]
          }
          delete: {
            args: Prisma.SimulatorAccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SimulatorAccountPayload>
          }
          update: {
            args: Prisma.SimulatorAccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SimulatorAccountPayload>
          }
          deleteMany: {
            args: Prisma.SimulatorAccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SimulatorAccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SimulatorAccountUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SimulatorAccountPayload>[]
          }
          upsert: {
            args: Prisma.SimulatorAccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SimulatorAccountPayload>
          }
          aggregate: {
            args: Prisma.SimulatorAccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSimulatorAccount>
          }
          groupBy: {
            args: Prisma.SimulatorAccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<SimulatorAccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.SimulatorAccountCountArgs<ExtArgs>
            result: $Utils.Optional<SimulatorAccountCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
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
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    simulatorAccount?: SimulatorAccountOmit
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
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
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
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model SimulatorAccount
   */

  export type AggregateSimulatorAccount = {
    _count: SimulatorAccountCountAggregateOutputType | null
    _avg: SimulatorAccountAvgAggregateOutputType | null
    _sum: SimulatorAccountSumAggregateOutputType | null
    _min: SimulatorAccountMinAggregateOutputType | null
    _max: SimulatorAccountMaxAggregateOutputType | null
  }

  export type SimulatorAccountAvgAggregateOutputType = {
    id: number | null
  }

  export type SimulatorAccountSumAggregateOutputType = {
    id: number | null
  }

  export type SimulatorAccountMinAggregateOutputType = {
    id: number | null
    name: string | null
    discordId: string | null
  }

  export type SimulatorAccountMaxAggregateOutputType = {
    id: number | null
    name: string | null
    discordId: string | null
  }

  export type SimulatorAccountCountAggregateOutputType = {
    id: number
    name: number
    discordId: number
    _all: number
  }


  export type SimulatorAccountAvgAggregateInputType = {
    id?: true
  }

  export type SimulatorAccountSumAggregateInputType = {
    id?: true
  }

  export type SimulatorAccountMinAggregateInputType = {
    id?: true
    name?: true
    discordId?: true
  }

  export type SimulatorAccountMaxAggregateInputType = {
    id?: true
    name?: true
    discordId?: true
  }

  export type SimulatorAccountCountAggregateInputType = {
    id?: true
    name?: true
    discordId?: true
    _all?: true
  }

  export type SimulatorAccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SimulatorAccount to aggregate.
     */
    where?: SimulatorAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SimulatorAccounts to fetch.
     */
    orderBy?: SimulatorAccountOrderByWithRelationInput | SimulatorAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SimulatorAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SimulatorAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SimulatorAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SimulatorAccounts
    **/
    _count?: true | SimulatorAccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SimulatorAccountAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SimulatorAccountSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SimulatorAccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SimulatorAccountMaxAggregateInputType
  }

  export type GetSimulatorAccountAggregateType<T extends SimulatorAccountAggregateArgs> = {
        [P in keyof T & keyof AggregateSimulatorAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSimulatorAccount[P]>
      : GetScalarType<T[P], AggregateSimulatorAccount[P]>
  }




  export type SimulatorAccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SimulatorAccountWhereInput
    orderBy?: SimulatorAccountOrderByWithAggregationInput | SimulatorAccountOrderByWithAggregationInput[]
    by: SimulatorAccountScalarFieldEnum[] | SimulatorAccountScalarFieldEnum
    having?: SimulatorAccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SimulatorAccountCountAggregateInputType | true
    _avg?: SimulatorAccountAvgAggregateInputType
    _sum?: SimulatorAccountSumAggregateInputType
    _min?: SimulatorAccountMinAggregateInputType
    _max?: SimulatorAccountMaxAggregateInputType
  }

  export type SimulatorAccountGroupByOutputType = {
    id: number
    name: string
    discordId: string
    _count: SimulatorAccountCountAggregateOutputType | null
    _avg: SimulatorAccountAvgAggregateOutputType | null
    _sum: SimulatorAccountSumAggregateOutputType | null
    _min: SimulatorAccountMinAggregateOutputType | null
    _max: SimulatorAccountMaxAggregateOutputType | null
  }

  type GetSimulatorAccountGroupByPayload<T extends SimulatorAccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SimulatorAccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SimulatorAccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SimulatorAccountGroupByOutputType[P]>
            : GetScalarType<T[P], SimulatorAccountGroupByOutputType[P]>
        }
      >
    >


  export type SimulatorAccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    discordId?: boolean
  }, ExtArgs["result"]["simulatorAccount"]>

  export type SimulatorAccountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    discordId?: boolean
  }, ExtArgs["result"]["simulatorAccount"]>

  export type SimulatorAccountSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    discordId?: boolean
  }, ExtArgs["result"]["simulatorAccount"]>

  export type SimulatorAccountSelectScalar = {
    id?: boolean
    name?: boolean
    discordId?: boolean
  }

  export type SimulatorAccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "discordId", ExtArgs["result"]["simulatorAccount"]>

  export type $SimulatorAccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SimulatorAccount"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      discordId: string
    }, ExtArgs["result"]["simulatorAccount"]>
    composites: {}
  }

  type SimulatorAccountGetPayload<S extends boolean | null | undefined | SimulatorAccountDefaultArgs> = $Result.GetResult<Prisma.$SimulatorAccountPayload, S>

  type SimulatorAccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SimulatorAccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SimulatorAccountCountAggregateInputType | true
    }

  export interface SimulatorAccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SimulatorAccount'], meta: { name: 'SimulatorAccount' } }
    /**
     * Find zero or one SimulatorAccount that matches the filter.
     * @param {SimulatorAccountFindUniqueArgs} args - Arguments to find a SimulatorAccount
     * @example
     * // Get one SimulatorAccount
     * const simulatorAccount = await prisma.simulatorAccount.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SimulatorAccountFindUniqueArgs>(args: SelectSubset<T, SimulatorAccountFindUniqueArgs<ExtArgs>>): Prisma__SimulatorAccountClient<$Result.GetResult<Prisma.$SimulatorAccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SimulatorAccount that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SimulatorAccountFindUniqueOrThrowArgs} args - Arguments to find a SimulatorAccount
     * @example
     * // Get one SimulatorAccount
     * const simulatorAccount = await prisma.simulatorAccount.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SimulatorAccountFindUniqueOrThrowArgs>(args: SelectSubset<T, SimulatorAccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SimulatorAccountClient<$Result.GetResult<Prisma.$SimulatorAccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SimulatorAccount that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SimulatorAccountFindFirstArgs} args - Arguments to find a SimulatorAccount
     * @example
     * // Get one SimulatorAccount
     * const simulatorAccount = await prisma.simulatorAccount.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SimulatorAccountFindFirstArgs>(args?: SelectSubset<T, SimulatorAccountFindFirstArgs<ExtArgs>>): Prisma__SimulatorAccountClient<$Result.GetResult<Prisma.$SimulatorAccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SimulatorAccount that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SimulatorAccountFindFirstOrThrowArgs} args - Arguments to find a SimulatorAccount
     * @example
     * // Get one SimulatorAccount
     * const simulatorAccount = await prisma.simulatorAccount.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SimulatorAccountFindFirstOrThrowArgs>(args?: SelectSubset<T, SimulatorAccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__SimulatorAccountClient<$Result.GetResult<Prisma.$SimulatorAccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SimulatorAccounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SimulatorAccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SimulatorAccounts
     * const simulatorAccounts = await prisma.simulatorAccount.findMany()
     * 
     * // Get first 10 SimulatorAccounts
     * const simulatorAccounts = await prisma.simulatorAccount.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const simulatorAccountWithIdOnly = await prisma.simulatorAccount.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SimulatorAccountFindManyArgs>(args?: SelectSubset<T, SimulatorAccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SimulatorAccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SimulatorAccount.
     * @param {SimulatorAccountCreateArgs} args - Arguments to create a SimulatorAccount.
     * @example
     * // Create one SimulatorAccount
     * const SimulatorAccount = await prisma.simulatorAccount.create({
     *   data: {
     *     // ... data to create a SimulatorAccount
     *   }
     * })
     * 
     */
    create<T extends SimulatorAccountCreateArgs>(args: SelectSubset<T, SimulatorAccountCreateArgs<ExtArgs>>): Prisma__SimulatorAccountClient<$Result.GetResult<Prisma.$SimulatorAccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SimulatorAccounts.
     * @param {SimulatorAccountCreateManyArgs} args - Arguments to create many SimulatorAccounts.
     * @example
     * // Create many SimulatorAccounts
     * const simulatorAccount = await prisma.simulatorAccount.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SimulatorAccountCreateManyArgs>(args?: SelectSubset<T, SimulatorAccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SimulatorAccounts and returns the data saved in the database.
     * @param {SimulatorAccountCreateManyAndReturnArgs} args - Arguments to create many SimulatorAccounts.
     * @example
     * // Create many SimulatorAccounts
     * const simulatorAccount = await prisma.simulatorAccount.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SimulatorAccounts and only return the `id`
     * const simulatorAccountWithIdOnly = await prisma.simulatorAccount.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SimulatorAccountCreateManyAndReturnArgs>(args?: SelectSubset<T, SimulatorAccountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SimulatorAccountPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SimulatorAccount.
     * @param {SimulatorAccountDeleteArgs} args - Arguments to delete one SimulatorAccount.
     * @example
     * // Delete one SimulatorAccount
     * const SimulatorAccount = await prisma.simulatorAccount.delete({
     *   where: {
     *     // ... filter to delete one SimulatorAccount
     *   }
     * })
     * 
     */
    delete<T extends SimulatorAccountDeleteArgs>(args: SelectSubset<T, SimulatorAccountDeleteArgs<ExtArgs>>): Prisma__SimulatorAccountClient<$Result.GetResult<Prisma.$SimulatorAccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SimulatorAccount.
     * @param {SimulatorAccountUpdateArgs} args - Arguments to update one SimulatorAccount.
     * @example
     * // Update one SimulatorAccount
     * const simulatorAccount = await prisma.simulatorAccount.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SimulatorAccountUpdateArgs>(args: SelectSubset<T, SimulatorAccountUpdateArgs<ExtArgs>>): Prisma__SimulatorAccountClient<$Result.GetResult<Prisma.$SimulatorAccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SimulatorAccounts.
     * @param {SimulatorAccountDeleteManyArgs} args - Arguments to filter SimulatorAccounts to delete.
     * @example
     * // Delete a few SimulatorAccounts
     * const { count } = await prisma.simulatorAccount.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SimulatorAccountDeleteManyArgs>(args?: SelectSubset<T, SimulatorAccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SimulatorAccounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SimulatorAccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SimulatorAccounts
     * const simulatorAccount = await prisma.simulatorAccount.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SimulatorAccountUpdateManyArgs>(args: SelectSubset<T, SimulatorAccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SimulatorAccounts and returns the data updated in the database.
     * @param {SimulatorAccountUpdateManyAndReturnArgs} args - Arguments to update many SimulatorAccounts.
     * @example
     * // Update many SimulatorAccounts
     * const simulatorAccount = await prisma.simulatorAccount.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SimulatorAccounts and only return the `id`
     * const simulatorAccountWithIdOnly = await prisma.simulatorAccount.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SimulatorAccountUpdateManyAndReturnArgs>(args: SelectSubset<T, SimulatorAccountUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SimulatorAccountPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SimulatorAccount.
     * @param {SimulatorAccountUpsertArgs} args - Arguments to update or create a SimulatorAccount.
     * @example
     * // Update or create a SimulatorAccount
     * const simulatorAccount = await prisma.simulatorAccount.upsert({
     *   create: {
     *     // ... data to create a SimulatorAccount
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SimulatorAccount we want to update
     *   }
     * })
     */
    upsert<T extends SimulatorAccountUpsertArgs>(args: SelectSubset<T, SimulatorAccountUpsertArgs<ExtArgs>>): Prisma__SimulatorAccountClient<$Result.GetResult<Prisma.$SimulatorAccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SimulatorAccounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SimulatorAccountCountArgs} args - Arguments to filter SimulatorAccounts to count.
     * @example
     * // Count the number of SimulatorAccounts
     * const count = await prisma.simulatorAccount.count({
     *   where: {
     *     // ... the filter for the SimulatorAccounts we want to count
     *   }
     * })
    **/
    count<T extends SimulatorAccountCountArgs>(
      args?: Subset<T, SimulatorAccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SimulatorAccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SimulatorAccount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SimulatorAccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SimulatorAccountAggregateArgs>(args: Subset<T, SimulatorAccountAggregateArgs>): Prisma.PrismaPromise<GetSimulatorAccountAggregateType<T>>

    /**
     * Group by SimulatorAccount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SimulatorAccountGroupByArgs} args - Group by arguments.
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
      T extends SimulatorAccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SimulatorAccountGroupByArgs['orderBy'] }
        : { orderBy?: SimulatorAccountGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, SimulatorAccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSimulatorAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SimulatorAccount model
   */
  readonly fields: SimulatorAccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SimulatorAccount.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SimulatorAccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SimulatorAccount model
   */
  interface SimulatorAccountFieldRefs {
    readonly id: FieldRef<"SimulatorAccount", 'Int'>
    readonly name: FieldRef<"SimulatorAccount", 'String'>
    readonly discordId: FieldRef<"SimulatorAccount", 'String'>
  }
    

  // Custom InputTypes
  /**
   * SimulatorAccount findUnique
   */
  export type SimulatorAccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SimulatorAccount
     */
    select?: SimulatorAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SimulatorAccount
     */
    omit?: SimulatorAccountOmit<ExtArgs> | null
    /**
     * Filter, which SimulatorAccount to fetch.
     */
    where: SimulatorAccountWhereUniqueInput
  }

  /**
   * SimulatorAccount findUniqueOrThrow
   */
  export type SimulatorAccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SimulatorAccount
     */
    select?: SimulatorAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SimulatorAccount
     */
    omit?: SimulatorAccountOmit<ExtArgs> | null
    /**
     * Filter, which SimulatorAccount to fetch.
     */
    where: SimulatorAccountWhereUniqueInput
  }

  /**
   * SimulatorAccount findFirst
   */
  export type SimulatorAccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SimulatorAccount
     */
    select?: SimulatorAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SimulatorAccount
     */
    omit?: SimulatorAccountOmit<ExtArgs> | null
    /**
     * Filter, which SimulatorAccount to fetch.
     */
    where?: SimulatorAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SimulatorAccounts to fetch.
     */
    orderBy?: SimulatorAccountOrderByWithRelationInput | SimulatorAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SimulatorAccounts.
     */
    cursor?: SimulatorAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SimulatorAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SimulatorAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SimulatorAccounts.
     */
    distinct?: SimulatorAccountScalarFieldEnum | SimulatorAccountScalarFieldEnum[]
  }

  /**
   * SimulatorAccount findFirstOrThrow
   */
  export type SimulatorAccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SimulatorAccount
     */
    select?: SimulatorAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SimulatorAccount
     */
    omit?: SimulatorAccountOmit<ExtArgs> | null
    /**
     * Filter, which SimulatorAccount to fetch.
     */
    where?: SimulatorAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SimulatorAccounts to fetch.
     */
    orderBy?: SimulatorAccountOrderByWithRelationInput | SimulatorAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SimulatorAccounts.
     */
    cursor?: SimulatorAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SimulatorAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SimulatorAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SimulatorAccounts.
     */
    distinct?: SimulatorAccountScalarFieldEnum | SimulatorAccountScalarFieldEnum[]
  }

  /**
   * SimulatorAccount findMany
   */
  export type SimulatorAccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SimulatorAccount
     */
    select?: SimulatorAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SimulatorAccount
     */
    omit?: SimulatorAccountOmit<ExtArgs> | null
    /**
     * Filter, which SimulatorAccounts to fetch.
     */
    where?: SimulatorAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SimulatorAccounts to fetch.
     */
    orderBy?: SimulatorAccountOrderByWithRelationInput | SimulatorAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SimulatorAccounts.
     */
    cursor?: SimulatorAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SimulatorAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SimulatorAccounts.
     */
    skip?: number
    distinct?: SimulatorAccountScalarFieldEnum | SimulatorAccountScalarFieldEnum[]
  }

  /**
   * SimulatorAccount create
   */
  export type SimulatorAccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SimulatorAccount
     */
    select?: SimulatorAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SimulatorAccount
     */
    omit?: SimulatorAccountOmit<ExtArgs> | null
    /**
     * The data needed to create a SimulatorAccount.
     */
    data: XOR<SimulatorAccountCreateInput, SimulatorAccountUncheckedCreateInput>
  }

  /**
   * SimulatorAccount createMany
   */
  export type SimulatorAccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SimulatorAccounts.
     */
    data: SimulatorAccountCreateManyInput | SimulatorAccountCreateManyInput[]
  }

  /**
   * SimulatorAccount createManyAndReturn
   */
  export type SimulatorAccountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SimulatorAccount
     */
    select?: SimulatorAccountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SimulatorAccount
     */
    omit?: SimulatorAccountOmit<ExtArgs> | null
    /**
     * The data used to create many SimulatorAccounts.
     */
    data: SimulatorAccountCreateManyInput | SimulatorAccountCreateManyInput[]
  }

  /**
   * SimulatorAccount update
   */
  export type SimulatorAccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SimulatorAccount
     */
    select?: SimulatorAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SimulatorAccount
     */
    omit?: SimulatorAccountOmit<ExtArgs> | null
    /**
     * The data needed to update a SimulatorAccount.
     */
    data: XOR<SimulatorAccountUpdateInput, SimulatorAccountUncheckedUpdateInput>
    /**
     * Choose, which SimulatorAccount to update.
     */
    where: SimulatorAccountWhereUniqueInput
  }

  /**
   * SimulatorAccount updateMany
   */
  export type SimulatorAccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SimulatorAccounts.
     */
    data: XOR<SimulatorAccountUpdateManyMutationInput, SimulatorAccountUncheckedUpdateManyInput>
    /**
     * Filter which SimulatorAccounts to update
     */
    where?: SimulatorAccountWhereInput
    /**
     * Limit how many SimulatorAccounts to update.
     */
    limit?: number
  }

  /**
   * SimulatorAccount updateManyAndReturn
   */
  export type SimulatorAccountUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SimulatorAccount
     */
    select?: SimulatorAccountSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SimulatorAccount
     */
    omit?: SimulatorAccountOmit<ExtArgs> | null
    /**
     * The data used to update SimulatorAccounts.
     */
    data: XOR<SimulatorAccountUpdateManyMutationInput, SimulatorAccountUncheckedUpdateManyInput>
    /**
     * Filter which SimulatorAccounts to update
     */
    where?: SimulatorAccountWhereInput
    /**
     * Limit how many SimulatorAccounts to update.
     */
    limit?: number
  }

  /**
   * SimulatorAccount upsert
   */
  export type SimulatorAccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SimulatorAccount
     */
    select?: SimulatorAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SimulatorAccount
     */
    omit?: SimulatorAccountOmit<ExtArgs> | null
    /**
     * The filter to search for the SimulatorAccount to update in case it exists.
     */
    where: SimulatorAccountWhereUniqueInput
    /**
     * In case the SimulatorAccount found by the `where` argument doesn't exist, create a new SimulatorAccount with this data.
     */
    create: XOR<SimulatorAccountCreateInput, SimulatorAccountUncheckedCreateInput>
    /**
     * In case the SimulatorAccount was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SimulatorAccountUpdateInput, SimulatorAccountUncheckedUpdateInput>
  }

  /**
   * SimulatorAccount delete
   */
  export type SimulatorAccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SimulatorAccount
     */
    select?: SimulatorAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SimulatorAccount
     */
    omit?: SimulatorAccountOmit<ExtArgs> | null
    /**
     * Filter which SimulatorAccount to delete.
     */
    where: SimulatorAccountWhereUniqueInput
  }

  /**
   * SimulatorAccount deleteMany
   */
  export type SimulatorAccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SimulatorAccounts to delete
     */
    where?: SimulatorAccountWhereInput
    /**
     * Limit how many SimulatorAccounts to delete.
     */
    limit?: number
  }

  /**
   * SimulatorAccount without action
   */
  export type SimulatorAccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SimulatorAccount
     */
    select?: SimulatorAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SimulatorAccount
     */
    omit?: SimulatorAccountOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const SimulatorAccountScalarFieldEnum: {
    id: 'id',
    name: 'name',
    discordId: 'discordId'
  };

  export type SimulatorAccountScalarFieldEnum = (typeof SimulatorAccountScalarFieldEnum)[keyof typeof SimulatorAccountScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type SimulatorAccountWhereInput = {
    AND?: SimulatorAccountWhereInput | SimulatorAccountWhereInput[]
    OR?: SimulatorAccountWhereInput[]
    NOT?: SimulatorAccountWhereInput | SimulatorAccountWhereInput[]
    id?: IntFilter<"SimulatorAccount"> | number
    name?: StringFilter<"SimulatorAccount"> | string
    discordId?: StringFilter<"SimulatorAccount"> | string
  }

  export type SimulatorAccountOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    discordId?: SortOrder
  }

  export type SimulatorAccountWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    discordId?: string
    AND?: SimulatorAccountWhereInput | SimulatorAccountWhereInput[]
    OR?: SimulatorAccountWhereInput[]
    NOT?: SimulatorAccountWhereInput | SimulatorAccountWhereInput[]
  }, "id" | "name" | "discordId">

  export type SimulatorAccountOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    discordId?: SortOrder
    _count?: SimulatorAccountCountOrderByAggregateInput
    _avg?: SimulatorAccountAvgOrderByAggregateInput
    _max?: SimulatorAccountMaxOrderByAggregateInput
    _min?: SimulatorAccountMinOrderByAggregateInput
    _sum?: SimulatorAccountSumOrderByAggregateInput
  }

  export type SimulatorAccountScalarWhereWithAggregatesInput = {
    AND?: SimulatorAccountScalarWhereWithAggregatesInput | SimulatorAccountScalarWhereWithAggregatesInput[]
    OR?: SimulatorAccountScalarWhereWithAggregatesInput[]
    NOT?: SimulatorAccountScalarWhereWithAggregatesInput | SimulatorAccountScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"SimulatorAccount"> | number
    name?: StringWithAggregatesFilter<"SimulatorAccount"> | string
    discordId?: StringWithAggregatesFilter<"SimulatorAccount"> | string
  }

  export type SimulatorAccountCreateInput = {
    name: string
    discordId: string
  }

  export type SimulatorAccountUncheckedCreateInput = {
    id?: number
    name: string
    discordId: string
  }

  export type SimulatorAccountUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    discordId?: StringFieldUpdateOperationsInput | string
  }

  export type SimulatorAccountUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    discordId?: StringFieldUpdateOperationsInput | string
  }

  export type SimulatorAccountCreateManyInput = {
    id?: number
    name: string
    discordId: string
  }

  export type SimulatorAccountUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    discordId?: StringFieldUpdateOperationsInput | string
  }

  export type SimulatorAccountUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    discordId?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type SimulatorAccountCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    discordId?: SortOrder
  }

  export type SimulatorAccountAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SimulatorAccountMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    discordId?: SortOrder
  }

  export type SimulatorAccountMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    discordId?: SortOrder
  }

  export type SimulatorAccountSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
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
  export const dmmf: runtime.BaseDMMF
}