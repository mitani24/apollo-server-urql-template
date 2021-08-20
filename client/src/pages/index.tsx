import { Box, Heading } from "@chakra-ui/react"
import TrackList from "@/components/TrackList"
import ClientOnly from "@/components/ClientOnly"

export default function Home() {
  return (
    <Box m={6}>
      <ClientOnly>
        <TrackList />
      </ClientOnly>
    </Box>
  )
}
