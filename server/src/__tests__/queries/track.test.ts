import { gql } from "apollo-server-core";
import { createServer } from "../../server";

const TRACK = gql`
  query track($trackId: ID!) {
    track(id: $trackId) {
      id
      title
      author {
        id
        name
        photo
      }
      thumbnail
      length
      modulesCount
      description
      numberOfViews
      modules
    }
  }
`;

describe("track", () => {
  it("fetches the track specified by trackId", async () => {
    const server = createServer();
    const res = await server.executeOperation({
      query: TRACK,
      variables: { trackId: "c_0" },
    });
    expect(res).toMatchSnapshot();
  });

  it("responds with a 404 error", async () => {
    const server = createServer({ mockResponseCode: 404 });
    const res = await server.executeOperation({
      query: TRACK,
      variables: { trackId: "c_0" },
    });
    expect(res).toMatchSnapshot();
  });
});
