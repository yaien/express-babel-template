import env from "../env";

describe("Env Config", () => {
  it("env should be development", () => {
    expect(env.production).toBeFalsy();
  });
});
