import {
	IExecuteFunctions,
	INodeExecutionData,
	NodeOperationError,
	IDataObject,
} from 'n8n-workflow';
import { apiRequest } from './transport';

export async function deleteAppointment(
	this: IExecuteFunctions,
	itemIndex: number,
): Promise<INodeExecutionData[]> {
	try {
		const resourceid = this.getNodeParameter('resourceid', itemIndex) as string; // Ensuring correct parameter name here

		if (!resourceid) {
			throw new NodeOperationError(
				this.getNode(),
				'Resource ID is required to delete the appointment',
			);
		}

		const requestBody: IDataObject = {
			resourceid: resourceid,
			parameters: {},
		};

		console.log('API Request Body for Deletion:', requestBody);

		const responseData = await apiRequest.call(this, 'calendar', 'delete', requestBody);
		return this.helpers.returnJsonArray(responseData);
	} catch (error) {
		console.error('Error:', error);
		throw new NodeOperationError(this.getNode(), `Error calling onOffice API: ${error.message}`);
	}
}
