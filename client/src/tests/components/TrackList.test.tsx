import { render, screen } from "@testing-library/react"
import { fromValue, never } from "wonka"
import { WithData, WithMockProvider } from "../testUtils"
import { newTrack, TracksQuery } from "@/__generated__/graphql-client-api"
import TrackList from "@/components/TrackList"

describe("TrackList", () => {
  it("データ取得前に Loading... が表示される", () => {
    render(
      <WithMockProvider value={{ executeQuery: () => never }}>
        <TrackList />
      </WithMockProvider>,
    )

    expect(screen.getByText("Loading...")).toBeInTheDocument()
  })

  it("取得したデータが表示される", () => {
    render(
      <WithMockProvider
        value={{
          executeQuery: () =>
            fromValue<WithData<TracksQuery>>({
              data: {
                tracks: [
                  newTrack({ title: "hoge" }),
                  newTrack({ title: "fuga" }),
                ],
              },
            }) as any,
        }}
      >
        <TrackList />
      </WithMockProvider>,
    )

    expect(screen.getByText("hoge")).toBeInTheDocument()
    expect(screen.getByText("fuga")).toBeInTheDocument()
  })
})
