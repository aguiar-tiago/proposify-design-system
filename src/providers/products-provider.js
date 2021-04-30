import React, { useReducer, useEffect, useRef } from 'react';
import axios from 'axios';
import { getSearchEndpoing } from '../config/api.js';
import isEqual from 'lodash/isEqual';

export const SearchContext = React.createContext({});

const defaultState = {
    loaded: false,
    fetching: false,
    data: [],
    error: null,
    query: 'portugal',
    page: 1
}


const ProductsProvider = ({children}) => {
    const [ state, setState ] = useReducer(
        (state, newState) => ({...state, ...newState}),
        defaultState);

    useEffect(
        () => {
            if(isEqual(previousInputs.current, [state.data, state.query])) return; //custom array of dependencies

            const CancelToken = axios.CancelToken;
            const source = CancelToken.source(); //Making the fetch cancelable
            const { token } = source;
            setState({ fetching: true })
            const fetchQuery = async () => {
                const { query = "portugal" } = state;
                const endpoint = getSearchEndpoing(query);
                const res = await axios(endpoint, { cancelToken: token});
                axios.interceptors.response.use(
                    response => Promise.resolve(response),
                    error => Promise.reject(error) //Simple error handling
                )
                setState({
                    data: res.data.data,
                    error: null,
                    fetching: false,
                    loaded: true,
                })
            }
            fetchQuery();
    });


    //Saving a reference of the lattest inputs searched
    const previousInputs = useRef();
    useEffect(() => {
        previousInputs.current = [state.data, state.query];
    })

    return (
        <SearchContext.Provider value={[state.data, setState, state]}>
            {children}
        </SearchContext.Provider>
    )
}


export default ProductsProvider;