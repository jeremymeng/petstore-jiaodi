// Licensed under the MIT License.

import { PetStoreContext } from "../../api/petStoreContext.js";
import { list, createOrUpdate } from "../../api/ownerCheckups/index.js";
import {
  CheckupUpdate,
  Checkup,
  CheckupCollectionWithNextLink,
} from "../../models/models.js";
import {
  OwnerCheckupsListOptionalParams,
  OwnerCheckupsCreateOrUpdateOptionalParams,
} from "../../api/options.js";

/** Interface representing a OwnerCheckups operations. */
export interface OwnerCheckupsOperations {
  /** Lists all instances of the extension resource. */
  list: (
    ownerId: number,
    options?: OwnerCheckupsListOptionalParams,
  ) => Promise<CheckupCollectionWithNextLink>;
  /** Creates or update an instance of the extension resource. */
  createOrUpdate: (
    ownerId: number,
    checkupId: number,
    resource: CheckupUpdate,
    options?: OwnerCheckupsCreateOrUpdateOptionalParams,
  ) => Promise<Checkup>;
}

export function getOwnerCheckups(context: PetStoreContext) {
  return {
    list: (ownerId: number, options?: OwnerCheckupsListOptionalParams) =>
      list(context, ownerId, options),
    createOrUpdate: (
      ownerId: number,
      checkupId: number,
      resource: CheckupUpdate,
      options?: OwnerCheckupsCreateOrUpdateOptionalParams,
    ) => createOrUpdate(context, ownerId, checkupId, resource, options),
  };
}

export function getOwnerCheckupsOperations(
  context: PetStoreContext,
): OwnerCheckupsOperations {
  return {
    ...getOwnerCheckups(context),
  };
}
