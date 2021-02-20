import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { PrimaryButton } from '../../components/Buttons';
import {
    asyncDecrementCounter, asyncIncrementCounter, cancel, decrementCounter, incrementCounter
} from './actions';
import { selectCounter } from './selectors';

const Stack = styled.div`
        display: flex;
        flex-direction: column;
        max-width: 300px;
`;
export const Homepage = () => {
    const dispatch = useDispatch();
    const counter = useSelector(selectCounter);
    return (
        <Stack>
            <PrimaryButton
                modifiers={['small']}
                onClick={() => dispatch(incrementCounter())}
            >
                Increment
            </PrimaryButton>
            <PrimaryButton
                onClick={() => dispatch(decrementCounter())}
            >
                Decrement Counter
            </PrimaryButton>
            {counter}
            <PrimaryButton
                onClick={() => dispatch(asyncIncrementCounter())}
            >
                 Async Increment
            </PrimaryButton>
            <PrimaryButton
                onClick={() => dispatch(asyncDecrementCounter())}
            >
                    Async Decrement
            </PrimaryButton>
            <PrimaryButton
                onClick={() => dispatch(cancel())}
            >
                    Cancel async
            </PrimaryButton>
        </Stack>
    );
};
