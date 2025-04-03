// amplify/configure.ts
import { createClient } from 'aws-amplify/data';
import { type ClientSchema } from './output/schema';

export const client = createClient<ClientSchema>();
