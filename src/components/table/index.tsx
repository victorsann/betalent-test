import { useEffect, useState } from "react";
import { dateFormatter } from "../../utils/date-formatter";
import { phoneNumberFormatter } from "../../utils/phone-number-formatter";
import { ProfileImg, TableHeader, Tr, Td, Wrapper, Title, Text, FullSizeTable, TableBody, CompactTable, Header, Row } from "./styles";

import circle from '../../assets/icons/circle.svg'

import { Collapsible } from "../collapsible";

interface TableProps {
    data: any[];
}

export const Table = ({ data }: TableProps) => {

    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <Wrapper>
            {(width >= 530) ? (
                <FullSizeTable>
                    <TableHeader>
                        <th style={{ borderTopLeftRadius: '8px' }}><Title>FOTO</Title></th>
                        <th><Title>NOME</Title></th>
                        <th><Title>CARGO</Title></th>
                        <th><Title>DATA DE ADMISSÃO</Title></th>
                        <th style={{ borderTopRightRadius: '8px' }}><Title>TELEFONE</Title></th>
                    </TableHeader>
                    <TableBody>
                        {data.map((e, i) => (
                            <Tr key={i}>
                                <Td>
                                    <ProfileImg src={e.image} />
                                </Td>
                                <Td><Text>{e.name}</Text></Td>
                                <Td><Text>{e.job}</Text></Td>
                                <Td><Text>{dateFormatter(e.admission_date)}</Text></Td>
                                <Td><Text>{phoneNumberFormatter(e.phone)}</Text></Td>
                            </Tr>
                        ))}
                    </TableBody>
                </FullSizeTable>
            ) : (
                <CompactTable>
                    <Header>
                        <Row>
                            <Title>FOTO</Title>
                            <Title>NOME</Title>
                        </Row>
                        <img src={circle} style={{ paddingRight: '10px' }} />
                    </Header>
                    {data.map((e, i) => (
                        <Collapsible key={i} element={e} />
                    ))}
                </CompactTable>
            )}
        </Wrapper >
    );
}

