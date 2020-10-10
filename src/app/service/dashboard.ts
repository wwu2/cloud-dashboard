import {CloudResourceWidget} from './cloud-resource-widget';
export interface DashBoard{
    id: number;
    name: string;
    cloudResourceWidgets: CloudResourceWidget[];  
}