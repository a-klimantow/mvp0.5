import { LoginPage } from "01/pages/LoginPage"
import { Tasks } from "01/pages/Tasks"

export const routes = [
  { path: "/login/", component: LoginPage },
  { path: "/tasks/:taskid", render: () => "tasks id" },
  { path: "/tasks/", component: Tasks },
  { path: "/objects/(\\d+)/devices/(\\d+)", render: () => "device id" },
  { path: "/objects/(\\d+)/devices", render: () => "obj id" },
  { path: "/objects/", render: () => "obj" },
  { path: "/users/", render: () => "users" },
]

export const menu = [
  { name: "Пользователь", icon: "username", to: "/user/" },
  { name: "Выход из системы", icon: null, to: "/logout" },
  { name: "Задачи", icon: "task", to: "/tasks/" },
  // { name: "Ввод показаний", icon: null, to: "/enter" },
  { name: "Oбъекты", icon: "object", to: "/objects/" },
  { name: "Собственники", icon: "key", to: "/owners/" },
  { name: "Настройки", icon: "setting", to: "/settings/" },
]
