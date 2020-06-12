import React from "react"
import styled, { css } from "reshadow/macro"
import { Icon } from "01/components/Icon"

export const Upload = ({ styles, onChange, files, ...props }) => {
  return styled(styles)(
    <upload_block {...props}>
      <label>
        <span>Загрузить файл</span>
        <Icon icon="upload" />
        <input type="file" onChange={onChange} />
      </label>
      <ul>
        <file as="li"></file>
      </ul>
    </upload_block>
  )
}

Upload.defaultProps = {
  styles: css`
    upload_block {
      --h: var(--h-big);
      --active: var(--primary-100);
      display: grid;
      grid-gap: 16px;
      grid-template-columns: auto 1fr;
      align-items: center;
      font-size: 14px;
    }

    span {
      margin-right: 8px;
    }

    label {
      font-weight: 600;
      height: var(--h);
      border: 1px solid var(--frame);
      border-radius: 4px;
      display: inline-flex;
      align-items: center;
      padding: 8px 16px;
      cursor: pointer;
      &:hover {
        color: var(--active);
        border-color: initial;
      }
    }

    input {
      outline: none;
      opacity: 0;
      pointer-events: none;
      user-select: none;
      width: 0;
      height: 0;
      position: absolute;
    }
  `,
}
