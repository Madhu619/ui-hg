import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import DisplayCards from './DisplayCards';

const CreateDataView = ({ data }) => {
	return (
		<>
			<Row>
				{data.map(flight => <Col md={6} xl={3} sm={12} className="col-xs-12">  <DisplayCards key={flight.flight_number} flight={flight} /> </Col>)} 
			</Row>
		</>
	);
};

export default CreateDataView;