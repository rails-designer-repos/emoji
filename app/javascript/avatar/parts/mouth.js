import { LINE_COLOR } from "avatar/constants"

const mouthPosition = { x: 150, y: 208 }

export const mouth = {
  smile: {
    label: "Smile",
    render: () => `<path d="M${mouthPosition.x - 22} ${mouthPosition.y - 6} q22 24 44 0" fill="none" stroke="${LINE_COLOR}" stroke-width="4" stroke-linecap="round"/>`
  },
  grin: {
    label: "Grin",
    render: () => `<path d="M${mouthPosition.x - 24} ${mouthPosition.y - 4} q24 26 48 0 q-24 8 -48 0 Z" fill="${LINE_COLOR}"/>`
  },
  straight: {
    label: "Straight",
    render: () => `<path d="M${mouthPosition.x - 20} ${mouthPosition.y} h40" fill="none" stroke="${LINE_COLOR}" stroke-width="4" stroke-linecap="round"/>`
  },
  open: {
    label: "Open",
    render: () => `<ellipse cx="${mouthPosition.x}" cy="${mouthPosition.y}" rx="14" ry="18" fill="${LINE_COLOR}"/>`
  }
}
