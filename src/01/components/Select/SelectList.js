import React from "react"
import styled, { use, css } from "reshadow/macro"

export const SelectList = ({
  styles,
  onCheck = () => {},
  checkList = [],
  list = [],
  ...props
}) => {
  const [focus, setFocus] = React.useState(-1)
  const len = list.length
  const selectList = React.useRef()

  const hendleKeyDown = (e) => {
    // console.log(e.keyCode)
    if (e.keyCode === 40) {
      setFocus(focus + 1 === len ? 0 : focus + 1)
    }
    if (e.keyCode === 38) {
      setFocus(focus - 1 < 0 ? len - 1 : focus - 1)
    }

    if (e.keyCode === 32) {
      addCheckedId(focus)
      selectList.current.blur()
    }
  }

  const addCheckedId = (index) => {
    const id = list[index].id
    onCheck([id])
  }

  const listProps = {
    tabIndex: 0,
    ref: selectList,
    onKeyDown: hendleKeyDown,
    ...props,
  }

  return styled(styles)`
    select_list:focus {
      min-height: ${`calc(${len} * var(--h))`};
    }
  `(
    <select_list {...listProps}>
      {list.map(({ name, icon, id }, i) => (
        <select_item
          {...use({ focus: i === focus, checked: checkList.includes(id) })}
          onClick={() => {
            addCheckedId(i)
            setFocus(i)
            selectList.current.blur()
          }}
        >
          <span>{name}</span>
        </select_item>
      ))}
    </select_list>
  )
}

SelectList.defaultProps = {
  styles: css`
    select_list {
      outline: 0;
      background-color: #fff;
      border-radius: 4px;
      overflow: hidden;
      box-shadow: var(--shadow);
      padding: 0 var(--pdng);
      color: var(--main-80);
      cursor: pointer;
      height: 0;
      position: absolute;
      min-width: max-content;
      max-width: 100%;
      top: 100%;
    }

    select_item {
      height: var(--h);
      padding: 8px;
      border-bottom: 1px solid var(--frame);
      position: relative;
      display: flex;
      align-items: center;
      &::before {
        content: "";
        position: absolute;
        z-index: 0;
        top: 0;
        left: -16px;
        right: -16px;
        bottom: 0;
        background-color: transparent;
      }
      &:hover,
      &[|focus],
      &[|checked] {
        color: #fff;
        &::before {
          background-color: var(--active);
        }
      }
    }

    span {
      position: relative;
    }
  `,
}
