import { Text } from "@chakra-ui/react"
import { CombinedError } from "urql"

type Props<TData> = {
  fetching: boolean
  error?: CombinedError
  data?: TData
  children: (data: TData) => React.ReactNode
}

export default function QueryResult<TData = any>({
  fetching,
  error,
  data,
  children,
}: Props<TData>) {
  if (error) {
    return <Text>ERROR: {error.message}</Text>
  }

  if (fetching) {
    return <Text>Loading...</Text>
  }

  if (!data) {
    return <Text>Nothing to show...</Text>
  }

  return <>{children(data)}</>
}
