import React, { useContext, useEffect } from 'react';
import { Context } from '../store/appContext';
import Layout from 'components/Layout';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
//import { Link } from 'react-router-dom';

const Login = (props) => {
    const {
        store,
        actions: { handleChange, getLogin },
    } = useContext(Context);

    useEffect(() => {
        if (store.isAuthenticated) props.history.push('/');
    });

    return (
        <>
            <Layout header="Login">
                <section className="page__section">
                    {!!store.error && (
                        <div className="mb-5">
                            <Alert>{store.error.msg}</Alert>
                        </div>
                    )}
                    <Row>
                        <Form
                            className="col-lg-7"
                            onSubmit={(e) =>
                                getLogin(e, '/api/login', props.history)
                            }
                        >
                            <Form.Group as={Row}>
                                <Form.Label column lg={3}>
                                    Email
                                </Form.Label>
                                <Col lg={9}>
                                    <Form.Control
                                        type="email"
                                        name="email"
                                        className="form-control"
                                        placeholder="john.doe@email.com"
                                        id="contacto_nombre"
                                        onChange={handleChange}
                                    />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row}>
                                <Form.Label column lg={3}>
                                    Password
                                </Form.Label>
                                <Col lg={9}>
                                    <Form.Control
                                        type="password"
                                        name="password"
                                        placeholder="********"
                                        onChange={handleChange}
                                    />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row}>
                                <Col lg={{ span: 9, offset: 3 }}>
                                    <Button type="submit">Sign in</Button>
                                </Col>
                            </Form.Group>
                        </Form>
                    </Row>
                </section>
            </Layout>
        </>
    );
};

export default Login;
