"use strict";

const semver = require("semver");

module.exports = function (version, type) {
  if (!["major", "minor", "patch"].includes(type)) {
    throw new TypeError(`Invalid version type: ${type}`);
  }

  const raw = version;
  version = semver.parse(version, { loose: true });

  if (!version) {
    throw new Error(`Version ${raw} is not valid semver`);
  }

  version.build = "";
  version.prerelease = "";

  if (type === "patch") {
    if (version.patch > 0) {
      version.patch--;
    } else {
      if (version.minor > 0) {
        version.minor--;
      } else {
        if (version.major > 0) {
          version.major--;
        }
      }
    }
  }

  if (type === "minor") {
    if (version.minor > 0) {
      version.minor--;
      version.patch = 0;
    } else {
      version.patch = 0;
      if (version.major > 0) {
        version.major--;
      }
    }
  }

  if (type === "major") {
    if (version.major > 0) {
      version.major--;
      version.minor = 0;
      version.patch = 0;
    } else {
      version.minor = 0;
      version.patch = 0;
    }
  }

  return version.format();
};
