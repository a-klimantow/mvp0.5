import React from "react"
import styled, { css } from "reshadow/macro"

import { Icon, Loader } from "components"

export const Document = ({
  styles,
  id,
  name,
  author,
  uploadingTime,
  url,
  canBeEdited,
  deleted,
  onClick = () => {},
}) => {
  return styled(styles)(
    <doc key={id}>
      <Icon icon="dock" size={20} />
      <a href={deleted ? null : url} target="_blank" rel="noreferrer noopener">
        {name}
      </a>
      <Icon icon="username" />
      <span>{author}</span>
      <Icon icon="calendar" />
      <span>{new Date(uploadingTime).toLocaleString()}</span>
      {canBeEdited &&
        (deleted ? (
          <Loader />
        ) : (
          <button onClick={onClick}>
            <Icon icon="del" />
          </button>
        ))}
    </doc>
  )
}

Document.defaultProps = {
  styles: css`
    doc {
      display: grid;
      grid-template-columns: 20px 0.8fr 16px 0.5fr 16px 0.5fr 16px;
      grid-gap: 8px;
      align-items: center;
      padding: 16px;
      box-shadow: 0px 8px 16px rgba(78, 93, 146, 0.08),
        0px 4px 4px rgba(78, 93, 146, 0.16);
    }
    a {
      font-weight: bold;
      &:hover {
        color: rgb(var(--primary));
      }
    }

    a ~ * {
      opacity: 0.6;
      font-size: 14px;
    }

    button {
      display: inherit;
      align-items: inherit;
      color: rgb(var(--error));
    }

    Loader,
    button {
      opacity: 1;
    }
  `,
}
