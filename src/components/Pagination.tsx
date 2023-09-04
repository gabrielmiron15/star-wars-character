import React, { useState, useContext } from 'react';
import { PaginationControl } from 'react-bootstrap-pagination-control';
import charactersStoreContext from '../store/charactersStoreContext';
import { Box } from '@chakra-ui/react';

interface Pagination {
    disabled: boolean,
    totalCharacters: number,
    setActivePage: (page: number) => void,
    activePage: number
}

export default function Pagination({ disabled, totalCharacters, setActivePage, activePage }: Pagination) {

    return <Box {...styledBox(disabled)}>
        <PaginationControl
            page={activePage}
            between={2}
            total={totalCharacters}
            limit={10}
            changePage={(page) => {
                if (!disabled) {
                    setActivePage(Number(page))
                }
            }}
            ellipsis={1}
        />
    </Box>

}

const styledBox = (disabled: boolean) => ({
    opacity: disabled ? '0.5' : '1',
    cursor: disabled ? 'not-allowed' : 'initial'
})
