import React from "react"
import styled, { css } from "reshadow/macro"
import { Icon } from "01/components/Icon"
import { Loader } from "01/components/Loader"

export const Upload = ({
  styles,
  onChange = () => {},
  onDelete = () => {},
  name = null,
  loading = false,
  files = [],
  ...props
}) => {
  return styled(styles)(
    <upload_block {...props}>
      <label>
        <span>Загрузить файл</span>
        {loading ? <Loader /> : <Icon icon="upload" />}
        <input type="file" onChange={onChange} disabled={loading} />
      </label>
      <ul>
        {files.map(({ name, id, url, deleted, ...p }) => {
          console.log(p)
          return (
            <file as="li" key={id}>
              <a
                href={deleted ? null : url}
                target="_blank"
                rel="noreferrer noopener"
              >
                {name}
              </a>
              {deleted ? (
                <Loader />
              ) : (
                <del as="Icon" icon="del" onClick={() => onDelete(id)} />
              )}
            </file>
          )
        })}
        <file as="li">{name}</file>
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

    ul,
    file {
      display: grid;
      grid-auto-flow: column;
      align-items: center;
      justify-content: start;
      color: var(--main-80);
    }
    ul {
      grid-gap: 16px;
    }

    file {
      grid-gap: 8px;
    }

    del {
      &:hover {
        color: var(--error);
      }
      cursor: pointer;
    }

    a:hover {
      color: var(--active);
    }
  `,
}
