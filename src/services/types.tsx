enum OrganizationStatus {
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE",
}

export interface IOrganization {
  id: string;
  name: string;
  email: string;
  plan: string;
  nif: string;
  phone: string;
  status: OrganizationStatus;
  location: string;
}

export interface ICreateOrganization {
  name: string;
  email: string;
  plan: string;
  nif: string;
  phone: string;
  status: OrganizationStatus;
  location: string;
}
