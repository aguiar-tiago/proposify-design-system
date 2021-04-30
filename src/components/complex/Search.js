import React, { useContext } from 'react';
import Input from '../base/Input';
import Box from '../base/Box';
import { SearchContext } from '../../providers/products-provider';
import debounce from 'lodash/debounce';

const Search = () => {
    const [ , setState ] = useContext(SearchContext);

    const handleSearch = event => {
        const { value } = event.target;
        if(value.length > 3) {
           debounceKeyword(value);
        }
    }

    const debounceKeyword = debounce(value => setState({query: value, fetching: true}), 500)

    return ( 
        <Box mb="50px" mt="50px" ml="auto" mr="auto" maxWidth="50%">
            <Input type="text" placeholder="type something..." onChange={e => handleSearch(e)}/>
        </Box>
     );
}
 
export default Search;