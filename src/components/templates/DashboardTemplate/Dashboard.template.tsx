import React from 'react';
import { Container, Flex } from '@chakra-ui/react';

import styles from './styles.module.css';
import { Header } from '@/components/ui/organisms';
import { ConnectionsList } from '@/components/ui/molecules';

export const DashboardTemplate: React.FC = () => {
  return (
    <Flex overflow="hidden" direction="column" h="100vh">
      <Header />
      <div className={styles.gridBackground}>
        <Container h="100%" maxW="container.lg">
          <ConnectionsList />
        </Container>
      </div>
    </Flex>
  );
};
