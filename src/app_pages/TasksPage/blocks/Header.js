import React from "react"
import styled, { css } from "reshadow/macro"
import { useRouteMatch, Redirect, Route, Switch } from "react-router-dom"
import { TasksContext } from "context"
import { getFormatTaskTime } from "app_styles/helper"
import { Timeline, Icon, Loader, Breadcrumbs } from "app_components"

export const Header = () => {
  const { tabs, tabsMatch, data } = React.useContext(TasksContext)
  const { path } = useRouteMatch()

  return styled`
    block {
      display: grid;
      grid-template-columns: 1fr auto;
      grid-template-rows: 48px repeat(auto-fit, minmax(16px, auto));
      grid-gap: 8px;
      align-items: center;
    }
  `(
    <>
      <Route path={path + "(\\d+)"} component={Breadcrumbs} />
      <block>
        <Switch>
          <Route path={`${path}(\\d+)`}>
            {data.name ? <HeaderTaskId {...data} /> : <Loader size={32} />}
          </Route>
          <Route path={`${path}${tabsMatch}`}>
            <h1>Задачи</h1>
          </Route>
          <Redirect to={path + tabs[0][1]} />
        </Switch>
      </block>
    </>
  )
}

const HeaderTaskId = ({
  styles,
  name,
  currentStage,
  creationTime,
  expectedCompletionTime,
  closingTime,
}) => {
  const { percent, color, task, stage, final, diff } = getFormatTaskTime(
    { creationTime, expectedCompletionTime, closingTime },
    currentStage
  )
  const timeline = styled(styles)(
    <row>
      <timeline>
        <line
          as="div"
          style={{
            width: percent,
            borderColor: color,
          }}
        />
      </timeline>
      <time>
        <span>{task.str}</span>
        (до {task.before})
      </time>
    </row>
  )
  return styled(styles)(
    <>
      <h1>{currentStage ? currentStage.name : name}</h1>
      {currentStage && <name>{name}</name>}
      {currentStage && (
        <>
          <span>Время на задачу</span>
          <Timeline {...{ percent, color }} />
          <time>
            <span>{task.str}</span>
            {task.before}
          </time>
        </>
      )}
      {currentStage ? (
        <time>
          <Icon icon="timer" />
          Время на этап:
          <span>{stage.str}</span>
          {stage.before}
        </time>
      ) : (
        <time>
          <Icon icon="ok" fill="var(--success)" />
          Выполненно за:
          <span>{final.str}</span>({diff.str})
        </time>
      )}
    </>
  )
}

HeaderTaskId.defaultProps = {
  styles: css`
    h1 {
      grid-column: 1 / -1;
    }
    name {
      grid-column: 1;
    }

    name,
    time:first-of-type {
      color: var(--main-80);
    }

    name + span,
    time:last-of-type {
      color: var(--main-60);
    }

    time {
      display: flex;
      & span {
        margin-right: 4px;
      }
    }
    Icon {
      margin-right: 8px;
      & + span {
        margin-left: 4px;
      }
    }
  `,
}
