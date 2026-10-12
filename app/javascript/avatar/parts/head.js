import { LINE_COLOR } from "avatar/constants"

export const head = {
  round: {
    label: "Round",
    render: ({ skin }) => `<ellipse cx="150" cy="162" rx="76" ry="86" fill="${skin}" stroke="${LINE_COLOR}" stroke-width="2"/>`
  },
  oval: {
    label: "Oval",
    render: ({ skin }) => `<ellipse cx="150" cy="162" rx="66" ry="94" fill="${skin}" stroke="${LINE_COLOR}" stroke-width="2"/>`
  },
  square: {
    label: "Square",
    render: ({ skin }) => `<rect x="82" y="76" width="136" height="168" rx="48" fill="${skin}" stroke="${LINE_COLOR}" stroke-width="2"/>`
  }
}
