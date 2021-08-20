import { RESTDataSource } from "apollo-datasource-rest";
import { UpdateTrackContent } from "../__generated__/graphql-resolver-types";

class TrackAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "http://localhost:3001/";
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
