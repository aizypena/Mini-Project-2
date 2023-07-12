import React from 'react'
import CustomNavbar from './Navbar'
import Footer from './Footer'
import { Col, Row } from 'react-bootstrap'
import { TextField } from '@mui/material'

function Signup() {
    return (
        <div>
            <CustomNavbar />
            <div style={{ backgroundColor: "#fffbf4" }}>
                <div className="container" >
                    <h1 className="text-center" style={{ padding: "5%" }}>Create account</h1>
                    <Row className="justify-content-center">
                        <Col xs={12} sm={6} md={5} lg={4}>
                            <TextField
                                required
                                id="outlined-required"
                                label="First Name"
                                margin="none"
                                defaultValue=""
                                type='text'
                                fullWidth
                                size="small"
                            />
                        </Col>
                    </Row>
                    <Row className="justify-content-center">
                        <Col xs={12} sm={6} md={5} lg={4}>
                            <TextField
                                required
                                id="outlined-required"
                                label="Last Name"
                                margin="none"
                                defaultValue=""
                                type='text'
                                fullWidth
                                size="small"
                            />
                        </Col>
                    </Row>
                    <Row className="justify-content-center">
                        <Col xs={12} sm={6} md={5} lg={4}>
                            <TextField
                                required
                                id="outlined-required"
                                label="Email"
                                margin="none"
                                defaultValue=""
                                type='email'
                                fullWidth
                                size="small"
                            />
                        </Col>
                    </Row>
                    <Row className="justify-content-center">
                        <Col xs={12} sm={6} md={5} lg={4}>
                            <TextField
                                required
                                id="outlined-required"
                                label="Password"
                                type="password"
                                margin='none'
                                fullWidth
                                size='small'
                            />
                        </Col>
                    </Row>
                    <Row className="justify-content-center">
                        <Col xs={12} sm={6} md={5} lg={4}>
                            <TextField
                                required
                                id="outlined-required"
                                label="Confirm Password"
                                type="password"
                                margin='none'
                                fullWidth
                                size='small'
                            />
                        </Col>
                    </Row>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Signup
