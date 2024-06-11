import { Injectable } from "@angular/core";
import { ApiService } from "../../modules/home/services/api.service";

@Injectable({
    providedIn: 'root',
  })
export class ConfigService {
    constructor(
      private apiService: ApiService,
    ) {}

    async init(value?: string) {
        try {
         const response = (await this.apiService.getConfigurations()).data
         localStorage.setItem('CONFIGURATIONS', JSON.stringify(response))
         if(value) return this.findConfiguration(value)
        } catch (error) {
          console.error(error)
        }
    }

    async findConfiguration(codigo: string): Promise<any> {
        const data: any = localStorage.getItem('CONFIGURATIONS')
        const configurations = JSON.parse(data);
        if(!configurations) return await this.init(codigo)
        const configuration = configurations.find((config: any) => config.codigo === codigo);
        return configuration.valor;
    }

}