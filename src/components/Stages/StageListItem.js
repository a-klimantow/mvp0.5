import React from "react"
import styled, { use } from "reshadow/macro"

import { stage } from "./styles"
import { Button as Btn } from "components"
import { ok, finish } from "assets/icons.json"

export default ({ number, status, name, closingTime, perpetrator, type }) => {
  const time = new Date(closingTime).toLocaleString()
  return styled(stage)(
    <stage as="li" {...use({ status })}>
      <span>
        <circle as="span">
          {status === "Done" ? (
            <svg>
              <path as="path" d={ok} />
            </svg>
          ) : type === "Switch" ? (
            <svg>
              <path as="path" d={finish} />
            </svg>
          ) : (
            number
          )}
        </circle>
      </span>
      <content>
        <name as="span">{name}</name>
        {status === "Done" && (
          <>
            <user as="span">{perpetrator.name}</user>
            <time dateTime={closingTime}>{time}</time>
          </>
        )}
        <Btn text="Вернуть этап" />
      </content>
    </stage>
  )
}
