import { ConnectionType } from '@/src/types/ConnectionType';

export type CreateConnectionFormData = {
  title: string;
  uri: string;
  port: string;
  connection_type: ConnectionType;
};
