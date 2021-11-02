import React, {FC} from 'react';
import {Layout, Menu, PageHeader, Row} from "antd";
import {useHistory} from "react-router-dom";
import {RouteNames} from "../router";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";

const NavBar: FC = () => {
    const router = useHistory()
    const {isAuth, user} = useTypedSelector(state => state.auth)
    const {logout} = useActions()

    return (
        <Layout.Header>
                <Row justify='end'>
                    <div style={{color: 'white', marginRight: '630px', fontSize: '30px'}}>React-TypeScript Calendar</div>
                    {isAuth
                        ?
                        <>
                        <div style={{color: 'white'}}>{user.username}</div>
                        <Menu theme='dark' mode='horizontal' selectable={false}>
                            <Menu.Item onClick={logout}
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