import type { INodeProperties } from "n8n-workflow";

import * as read from "./read";
import * as create from "./create";
import * as update from "./update";
import * as getFiles from "./getFiles";
import * as modifyFiles from "./modifyFiles";
import * as deleteFiles from "./deleteFiles";
import * as getCategories from "./getCategories";
import * as quickSearch from "./quickSearch";
import * as generatePDFExpose from "./generatePDFExpose";
import * as getSellingPriceOffer from "./getSellingPriceOffer";
import * as doSellingPriceOffer from "./doSellingPriceOffer";
import * as getImagesOnHomepage from "./getImagesOnHomepage";
import * as getTenantBuyerSeeker from "./getTenantBuyerSeeker";
import * as getStatisticsWidgets from "./getStatisticsWidgets";
import * as getTrackingDetails from "./getTrackingDetails";
import * as getFilter from "./getFilter";
import * as createTrackingAccount from "./createTrackingAccount";
import * as createWorkingList from "./createWorkingList";

export {
  create,
  createTrackingAccount,
  createWorkingList,
  deleteFiles,
  doSellingPriceOffer,
  generatePDFExpose,
  getCategories,
  getFiles,
  getFilter,
  getImagesOnHomepage,
  getSellingPriceOffer,
  getStatisticsWidgets,
  getTenantBuyerSeeker,
  getTrackingDetails,
  modifyFiles,
  quickSearch,
  read,
  update,
};

export const descriptions: INodeProperties[] = [
  {
    displayName: "Operation",
    name: "operation",
    type: "options",
    noDataExpression: true,
    displayOptions: {
      show: {
        resource: ["estate"],
      },
    },
    options: [
      {
        name: "Create",
        value: "create",
        description: "Create an estate",
        action: "Create an estate",
      },
      {
        name: "Create Tracking Account",
        value: "createTrackingAccount",
        description: "Create estate tracking account",
        action: "Create estate tracking account",
      },
      {
        name: "Create Working List",
        value: "createWorkingList",
        description: "Create a working list",
        action: "Create a working list",
      },
      {
        name: "Delete Files",
        value: "deleteFiles",
        description: "Delete estate files",
        action: "Delete estate files",
      },
      {
        name: "Do Selling Price Offer",
        value: "doSellingPriceOffer",
        description: "Set selling price offer",
        action: "Set selling price offer",
      },
      {
        name: "Generate PDF Expose",
        value: "generatePDFExpose",
        action: "Generate PDF expose",
      },
      {
        name: "Get Categories",
        value: "getCategories",
        description: "Get estate categories",
        action: "Get estate categories",
      },
      {
        name: "Get Files",
        value: "getFiles",
        description: "Get estate files",
        action: "Get estate files",
      },
      {
        name: "Get Filter",
        value: "getFilter",
        description: "Get filters for module",
        action: "Get filters for module",
      },
      {
        name: "Get Images on Homepage",
        value: "getImagesOnHomepage",
        description: "Get estate images for homepage",
        action: "Get estate images for homepage",
      },
      {
        name: "Get Selling Price Offer",
        value: "getSellingPriceOffer",
        action: "Get selling price offer",
      },
      {
        name: "Get Statistics Widgets",
        value: "getStatisticsWidgets",
        action: "Get statistics widgets",
      },
      {
        name: "Get Tenant Buyer Seeker",
        value: "getTenantBuyerSeeker",
        description: "Get qualified suitors for estate",
        action: "Get qualified suitors for estate",
      },
      {
        name: "Get Tracking Details",
        value: "getTrackingDetails",
        description: "Get estate tracking details",
        action: "Get estate tracking details",
      },
      {
        name: "Modify Files",
        value: "modifyFiles",
        description: "Modify estate files",
        action: "Modify estate files",
      },
      {
        name: "Quick Search",
        value: "quickSearch",
        description: "Quick search for estates",
        action: "Quick search for estates",
      },
      {
        name: "Read",
        value: "read",
        description: "Read an estate",
        action: "Read an estate",
      },
      {
        name: "Update",
        value: "update",
        description: "Update an estate",
        action: "Update an estate",
      },
    ],
    default: "read",
  },
  ...read.description,
  ...create.description,
  ...update.description,
  ...getFiles.description,
  ...modifyFiles.description,
  ...deleteFiles.description,
  ...getCategories.description,
  ...quickSearch.description,
  ...generatePDFExpose.description,
  ...getSellingPriceOffer.description,
  ...doSellingPriceOffer.description,
  ...getImagesOnHomepage.description,
  ...getTenantBuyerSeeker.description,
  ...getStatisticsWidgets.description,
  ...getTrackingDetails.description,
  ...getFilter.description,
  ...createTrackingAccount.description,
  ...createWorkingList.description,
];
