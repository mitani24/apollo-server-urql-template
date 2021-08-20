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
  const [result, updateTrack] = useUpdateTrackMutation()
  const { fetching } = result

  const handleClickOk = async () => {
    await updateTrack({
      updateTrackId: track.id,
      updateTrackContent: { title: value },
    })
    setEditing.off()
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
            <Button onClick={handleClickOk} isLoading={fetching}>
              OK
            </Button>
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
