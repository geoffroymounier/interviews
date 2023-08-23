import { RequestHandler } from "msw";
import { setupServer } from "msw/node";

/**
 * Setup an `msw` server instance with a default query enrichment configuration, and convenience methods
 * to update mocks for individual test scenarios. The underlying `msw` server is returned, so any standard
 * methods can still be applied
 *
 * @example
 * const {server, setMocks} = setupMockServer(...args)
 */

interface mockServerProps {
  mocks: RequestHandler[];
}

export const setupMockServer = (msProps?: mockServerProps) => {
  const server = setupServer(...(msProps?.mocks || []));

  const setMocks = (mocks: Array<RequestHandler>) => {
    server.use(...mocks);
  };

  const defaultSetup = () => {
    beforeAll(() => {
      server.listen();
    });

    beforeEach(() => {
      server.restoreHandlers();
      server.resetHandlers();
    });

    afterAll(() => {
      server.close();
    });
  };
  defaultSetup();

  return { server, defaultSetup, setMocks };
};
