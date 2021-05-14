import { Flex, Heading, Link } from "@chakra-ui/layout";
import Layout from "../components/layout";

export default function Custom404() {
  return (
    <Layout>
      <Flex direction="column" alignItems="center">
        <Heading as="h1" size="4xl">
          404 - Page Not Found
        </Heading>
        <Heading as="h3" size="xl">
          It's seems like the haircut your are looking for is not here.
        </Heading>
        <Heading as="h2" size="xl">
          Never mind, <Link href="/">go back to the saloon!</Link>
        </Heading>
      </Flex>
    </Layout>
  );
}
