# n8n-nodes-onoffice

[n8n](https://n8n.io/) is a [fair-code licensed](https://docs.n8n.io/reference/license/) workflow automation platform.

This is a custom n8n community node providing an integration with onOffice.

---

## 📚 Table of Contents

- Features
- Installation
- Authentication
- Development & Testing
- Roadmap
- Resources

---

## 📁 Features

- Address (Create, Read)
- Estate (Read)
- Agentslog (Read)
- E-Mail (Send)
- Relations (Get)
- Settings (Read)
- Templates (Read)

---

## 📦 Installation

Follow the [installation guide](https://docs.n8n.io/integrations/community-nodes/installation/) in the n8n community nodes documentation.

1. Go to **Settings** > **Community Nodes.**
2. Select **Install.**
3. Find the node you want to install:

   a.) Select **Browse**. n8n takes you to an npm search results page, showing all npm packages tagged with the keyword `n8n-community-node-package`.

   b.) Browse the list of results. You can filter the results or add more keywords.

   c.) Once you find the package you want, make a note of the package name. If you want to install a specific version, make a note of the version number as well.

   d.) Return to n8n.

4. Enter the npm package name, and version number if required.
5. Agree to the risks of using community nodes: select I understand the risks of installing unverified code from a public source.
6. Select Install. n8n installs the node, and returns to the Community Nodes list in Settings.

---

## 🔐 Authentication

The onOffice node uses API Token authentication via the official onOffice Enterprise API.

### 1. Generate API Credentials

Inside onOffice Enterprise:
- Go to Tools → API
- Create a new API token

Record the following values:
- API Token (string)
- Secret (string)

### 2. Add Credentials in n8n

In n8n:

- Go to Credentials
- Create OnOffice API
- Enter: Token, Secret

---

## 🧪 Development & Testing

### Setup Development Environment

```bash
# Install dependencies
pnpm install

# Build the project
pnpm build

# Watch mode (auto-compile on changes)
pnpm dev
```

### Running Tests

This project includes comprehensive unit tests for all utility functions and core functionality.

```bash
# Run all tests
pnpm test

# Run tests in watch mode (auto-run on file changes)
pnpm test:watch

# Run tests with coverage report
pnpm test:coverage
```

### Test Structure

Tests are located in the `tests/` directory and organized by functionality:

```
tests/
├── __fixtures__/
│   ├── api-responses/          # Mock API response data
│   │   ├── relation-success.json
│   │   ├── relation-error-invalid-type.json
│   │   ├── relation-empty.json
│   │   └── address-success.json
│   └── helpers.ts              # Fixture loading utilities
└── utils/
    ├── responseHandler.test.ts  # Response processing tests
    ├── errorHandling.test.ts    # Error handling tests
    ├── relationTypes.test.ts     # Relation type validation tests
    ├── parameterBuilder.test.ts  # Parameter parsing tests
    ├── parameterExtraction.test.ts
    └── hmac.test.ts            # HMAC signature tests
```

### Test Coverage

Current test coverage includes:
- **Response Handler**: Data extraction, error detection, response validation
- **Error Handling**: Custom error throwing and formatting
- **Relation Types**: All 60+ relation types from onOffice API
- **Parameter Parsing**: CSV parsing, type conversion, edge cases
- **Parameter Extraction**: String, number, boolean, array, object extraction
- **HMAC Generation**: Cryptographic signature generation and validation

### Code Quality

```bash
# Lint code
pnpm lint

# Fix linting issues
pnpm lintfix

# Format code
pnpm format
```

---

## 🚧 Roadmap

- Appointment Module (Full CRUD for appointments)
- Estate Module Enhancements
- Address Module Enhancements
- Node UX Enhancements (Auto-load dropdowns)
- Operation Integration Tests
- End-to-End Workflow Tests

---

## 🔗 Resources

- [n8n Website](https://n8n.io/)
- [n8n community nodes documentation](https://docs.n8n.io/integrations/community-nodes/)
- [onOffice Website](https://onoffice.de/)
- [onOffice API documentation](https://apidoc.onoffice.de/)
- [GitHub Repository](https://github.com/hansdoebel/n8n-nodes-onoffice-pro)

---

## 📜 Version History

- `0.1.1` – Enhanced relation operations with comprehensive error handling, 60+ relation types, 107 unit tests
- `0.0.6` – Fixed filter rules for readAgentslog operation
- `0.0.5` – Added settings, templates, relations
- `0.0.4` – Appointments (read, create)
- `0.0.3` – Agentslog (read), email (do)
- `0.0.2` – Address (read), estate (read)
- `0.0.1` – Initial release
