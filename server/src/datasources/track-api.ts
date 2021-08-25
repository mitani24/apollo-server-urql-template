import { RequestOptions, RESTDataSource } from "apollo-datasource-rest";
import { UpdateTrackContent } from "../__generated__/graphql-resolver-types";
import type { Context } from "../types/context";

const baseURL = {
  test: "http://localhost:4010/",
  development: "http://localhost:3001/",
};

class TrackAPI extends RESTDataSource<Context> {
  constructor() {
    super();
    this.baseURL =
      process.env.NODE_ENV === "test" ? baseURL.test : baseURL.development;
  }

  willSendRequest(request: RequestOptions) {
    const { mockResponseCode } = this.context;
    if (mockResponseCode) {
      request.headers.set("Prefer", `code=${mockResponseCode}`);
    }
  }

  getTracks() {
    return this.get("tracks");
  }

  getAuthor(authorId: string) {
    return this.get(`authors/${authorId}`);
  }

  getTrack(trackId: string) {
    return this.get(`tracks/${trackId}`);
  }

  updateTrack(trackId: string, content: UpdateTrackContent) {
    return this.patch(`tracks/${trackId}`, content);
  }
}

export default TrackAPI;
