import { LINE_COLOR } from "avatar/constants"

const fringe = (color) =>
  `<path d="M150 58 C112 58 78 88 74 154 C82 118 98 102 128 100 C142 98 148 84 150 72 Z" fill="${color}"/>` +
    `<path d="M150 58 C188 58 222 88 226 154 C218 118 202 102 172 100 C158 98 152 84 150 72 Z" fill="${color}"/>`

const longBack = (color) =>
  `<path d="M150 56 C90 56 58 106 60 166 C62 228 72 274 88 296 C96 308 122 308 128 292 C138 266 140 226 136 190 H164 C160 226 162 266 172 292 C178 308 204 308 212 296 C228 274 238 228 240 166 C242 106 210 56 150 56 Z" fill="${color}"/>`

const bunTop = (color) =>
  `<circle cx="150" cy="50" r="24" fill="${color}" stroke="${LINE_COLOR}" stroke-width="2"/>`

export const hair = {
  none: {
    label: "None",
    back: () => "",
    front: () => ""
  },
  short: {
    label: "Short",
    back: () => "",
    front: ({ hairColor }) => fringe(hairColor)
  },
  long: {
    label: "Long",
    back: ({ hairColor }) => longBack(hairColor),
    front: ({ hairColor }) => fringe(hairColor)
  },
  bun: {
    label: "Bun",
    back: () => "",
    front: ({ hairColor }) => bunTop(hairColor) + fringe(hairColor)
  }
}
