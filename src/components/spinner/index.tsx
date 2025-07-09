import { Spin } from "./styles";

interface SpinParams {
    height?: string;
    width?: string;
}

export function Spinner({ height, width }: SpinParams) {
    return (
        <Spin height={height} width={width} />
    );
}