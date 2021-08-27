import { gql } from "apollo-server-core";
import { createServer } from "../../server";

const UPDATE_TRACK = gql`
  mutation updateTrack(
    $updateTrackId: ID!
    $updateTrackContent: UpdateTrackContent!
  ) {
    updateTrack(id: $updateTrackId, content: $updateTrackContent) {
      code
      success
      message
      track {
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
  }
`;

describe("updateTrack", () => {
  it("updates the track specified by trackId", async () => {
    const server = createServer();
    const res = await server.executeOperation({
      query: UPDATE_TRACK,
      variables: {
        updateTrackId: "c_0",
        updateTrackContent: {
          title: "new title",
          authorId: "new authorId",
          thumbnail: "new thumbnail",
          length: 1000,
          modulesCount: 1000,
          description: "new description",
          numberOfViews: 1000,
          modules: ["new modules"],
        },
      },
    });
    expect(res).toMatchSnapshot();
  });

  it("responds with a 404 error", async () => {
    const server = createServer({ mockResponseCode: 404 });
    const res = await server.executeOperation({
      query: UPDATE_TRACK,
      variables: {
        updateTrackId: "c_0",
        updateTrackContent: {
          title: "new title",
          authorId: "new authorId",
          thumbnail: "new thumbnail",
          length: 1000,
          modulesCount: 1000,
          description: "new description",
          numberOfViews: 1000,
          modules: ["new modules"],
        },
      },
    });
    expect(res).toMatchSnapshot();
  });
});
