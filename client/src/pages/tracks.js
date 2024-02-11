import React from "react";
import { Layout, QueryResult } from "../components";
import { gql, useQuery } from "@apollo/client";
import TrackCard from "../containers/track-card";
/**
 * Tracks Page is the Catstronauts home page.
 * We display a grid of tracks fetched with useQuery with the TRACKS query
 */
const TRACKS = gql`
  query GetTracks {
    tracksForHome {
      id
      title
      thumbnail
      length
      modulesCount
      author {
        id
        name
        photo
      }
    }
  }
`;
const Tracks = () => {
  const { loading, data, error } = useQuery(TRACKS);
  return (
    <Layout grid>
      <QueryResult error={error} data={data} loading={loading}>
        {data?.tracksForHome?.map((tack) => (
          <TrackCard key={tack.id} track={tack}></TrackCard>
        ))}
      </QueryResult>
    </Layout>
  );
};

export default Tracks;
