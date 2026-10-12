import { LINE_COLOR } from "avatar/constants"

export const hat = {
  none: {
    label: "None",
    render: () => ""
  },
  beanie: {
    label: "Beanie",
    render: () =>
      `<path d="M82 120 C82 62 118 44 150 44 C182 44 218 62 218 120 Z" fill="#e11d48" stroke="${LINE_COLOR}" stroke-width="2"/>` +
      `<rect x="78" y="116" width="144" height="20" rx="10" fill="#be1e40"/>`
  },
  tophat: {
    label: "Top hat",
    render: () =>
      `<rect x="106" y="30" width="88" height="70" fill="#111827" stroke="${LINE_COLOR}" stroke-width="2"/>` +
      `<rect x="86" y="98" width="128" height="16" rx="8" fill="#111827"/>` +
      `<rect x="106" y="82" width="88" height="10" fill="#ef4444"/>`
  }
}
