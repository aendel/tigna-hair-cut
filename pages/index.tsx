import { ExternalLinkIcon, LinkIcon } from "@chakra-ui/icons";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/input";
import {
  Box,
  Button,
  Divider,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Heading,
  SkeletonText,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Layout from "../components/layout";

type FormValues = {
  link: string;
};

type StatusValues = "initial" | "error" | "success";

export default function Home() {
  const cardBg = useColorModeValue("gray.50", "gray.700");

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<FormValues>();

  const [status, setStatus] = useState<StatusValues>("initial");

  function onSubmit(values) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        setStatus("success");
        resolve("");
      }, 3000);
    });
  }
  return (
    <Layout>
      <Box w="95%" boxShadow="lg" bg={cardBg}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl id="shortlink" p={16} isInvalid={!!errors.link}>
            <FormLabel>
              <Heading as="h2" size="2xl">
                Shave your link
              </Heading>
            </FormLabel>
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                children={<LinkIcon color="gray.300" />}
              />
              <Input
                {...register("link", {
                  required: "You should have something to cut before shave it!",
                })}
                errorBorderColor="crimson"
                placeholder="https://www.your-hairy-link.com/hair/hair/hair"
              />
            </InputGroup>
            <FormHelperText>
              We'll make a shiny haircut to your url.
            </FormHelperText>
            <FormErrorMessage>{errors.link?.message}</FormErrorMessage>
            <Button
              mt={4}
              mb={4}
              isFullWidth
              colorScheme="teal"
              isLoading={isSubmitting}
              rightIcon={<ExternalLinkIcon />}
              type="submit"
            >
              Shave it!
            </Button>
            {isSubmitSuccessful && (
              <SkeletonText isLoaded={status === "success"}>
                <Divider />
                <Box>
                  <Heading as="h3" size="xl">
                    It's shaved!
                  </Heading>
                  <Text>Response url</Text>
                </Box>
              </SkeletonText>
            )}
          </FormControl>
        </form>
      </Box>
    </Layout>
  );
}
