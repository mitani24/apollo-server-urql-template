import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
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

export type UpdateTrackMutationVariables = Exact<{
  updateTrackId: Scalars['ID'];
  updateTrackContent: UpdateTrackContent;
}>;


export type UpdateTrackMutation = { __typename?: 'Mutation', updateTrack: { __typename?: 'UpdateTrackResponse', code: number, success: boolean, message: string, track?: Maybe<{ __typename?: 'Track', title: string, id: string, thumbnail?: Maybe<string>, length?: Maybe<number>, modulesCount?: Maybe<number>, description?: Maybe<string>, numberOfViews?: Maybe<number>, modules: Array<Maybe<string>>, author: { __typename?: 'Author', id: string, name: string, photo?: Maybe<string> } }> } };

export type TrackQueryVariables = Exact<{
  trackId: Scalars['ID'];
}>;


export type TrackQuery = { __typename?: 'Query', track: { __typename?: 'Track', id: string, title: string, thumbnail?: Maybe<string>, description?: Maybe<string>, length?: Maybe<number>, modulesCount?: Maybe<number>, numberOfViews?: Maybe<number>, modules: Array<Maybe<string>>, author: { __typename?: 'Author', id: string, name: string, photo?: Maybe<string> } } };

export type TracksQueryVariables = Exact<{ [key: string]: never; }>;


export type TracksQuery = { __typename?: 'Query', tracks: Array<{ __typename?: 'Track', id: string, title: string, thumbnail?: Maybe<string>, author: { __typename?: 'Author', id: string, name: string, photo?: Maybe<string> } }> };


export const UpdateTrackDocument = gql`
    mutation updateTrack($updateTrackId: ID!, $updateTrackContent: UpdateTrackContent!) {
  updateTrack(id: $updateTrackId, content: $updateTrackContent) {
    code
    success
    message
    track {
      title
      id
      author {
        id
        name
        photo
      }
      thumbnail
      length
      modulesCount
      description
      numberOfViews
      modules
    }
  }
}
    `;
export type UpdateTrackMutationFn = Apollo.MutationFunction<UpdateTrackMutation, UpdateTrackMutationVariables>;

/**
 * __useUpdateTrackMutation__
 *
 * To run a mutation, you first call `useUpdateTrackMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateTrackMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateTrackMutation, { data, loading, error }] = useUpdateTrackMutation({
 *   variables: {
 *      updateTrackId: // value for 'updateTrackId'
 *      updateTrackContent: // value for 'updateTrackContent'
 *   },
 * });
 */
export function useUpdateTrackMutation(baseOptions?: Apollo.MutationHookOptions<UpdateTrackMutation, UpdateTrackMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateTrackMutation, UpdateTrackMutationVariables>(UpdateTrackDocument, options);
      }
export type UpdateTrackMutationHookResult = ReturnType<typeof useUpdateTrackMutation>;
export type UpdateTrackMutationResult = Apollo.MutationResult<UpdateTrackMutation>;
export type UpdateTrackMutationOptions = Apollo.BaseMutationOptions<UpdateTrackMutation, UpdateTrackMutationVariables>;
export const TrackDocument = gql`
    query track($trackId: ID!) {
  track(id: $trackId) {
    id
    title
    author {
      id
      name
      photo
    }
    thumbnail
    description
    length
    modulesCount
    description
    numberOfViews
    modules
  }
}
    `;

/**
 * __useTrackQuery__
 *
 * To run a query within a React component, call `useTrackQuery` and pass it any options that fit your needs.
 * When your component renders, `useTrackQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTrackQuery({
 *   variables: {
 *      trackId: // value for 'trackId'
 *   },
 * });
 */
export function useTrackQuery(baseOptions: Apollo.QueryHookOptions<TrackQuery, TrackQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TrackQuery, TrackQueryVariables>(TrackDocument, options);
      }
export function useTrackLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TrackQuery, TrackQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TrackQuery, TrackQueryVariables>(TrackDocument, options);
        }
export type TrackQueryHookResult = ReturnType<typeof useTrackQuery>;
export type TrackLazyQueryHookResult = ReturnType<typeof useTrackLazyQuery>;
export type TrackQueryResult = Apollo.QueryResult<TrackQuery, TrackQueryVariables>;
export const TracksDocument = gql`
    query tracks {
  tracks {
    id
    title
    author {
      id
      name
      photo
    }
    thumbnail
  }
}
    `;

/**
 * __useTracksQuery__
 *
 * To run a query within a React component, call `useTracksQuery` and pass it any options that fit your needs.
 * When your component renders, `useTracksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTracksQuery({
 *   variables: {
 *   },
 * });
 */
export function useTracksQuery(baseOptions?: Apollo.QueryHookOptions<TracksQuery, TracksQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TracksQuery, TracksQueryVariables>(TracksDocument, options);
      }
export function useTracksLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TracksQuery, TracksQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TracksQuery, TracksQueryVariables>(TracksDocument, options);
        }
export type TracksQueryHookResult = ReturnType<typeof useTracksQuery>;
export type TracksLazyQueryHookResult = ReturnType<typeof useTracksLazyQuery>;
export type TracksQueryResult = Apollo.QueryResult<TracksQuery, TracksQueryVariables>;