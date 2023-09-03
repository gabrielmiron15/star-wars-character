import React, { useState, useContext } from 'react';
import { PaginationControl } from 'react-bootstrap-pagination-control';
import AppContext from '../store/context';
import { Box } from '@chakra-ui/react';

export default ({ disabled }: { disabled: boolean }) => {

    const { totalCharacters, setActivePage, activePage } = useContext(AppContext);

    return <Box {...styledBox(disabled)}>
        <PaginationControl
            page={activePage}
            between={2}
            total={totalCharacters}
            limit={10}
            changePage={(page) => {
                if (!disabled) {
                    setActivePage(page)
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
