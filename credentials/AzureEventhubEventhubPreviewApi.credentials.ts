import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class AzureEventhubEventhubPreviewApi implements ICredentialType {
        name = 'N8nDevAzureEventhubEventhubPreviewApi';

        displayName = 'Azure Eventhub Eventhub Preview API';

        icon: Icon = { light: 'file:../nodes/AzureEventhubEventhubPreview/azure-eventhub-eventhub-preview.png', dark: 'file:../nodes/AzureEventhubEventhubPreview/azure-eventhub-eventhub-preview.dark.png' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: '',
                        required: true,
                        placeholder: 'https://api.example.com',
                        description: 'The base URL of your Azure Eventhub Eventhub Preview API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                Authorization: '=Bearer {{$credentials.apiKey}}',
                        },
                },
        };


}
