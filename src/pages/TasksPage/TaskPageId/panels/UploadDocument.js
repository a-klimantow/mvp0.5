import React from "react"
import styled from "reshadow/macro"
import { useUpload } from "components"
import { PushButton } from "../PushButton"

export const UploadDocument = () => {
  const { uploadButton, uploadList, filesIds } = useUpload({ big: true })
  return styled()`
    row {
      display: inherit;
      grid-template-columns: auto 1fr auto;
      grid-gap: 8px;
    }
  `(
    <row>
      {uploadButton}
      {uploadList}
      <PushButton disabled={!filesIds} data={{ documentsIds: filesIds }} />
    </row>
  )
}
