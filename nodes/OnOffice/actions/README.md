# OnOffice Actions - Registry-Based Routing System

This directory contains all action handlers for the OnOffice n8n node, organized by resource and operation.

## Architecture

The action system uses a **registry-based routing** approach that eliminates manual switch statements and makes it easy to add new resources and operations.

### Key Components

1. **Action Registry** (`../utils/actionRegistry.ts`)
   - Central registry that maps `resource → operation → handler`
   - Type-safe action handler definitions
   - Runtime handler lookup and execution

2. **Action Registration** (`../utils/registerActions.ts`)
   - Single file where all actions are registered
   - Imports all handler functions
   - Maps them to their resource/operation pairs

3. **Router** (`../utils/router.ts`)
   - Simple routing logic using the registry
   - No switch statements needed
   - Automatically handles all registered actions

## Directory Structure

```
actions/
├── address/
│   ├── create/
│   │   ├── description.ts    # UI parameter definitions
│   │   ├── execute.ts         # Handler implementation
│   │   └── index.ts           # Exports
│   ├── read/
│   └── index.ts               # Resource-level exports
├── estate/
├── email/
├── appointments/
├── agentslog/
├── relation/
├── templates/
└── README.md (this file)
```

## Adding a New Action

### Step 1: Create the Action Handler

Create a new directory structure:

```
actions/{resource}/{operation}/
├── description.ts
├── execute.ts
└── index.ts
```

**execute.ts** - Implement the handler:

```typescript
import {
  IDataObject,
  IExecuteFunctions,
  INodeExecutionData,
  NodeOperationError,
} from "n8n-workflow";
import { apiRequest } from "../../../utils/apiRequest";
import { buildParameters } from "../../../utils/parameterBuilder";

export async function myNewOperation(
  this: IExecuteFunctions,
  itemIndex: number,
): Promise<INodeExecutionData[]> {
  try {
    // Get parameters
    const parameters: IDataObject = {
      // your base parameters
    };

    const additionalFields = this.getNodeParameter(
      "additionalFields",
      itemIndex,
      {},
    ) as IDataObject;

    // Build final parameters
    const finalParams = buildParameters(parameters, additionalFields);

    // Call API
    const responseData = await apiRequest.call(this, {
      resourceType: "myresource",
      operation: "myoperation",
      parameters: finalParams,
    });

    return this.helpers.returnJsonArray(responseData);
  } catch (error) {
    throw new NodeOperationError(
      this.getNode(),
      `Error calling onOffice API: ${error.message}`,
    );
  }
}
```

**description.ts** - Define UI parameters:

```typescript
import { INodeProperties } from "n8n-workflow";

export const myNewOperationDescription: INodeProperties[] = [
  {
    displayName: "Field Name",
    name: "fieldName",
    type: "string",
    displayOptions: {
      show: {
        resource: ["myresource"],
        operation: ["myoperation"],
      },
    },
    default: "",
    description: "Description of the field",
  },
  // ... more fields
];
```

**index.ts** - Export everything:

```typescript
import { myNewOperation as execute } from "./execute";
import { myNewOperationDescription as description } from "./description";

export { description, execute };
```

### Step 2: Update Resource Index

If adding to an existing resource, update `{resource}/index.ts`:

```typescript
import * as myNewOperation from "./myNewOperation";

export { myNewOperation };

export const descriptions: INodeProperties[] = [
  {
    displayName: "Operation",
    name: "operation",
    type: "options",
    options: [
      // ... existing operations
      {
        name: "My New Operation",
        value: "myoperation",
        description: "Does something cool",
        action: "Perform my new operation",
      },
    ],
  },
  ...myNewOperation.description,
];
```

### Step 3: Register the Action

Add your action to `utils/registerActions.ts`:

```typescript
// Import your handler
import { myNewOperation } from "../actions/myresource/myoperation/execute";

export function registerAllActions(): void {
  // ... existing registrations

  // Register your new action
  registerAction("myresource", "myoperation", myNewOperation);
}
```

### Step 4: Update the Node Definition (if new resource)

If adding a completely new resource, update `OnOffice.node.ts`:

```typescript
import * as myresource from "./actions/myresource";

export class OnOffice implements INodeType {
  description: INodeTypeDescription = {
    // ...
    properties: [
      {
        displayName: "Resource",
        name: "resource",
        type: "options",
        options: [
          // ... existing resources
          {
            name: "My Resource",
            value: "myresource",
          },
        ],
      },
      // ... existing descriptions
      ...myresource.descriptions,
    ],
  };
}
```

That's it! **No need to modify the router** - it automatically picks up registered actions.

## Utilities Available

### API Request (`utils/apiRequest.ts`)

Centralized API request handler:

```typescript
await apiRequest.call(this, {
  resourceType: "address",
  operation: "read",
  parameters: { /* your params */ },
  resourceId: "optional-id", // optional
});
```

### Parameter Building (`utils/parameterBuilder.ts`)

Common parameter utilities:

```typescript
// Build parameters with common fields
const params = buildParameters(baseParams, additionalFields);

// Parse comma-separated strings
const ids = parseCommaSeparated("1,2,3"); // ["1", "2", "3"]

// Parse comma-separated numbers
const nums = parseCommaSeparatedNumbers("1,2,3"); // [1, 2, 3]

// Extract only defined fields
const defined = extractDefinedFields(additionalFields, ["field1", "field2"]);
```

### Common Fields

Standard fields handled by `buildParameters()`:
- `formatoutput`
- `listlimit`
- `listoffset`
- `sortby`
- `sortorder`

## Benefits of This Architecture

✅ **No Manual Routing** - No switch statements to maintain  
✅ **Easy to Add** - Just implement, import, and register  
✅ **Type Safe** - TypeScript ensures correct handler signatures  
✅ **Discoverable** - All registrations in one place  
✅ **Testable** - Each handler is independent  
✅ **Maintainable** - Clear separation of concerns  
✅ **DRY** - Shared utilities for common patterns  

## Current Registered Actions

### Address
- `read` - Read address records
- `create` - Create new address records

### Agentslog
- `read` - Read agent log entries

### Appointments
- `read` - Read appointments
- `create` - Create new appointments
- `delete` - Delete appointments

### Email
- `sendMail` - Send emails via onOffice

### Estate
- `read` - Read estate/property records

### Relation
- `get` - Get relations between records

### Templates
- `get` - Get email/document templates

## Debugging

To see all registered actions at runtime:

```typescript
import { getRegisteredResources, getRegisteredOperations } from "../utils/actionRegistry";

const resources = getRegisteredResources();
resources.forEach(resource => {
  const operations = getRegisteredOperations(resource);
  console.log(`${resource}: ${operations.join(", ")}`);
});
```

## Error Handling

All handlers should:
1. Wrap logic in try-catch
2. Use `NodeOperationError` for user-facing errors
3. Include meaningful error messages
4. Avoid `console.log` (use n8n's logging if needed)

## Testing

When testing new actions:
1. Build the project: `pnpm build`
2. Run lint: `pnpm lint`
3. Test in n8n with real API credentials
4. Verify error handling with invalid inputs