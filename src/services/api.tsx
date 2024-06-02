import axios from "axios";
import Cookies from "js-cookie";
import { Endpoints } from "./endpoints";
import { ICreateOrganization, IOrganization } from "./types";

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

  async authenticate(email: string, password: string) {
    return await API.post("/auth/token/", {
      email,
      password,
    });
  }
}
