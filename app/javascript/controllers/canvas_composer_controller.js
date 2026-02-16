import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["canvas"]
  static values = { emojiSize: { type: Number, default: 100 } }

  #emojisOnCanvas = []
  #selectedEmoji = null
  #isDragging = false
  #dragOffset = { x: 0, y: 0 }

  connect() {
    this.#redrawCanvas()
  }

  addEmoji(event) {
    const center = this.#canvasCenter
    const emoji = {
      text: event.target.dataset.emoji,
      x: center.x - this.emojiSizeValue / 2,
      y: center.y - this.emojiSizeValue / 2,
      width: this.emojiSizeValue,
      height: this.emojiSizeValue,
      fontSize: this.emojiSizeValue,
      id: Date.now() + Math.random()
    }

    this.#emojisOnCanvas.push(emoji)

    this.#redrawCanvas()
  }

  selectEmoji(event) {
    const coordinates = this.#eventToCanvasCoordinates(event)
    this.#selectedEmoji = this.#emojiAtPosition(coordinates.x, coordinates.y)

    if (this.#selectedEmoji) {
      this.#isDragging = true
      this.#dragOffset = {
        x: coordinates.x - this.#selectedEmoji.x,
        y: coordinates.y - this.#selectedEmoji.y
      }

      this.canvasTarget.style.cursor = "grabbing"
    }
  }

  moveSelectedEmoji(event) {
    if (!this.#isDragging || !this.#selectedEmoji) return

    const coordinates = this.#eventToCanvasCoordinates(event)
    this.#selectedEmoji.x = coordinates.x - this.#dragOffset.x
    this.#selectedEmoji.y = coordinates.y - this.#dragOffset.y

    this.#redrawCanvas()
  }

  deselectEmoji() {
    this.#isDragging = false
    this.#selectedEmoji = null
    this.canvasTarget.style.cursor = "default"
  }

  clearAll() {
    this.#emojisOnCanvas = []

    this.#redrawCanvas()
  }

  get #canvasContext() {
    return this.canvasTarget.getContext("2d")
  }

  get #canvasCenter() {
    return {
      x: this.canvasTarget.width / 2,
      y: this.canvasTarget.height / 2
    }
  }

  #eventToCanvasCoordinates(event) {
    const rect = this.canvasTarget.getBoundingClientRect()

    return {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top
    }
  }

  #emojiAtPosition(x, y) {
    return [...this.#emojisOnCanvas].reverse().find(emoji =>
      x >= emoji.x && x <= emoji.x + emoji.width &&
      y >= emoji.y && y <= emoji.y + emoji.height
    )
  }

  #redrawCanvas() {
    this.#canvasContext.clearRect(0, 0, this.canvasTarget.width, this.canvasTarget.height)

    this.#emojisOnCanvas.forEach(emoji => {
      this.#canvasContext.font = `${emoji.fontSize}px Arial`
      this.#canvasContext.fillText(emoji.text, emoji.x, emoji.y + emoji.fontSize * 0.8)
    })
  }
}
