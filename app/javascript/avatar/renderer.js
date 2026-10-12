import { head } from "avatar/parts/head"
import { skin } from "avatar/parts/skin"
import { ears } from "avatar/parts/ears"
import { eyes } from "avatar/parts/eyes"
import { nose } from "avatar/parts/nose"
import { mouth } from "avatar/parts/mouth"
import { hair } from "avatar/parts/hair"
import { hairColor } from "avatar/parts/hairColor"
import { hat } from "avatar/parts/hat"

export function renderAvatar(avatar) {
  const context = {
    ...avatar,
    skin: skin[avatar.skin].color,
    hairColor: hairColor[avatar.hairColor].color
  }

  const hairstyle = hair[avatar.hairStyle]

  return [
    hairstyle.back(context),
    ears[avatar.ears].render(context),
    head[avatar.head].render(context),
    hairstyle.front(context),
    eyes[avatar.eyes].render(context),
    nose[avatar.nose].render(context),
    mouth[avatar.mouth].render(context),
    hat[avatar.hat].render(context)
  ].join("")
}
