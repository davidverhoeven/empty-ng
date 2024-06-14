import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Client } from "../models/client.model";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class CLientService {


    baseUrl: string = "https://dverhoevenapim.azure-api.net/interview/Client";

    constructor(private http: HttpClient) { }

    getById(clientId: string) {
        return this.http.get<Client>(`${this.baseUrl}/${clientId}`);
    }


    getAll(): Observable<Array<Client>> {
        return this.http.get<Array<Client>>(this.baseUrl);
    }

    insert(client: Client):Observable<string>{
        return this.http.post<string>(this.baseUrl, client);
    }

}