import {
  IDataObject,
  IExecuteFunctions,
  INodeExecutionData,
  NodeOperationError,
} from "n8n-workflow";
import { apiRequest } from "../../../utils/apiRequest";

interface Parameters {
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

export async function sendMail(
  this: IExecuteFunctions,
  itemIndex: number,
): Promise<INodeExecutionData[]> {
  try {
    let parameters: Parameters = {
      emailidentity: "",
      receiver: [],
    };

    const emailIdentity = this.getNodeParameter(
      "emailidentity",
      itemIndex,
      "",
    ) as string;
    const receiverInput = this.getNodeParameter(
      "receiver",
      itemIndex,
      "",
    ) as string;
    const receiver = receiverInput
      .split(",")
      .map((email) => email.trim())
      .filter(Boolean);

    if (receiver.length === 0) {
      throw new NodeOperationError(
        this.getNode(),
        "At least one valid receiver is required.",
      );
    }

    parameters.emailidentity = emailIdentity;
    parameters.receiver = receiver;

    const additionalFields = this.getNodeParameter(
      "additionalFields",
      itemIndex,
      {},
    ) as IDataObject;

    if (additionalFields) {
      if (additionalFields.estateids) {
        parameters.estateids = (additionalFields.estateids as string)
          .split(",")
          .map((id) => id.trim());
      }
      if (additionalFields.templateid) {
        parameters.templateid = parseInt(
          additionalFields.templateid as string,
          10,
        );
        if (isNaN(parameters.templateid)) {
          throw new NodeOperationError(
            this.getNode(),
            "Template ID must be a valid integer.",
          );
        }
      }
      if (additionalFields.pdfexposeidentifiers) {
        parameters.pdfexposeidentifiers =
          (additionalFields.pdfexposeidentifiers as string)
            .split(",")
            .map((id) => id.trim());
      }
      if (additionalFields.onlineattachmentids) {
        parameters.onlineattachmentids =
          (additionalFields.onlineattachmentids as string)
            .split(",")
            .map((id) => id.trim());
      }
      if (additionalFields.documentattributes) {
        parameters.documentattributes =
          (additionalFields.documentattributes as string)
            .split(",")
            .map((id) => id.trim());
      }
      if (additionalFields.pdfformids) {
        parameters.pdfformids = (additionalFields.pdfformids as string)
          .split(",")
          .map((id) => id.trim());
      }
      if (additionalFields.pdfletterids) {
        parameters.pdfletterids = (additionalFields.pdfletterids as string)
          .split(",")
          .map((id) => id.trim());
      }

      if (
        additionalFields.subject && typeof additionalFields.subject === "string"
      ) {
        parameters.subject = additionalFields.subject.trim();
      }
      if (additionalFields.body && typeof additionalFields.body === "string") {
        parameters.body = additionalFields.body.trim();
      }
      if (
        additionalFields.messageid &&
        typeof additionalFields.messageid === "string"
      ) {
        parameters.messageid = additionalFields.messageid.trim();
      }
      if (
        additionalFields.displayName &&
        typeof additionalFields.displayName === "string"
      ) {
        parameters.displayName = additionalFields.displayName.trim();
      }
      if (additionalFields.bcc && Array.isArray(additionalFields.bcc)) {
        parameters.bcc = additionalFields.bcc.map((bccEmail) =>
          bccEmail.trim()
        );
      }
      if (additionalFields.cc && Array.isArray(additionalFields.cc)) {
        parameters.cc = additionalFields.cc.map((ccEmail) => ccEmail.trim());
      }
      if (additionalFields.useHtml !== undefined) {
        parameters.useHtml = Boolean(additionalFields.useHtml);
      }
      if (additionalFields.attachLinkedMailToHtmlMessage !== undefined) {
        parameters.attachLinkedMailToHtmlMessage = Boolean(
          additionalFields.attachLinkedMailToHtmlMessage,
        );
      }
      if (additionalFields.forwarded !== undefined) {
        parameters.forwarded = Boolean(additionalFields.forwarded);
      }
      if (additionalFields.replied !== undefined) {
        parameters.replied = Boolean(additionalFields.replied);
      }
      if (additionalFields.mergeexposeintopdfletter !== undefined) {
        parameters.mergeexposeintopdfletter = Boolean(
          additionalFields.mergeexposeintopdfletter,
        );
      }
    }

    const responseData = await apiRequest.call(this, {
      resourceType: "sendmail",
      operation: "do",
      parameters: parameters as unknown as IDataObject,
    });

    return this.helpers.returnJsonArray(responseData);
  } catch (error) {
    throw new NodeOperationError(
      this.getNode(),
      `Error calling OnOffice API: ${error.message}`,
    );
  }
}
