import {
  Input,
  InputGroup,
  InputLeftElement,
  InputRightAddon,
} from "@chakra-ui/input";
import Layout from "../components/layout";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Button,
  Heading,
} from "@chakra-ui/react";
import { ExternalLinkIcon, LinkIcon } from "@chakra-ui/icons";
export default function Home() {
  return (
    <Layout>
      <FormControl id="shortlink" p={16} isInvalid>
        <FormLabel>
          <Heading>Shave your link</Heading>
        </FormLabel>
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={<LinkIcon color="gray.300" />}
          />
          <Input placeholder="https://www.your-hairy-link.com/hair/hair/hair" />
          <InputRightAddon>
            <Button colorScheme="teal" rightIcon={<ExternalLinkIcon />}>
              Shave it!
            </Button>
          </InputRightAddon>
        </InputGroup>
        <FormHelperText>We'll make a shiny haircut to your url.</FormHelperText>
        <FormErrorMessage>ErrorMessage</FormErrorMessage>
      </FormControl>
    </Layout>
  );
}
