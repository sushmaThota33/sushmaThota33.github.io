import { Field, Formik } from "formik";
import React, { useState } from "react";
import { Col, Container, Row, Form, Button } from "react-bootstrap";
import { Progress } from "antd";
import 'antd/dist/antd.css';

const Screen1 = () => {
    const initialValues = {
        input1: '',
        input2: '',
        input3: '',
        input4: '',
        input5: '',
        input6: ''
    }
    const [hiddenCondition, setHiddenCondition] = useState(1)
    const [increaseStatus, setIncreaseStatus] = useState({})
    const [enteredFields, setEnteredFields] = useState([])
    const [percent, setPercent] = useState(0)
    const [dropDownOptions, setDropDownOptions] = useState([
        { value: "1", label: "Option1" },
        { value: "2", label: "Option2" },
        { value: "3", label: "Option3" },
    ])


    const IncreaseValue = (e) => {
        let fieldname = e.target.name
        console.log("name", fieldname)
        let value = Object.keys(initialValues).length
        if (enteredFields.length === 0) {
            let array = [...enteredFields]
            array.push(fieldname)
            console.log("array", array)
            setEnteredFields(array)
            console.log('percent', percent)
            let newPercent = (percent + (100 / value))
            console.log('newPercent', newPercent)
            setPercent(newPercent)
        }
        else {
            if (!enteredFields.includes(fieldname)) {
                let array = [...enteredFields]
                array.push(fieldname)
                setEnteredFields(array)
                let newPercent = (percent + (100 / value))
                setPercent(newPercent)
            }
        }
        increaseStatus[fieldname] = true
    }

    const DecreaseValue = (e) => {
        let value = Object.keys(initialValues).length
        let initialArray = [...enteredFields]
        let fieldName = e.target.name
        let updatedArray = initialArray?.filter(item => item !== fieldName)
        console.log('updatedArray', updatedArray)
        setEnteredFields(updatedArray)
        let newPercent = percent - (100 / value)
        setPercent(newPercent)
        increaseStatus[fieldName] = false
    }
    return (
        <>
            <Container>
                <Row>
                    <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12} className="page-titlespacing">
                        <div className="inner-herbpage-service-title1">
                            <h1>General Information</h1>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container className="outer-page-content-container">
                <div className="top-button-strip">
                    <Formik initialValues={initialValues} enableReinitialize={true}>

                        {({ errors, handleChange, handleSubmit, touched, values, setFieldValue }) => (

                            <form noValidate onSubmit={handleSubmit}>
                                <>

                                    <Progress percent={percent.toFixed(2)} />
                                    <div style={{ display: hiddenCondition === 1 ? 'block' : 'none' }}>
                                        <Row>
                                            <Col xs={12} sm={12} md={12} lg={4} xl={4} xxl={4}></Col>
                                            <Col xs={12} sm={12} md={12} lg={4} xl={4} xxl={4}>
                                                <label htmlFor="input1">First Name:</label>
                                                <Field name="input1" className="form-control"
                                                    onChange={(e) => {
                                                        handleChange(e)
                                                        let value = e.target.value
                                                        if (value.length > 0) {
                                                            if (value.length >= 3) {
                                                                IncreaseValue(e)
                                                            }
                                                            else {
                                                                if (increaseStatus?.input1) {
                                                                    DecreaseValue(e)
                                                                }
                                                            }
                                                        } else {
                                                            if (value.length < 3) {
                                                                if (increaseStatus?.input1) {
                                                                    DecreaseValue(e)
                                                                }
                                                            }
                                                        }
                                                    }} onBlur={() => {
                                                        if ((values?.input1 !== '') && (values?.input2 !== '')) {
                                                            setHiddenCondition(hiddenCondition + 1)
                                                        }
                                                    }}
                                                ></Field>
                                            </Col>
                                            <Col xs={12} sm={12} md={12} lg={4} xl={4} xxl={4}></Col>
                                        </Row>
                                        <Row>
                                            <Col xs={12} sm={12} md={12} lg={4} xl={4} xxl={4}></Col>
                                            <Col xs={12} sm={12} md={12} lg={4} xl={4} xxl={4}>
                                                <label htmlFor="input2">Last Name:</label>
                                                <Field name="input2" className="form-control" onChange={(e) => {
                                                    handleChange(e)
                                                    let value = e.target.value
                                                    if (value.length > 0) {
                                                        if (value.length >= 3) {
                                                            IncreaseValue(e)
                                                        }
                                                        else {
                                                            if (increaseStatus?.input2) {
                                                                DecreaseValue(e)
                                                            }
                                                        }
                                                    } else {
                                                        if (value.length < 3) {
                                                            if (increaseStatus?.input2) {
                                                                DecreaseValue(e)
                                                            }
                                                        }
                                                    }
                                                }} onBlur={() => {
                                                    if ((values?.input1 !== '') && (values?.input2 !== '')) {
                                                        setHiddenCondition(hiddenCondition + 1)
                                                    }
                                                }}></Field>
                                            </Col>
                                            <Col xs={12} sm={12} md={12} lg={4} xl={4} xxl={4}></Col>
                                        </Row>
                                    </div>
                                    <div style={{ display: hiddenCondition === 2 ? 'block' : 'none' }}>
                                        <Row>
                                            <Col xs={12} sm={12} md={12} lg={4} xl={4} xxl={4}></Col>
                                            <Col xs={12} sm={12} md={12} lg={4} xl={4} xxl={4}>
                                                <label htmlFor="input3" className="form-label">Dropdown1<span className="text-danger">*</span></label>
                                                <Field name="input3" >
                                                    {({ field, form }) => (
                                                        <Form.Select {...field} className="form-control"
                                                            onChange={e => {
                                                                handleChange(e);
                                                                if (e.target.value !== '') {
                                                                    IncreaseValue(e)
                                                                } else {
                                                                    if (increaseStatus?.input3) {
                                                                        DecreaseValue(e)
                                                                    }
                                                                }
                                                                setFieldValue('input3', e.target.value)
                                                            }}
                                                            onBlur={() => {
                                                                if (values?.input3 !== '' && values?.input4 !== '') {
                                                                    setHiddenCondition(hiddenCondition + 1)
                                                                }
                                                            }}
                                                        ><option value="">-- Select --</option>
                                                            <option value="1">option1</option>
                                                            <option value="2">option2</option>
                                                            <option value="3">option3</option>
                                                        </Form.Select>
                                                    )}
                                                </Field>
                                            </Col>
                                            <Col xs={12} sm={12} md={12} lg={4} xl={4} xxl={4}></Col>
                                        </Row>
                                        <Row>
                                            <Col xs={12} sm={12} md={12} lg={4} xl={4} xxl={4}></Col>
                                            <Col xs={12} sm={12} md={12} lg={4} xl={4} xxl={4}>
                                                <label htmlFor="input4" className="form-label">Dropdown2<span className="text-danger">*</span></label>
                                                <Field name="input4" >
                                                    {({ field, form }) => (
                                                        <Form.Select {...field} className="form-control"
                                                            onChange={e => {
                                                                handleChange(e);
                                                                if (e.target.value !== '') {
                                                                    IncreaseValue(e)
                                                                } else {
                                                                    if (increaseStatus?.input4) {
                                                                        DecreaseValue(e)
                                                                    }
                                                                }
                                                                setFieldValue('input4', e.target.value)
                                                            }}
                                                            onBlur={() => {
                                                                if (values?.input3 !== '' && values?.input4 !== '') {
                                                                    setHiddenCondition(hiddenCondition + 1)
                                                                }
                                                            }}
                                                        ><option value="">-- Select --</option>
                                                            {dropDownOptions?.map((item, i) => (
                                                                <option key={i} value={item?.value} label={item?.label} />
                                                            ))}
                                                        </Form.Select>
                                                    )}
                                                </Field>
                                            </Col>
                                            <Col xs={12} sm={12} md={12} lg={4} xl={4} xxl={4}></Col>
                                        </Row>

                                    </div>
                                    <div style={{ display: hiddenCondition === 3 ? 'block' : 'none' }}>
                                        <Row>
                                            <Col xs={12} sm={12} md={12} lg={4} xl={4} xxl={4}></Col>
                                            <Col xs={12} sm={12} md={12} lg={4} xl={4} xxl={4} className="mb-3">
                                                <br />
                                                <label>
                                                    <Field type="radio" name="input5" value="1" onClick={(e) => {
                                                        if (e.target.value !== '') {
                                                            IncreaseValue(e)
                                                        } else {
                                                            if (increaseStatus?.input4) {
                                                                DecreaseValue(e)
                                                            }
                                                        }
                                                        setFieldValue('input5', e.target.value)
                                                    }}
                                                    />
                                                    Radio 1
                                                </label> &nbsp; &nbsp;
                                                <label>
                                                    <Field type="radio" name="input5" value="2" onClick={(e) => {
                                                        if (e.target.value !== '') {
                                                            IncreaseValue(e)
                                                        } else {
                                                            if (increaseStatus?.input4) {
                                                                DecreaseValue(e)
                                                            }
                                                        }
                                                        setFieldValue('input5', e.target.value)
                                                    }} />
                                                    Radio 2
                                                </label>
                                            </Col>
                                            <Col xs={12} sm={12} md={12} lg={4} xl={4} xxl={4}></Col>
                                        </Row>
                                        <Row>
                                        <Col xs={12} sm={12} md={12} lg={4} xl={4} xxl={4}></Col>
                                        <Col xs={12} sm={12} md={12} lg={4} xl={4} xxl={4} className="mb-3">
                                            <br />
                                            <label>
                                                <Field type="radio" name="input6" value="1" onClick={(e) => {
                                                    if (e.target.value !== '') {
                                                        IncreaseValue(e)
                                                    } else {
                                                        if (increaseStatus?.input4) {
                                                            DecreaseValue(e)
                                                        }
                                                    }
                                                    setFieldValue('input6', e.target.value)
                                                }}
                                                />
                                                Radio Button 1
                                            </label> &nbsp; &nbsp;
                                            <label>
                                                <Field type="radio" name="input6" value="2" onClick={(e) => {
                                                    if (e.target.value !== '') {
                                                        IncreaseValue(e)
                                                    } else {
                                                        if (increaseStatus?.input4) {
                                                            DecreaseValue(e)
                                                        }
                                                    }
                                                    setFieldValue('input6', e.target.value)
                                                }}
                                                />
                                                Radio Button 2
                                            </label>
                                        </Col>
                                        <Col xs={12} sm={12} md={12} lg={4} xl={4} xxl={4}></Col>
                                        </Row>
                                    </div>
                                    <div>
                                        <br />
                                        {hiddenCondition !== 1 &&
                                            <Row>
                                                <Col xs={12} sm={12} md={12} lg={4} xl={4} xxl={4} className="mb-3"></Col>
                                                <Col xs={12} sm={12} md={12} lg={2} xl={2} xxl={2} className="mb-3">
                                                    <Button className="btn btn-sm" variant="primary" onClick={() => {
                                                        setHiddenCondition(hiddenCondition - 1)
                                                    }}>Back</Button> &nbsp; &nbsp;
                                                    {hiddenCondition === 3 && <>
                                                        <Button className="btn btn-sm" variant="primary" onClick={() => {
                                                            alert("succesfully update the data")
                                                        }}>Submit</Button>
                                                    </>}
                                                </Col>

                                            </Row>}
                                    </div>
                                </>
                            </form>
                        )}
                    </Formik>
                </div>
            </Container>
        </>
    )

}
export default Screen1;
