import { IDataObject } from "n8n-workflow";

export interface ApiCredentials {
  secret: string;
  token: string;
}

export interface ApiAction {
  actionid: string;
  resourcetype: string;
  identifier: string;
  timestamp: number;
  hmac: string;
  hmac_version: number;
  resourceid: string;
  parameters: IDataObject;
}

export interface ApiResponseStatus {
  errorcode: number;
  message: string;
}

export interface ApiResponseAction {
  actionid: string;
  resourceid: string;
  resourcetype: string;
  cacheable: boolean;
  identifier: string;
  data?: IDataObject | IDataObject[];
  status: ApiResponseStatus;
}

export interface OnOfficeApiResponse {
  status: ApiResponseStatus;
  response?: {
    results: ApiResponseAction[];
  };
  errors?: string[];
  message?: string;
}

export interface RequestBody {
  actionid: string;
  resourcetype: string;
  identifier: string;
  timestamp: number;
  hmac: string;
  hmac_version: number;
  resourceid: string;
  parameters: IDataObject;
}

export interface ApiRequestOptions {
  resourceType: string;
  operation: string;
  parameters: IDataObject;
  resourceId?: string;
}

export interface ApiResponse {
  status: string;
  data?: IDataObject | IDataObject[];
  errors?: string[];
}

export interface BaseOperationParameters extends IDataObject {
  formatoutput?: string | boolean;
  listlimit?: number;
  listoffset?: number;
  sortby?: string;
  sortorder?: string;
}

export interface PaginationParameters extends IDataObject {
  listlimit?: number;
  listoffset?: number;
}

export interface SortingParameters extends IDataObject {
  sortby?: string;
  sortorder?: string;
}

export interface FilterParameters extends IDataObject {
  filter?: IDataObject;
}

export interface DataFieldsParameters extends IDataObject {
  data?: string[];
}

export interface AddressParameters extends BaseOperationParameters {
  recordids?: string[];
  data?: string[];
}

export interface EstateParameters extends BaseOperationParameters {
  data?: string[];
  addMobileUrl?: boolean;
}

export interface AgentslogParameters extends IDataObject {
  data?: string[];
  estateid?: number[];
  addressid?: number[];
  projectid?: number;
  filter?: IDataObject;
  listlimit?: number;
  listoffset?: number;
  sortby?: string;
  sortorder?: string;
  fullmail?: boolean;
  tracking?: boolean;
}

export interface AppointmentReadParameters extends IDataObject {
  data?: string[];
}

export interface AppointmentCreateParameters extends IDataObject {
  data?: IDataObject;
  relatedAddressIds?: number[];
  relatedEstateId?: number;
}

export interface EmailParameters extends IDataObject {
  emailidentity: string;
  templateid?: number;
  estateids?: string[];
  receiver: string[];
  pdfexposeidentifiers?: string[];
  useHtml?: boolean;
  attachLinkedMailToHtmlMessage?: boolean;
  forwarded?: boolean;
  replied?: boolean;
  mergeexposeintopdfletter?: boolean;
  displayName?: string;
  bcc?: string[];
  cc?: string[];
  subject?: string;
  onlineattachmentids?: string[];
  replyto?: string;
  body?: string;
  documentattributes?: string[];
  pdfformids?: string[];
  pdfletterids?: string[];
  messageid?: string;
}

export interface RelationType {
  name: string;
  value: string;
  description: string;
}

