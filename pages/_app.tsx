import { ChakraProvider } from "@chakra-ui/react";
import Metadata from './index'

export default function App({Component, pageProps}) {
    return(
        <ChakraProvider>
            
            <Component {... pageProps}/>
        </ChakraProvider>
    )
}