import { LINE_COLOR } from "avatar/constants"

const nosePosition = { x: 150, y: 180 }

export const nose = {
  dot: {
    label: "Dot",
    render: () => `<circle cx="${nosePosition.x}" cy="${nosePosition.y}" r="5" fill="${LINE_COLOR}" opacity="0.75"/>`
  },
  line: {
    label: "Line",
    render: () => `<path d="M${nosePosition.x} ${nosePosition.y - 8} q-6 12 4 14" fill="none" stroke="${LINE_COLOR}" stroke-width="3" stroke-linecap="round"/>`
  },
  triangle: {
    label: "Triangle",
    render: () => `<path d="M${nosePosition.x - 9} ${nosePosition.y + 6} q9 -16 18 0 Z" fill="${LINE_COLOR}" opacity="0.75"/>`
  }
}
