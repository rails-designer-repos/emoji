import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  download() {
    const svg = this.element.querySelector("svg")
    const source = new XMLSerializer().serializeToString(svg)
    const image = new Image()

    image.onload = () => {
      const size = 600
      const canvas = document.createElement("canvas")

      canvas.width = size
      canvas.height = size
      canvas.getContext("2d").drawImage(image, 0, 0, size, size)

      this.#trigger(this.#downloadLink(canvas.toDataURL("image/png")))
    }

    image.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(source)
  }

  // private

  #downloadLink(imageDataUrl) {
    const link = document.createElement("a")

    link.href = imageDataUrl
    link.download = `avatar_${Date.now()}.png`

    return link
  }

  #trigger(downloadLink) {
    document.body.appendChild(downloadLink)

    downloadLink.click()

    document.body.removeChild(downloadLink)
  }
}
