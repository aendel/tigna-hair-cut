import { Flex, Heading, Link } from "@chakra-ui/layout";
import Layout from "../components/layout";

export default function Custom500() {
  return (
    <Layout>
      <Flex direction="column" alignItems="center">
        <Heading as="h1" size="4xl">
          500 - Server-side error occurred
        </Heading>
        <Heading as="h3" size="xl">
          It's seems like the barber has cut too much.
        </Heading>
        <Heading as="h2" size="xl">
          Never mind, <Link href="/">go back to the saloon!</Link>
        </Heading>
      </Flex>
    </Layout>
  );
}
