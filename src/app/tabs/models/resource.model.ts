import { User } from './users.model';

export interface Resource {
    id?: string;
    name: string;
    localization: string;
    category: string;
    form_fields?: FormField[];
    users?: User[];
}

export interface FormField {
    field: string,
    value: string,
    input_type: string,
    resource_id: number
}