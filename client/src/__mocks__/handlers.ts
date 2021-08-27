import { graphql } from "msw"
import {
  namedOperations,
  newTrack,
  TrackQuery,
  TrackQueryVariables,
  TracksQuery,
  UpdateTrackMutation,
  UpdateTrackMutationVariables,
} from "@/__generated__/graphql-client-api"

export const handlers = [
  graphql.query<TracksQuery>(namedOperations.Query.tracks, (req, res, ctx) => {
    return res(
      ctx.data({
        tracks: [newTrack({ title: "hoge" }), newTrack({ title: "fuga" })],
      }),
    )
  }),
  graphql.query<TrackQuery, TrackQueryVariables>(
    namedOperations.Query.track,
    (req, res, ctx) => {
      return res(
        ctx.data({
          track: newTrack({ title: "hoge" }),
        }),
      )
    },
  ),
  graphql.mutation<UpdateTrackMutation, UpdateTrackMutationVariables>(
    namedOperations.Mutation.updateTrack,
    (req, res, ctx) => {
      return res(
        ctx.data({
          updateTrack: {
            code: 200,
            success: true,
            message: "ok",
            track: newTrack({ title: "fuga" }),
          },
        }),
      )
    },
  ),
]
