import 'react-native-url-polyfill/auto';
import { Client, Account, Avatars, Databases } from 'react-native-appwrite';

const client = new Client()
  .setProject('69da02ff001be74ef45f')
  .setEndpoint('https://fra.cloud.appwrite.io/v1');

const account = new Account(client);
const avatars = new Avatars(client);  
const databases = new Databases(client);

if (typeof client.ping !== 'function') {
  client.ping = function ping() {
    const base = this.config.endpoint.replace(/\/$/, '');
    return this.call('GET', new URL(`${base}/ping`));
  };
}

export { client, account, avatars, databases };
