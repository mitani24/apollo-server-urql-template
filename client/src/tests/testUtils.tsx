import React from "react"
import { Client, Provider } from "urql"
import { ChakraProvider } from "@chakra-ui/react"

export type MockClient<P extends keyof Client> = Pick<Client, P>

type WithMockProviderProps<KeyOfClient extends keyof Client> = {
  children: React.ReactNode
  value: MockClient<KeyOfClient>
}

export function WithMockProvider<KeyOfClient extends keyof Client>(
  props: WithMockProviderProps<KeyOfClient>,
) {
  return (
    <Provider value={props.value as Client}>
      <ChakraProvider>{props.children}</ChakraProvider>
    </Provider>
  )
}

export type WithData<Data> = {
  data: Data
}
