import { SelectableValue } from '@grafana/data';

import { AzureCredentialsType, AzureAuthType } from '../types';

export enum AzureCloud {
  Public = 'AzureCloud',
  None = '',
}

export const KnownAzureClouds: Array<SelectableValue<AzureCloud>> = [{ value: AzureCloud.Public, label: 'Azure' }];

export function isCredentialsComplete(credentials: AzureCredentialsType): boolean {
  switch (credentials.authType) {
    case AzureAuthType.WorkloadIdentity:
      return true;
    case AzureAuthType.MSI:
      return true;
    case AzureAuthType.CLIENT_SECRET:
      return !!(credentials.azureCloud && credentials.tenantId && credentials.clientId && credentials.clientSecret);
  }
}
