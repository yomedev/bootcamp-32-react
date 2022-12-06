import { createAction } from "@reduxjs/toolkit"
import { MINUS, PLUS } from "./types.counter"

// export const minusAction = (payload) => ({ type: MINUS, payload })
// export const plusAction = (payload) => ({ type: PLUS, payload })

export const minusAction = createAction('counter/minus')
export const plusAction = createAction('counter/plus')


