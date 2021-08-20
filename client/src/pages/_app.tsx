import type { AppProps } from "next/app"
import { ChakraProvider } from "@chakra-ui/react"
import { Provider as UrqlProvider } from "urql"
import { client } from "@/lib/urql-client"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UrqlProvider value={client}>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </UrqlProvider>
  )
}

export default MyApp
