import React from "react"
import { uploadFile } from "01/_api/upload"

function uploadReducer(state, action) {
  const { type, data, file } = action
  const { fileList } = state
  switch (type) {
    case "change":
      return { ...state, file, loading: true }
    case "success":
      return {
        ...state,
        fileList: [...fileList, data.newFile],
        file: null,
        loading: false,
      }
    default:
      console.error("upload", type)
      return state
  }
}

export const useUpload = (callback = () => {}) => {
  const [state, dispatch] = React.useReducer(uploadReducer, {
    file: null,
    fileList: [],
  })
  React.useEffect(() => {
    const { file = null, fileList = [] } = state
    if (file) {
      uploadFile(file).then((data) => dispatch({ type: "success", data }))
    }
    callback({ documentsIds: fileList.map((i) => i.id) })
  }, [state])
  console.log(state)
  return {
    button: {
      onChange(e) {
        dispatch({ type: "change", file: e.target.files[0] })
      },
      loading: state.loading,
    },
    list: { items: state.fileList, del: () => {} },
  }
}

// import axios from "01/axios"

// const initialState = {
//   config: null,
//   name: null,
//   loading: false,
//   files: [],
// }
// const URL = "/documents/"

// export const useUpload = (cb = () => {}) => {
//   const formData = new FormData()

//   const [state, dispatch] = React.useReducer((state, actcion) => {
//     const { type, payload } = actcion
//     switch (type) {
//       case "upload":
//         formData.append("type", "AdditionalMaterials")
//         formData.append("file", payload.file)
//         return {
//           ...state,
//           name: payload.file.name,
//           loading: true,
//           config: {
//             url: URL + "upload",
//             method: "post",
//             data: formData,
//           },
//         }
//       case "add_file":
//         return {
//           ...state,
//           ...initialState,
//           files: [...state.files, payload.file],
//         }

//       case "delete":
//         return {
//           ...state,
//           config: {
//             url: URL + payload.id,
//             method: "delete",
//           },
//           files: state.files.map((file) => ({
//             ...file,
//             deleted: file.id === payload.id,
//           })),
//         }
//       case "delete_success":
//         return {
//           ...state,
//           files: state.files.filter((file) => file.id !== payload.deleteId),
//         }
//       default:
//         console.error("upload", type)
//         return state
//     }
//   }, initialState)

//   React.useEffect(() => {
//     state.config &&
//       (async () => {
//         try {
//           const res = await axios(state.config)
//           // post success
//           if (res.config.method === "post") {
//             const file = res.data.successResponse[0]
//             dispatch({
//               type: "add_file",
//               payload: { file },
//             })
//           }
//           // delete success
//           if (res.config.method === "delete") {
//             const regId = /(?<id>\d+)/g
//             const { id } = regId.exec(res.config.url).groups
//             dispatch({ type: "delete_success", payload: { deleteId: +id } })
//           }
//         } catch (error) {}
//       })()
//     // eslint-disable-next-line
//   }, [state.config])

//   React.useEffect(() => {
//     if (!state.files.length) cb([])
//     else cb(state.files.map((item) => item.id))
//     // eslint-disable-next-line
//   }, [state.files])

//   return {
//     onChange: (e) =>
//       dispatch({ type: "upload", payload: { file: e.target.files[0] } }),
//     onDelete: (id) => dispatch({ type: "delete", payload: { id } }),
//     files: state.files,
//     name: state.name,
//     loading: state.loading,
//   }
// }
