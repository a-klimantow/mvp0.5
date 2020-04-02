import React, { useEffect, useState } from "react"
import styled from "reshadow/macro"
import { CSSTransition, TransitionGroup } from "react-transition-group"
import t from "prop-types"

import { NotificationContext } from "context"
import styles, { note } from "./styles"
import icons from "./icons.json"

export function Notification({ children }) {
  const [items, setItems] = useState([])

  useEffect(() => {
    const timer = setTimeout(() => {
      if (items.length) {
        setItems(state => state.splice(1))
      }
      return () => clearTimeout(timer)
    }, 3000)
  }, [items])

  const add = config => {
    const ntfTemplate = {
      id: Date.now().toString(),
      ...config
    }
    setItems(state => [ntfTemplate, ...state])
  }

  const removeNtf = e => {
    const id = e.target.dataset.id
    if (id) {
      setItems(state => state.filter(item => item.id !== id))
    }
  }

  return styled(styles)(
    <NotificationContext.Provider value={{ add }}>
      {children}
      <notifications as="ul" onClick={removeNtf}>
        <TransitionGroup component={null}>
          {items.map(item => (
            <CSSTransition key={item.id} timeout={300} classNames="ntf">
              <Note {...item} />
            </CSSTransition>
          ))}
        </TransitionGroup>
      </notifications>
    </NotificationContext.Provider>
  )
}

function getColor(type) {
  if (type === "info") return "var(--primary)"
  return `var(--${type})`
}

const Note = ({
  type = "warning",
  icon = true,
  title = null,
  text = null,
  id
}) => {
  return styled(note)`
    li::before {
      background-color: ${getColor(type)};
    }
  `(
    <li>
      <icon as="span">
        {icon && (
          <svg>
            <path as="path" fill={getColor(type)} d={icons[type]} />
          </svg>
        )}
      </icon>
      <h5>{title}</h5>
      <button data-id={id}>
        <svg fill="currentColor">
          <path as="path" d={icons["close"]} />
        </svg>
      </button>

      {text && <text>{text}</text>}
    </li>
  )
}

Note.propTypes = {
  id: t.string.isRequired,
  title: t.string.isRequired,
  text: t.string,
  type: t.oneOf(["info", "warning", "error", "success"]),
  icon: t.bool
}
