import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  download() {
    const canvas = this.#canvasElement
    const imageData = canvas.toDataURL("image/png")

    this.#trigger(this.#downloadLink(imageData))
  }

  // private

  #downloadLink(imageDataUrl) {
    const link = document.createElement("a")

    link.href = imageDataUrl
    link.download = `custom_emoji_${Date.now()}.png`

    return link
  }

  #trigger(downloadLink) {
    document.body.appendChild(downloadLink)

    downloadLink.click()

    document.body.removeChild(downloadLink)
  }

  get #canvasElement() {
    return this.element.querySelector("[data-canvas-composer-target='canvas']")
  }
}
