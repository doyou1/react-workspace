import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0
    },
    reducers: {
        increment: state => {
            // Reduc Toolkit을 사용하면 리듀서로 "mutating" 논리를 작성할 수 있습니다. 
            // 그것은 "draft state"에 대한 변화를 감지하고 
            // 그 변화를 기반으로 `새로운` 불변 상태를 생산하는 임팩트 라이브러리를 사용하기 때문에 
            // 실제로 상태를 변형시키지 않는다.
            state.value += 1
        },
        decrement: state => {
            state.value -= 1
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload
        }
    }
})

export const { increment, decrement, incrementByAmount } = counterSlice.actions

export const incrementAsync = amount => dispatch => {
    setTimeout(() => {
        dispatch(incrementByAmount(amount))
    }, 1000)
}

export const selectCount = state => state.counter.value
export default counterSlice.reducer