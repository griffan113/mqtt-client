import { Box, Container, Flex } from "@chakra-ui/react";
import React from "react";

import { Logo, HeaderCreateConnectionButton } from "@/components/ui/atoms";

export const Header: React.FC = () => {
  return (
    <Box as="header" bg="gray.100" py="5">
      <Container maxW="container.lg">
        <Flex maxW={1024} align="center" justify="space-between">
          <Logo />
          <HeaderCreateConnectionButton />
        </Flex>
      </Container>
    </Box>
  );
};
