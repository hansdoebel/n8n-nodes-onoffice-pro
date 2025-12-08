import { IExecuteFunctions, INodeExecutionData } from "n8n-workflow";
import { apiRequest } from "../../../utils/apiRequest";
import { parseCommaSeparated } from "../../../utils/parameterBuilder";
import {
  handleExecutionError,
  throwValidationError,
} from "../../../utils/errorHandling";
import { EmailParameters } from "../../../utils/types";
import {
  ensureArray,
  extractBoolean,
  extractNumber,
  extractObject,
  extractString,
} from "../../../utils/parameterExtraction";
import { extractResponseData } from "../../../utils/responseHandler";

export async function sendMail(
  this: IExecuteFunctions,
  itemIndex: number,
): Promise<INodeExecutionData[]> {
  try {
    let parameters: EmailParameters = {
      emailidentity: "",
      receiver: [],
    };

    const emailIdentity = extractString(
      this,
      "emailidentity",
      itemIndex,
      "",
    );
    const receiverInput = extractString(
      this,
      "receiver",
      itemIndex,
      "",
    );
    const receiver = parseCommaSeparated(receiverInput);

    if (receiver.length === 0) {
      throwValidationError(
        this,
        "At least one valid receiver is required",
        itemIndex,
      );
    }

    parameters.emailidentity = emailIdentity;
    parameters.receiver = receiver;

    const additionalFields = extractObject(
      this,
      "additionalFields",
      itemIndex,
      {},
    );

    if (additionalFields.estateids) {
      parameters.estateids = parseCommaSeparated(
        extractString(this, "additionalFields.estateids", itemIndex, ""),
      );
    }

    const templateId = extractNumber(
      this,
      "additionalFields.templateid",
      itemIndex,
      0,
    );
    if (templateId) {
      parameters.templateid = templateId;
    }

    if (additionalFields.pdfexposeidentifiers) {
      parameters.pdfexposeidentifiers = parseCommaSeparated(
        extractString(
          this,
          "additionalFields.pdfexposeidentifiers",
          itemIndex,
          "",
        ),
      );
    }
    if (additionalFields.onlineattachmentids) {
      parameters.onlineattachmentids = parseCommaSeparated(
        extractString(
          this,
          "additionalFields.onlineattachmentids",
          itemIndex,
          "",
        ),
      );
    }
    if (additionalFields.documentattributes) {
      parameters.documentattributes = parseCommaSeparated(
        extractString(
          this,
          "additionalFields.documentattributes",
          itemIndex,
          "",
        ),
      );
    }
    if (additionalFields.pdfformids) {
      parameters.pdfformids = parseCommaSeparated(
        extractString(this, "additionalFields.pdfformids", itemIndex, ""),
      );
    }
    if (additionalFields.pdfletterids) {
      parameters.pdfletterids = parseCommaSeparated(
        extractString(this, "additionalFields.pdfletterids", itemIndex, ""),
      );
    }

    const subject = extractString(
      this,
      "additionalFields.subject",
      itemIndex,
      "",
    );
    if (subject) {
      parameters.subject = subject.trim();
    }

    const body = extractString(
      this,
      "additionalFields.body",
      itemIndex,
      "",
    );
    if (body) {
      parameters.body = body.trim();
    }

    const messageid = extractString(
      this,
      "additionalFields.messageid",
      itemIndex,
      "",
    );
    if (messageid) {
      parameters.messageid = messageid.trim();
    }

    const displayName = extractString(
      this,
      "additionalFields.displayName",
      itemIndex,
      "",
    );
    if (displayName) {
      parameters.displayName = displayName.trim();
    }

    const bcc = ensureArray<unknown>(additionalFields.bcc, []);
    if (Array.isArray(bcc) && bcc.length > 0) {
      parameters.bcc = bcc.map((item) =>
        typeof item === "string" ? item.trim() : String(item).trim()
      );
    }

    const cc = ensureArray<unknown>(additionalFields.cc, []);
    if (Array.isArray(cc) && cc.length > 0) {
      parameters.cc = cc.map((item) =>
        typeof item === "string" ? item.trim() : String(item).trim()
      );
    }

    if (additionalFields.useHtml !== undefined) {
      parameters.useHtml = extractBoolean(
        this,
        "additionalFields.useHtml",
        itemIndex,
        false,
      );
    }
    if (additionalFields.attachLinkedMailToHtmlMessage !== undefined) {
      parameters.attachLinkedMailToHtmlMessage = extractBoolean(
        this,
        "additionalFields.attachLinkedMailToHtmlMessage",
        itemIndex,
        false,
      );
    }
    if (additionalFields.forwarded !== undefined) {
      parameters.forwarded = extractBoolean(
        this,
        "additionalFields.forwarded",
        itemIndex,
        false,
      );
    }
    if (additionalFields.replied !== undefined) {
      parameters.replied = extractBoolean(
        this,
        "additionalFields.replied",
        itemIndex,
        false,
      );
    }
    if (additionalFields.mergeexposeintopdfletter !== undefined) {
      parameters.mergeexposeintopdfletter = extractBoolean(
        this,
        "additionalFields.mergeexposeintopdfletter",
        itemIndex,
        false,
      );
    }

    const response = await apiRequest.call(this, {
      resourceType: "sendmail",
      operation: "do",
      parameters: parameters,
    });

    const responseData = extractResponseData(response);
    return this.helpers.returnJsonArray(responseData);
  } catch (error) {
    handleExecutionError(this, error, {
      resource: "email",
      operation: "sendMail",
      itemIndex,
    });
  }
}
