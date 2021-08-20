import { UnorderedList } from "@chakra-ui/react"
import QueryResult from "./QueryResult"
import TrackItem from "./TrackItem"
import { useTracksQuery } from "@/__generated__/graphql-client-api"

export default function TrackList() {
  const { loading, error, data } = useTracksQuery()

  return (
    <QueryResult loading={loading} error={error} data={data}>
      {({ tracks }) => (
        <UnorderedList>
          {tracks.map((track) => (
            <TrackItem key={track.id} track={track} />
          ))}
        </UnorderedList>
      )}
    </QueryResult>
  )
}
