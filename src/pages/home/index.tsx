import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { NavBar, Logo, Wrapper, Content, First, Second, Title, Col } from "./styles";

import logo from '../../assets/images/logo.svg'

import { Table } from "../../components/table";
import { Spinner } from "../../components/spinner";
import { TextInput } from "../../components/text-input";

import { Employee } from "../../models/employee";
import { employeesService } from "../../services/employees";

const HomePage: React.FC = () => {

    const [loading, setLoading] = useState(true);
    const [text, setText] = useState('');
    const [employees, setEnployees] = useState<Employee[]>([]);

    useEffect(() => {
        setTimeout(() => {
            handleGetEmployees();
        }, 3000);
    }, []);

    const handleGetEmployees = async () => {
        await employeesService()
            .then((data) => {
                setEnployees(data);
            }).catch(() => { })
            .finally(() => setLoading(false));
    }

    useEffect(() => {
        handleSearchUser(text);
    }, [text]);

    const [foundList, setFoundList] = useState<Employee[]>([]);

    const handleSearchUser = (t: string) => {
        if (t.trim() !== '') {
            let list = employees?.filter(
                (item) => item?.name?.replace(/\s/g, "").toLowerCase().substring(0, t.length) == t.replace(/\s/g, "").toLowerCase()
                    || item?.job?.replace(/\s/g, "").toLowerCase().substring(0, t.length) == t.replace(/\s/g, "").toLowerCase()
                    || item?.phone?.replace(/\D/g, "").toLowerCase().substring(0, t.length) == t.replace(/\D/g, "").toLowerCase()
            );
            setFoundList([...list]);
        } else {
            setFoundList([]);
        }
    }

    const navigate = useNavigate();

    useEffect(() => {
        window.onpopstate = () => {
            navigate("/home");
        }
    }, [navigate]);

    return (
        <Wrapper>
            <NavBar>
                <Logo src={logo} alt="Logo" />
            </NavBar>
            <Content>
                {(loading) ? (
                    <Spinner height={'40px'} width={'40px'} />
                ) : (
                    <>
                        <First>
                            <Col alignitems={'center'} justifycontent={'flex-start'}>
                                <Title>Funcionários</Title>
                            </Col>
                            <Col alignitems={'center'} justifycontent={'flex-end'}>
                                <TextInput onChangeText={(t) => setText(t)} />
                            </Col>
                        </First>
                        <Second>
                            <Table data={(foundList.length > 0) ? foundList : employees} />
                        </Second>
                    </>
                )}
            </Content>
        </Wrapper>
    )
}

export default HomePage;