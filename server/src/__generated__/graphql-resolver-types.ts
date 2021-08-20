import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

/** Author of a complete Track or a Module */
export type Author = {
  __typename?: 'Author';
  id: Scalars['ID'];
  /** Author's first and last name */
  name: Scalars['String'];
  /** Author's profile picture */
  photo?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Update track content */
  updateTrack: UpdateTrackResponse;
};


export type MutationUpdateTrackArgs = {
  id: Scalars['ID'];
  content: UpdateTrackContent;
};

export type Query = {
  __typename?: 'Query';
  /** Query to get tracks array for the homepage grid */
  tracks: Array<Track>;
  /** Fetch a specific track, provided a track's ID */
  track: Track;
};


export type QueryTrackArgs = {
  id: Scalars['ID'];
};

/** A track is a group of Modules that teaches about a specific topic */
export type Track = {
  __typename?: 'Track';
  id: Scalars['ID'];
  /** The track's title */
  title: Scalars['String'];
  /** The track's main Author ID */
  authorId: Scalars['String'];
  /** The track's main Author */
  author: Author;
  /** The track's illustration to display in track card or track page detail */
  thumbnail?: Maybe<Scalars['String']>;
  /** The track's approximate length to complete, in minutes */
  length?: Maybe<Scalars['Int']>;
  /** The number of modules this track contains */
  modulesCount?: Maybe<Scalars['Int']>;
  /** The track's complete description, can be in markdown format */
  description?: Maybe<Scalars['String']>;
  /** The number of times a track has been viewed */
  numberOfViews?: Maybe<Scalars['Int']>;
  /** The track's complete array of Modules */
  modules: Array<Maybe<Scalars['String']>>;
};

export type UpdateTrackContent = {
  title?: Maybe<Scalars['String']>;
  authorId?: Maybe<Scalars['String']>;
  thumbnail?: Maybe<Scalars['String']>;
  length?: Maybe<Scalars['Int']>;
  modulesCount?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  numberOfViews?: Maybe<Scalars['Int']>;
  modules?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type UpdateTrackResponse = {
  __typename?: 'UpdateTrackResponse';
  /** Similar to HTTP status code, represents the status of the mutation */
  code: Scalars['Int'];
  /** Indicates whether the mutation was successful */
  success: Scalars['Boolean'];
  /** Human-readable message for the UI */
  message: Scalars['String'];
  /** Newly updated track after a successful mutation */
  track?: Maybe<Track>;
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Author: ResolverTypeWrapper<Author>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Mutation: ResolverTypeWrapper<{}>;
  Query: ResolverTypeWrapper<{}>;
  Track: ResolverTypeWrapper<Track>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  UpdateTrackContent: UpdateTrackContent;
  UpdateTrackResponse: ResolverTypeWrapper<UpdateTrackResponse>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Author: Author;
  ID: Scalars['ID'];
  String: Scalars['String'];
  Mutation: {};
  Query: {};
  Track: Track;
  Int: Scalars['Int'];
  UpdateTrackContent: UpdateTrackContent;
  UpdateTrackResponse: UpdateTrackResponse;
  Boolean: Scalars['Boolean'];
};

export type AuthorResolvers<ContextType = any, ParentType extends ResolversParentTypes['Author'] = ResolversParentTypes['Author']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  photo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  updateTrack?: Resolver<ResolversTypes['UpdateTrackResponse'], ParentType, ContextType, RequireFields<MutationUpdateTrackArgs, 'id' | 'content'>>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  tracks?: Resolver<Array<ResolversTypes['Track']>, ParentType, ContextType>;
  track?: Resolver<ResolversTypes['Track'], ParentType, ContextType, RequireFields<QueryTrackArgs, 'id'>>;
};

export type TrackResolvers<ContextType = any, ParentType extends ResolversParentTypes['Track'] = ResolversParentTypes['Track']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  authorId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  author?: Resolver<ResolversTypes['Author'], ParentType, ContextType>;
  thumbnail?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  length?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  modulesCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  numberOfViews?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  modules?: Resolver<Array<Maybe<ResolversTypes['String']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateTrackResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpdateTrackResponse'] = ResolversParentTypes['UpdateTrackResponse']> = {
  code?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  track?: Resolver<Maybe<ResolversTypes['Track']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Author?: AuthorResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Track?: TrackResolvers<ContextType>;
  UpdateTrackResponse?: UpdateTrackResponseResolvers<ContextType>;
};

