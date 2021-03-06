import React, { useEffect, useMemo, useState } from 'react';
import { Center, SimpleGrid, Spinner, useToast } from '@chakra-ui/react';

import { ConnectionCard } from '@/components/ui/atoms';

export const ConnectionsList: React.FC = () => {
  const connections = [];
  const toast = useToast();
  const toast_id = 'connections-list-advice-toast';
  const [isSSR, setIsSSR] = useState(true);

  const client_id = useMemo(() => {
    if (!isSSR) return `mqtt-client-${Math.random().toString(16).slice(3)}`;
  }, [isSSR]);

  useEffect(() => {
    setIsSSR(false);
  }, []);

  useEffect(() => {
    if (!isSSR && !connections.length && !toast.isActive(toast_id)) {
      toast({
        id: toast_id,
        title: 'Welcome!',
        description: "It Seems you don't have any created connection yet, so you can use our test connection.",
        status: 'info',
        duration: 9000,
        isClosable: true,
        position: 'bottom-left',
      });
    }
  }, [connections.length, isSSR, toast]);

  return (
    <>
      <Center h="100%" w="100%">
        {isSSR ? (
          <Spinner />
        ) : (
          <SimpleGrid flex="1" gap="10" minChildWidth="220px">
            {!connections.length && (
              <ConnectionCard client_id={client_id} title="Test Connection" uri="wss://test.mosquitto.org:8081/mqtt" />
            )}
          </SimpleGrid>
        )}
      </Center>
    </>
  );
};
