/* eslint-disable n8n-nodes-base/node-filename-against-convention */

import {
  IExecuteFunctions,
  INodeType,
  INodeTypeDescription,
} from "n8n-workflow";

import { router } from "./utils/router";
import * as address from "./actions/address";
import * as estate from "./actions/estate";
import * as agentslog from "./actions/agentslog";
import * as email from "./actions/email";
import * as appointments from "./actions/appointments";

export class OnOffice implements INodeType {
  description: INodeTypeDescription = {
    displayName: "onOffice",
    name: "onoffice",
    icon: "file:onoffice.svg",
    group: ["output"],
    version: 1,
    subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
    description: "onOffice custom node for n8n",
    defaults: {
      name: "onOffice",
    },
    inputs: ["main"],
    outputs: ["main"],
    credentials: [
      {
        name: "onOfficeApi",
        required: true,
      },
    ],
    properties: [
      {
        displayName: "Resource",
        name: "resource",
        type: "options",
        noDataExpression: true,
        options: [
          {
            name: "Address",
            value: "address",
          },
          {
            name: "Agentslog",
            value: "agentslog",
          },
          {
            name: "Appointment",
            value: "appointments",
          },
          {
            name: "E-Mail",
            value: "email",
          },
          {
            name: "Estate",
            value: "estate",
          },
          {
            name: "Setting",
            value: "settings",
          },
          {
            name: "Template",
            value: "templates",
          },
        ],
        default: "address",
      },
      ...address.descriptions,
      ...agentslog.descriptions,
      ...appointments.descriptions,
      ...email.descriptions,
      ...estate.descriptions,
    ],
  };
  async execute(this: IExecuteFunctions) {
    return await router.call(this);
  }
}
