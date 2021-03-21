const semverDecrement = require("../");

describe("semverDeclrement", () => {
  it("throws an error for invalid type", () => {
    ["foo", "bar", "baz", undefined].forEach((type) => {
      expect(() => {
        semverDecrement("1.0.0", type);
      }).toThrow(`Invalid version type: ${type}`);
    });
  });
  it("throws an error for invalid semver", () => {
    ["foo", "bar", "baz", undefined].forEach((version) => {
      expect(() => {
        semverDecrement(version, "minor");
      }).toThrow(`Version ${version} is not valid semver`);
    });
  });
  test.each([
    ["1.2.3", "1.2.2", "patch"],
    ["1.2.3", "1.1.0", "minor"],
    ["1.2.3", "0.0.0", "major"],
    ["1.2.3-foo", "1.2.2", "patch"],
    ["1.2.3-foo", "1.1.0", "minor"],
    ["1.2.3", "0.0.0", "major"],
    ["1.2.0", "1.1.0", "patch"],
    ["1.0.0", "0.0.0", "patch"],
    ["1.0.3", "0.0.0", "minor"],
    ["2.0.0", "1.0.0", "minor"],
    ["0.3.2", "0.0.0", "major"],
  ])("decrements %s to %s with %s", (ver1, ver2, type) => {
    expect(semverDecrement(ver1, type)).toBe(ver2);
  });
});
