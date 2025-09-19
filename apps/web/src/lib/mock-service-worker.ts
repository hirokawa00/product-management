import { setupWorker } from "msw/browser";
import { getProductsMock , getMastersUnitsMock,getMastersCategoriesMock} from "@product-management/api-client";

export const handlers = [
  ...getProductsMock(),
  ...getMastersUnitsMock(),
  ...getMastersCategoriesMock()
];

export const worker = setupWorker(...handlers);