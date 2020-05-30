import React from "react"
import styled, { css } from "reshadow/macro"

import { title_section } from "styles/helper"
import { TaskPageIdContext } from "./context"
import { Avatar, Textarea, Button, Icon, Loader } from "components"

export const Comments = () => {
  const {
    state: {
      comments = [],
      textarea,
      commentCreateLoading,
      closingTime,
      userOperatingStatus,
    },
    dispatch,
  } = React.useContext(TaskPageIdContext)

  if (!comments.length && closingTime) return null
  if (!comments.length && userOperatingStatus === "Observer") return null
  const total = comments.length
  return styled(title_section)(
    <>
      <title_section>
        Комментарии к задаче {!!total && `(${total})`}
      </title_section>
      {comments.map((com, i) => (
        <Comment key={com.id} {...com} />
      ))}
      <CommentCreator
        textarea={{
          value: textarea,
          onChange: (e) =>
            dispatch({
              type: "change",
              payload: { textarea: e.target.value },
            }),
        }}
        button={{
          onClick: () => dispatch({ type: "comment_create" }),
          disabled: !textarea.trim(),
          loading: commentCreateLoading,
        }}
        isHidden={!!closingTime && userOperatingStatus === "Observer"}
      />
    </>
  )
}

const CommentCreator = ({ textarea, button, isHidden = true }) => {
  if (isHidden) return null
  return styled`
    creator {
      display: grid;
      grid-gap: 16px;
      grid-template-columns: auto 1fr;
    }
    Button {
      grid-column: 2;
    }
  `(
    <creator>
      <Avatar />
      <Textarea {...textarea} />
      <Button position="start" {...button}>
        Добавить комментарий
      </Button>
    </creator>
  )
}

const Comment = ({
  styles,
  id,
  author,
  createdAt,
  text,
  canBeEdited,
  isEdit,
  willBeDelete,
  edit = () => {},
  cancel = () => {},
}) => {
  const {
    state: { editValue, actionIds = [] },
    dispatch,
  } = React.useContext(TaskPageIdContext)
  const loader = actionIds.includes(id)
  return styled(styles)(
    <comment>
      <Avatar />
      <row>
        <span>{author}</span>
        <time>{new Date(createdAt).toLocaleString()}</time>
        {!isEdit && !loader && canBeEdited && (
          <button
            onClick={() =>
              dispatch({ type: "edit_start", payload: { text, id } })
            }
          >
            <Icon icon="edit" />
          </button>
        )}
        {canBeEdited &&
          (loader ? (
            <Loader />
          ) : (
            <button
              onClick={() =>
                dispatch({ type: "comment_delete", payload: { id } })
              }
            >
              <Icon icon="del" />
            </button>
          ))}
      </row>
      {!isEdit ? (
        <p>{text}</p>
      ) : (
        <>
          <Textarea
            value={editValue}
            onChange={(e) =>
              dispatch({
                type: "change",
                payload: { editValue: e.target.value },
              })
            }
          />
          <btns>
            <Button
              primary
              loading={loader}
              disabled={text === editValue || !editValue.trim()}
              onClick={() =>
                dispatch({ type: "comment_save", payload: { id } })
              }
            >
              Сохранить
            </Button>
            <Button
              loading={loader}
              onClick={() => dispatch({ type: "edit_cancel" })}
            >
              Отмена
            </Button>
          </btns>
        </>
      )}
    </comment>
  )
}

Comment.defaultProps = {
  styles: css`
    comment {
      display: grid;
      grid-template-columns: auto 1fr;
      align-items: center;
      grid-column-gap: 16px;
      grid-row-gap: 8px;
    }

    Avatar {
      grid-column: 1;
      grid-row: 1 / span 2;
      align-self: start;
    }

    p {
      margin: 0;
      padding: 0;
      font-size: 14px;
      opacity: 0.8;
    }

    row {
      display: flex;
      align-items: center;
      font-size: 12px;
      line-height: 16px;
      & > *:not(span) {
        margin-left: 8px;
      }

      & span {
        opacity: 0.6;
      }
      & time {
        opacity: 0.32;
        margin-right: auto;
      }
    }

    button {
      display: inline-grid;
      color: inherit;
      opacity: 0.8;
      &:first-of-type:hover {
        color: rgb(var(--primary));
      }
      &:last-of-type:hover {
        color: rgb(var(--error));
      }
    }

    btns {
      grid-column: 2;
      & > *:first-child {
        margin-right: 8px;
      }
    }
  `,
}
