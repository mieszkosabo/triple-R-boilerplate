import React, { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ThemeContext } from 'styled-components';
import { PrimaryButton } from '../../components/Buttons';
import { Flexbox } from '../../components/layout/Flexbox';
import { Spacer } from '../../components/layout/Spacer';
import {
    asyncDecrementCounter, asyncIncrementCounter, cancel, decrementCounter, incrementCounter
} from './actions';
import { BigNumberDisplay } from './components/BigNumberDisplay';
import { selectCounter } from './selectors';

export const Homepage = () => {
    const dispatch = useDispatch();
    const counter = useSelector(selectCounter);
    const theme = useContext(ThemeContext);
    return (
        <Flexbox align="center" direction="column">
            <BigNumberDisplay number={counter} />
            <Flexbox>
                <Flexbox direction="column">
                    <PrimaryButton
                        modifiers={['ultra', 'italic', 'big']}
                        onClick={() => dispatch(incrementCounter())}
                    >
                Increment
                    </PrimaryButton>
                    <Spacer height={theme.dims.smallSpace} />
                    <PrimaryButton
                        onClick={() => dispatch(decrementCounter())}
                        modifiers={['ultra', 'italic', 'big']}
                    >
                Decrement Counter
                    </PrimaryButton>
                </Flexbox>
                <Spacer width={theme.dims.hugeSpace} />
                <Flexbox direction="column">
                    <PrimaryButton
                        onClick={() => dispatch(asyncIncrementCounter())}
                        modifiers={['ultra', 'italic', 'big']}
                    >
                 Async Increment
                    </PrimaryButton>
                    <Spacer height={theme.dims.smallSpace} />
                    <PrimaryButton
                        onClick={() => dispatch(asyncDecrementCounter())}
                        modifiers={['ultra', 'italic', 'big']}
                    >
                    Async Decrement
                    </PrimaryButton>
                    <Spacer height="15px" />
                    <PrimaryButton
                        onClick={() => dispatch(cancel())}
                        modifiers={['ultra', 'italic', 'big']}
                    >
                    Cancel async
                    </PrimaryButton>
                </Flexbox>
            </Flexbox>
        </Flexbox>
    );
};
