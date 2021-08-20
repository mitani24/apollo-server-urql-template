import { ApolloError } from "@apollo/client"
import { Text } from "@chakra-ui/react"

type Props<TData> = {
  loading: boolean
  error?: ApolloError
  data?: TData
  children: (data: TData) => React.ReactNode
}

export default function QueryResult<TData = any>({
  loading,
  error,
  data,
  children,
}: Props<TData>) {
  if (error) {
    return <Text>ERROR: {error.message}</Text>
  }

  if (loading) {
    return <Text>Loading...</Text>
  }

  if (!data) {
    return <Text>Nothing to show...</Text>
  }

  return <>{children(data)}</>
}
