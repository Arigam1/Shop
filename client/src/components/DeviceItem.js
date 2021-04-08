import React from 'react';
import { Col, Card, Image } from 'react-bootstrap'
import { useHistory } from 'react-router-dom';
import star from '../assets/star.png'
import { DEVICE_ROUTE } from '../utils/consts';


const DeviceItem = ({ device }) => {
    const history = useHistory()
    return (
        <Col md={3} className="mt-4" onClick={() => history.push(DEVICE_ROUTE + "/" + device.id)}>
            <Card style={{ width: 150, cursor: 'pointer' }} border='light'>
                <Image width={150} height={150} src={process.env.REACT_APP_APP_URL + device.img} /> {/*  // ВОТ ТУТ ЧТОТО СТРАННОЕ для получения картинки!!! */}
                <div className="text-black-50 d-flex justify-content-between align-items-center">
                    <div>Samsung...</div>
                    <div>
                        <div className="d-flex align-items-center mt-1">
                            {device.raiting}
                            <Image src={star} style={{ width: 13, height: 13 }} />
                        </div>
                    </div>
                </div>
                <div>{device.name}</div>
            </Card>
        </Col>

    );
};

export default DeviceItem;