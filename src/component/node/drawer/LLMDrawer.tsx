import React from 'react'
import { Drawer } from 'antd'

export interface LLMDrawerProps {
    title: string;
    open: boolean;
    onClose: () => void;
}

const Index: React.FC<LLMDrawerProps> = (props) => {
    return (
        <Drawer title={props.title} open={props.open} onClose={props.onClose}>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
        </Drawer>
    )
}

export default Index
