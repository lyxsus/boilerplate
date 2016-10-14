import React from 'react';
import {Tabs, Tab} from 'react-bootstrap';


export default () =>
	<div>
		<h1>bazzinga! 2.25</h1>

		<Tabs defaultActiveKey={1} id="tabs-test" animation={false}>
			<Tab eventKey={1} title="One">
				1 content
			</Tab>
			
			<Tab eventKey={2} title="Two">
				2 content
			</Tab>
			
			<Tab eventKey={3} title="Three">
				3 content
			</Tab>
		</Tabs>
	</div>
