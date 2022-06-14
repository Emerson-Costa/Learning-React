import * as React from "react"
import {
  ChakraProvider,
  Box,
  Button,
  theme,
} from "@chakra-ui/react"

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl">
      <Button 
        colorScheme='blue'
      >
        Button
      </Button>  
    </Box>
  </ChakraProvider>
)
