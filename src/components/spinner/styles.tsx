import styled from "styled-components";

interface SpinProps {
  height?: string;
  width?: string;
}

export const Spin = styled.div<SpinProps>`
  height: ${props => props.height || '40px'};
  width: ${props => props.width || '40px'};
  border: 4px solid #f3f3f3;
  border-top: 4px solid #1C1C1C;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin: 20px auto;
  @keyframes spin {
  0% { 
      transform: rotate(0deg); 
  }
  100% { 
      transform: rotate(360deg); 
  }
}
`;