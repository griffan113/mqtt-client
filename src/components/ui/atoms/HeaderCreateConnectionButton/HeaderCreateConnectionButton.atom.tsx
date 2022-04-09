import React from 'react';
import { Icon, IconButton, Tooltip, useDisclosure } from '@chakra-ui/react';
import { AiOutlinePlus } from 'react-icons/ai';

import { CreateConnectionModal } from '@/components/ui/molecules';

export const HeaderCreateConnectionButton: React.FC = () => {
  const { onClose, onOpen, isOpen } = useDisclosure();

  return (
    <>
      <CreateConnectionModal isOpen={isOpen} onClose={onClose} />
      <Tooltip label="Create Connection">
        <IconButton
          onClick={onOpen}
          size={'sm'}
          aria-label="Create Connection"
          icon={<Icon as={AiOutlinePlus} />}
          isRound
          bg="button_primary"
          _hover={{
            bg: 'button_primary_hover',
          }}
          _active={{
            bg: 'button_primary_hover',
          }}
        />
      </Tooltip>
    </>
  );
};
