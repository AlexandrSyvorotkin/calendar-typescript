import React, {FC} from 'react';
import {Layout, Menu, Row} from "antd";
import {useHistory} from "react-router-dom";
import {RouteNames} from "../router";

const NavBar: FC = () => {
    const router = useHistory()
    const auth = false

    return (
        <Layout.Header>
                <Row justify='end'>
                    {auth
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
                        <Menu theme='dark' mode='horizontal' selectable={false}>
                            <Menu.Item onClick={()=> router.push(RouteNames.LOGIN)}
                                       key={1}>1
                            </Menu.Item>
                        </Menu>

                    }

                </Row>
        </Layout.Header>
    );
};

export default NavBar;