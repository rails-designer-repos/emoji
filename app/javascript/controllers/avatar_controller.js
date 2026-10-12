import { Controller } from "@hotwired/stimulus"
import { renderAvatar } from "avatar/renderer"
import { sections } from "avatar/sections"
import { defaultAvatar } from "avatar/defaults"

const ACTIVE_CLASSES = ["ring-2", "ring-gray-800", "ring-offset-1"]

export default class extends Controller {
  static targets = ["preview", "controls"]

  #avatar = { ...defaultAvatar }

  connect() {
    this.#renderControls()

    this.#render()
  }

  setOption(event) {
    const { property, value } = event.currentTarget.dataset
    this.#avatar = { ...this.#avatar, [property]: value }

    this.#render()
  }

  reset() {
    this.#avatar = { ...defaultAvatar }

    this.#render()
  }

  // private

  #render() {
    this.previewTarget.innerHTML = renderAvatar(this.#avatar)

    this.#highlightSelectedOptions()
  }

  #renderControls() {
    this.controlsTarget.replaceChildren(...sections.map(section => this.#sectionElement(section)))
  }

  #sectionElement(section) {
    const element = document.createElement("section")
    element.className = "grid gap-1"

    const heading = document.createElement("h2")
    heading.className = "text-xs font-semibold uppercase text-gray-500"
    heading.textContent = section.label

    const options = document.createElement("div")
    options.className = "flex flex-wrap gap-2 items-center"

    section.controls.forEach(control => {
      Object.entries(control.options).forEach(([value, option]) => {
        options.appendChild(this.#optionButton(control, value, option))
      })
    })

    element.append(heading, options)

    return element
  }

  #optionButton(control, value, option) {
    const button = document.createElement("button")

    button.type = "button"
    button.dataset.action = "avatar#setOption"
    button.dataset.property = control.property
    button.dataset.value = value
    button.title = option.label

    if (control.type === "color") {
      button.className = "size-8 rounded-full border border-gray-300"
      button.style.background = option.color
    } else {
      button.className = "px-2 py-1 bg-white border border-gray-200 rounded-md text-sm hover:border-gray-400"
      button.textContent = option.label
    }

    return button
  }

  #highlightSelectedOptions() {
    this.controlsTarget.querySelectorAll("[data-property]").forEach(button => {
      const selected = this.#avatar[button.dataset.property] === button.dataset.value

      ACTIVE_CLASSES.forEach(className => button.classList.toggle(className, selected))
    })
  }
}
