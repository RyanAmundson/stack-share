import { Application } from "./application";

export interface ApplicationGroup {
    id: number;
    name: string;
    description: string;
    image: string;
    applications: Application[];
}
