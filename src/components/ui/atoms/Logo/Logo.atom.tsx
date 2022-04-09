import React from 'react';
import { HStack, Text } from '@chakra-ui/react';
import { GiCircuitry } from 'react-icons/gi';

export const Logo: React.FC = () => {
  return (
    <HStack spacing="2">
      <Text as="span" fontSize={['2xl', '3xl']} fontWeight="bold" letterSpacing="tight" display="contents">
        mqtt<Text color="primary">.</Text>client
      </Text>
      <Text fontSize={['2xl', '3xl']} as="span" color="primary">
        <GiCircuitry />
      </Text>
    </HStack>
  );
};
