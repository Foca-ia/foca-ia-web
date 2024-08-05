enum OrganizationStatus {
  ACTIVE,
  INACTIVE,
}

enum UserType {
  ANALYST,
  PATIENT,
  CHIEF_ANALYST,
  DOCTOR,
  IT_ADMIN,
}

enum gender {
  FEMALE,
  MALE,
  OTHER,
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

export interface ICreateUser {
  name: string;
  email: string;
  role: UserType.IT_ADMIN;
  gender: gender.OTHER;
  password: string;
}

export interface IUser {
  id: string;
  name: string;
  email: string;
  role: UserType.IT_ADMIN;
  gender: gender.OTHER;
  password: string;
}

export interface ICreatePatient {
  name: string;
  email: string;
  phone: number;
  address: string;
  age: number;
  height: number;
  weight: number;
  blood_group: string;
  gender: string;
}

export interface IPatient {
  id: string;
  name: string;
  email: string;
  phone: number;
  address: string;
  age: number;
  height: number;
  weight: number;
  blood_group: string;
  gender: string;
}
