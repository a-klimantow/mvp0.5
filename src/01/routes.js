import { LoginPage } from "01/pages/LoginPage"

export const routes = [
  { path: "/login/", component: LoginPage },
  { path: "/tasks/:taskid", render: () => "tasks id" },
  { path: "/tasks/", render: () => "taksk" },
  { path: "/objects/(\\d+)/devices/(\\d+)", render: () => "device id" },
  { path: "/objects/(\\d+)/devices", render: () => "obj id" },
  { path: "/objects/", render: () => "obj" },
  { path: "/users/", render: () => "users" },
]

const menuNames = {
  tasks: "Задачи",
  objects: "Объекты",
}

export const menu = [
  { name: "Пользователь", icon: null, to: "/user/" },
  { name: "Выход из системы", icon: null, to: "logout" },
  { name: "Задачи", icon: null, to: "/tasks/" },
  { name: "Ввод показаний", icon: null, to: "/enter" },
  { name: "Oбъекты", icon: null, to: "/objects/" },
  { name: "Собственники", icon: null, to: "/owners/" },
  { name: "Настройки", icon: null, to: "/settings/" },
]
