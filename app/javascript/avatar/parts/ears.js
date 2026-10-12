import { LINE_COLOR } from "avatar/constants"

const earPair = (radiusX, radiusY, skin) =>
  `<ellipse cx="82" cy="170" rx="${radiusX}" ry="${radiusY}" fill="${skin}" stroke="${LINE_COLOR}" stroke-width="2"/>` +
    `<ellipse cx="218" cy="170" rx="${radiusX}" ry="${radiusY}" fill="${skin}" stroke="${LINE_COLOR}" stroke-width="2"/>`

export const ears = {
  standard: {
    label: "Standard",
    render: ({ skin }) => earPair(14, 22, skin)
  },
  large: {
    label: "Large",
    render: ({ skin }) => earPair(18, 28, skin)
  },
  none: {
    label: "None",
    render: () => ""
  }
}
