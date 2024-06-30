import React, { useEffect, useState } from 'react';
import './Alert.scss';
import { FaInfoCircle } from 'react-icons/fa';
import AuthParagraph from '../auth-paragraph/AuthParagraph';
import Section from '../section/Section';

type Props = {
    icon: string,
    statusCode: number
    message: string,
    borderColor: string,
    bgColor: string,
}

const Alert = (props: Props) => {
    
    return (
        <div className="test alert" style={{
            backgroundColor: props.bgColor,
            border: `1px solid ${props.borderColor}`
        }}>
            <AuthParagraph paragraph={props.statusCode}/>
            <Section marginBottom='10px'></Section>
            <div className='test alert-hr'></div>
            <div className='test alert-inner'>
                <FaInfoCircle className="test alert-icon" />
                <AuthParagraph paragraph={props.message}/>
            </div>
        </div>
    );

}

export default Alert;