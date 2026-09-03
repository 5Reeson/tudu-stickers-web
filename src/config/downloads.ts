export const releaseVersion = "0.1.0";

const releaseTag = `v${releaseVersion}`;
const releaseBaseUrl = `https://github.com/5Reeson/tudu-stickers/releases/download/${releaseTag}`;

export const downloads = {
  arm64: {
    label: "Apple silicon",
    detail: "M 系列芯片 · ARM64",
    url: `${releaseBaseUrl}/Tudu-${releaseVersion}-arm64.dmg`,
  },
  x64: {
    label: "Intel",
    detail: "Intel 芯片 · x86_64",
    url: `${releaseBaseUrl}/Tudu-${releaseVersion}-x64.dmg`,
  },
} as const;

export type Architecture = keyof typeof downloads;
