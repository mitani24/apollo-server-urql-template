export const startMock = () => {
  if (process.browser) {
    const { worker } = require("../__mocks__/browser")
    worker.start()
  } else {
    const { server } = require("../__mocks__/server")
    server.listen()
  }
}
