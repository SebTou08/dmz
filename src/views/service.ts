import axios from "axios";
import type {ValeInterface} from "@/models/vale.interface";

export class Service {
    private instace;
    constructor() {
        this.instace = axios.create({
            baseURL: 'https://63fd4ade677c4158731c1a85.mockapi.io/vale/',
            timeout: 1000000,
        });
    }

    public async getAllVales(): Promise<Array<ValeInterface>> {
        return (await this.instace.get('vales')).data;
    }

    public async canejearVale(id: number, vale: ValeInterface) {
        vale.taken = true;
        return (await this.instace.put('/vales/' + id, vale)).data;
    }
}