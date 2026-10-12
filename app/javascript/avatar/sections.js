import { head } from "avatar/parts/head"
import { skin } from "avatar/parts/skin"
import { ears } from "avatar/parts/ears"
import { eyes } from "avatar/parts/eyes"
import { nose } from "avatar/parts/nose"
import { mouth } from "avatar/parts/mouth"
import { hair } from "avatar/parts/hair"
import { hairColor } from "avatar/parts/hairColor"
import { hat } from "avatar/parts/hat"

export const sections = [
  {
    label: "Head & skin",
    controls: [
      { property: "head", options: head },
      { property: "skin", options: skin, type: "color" }
    ]
  },
  {
    label: "Eyes",
    controls: [{ property: "eyes", options: eyes }]
  },
  {
    label: "Nose",
    controls: [{ property: "nose", options: nose }]
  },
  {
    label: "Mouth",
    controls: [{ property: "mouth", options: mouth }]
  },
  {
    label: "Ears",
    controls: [{ property: "ears", options: ears }]
  },
  {
    label: "Hair",
    controls: [
      { property: "hairStyle", options: hair },
      { property: "hairColor", options: hairColor, type: "color" }
    ]
  },
  {
    label: "Hat",
    controls: [{ property: "hat", options: hat }]
  }
]
