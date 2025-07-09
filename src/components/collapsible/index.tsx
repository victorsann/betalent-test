import { useEffect, useState } from "react";
import { ProfileImg } from "../table/styles";
import { dateFormatter } from "../../utils/date-formatter";
import { phoneNumberFormatter } from "../../utils/phone-number-formatter";

import chevronDown from '../../assets/icons/charm_chevron-down.svg'

import { Collapsed, Collapse, Container, Row, Text, TextBold } from "./styles";

export const Collapsible = ({ element }: any) => {

    const [isExpanded, setIsExpanded] = useState(false);

    const [deg, setDeg] = useState('0deg');

    useEffect(() => {
        if (isExpanded) {
            setDeg('180deg');
        } else {
            setDeg('0deg');
        }
    }, [isExpanded]);

    return (
        <>
            <Collapse onClick={() => setIsExpanded(!isExpanded)}>
                <Container>
                    <ProfileImg src={element.image} />
                    <Text>{element.name}</Text>
                </Container>
                <img src={chevronDown} style={{ transform: `rotate(${deg})`, transition: 'transform 0.5s ease' }} />
            </Collapse>
            {(isExpanded) &&
                <Collapsed>
                    <Row>
                        <TextBold>Cargo</TextBold>
                        <Text>{element.job}</Text>
                    </Row>
                    <Row>
                        <TextBold>Data de admissão</TextBold>
                        <Text>{dateFormatter(element.admission_date)}</Text>
                    </Row>
                    <Row>
                        <TextBold>Telefone</TextBold>
                        <Text>{phoneNumberFormatter(element.phone)}</Text>
                    </Row>
                </Collapsed>
            }
        </>
    );
}