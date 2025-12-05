# n8n-nodes-onoffice

[n8n](https://n8n.io/) is a [fair-code licensed](https://docs.n8n.io/reference/license/) workflow automation platform.

This is a custom n8n community node providing an integration with onOffice.

---

## 📚 Table of Contents

- Features
- Installation
- Authentication
- Roadmap
- Resources

---

## 📁 Features

- Address (Create, Read)
- Estate (Read)
- Agentslog (Read)
- E-Mail (Send)

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

1. Generate API Credentials

Inside onOffice Enterprise:
- Go to Tools → API
- Create a new API token

Record the following values:
- API Token (string)
- Secret (string)

2. Add credentials in n8n

In n8n:

- Go to Credentials
- Create OnOffice API
- Enter: Token, Secret

---

## 🚧 Roadmap

- Appointment Module (Full CRUD for appointments)
- Estate Module Enhancements
- Address Module Enhancements
- Node UX Enhancements (Auto-load dropdowns)

---

## 🔗 Resources

- [n8n Website](https://n8n.io/)
- [n8n community nodes documentation](https://docs.n8n.io/integrations/community-nodes/)
- [onOffice Website](https://onoffice.de/)
- [onOffice API documentation](https://apidoc.onoffice.de/)
- [GitHub Repository](https://github.com/hansdoebel/n8n-nodes-onoffice-pro)

---

## 📜 Version history

- `0.0.4` – appointments (read, create)
- `0.0.3` – agentslog (read), email (do)
- `0.0.2` – address (read), estate (read)
- `0.0.1` – Initial release
