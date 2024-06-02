import { ICreateOrganization, IOrganization } from "./types";

export abstract class Endpoints {
  // organizations
  abstract createOrganization(
    data: ICreateOrganization
  ): Promise<IOrganization>;
  abstract getOrganizations(): Promise<IOrganization[]>;
  abstract getOrganizationById(id: string): Promise<IOrganization>;
  abstract updateOrganization(
    id: string,
    data: ICreateOrganization
  ): Promise<IOrganization>;
  abstract deleteOrganization(id: string): Promise<IOrganization>;
}
