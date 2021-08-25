import { gql } from "apollo-server";
import { createServer } from "../../server";

const TRACKS = gql`
  query tracks {
    tracks {
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

describe("tracks", () => {
  it("fetches the tracks", async () => {
    const server = createServer();
    const res = await server.executeOperation({ query: TRACKS });
    expect(res).toMatchSnapshot();
  });
});
