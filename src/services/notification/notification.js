import alarm from "./alarm.svg"
console.log(alarm)
export const ntf = {
  add({ title = "", text = "hello" }) {
    const list = document.getElementById("ntf")
    list.insertAdjacentHTML(
      "afterbegin",
      `<li class="ntf_item">
          <img src="${alarm}" alt="icon"/>
          <h4>${title}<h4>
          <button>click</button>
          ${text ? `<div class="ntf_text">${text}</div>` : null}
          
      </li>`
    )

    const timer = setTimeout(() => {}, ())
  },
  remove() {}
}
