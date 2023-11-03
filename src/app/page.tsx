import { createClient } from 'next-sanity';

import sanity from '../lib/sanity';

async function getVideos() {
  return await sanity.fetch(`*[_type == "video"]`);
}

export default async function Page() {
  const videos = await getVideos();
  return (
    <>
      <p>hiiii</p>
      <div>{JSON.stringify(videos)}</div>
    </>
  );
}
