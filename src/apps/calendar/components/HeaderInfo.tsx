import styled from '@emotion/styled';
import React from 'react';

interface Props {
    value: number;
    label: string;
    color?: string;
    dataId: string;
}

const Container = styled.div`
    .bubble {
        background-color: ${(props) => props.color}33;
        color: ${(props) => props.color};
    }

    .label {
        color: ${(props) => props.color};
    }
`;

const HeaderInfo: React.FC<Props> = ({ value, label, color, dataId }) => {
    return (
        <Container color={color} className="flex flex-col justify-center items-center gap-2">
            <div
                data-testid={dataId}
                className={`bubble grid place-content-center rounded-full text-white font-semibold  w-10 h-10 bg-slate-400`}
            >
                {value}
            </div>
            <span className="label text-xs uppercase text-theme-800 font-semibold">{label}</span>
        </Container>
    );
};

export default HeaderInfo;
