import { Box, HStack, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { VscCircuitBoard } from 'react-icons/vsc';

type ConnectionCardProps = {
  client_id: string | undefined;
  title: string;
  uri: string;
  port: string;
};

export const ConnectionCard: React.FC<ConnectionCardProps> = ({ title, client_id, uri, port }) => {
  return (
    <Box
      as="a"
      cursor="pointer"
      bg="gray.100"
      borderRadius="md"
      boxShadow="base"
      transition="all 0.2s"
      _hover={{
        boxShadow: 'lg',
        transform: 'scale(1.01)',
      }}
    >
      <HStack borderRadius="md" p="5" bg="gray.800">
        <Text fontSize="2rem" color="gray.300">
          <VscCircuitBoard />
        </Text>
        <Text color="gray.300">{title}</Text>
      </HStack>
      <Stack p="5">
        <Box>
          <Text fontWeight="bold" fontSize="sm" color="gray.500">
            CLIENT ID
          </Text>
          <Text>{client_id ? client_id : '- - -'}</Text>
        </Box>
        <Box>
          <Text fontWeight="bold" fontSize="sm" color="gray.500">
            URI
          </Text>
          <Text>{uri}</Text>
        </Box>
        <Box>
          <Text fontWeight="bold" fontSize="sm" color="gray.500">
            PORT
          </Text>
          <Text>{port}</Text>
        </Box>
      </Stack>
    </Box>
  );
};
