import { LINE_COLOR, WHITE } from "avatar/constants"

const eyePosition = 152
const leftEyePosition = 122
const rightEyePosition = 178

const eyeball = (position) =>
  `<circle cx="${position}" cy="${eyePosition}" r="8" fill="${WHITE}" stroke="${LINE_COLOR}" stroke-width="2"/>` +
    `<circle cx="${position}" cy="${eyePosition + 1}" r="4" fill="${LINE_COLOR}"/>`

const wideEye = (position) =>
  `<ellipse cx="${position}" cy="${eyePosition}" rx="11" ry="13" fill="${WHITE}" stroke="${LINE_COLOR}" stroke-width="2"/>` +
    `<circle cx="${position}" cy="${eyePosition + 2}" r="5" fill="${LINE_COLOR}"/>`

const happyEye = (position) =>
  `<path d="M${position - 14} ${eyePosition + 4} q14 -18 28 0" fill="none" stroke="${LINE_COLOR}" stroke-width="4" stroke-linecap="round"/>`

const sleepyEye = (position) =>
  `<path d="M${position - 13} ${eyePosition} q13 10 26 0" fill="none" stroke="${LINE_COLOR}" stroke-width="4" stroke-linecap="round"/>`

const bothEyes = (eye) => eye(leftEyePosition) + eye(rightEyePosition)

export const eyes = {
  round: {
    label: "Round",
    render: () => bothEyes(eyeball)
  },
  happy: {
    label: "Happy",
    render: () => bothEyes(happyEye)
  },
  wide: {
    label: "Wide",
    render: () => bothEyes(wideEye)
  },
  sleepy: {
    label: "Sleepy",
    render: () => bothEyes(sleepyEye)
  }
}
