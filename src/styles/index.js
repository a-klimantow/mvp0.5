import { css } from "reshadow/macro"
export * from "./layout"
export * from "./tabs"
export * from "./button"
export * from "./svg"
export * from "./titles"
export * from "./input"
export * from "./filter"
export * from "./tasks_item"
export * from "./select"
export * from "./cell"
export * from "./tag"
export * from "./skeleton"
export * from "./panel"
export * from "./textarea"

export default css`
  * {
    box-sizing: border-box;
  }

  *::-webkit-scrollbar {
    display: block;
    width: 4px;
    border-radius: 4px;
    background-color: rgba(var(--primary), 0.2);
  }

  *::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background-color: rgba(var(--primary), 0.5);
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    display: grid;
    grid-gap: 16px;
  }
`
