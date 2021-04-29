import { createContext, useReducer } from 'react';

const initialState = {
    tasks: [

    ]
};

const reducer = (state, action) => {
    switch (action.type) {


        default: return state;
    }
}

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
    const value = useReducer(reducer, initialState);

    return <TaskContext.Provider value={value}>
        {children}
    </TaskContext.Provider>
};