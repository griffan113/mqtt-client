export interface IConnection {
  id: string;
  client_id: string;
  title: string;
  uri: string;
  port: number;
  username?: string;
  password?: string;
}
