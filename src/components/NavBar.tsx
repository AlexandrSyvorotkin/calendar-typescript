import React, {FC} from 'react';
import {Layout, Menu, Row} from "antd";
import {useHistory} from "react-router-dom";
import {RouteNames} from "../router";
import {useTypedSelector} from "../hooks/useTypedSelector";

const NavBar: FC = () => {
    const router = useHistory()
    const {isAuth} = useTypedSelector(state => state.auth)

    return (
        <Layout.Header>
                <Row justify='end'>
                    {isAuth
                        ?
                        <>
                        <div style={{color: 'white'}}>Yesman</div>
                        <Menu theme='dark' mode='horizontal' selectable={false}>
                            <Menu.Item onClick={()=> console.log('вышел')}
                                       key={1}>Выйти
                            </Menu.Item>
                        </Menu>
                        </>
                        :
                        <>
                        <Menu theme='dark' mode='horizontal' selectable={false}>
                            <Menu.Item onClick={()=> router.push(RouteNames.LOGIN)}
                                       key={1}>Lo
                            </Menu.Item>
                        </Menu>
                        </>
                    }
                </Row>
        </Layout.Header>
    );
};

export default NavBar;