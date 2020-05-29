import React from "react"
import styled, { css } from "reshadow/macro"

import { title_section } from "styles/helper"
import { TaskPageIdContext } from "./context"
import { Avatar, Textarea, Button, Icon } from "components"

export const Comments = () => {
  const {
    state: { comments = [], textarea, commentCreateLoading },
    dispatch,
  } = React.useContext(TaskPageIdContext)
  return styled(title_section)(
    <>
      <title_section>Комментарии к задаче</title_section>
      {comments.map((com) => (
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
      />
    </>
  )
}

const CommentCreator = ({ textarea, button }) => {
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

const Comment = ({ styled, author, createdAt, text, canBeEdited, state }) => {
  return styled(styled)(
    <comment>
      <Avatar />
      <row>
        <span>username</span>
        <time>time</time>
        <button>
          <Icon icon="edit" />
        </button>
        <button>
          <Icon icon="del" />
        </button>
      </row>
      <p>{text}</p>
    </comment>
  )
}

Comment.defaultProps = {
  styled: css`
    comment {
      display: grid;
      grid-template-columns: auto 1fr;
    }
  `,
}
