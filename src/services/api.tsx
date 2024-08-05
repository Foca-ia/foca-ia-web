import axios from "axios";
import Cookies from "js-cookie";
import { Endpoints } from "./endpoints";
import {
  ICreateOrganization,
  ICreatePatient,
  ICreateUser,
  IOrganization,
} from "./types";

export const API = axios.create({
  baseURL: process.env.LOCAL_HOST,
});

export class ApiManager implements Endpoints {
  async createOrganization(data: ICreateOrganization): Promise<IOrganization> {
    return await API.post(`/organization/organization/`, data);
  }
  async getOrganizations(): Promise<IOrganization[]> {
    const { data } = await API.get(`organization/organization/`);
    return data;
  }

  async getOrganizationById(id: string): Promise<IOrganization> {
    const { data } = await API.get(`organization/organization/${id}/`);
    return data;
  }
  async updateOrganization(
    id: string,
    data: ICreateOrganization
  ): Promise<IOrganization> {
    return await API.put(`organization/organization/${id}/`, data);
  }

  async deleteOrganization(id: string): Promise<IOrganization> {
    return await API.delete(`organization/organization/${id}/`);
  }

  async authenticate(username: string, password: string) {
    return await API.post(
      "/auth/token",
      {
        username,
        password,
      },
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );
  }

  async createUser(data: ICreateUser, organization_id: string) {
    return API.post(`/user/organization/${organization_id}`, data);
  }

  async createPatient(data: ICreatePatient) {
    return API.post(`/patient/organization/`, data);
  }
  async getPatients() {
    const { data } = await API.get(`/patient/organization/`);
    return data;
  }

  async getPatientById(id: string) {
    const { data } = await API.get(`/patient/organization/${id}/`);
    return data;
  }

  async updatePatient(id: string, data: ICreatePatient) {
    return API.put(`/patient/organization/${id}/`, data);
  }

  async deletePatient(id: string) {
    return API.delete(`/patient/organization/${id}/`);
  }
}
