import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';


export class AzureEventhubEventhubPreview implements INodeType {
        description: INodeTypeDescription = {
                displayName: 'Azure Eventhub Eventhub Preview',
                name: 'N8nDevAzureEventhubEventhubPreview',
                icon: { light: 'file:./azure-eventhub-eventhub-preview.png', dark: 'file:./azure-eventhub-eventhub-preview.dark.png' },
                group: ['input'],
                version: 1,
                subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
                description: 'Azure Event Hubs client for managing Cluster, IPFilter, and VirtualNetwork rules.',
                defaults: { name: 'Azure Eventhub Eventhub Preview' },
                usableAsTool: true,
                inputs: [NodeConnectionTypes.Main],
                outputs: [NodeConnectionTypes.Main],
                credentials: [
                        {
                                name: 'N8nDevAzureEventhubEventhubPreviewApi',
                                required: true,
                        },
                ],
                requestDefaults: {
                        baseURL: '={{\$credentials.url}}',
                        headers: {
                                Accept: 'application/json',
                                'Content-Type': 'application/json',
                        },
                },
                properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [],
			"default": ""
		},
		
                ],
        };
}
