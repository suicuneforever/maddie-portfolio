import { createClient } from 'next-sanity';

export default createClient({
  projectId: '8o0niygp',
  dataset: 'production',
  apiVersion: '2023-11-03',
  useCdn: false,
});
