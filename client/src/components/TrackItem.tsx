import { useState } from "react"
import {
  ListItem,
  Text,
  Button,
  useBoolean,
  Input,
  HStack,
} from "@chakra-ui/react"
import {
  TracksQuery,
  useUpdateTrackMutation,
} from "@/__generated__/graphql-client-api"
import { ArrayElement } from "@/types/utils"

type Props = {
  track: ArrayElement<TracksQuery["tracks"]>
}

export default function TrackItem({ track }: Props) {
  const [editing, setEditing] = useBoolean()
  const [value, setValue] = useState(track.title)
  const [updateTrack] = useUpdateTrackMutation({
    onCompleted() {
      setEditing.off()
    },
  })

  const handleClickOk = () => {
    updateTrack({
      variables: {
        updateTrackId: track.id,
        updateTrackContent: { title: value },
      },
    })
  }

  return (
    <ListItem p={4}>
      <HStack>
        {editing ? (
          <>
            <Input
              value={value}
              onChange={(event) => setValue(event.target.value)}
            />
            <Button onClick={handleClickOk}>OK</Button>
          </>
        ) : (
          <>
            <Text>{track.title}</Text>
            <Button onClick={setEditing.on}>Edit</Button>
          </>
        )}
      </HStack>
    </ListItem>
  )
}
