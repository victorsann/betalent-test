import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import logo from '../../assets/images/logo.svg'
import { Spinner } from "../../components/spinner";

import { Thumbnail, Wrapper } from "./styles";

const SplashPage: React.FC = () => {

    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);
    const [scale, setScale] = useState(1);

    useEffect(() => {
        setTimeout(() => {
            setScale(0.5);
            setTimeout(() => {
                setLoading(true);
                setTimeout(() => {
                    navigate('/home');
                }, 2000);
            }, 1000);
        }, 1000);
    }, []);

    return (
        <Wrapper>
            <Thumbnail
                src={logo}
                alt="Logo"
                style={{
                    transform: `scale(${scale})`,
                    transition: 'transform 0.5s ease'
                }}
            />
            {(loading) && <Spinner height={'20px'} width={'20px'} />}
        </Wrapper>
    )
}

export default SplashPage;