export const RELATION_TYPES: Record<string, RelationType[]> = {
  "Estate & Address": [
    {
      name: "Buyer",
      value: "urn:onoffice-de-ns:smart:2.5:relationTypes:estate:address:buyer",
      description: "Estates are parentIds, buyers are childIds",
    },
    {
      name: "Tenant/Renter",
      value: "urn:onoffice-de-ns:smart:2.5:relationTypes:estate:address:renter",
      description: "Estates are parentIds, tenants are childIds",
    },
    {
      name: "Owner",
      value: "urn:onoffice-de-ns:smart:2.5:relationTypes:estate:address:owner",
      description: "Estates are parentIds, owners are childIds",
    },
    {
      name: "Interested/Prospective Buyer",
      value:
        "urn:onoffice-de-ns:smart:2.5:relationTypes:estate:address:interested",
      description: "Estates are parentIds, prospective buyers are childIds",
    },
    {
      name: "Contact Person (Brokers)",
      value:
        "urn:onoffice-de-ns:smart:2.5:relationTypes:estate:address:contactPerson",
      description: "Estates are parentIds, brokers are childIds",
    },
    {
      name: "All Contact Persons",
      value:
        "urn:onoffice-de-ns:smart:2.5:relationTypes:estate:address:contactPersonAll",
      description: "Estates are parentIds, addresses are childIds",
    },
    {
      name: "Matching",
      value:
        "urn:onoffice-de-ns:smart:2.5:relationTypes:estate:address:matching",
      description: "Estate/address matching (estate = parent, address = child)",
    },
  ],
  "Estate & Estate Unit": [
    {
      name: "Estate Units",
      value: "urn:onoffice-de-ns:smart:2.5:relationTypes:estate:estateUnit",
      description:
        "A base object is assigned estate units (estate = parent, estate_unit = child)",
    },
  ],
  "Estate & User": [
    {
      name: "Officer/Betreuer",
      value: "urn:onoffice-de-ns:smart:2.5:relationTypes:estate:user:officer",
      description:
        "Officer (Betreuer) of estate (estate = parent, user = child)",
    },
    {
      name: "User Assignment",
      value:
        "urn:onoffice-de-ns:smart:2.5:relationTypes:estate:user:assignment",
      description: "Estate-user-assignments (estate = parent, user = child)",
    },
  ],
  "Estate & File": [
    {
      name: "All Files",
      value: "urn:onoffice-de-ns:smart:2.5:relationTypes:estate:allFiles",
      description: "All files of an estate (estate = parent, file = child)",
    },
    {
      name: "Title Image",
      value: "urn:onoffice-de-ns:smart:2.5:relationTypes:estate:file:titelbild",
      description: "Titelbild (estate = parent, file = child)",
    },
    {
      name: "Grundriss/Floor Plan",
      value: "urn:onoffice-de-ns:smart:2.5:relationTypes:estate:file:grundriss",
      description: "Grundriss (estate = parent, file = child)",
    },
    {
      name: "Photo",
      value: "urn:onoffice-de-ns:smart:2.5:relationTypes:estate:file:foto",
      description: "Foto (estate = parent, file = child)",
    },
    {
      name: "All Pictures",
      value:
        "urn:onoffice-de-ns:smart:2.5:relationTypes:estate:file:allpictures",
      description: "All pictures of an estate (estate = parent, file = child)",
    },
    {
      name: "All Links",
      value: "urn:onoffice-de-ns:smart:2.5:relationTypes:estate:file:alllinks",
      description: "All links of an estate (estate = parent, file = child)",
    },
    {
      name: "All Pictures Except Title Image",
      value:
        "urn:onoffice-de-ns:smart:2.5:relationTypes:estate:file:allpicturesExceptTitelbild",
      description:
        "All pictures of an estate except title image (estate = parent, file = child)",
    },
  ],
  "Estate & Mail": [
    {
      name: "Estate Mail",
      value: "urn:onoffice-de-ns:smart:2.5:relationTypes:estate:mail",
      description: "Estate-mail (estate = parent, mail = child)",
    },
  ],
  "Estate Tracking": [
    {
      name: "Estate Tracking",
      value: "urn:onoffice-de-ns:smart:2.5:relationTypes:estateTracking:estate",
      description:
        "EstateTracking/estate (estateTracking = parent, estate = child)",
    },
  ],
  "Billing": [
    {
      name: "Billing Estate",
      value: "urn:onoffice-de-ns:smart:2.5:relationTypes:billing:estate",
      description: "Billing-estate (billing = parent, estate = child)",
    },
  ],
  "Job": [
    {
      name: "Job Estate",
      value: "urn:onoffice-de-ns:smart:2.5:relationTypes:job:estate",
      description: "Job-estate (job = parent, estate = child)",
    },
  ],
  "Address Relations": [
    {
      name: "Process",
      value: "urn:onoffice-de-ns:smart:2.5:relationTypes:address:process",
      description: "Process to address (address = parent, process = child)",
    },
    {
      name: "Resubmission",
      value: "urn:onoffice-de-ns:smart:2.5:relationTypes:address:resubmission",
      description:
        "Resubmission of Address (address = parent, resubmission = child)",
    },
    {
      name: "Tip Provider (Tippgeber)",
      value: "urn:onoffice-de-ns:smart:2.5:relationTypes:address:estate:tipp",
      description:
        "Referenceprovider (Tippgeber) of estate (address = parent, estate = child)",
    },
    {
      name: "Is Tip Provider Of",
      value:
        "urn:onoffice-de-ns:smart:2.5:relationTypes:address:address:isTippgeberOf",
      description:
        "Referenceprovider-ID (Tipp-ID) of address (address = parent, address = child)",
    },
    {
      name: "Officer/Betreuer",
      value: "urn:onoffice-de-ns:smart:2.5:relationTypes:address:user:officer",
      description:
        "Officer (Betreuer) of address (address = parent, user = child)",
    },
    {
      name: "Additional Officers",
      value:
        "urn:onoffice-de-ns:smart:2.5:relationTypes:address:user:additionalOfficers",
      description:
        "Additional officers (Zusatzbetreuer) of address (address = parent, user = child)",
    },
    {
      name: "File Attachment",
      value:
        "urn:onoffice-de-ns:smart:2.5:relationTypes:address:file:attachment",
      description: "Estate/file relation (address = parent, file = child)",
    },
    {
      name: "Search Criteria",
      value:
        "urn:onoffice-de-ns:smart:2.5:relationTypes:address:searchcriteria",
      description:
        "Searchcriteria for address (address = parent, searchcriteria = child)",
    },
    {
      name: "Offer/Angebot",
      value: "urn:onoffice-de-ns:smart:2.5:relationTypes:address:estate:offer",
      description: "Offer (Angebot) (address = parent, estate = child)",
    },
    {
      name: "Contacted",
      value:
        "urn:onoffice-de-ns:smart:2.5:relationTypes:address:estate:contacted",
      description: "Contacted (Adressen) (address = parent, estate = child)",
    },
    {
      name: "Offer By Agents Log",
      value:
        "urn:onoffice-de-ns:smart:2.5:relationTypes:address:estate:offerByAgentsLog",
      description:
        'Offer (Angebot) by table "maklerbuch" (address = parent, estate = child)',
    },
    {
      name: "Strange Name Relation",
      value:
        "urn:onoffice-de-ns:smart:2.5:relationTypes:address:user:strangeNameRelation",
      description:
        'User for address, related by "Name" and "Vorname" (address = parent, user = child)',
    },
    {
      name: "Matching",
      value:
        "urn:onoffice-de-ns:smart:2.5:relationTypes:address:estate:matching",
      description: "Immo-matching entry (address = parent, estate = child)",
    },
    {
      name: "Contact Address",
      value:
        "urn:onoffice-de-ns:smart:2.5:relationTypes:address:contact:address",
      description:
        "Sets main and 2nd level contacts on relations tab. Parent is main contact, child is 2nd level.",
    },
    {
      name: "User Sync",
      value: "urn:onoffice-de-ns:smart:2.5:relationTypes:address:user:sync",
      description:
        "Address-user with Outlook sync (address = parent, user = child)",
    },
    {
      name: "Mail",
      value: "urn:onoffice-de-ns:smart:2.5:relationTypes:address:mail",
      description: "Address-mail (address = parent, mail = child)",
    },
  ],
  "User Relations": [
    {
      name: "Address Birthday",
      value: "urn:onoffice-de-ns:smart:2.5:relationTypes:user:address:birthday",
      description: "User-address-birthday (user = parent, address = child)",
    },
    {
      name: "Address",
      value: "urn:onoffice-de-ns:smart:2.5:relationTypes:user:address",
      description: "User-address (user = parent, address = child)",
    },
    {
      name: "Messenger User",
      value: "urn:onoffice-de-ns:smart:2.5:relationTypes:user:messengerUser:is",
      description:
        "User-messenger user (user = parent, messenger user = child). Read only.",
    },
  ],
  "Calendar Relations": [
    {
      name: "Calendar Address",
      value: "urn:onoffice-de-ns:smart:2.5:relationTypes:calendar:address",
      description:
        "An appointment is linked to an address (calendar = parent, address = child)",
    },
    {
      name: "Calendar Estate",
      value: "urn:onoffice-de-ns:smart:2.5:relationTypes:calendar:estate",
      description:
        "An appointment is linked to an estate (calendar = parent, estate = child)",
    },
    {
      name: "Calendar File Attachment",
      value:
        "urn:onoffice-de-ns:smart:2.5:relationTypes:calendar:file:attachment",
      description: "Calendar-attachments (calendar = parent, file = child)",
    },
  ],
  "Agents Log Relations": [
    {
      name: "Agents Log File Attachment",
      value:
        "urn:onoffice-de-ns:smart:2.5:relationTypes:agentsLog:file:attachment",
      description: "Agents-log-attachments (agents log = parent, file = child)",
    },
    {
      name: "Agents Log Address",
      value: "urn:onoffice-de-ns:smart:2.5:relationTypes:agentsLog:address",
      description: "Agents-log-address (agents log = parent, address = child)",
    },
    {
      name: "Agents Log Estate",
      value: "urn:onoffice-de-ns:smart:2.5:relationTypes:agentsLog:estate",
      description: "Agents-log-estate (agents log = parent, estate = child)",
    },
    {
      name: "Agents Log Mail Address",
      value: "urn:onoffice-de-ns:smart:2.5:relationTypes:agentsLogMail:address",
      description: "Agents-log-address (agents log = parent, address = child)",
    },
    {
      name: "Agents Log Mail Estate",
      value: "urn:onoffice-de-ns:smart:2.5:relationTypes:agentsLogMail:estate",
      description: "Agents-log-estate (agents log = parent, estate = child)",
    },
    {
      name: "Agents Log Attachment Download",
      value:
        "urn:onoffice-de-ns:smart:2.5:relationTypes:agentsLog:attachment:download",
      description:
        "AgentsLog-attachments-download (agentsLogId = parent, attachmentid = child)",
    },
  ],
  "Project Relations": [
    {
      name: "Project Task Customer",
      value: "urn:onoffice-de-ns:smart:2.5:relationTypes:project:task:customer",
      description:
        "Project-task relation in customerDb (project = parent, task = child)",
    },
    {
      name: "Project Agents Log",
      value: "urn:onoffice-de-ns:smart:2.5:relationTypes:project:agentslog",
      description:
        "Project-agentslog relation (project = parent, agentslog = child)",
    },
    {
      name: "Project Calendar",
      value: "urn:onoffice-de-ns:smart:2.5:relationTypes:project:calendar",
      description:
        "Project-calendar relation (project = parent, calendar = child)",
    },
    {
      name: "Project Address",
      value: "urn:onoffice-de-ns:smart:2.5:relationTypes:project:address",
      description:
        "Project-address relation (project = parent, address = child)",
    },
    {
      name: "Project Estate",
      value: "urn:onoffice-de-ns:smart:2.5:relationTypes:project:estate",
      description: "Project-estate relation (project = parent, estate = child)",
    },
    {
      name: "Project File Attachment",
      value:
        "urn:onoffice-de-ns:smart:2.5:relationTypes:project:file:attachment",
      description: "Project-attachments (project = parent, file = child)",
    },
  ],
  "Task Relations": [
    {
      name: "Task Address",
      value: "urn:onoffice-de-ns:smart:2.5:relationTypes:task:address",
      description: "Task-address (task = parent, address = child)",
    },
    {
      name: "Task Estate",
      value: "urn:onoffice-de-ns:smart:2.5:relationTypes:task:estate",
      description: "Task-estate (task = parent, estate = child)",
    },
    {
      name: "Task File Attachment",
      value: "urn:onoffice-de-ns:smart:2.5:relationTypes:task:file:attachment",
      description: "Task-attachments (task = parent, file = child)",
    },
  ],
  "Complex Relations": [
    {
      name: "Complex Estate Units",
      value: "urn:onoffice-de-ns:smart:2.5:relationTypes:complex:estate:units",
      description:
        "Units of complex (Immobilienanlage) (complex = parent, estate = child)",
    },
  ],
  "Customer Relations": [
    {
      name: "Customer Address Contact",
      value:
        "urn:onoffice-de-ns:smart:2.5:relationTypes:customer:address:contact",
      description: "Contact for customer (customer = parent, address = child)",
    },
  ],
  "Template Management Relations": [
    {
      name: "Template Email Attachment",
      value:
        "urn:onoffice-de-ns:smart:2.5:relationTypes:templateManagement:email:attachment",
      description: "Template/file matching (email = parent, file = child)",
    },
    {
      name: "Template Email Document Attributes",
      value:
        "urn:onoffice-de-ns:smart:2.5:relationTypes:templateManagement:email:documentAttributes",
      description:
        "Template/schluessel2 matching (email = parent, schluessel2 = child)",
    },
  ],
};

export interface RelationParameters extends IDataObject {
  relationtype: string;
  parentids?: number[];
  childids?: number[];
}

export interface TemplateParameters extends IDataObject {
  type: string;
  category?: string;
  mailtemplateids?: number[];
  list?: boolean;
}

export type OperationParameters =
  | AddressParameters
  | EstateParameters
  | AgentslogParameters
  | AppointmentReadParameters
  | AppointmentCreateParameters
  | EmailParameters
  | RelationParameters
  | TemplateParameters;
