---
source: https://apidoc.onoffice.de/api-calls-sorted-by-module/relations/
title: relations
scraped: 2026-01-08T20:26:00.186Z
---

[Home](https://apidoc.onoffice.de) &raquo; [API calls sorted by module](https://apidoc.onoffice.de/api-calls-sorted-by-module/) &raquo; [Relations](https://apidoc.onoffice.de/api-calls-sorted-by-module/relations/) &raquo; Relations		

	
	
		
# Relations
	

	

		
The relation calls can be used to create links between the individual modules. Example: Buyers or owners (addresses) are linked to estates.

Relations between data sets can be created, modified and deleted. In enterprise, there are many ways to link two records together. In case that the relation does not exist, an error will be generated. Many relations cannot be modified, but they can be created and deleted.

It is possible to create 1:n relationships in both directions, but n:n relationships are not possible. I.e. multiple record IDs can be specified as an array.

Each relation type determines which of the records is the &#8220;parent&#8221; record and which is the &#8220;child&#8221; record. The names of the constants always contain first the name of the parent record, then the child record. Last element is a short description of the relation. The type of relation is given according to the following scheme:

`urn:onoffice-de-ns:smart:2.5:relationTypes:<parent-type>:<child-type>:<description>`

### Diagram of existing relations:

A diagram of the relationships between the individual modules can be viewed [here](https://apidoc.onoffice.de/api-calls-sorted-by-module/relations/relations-diagram/).

### List of existing relations:

The following relations exist. Not all relations can be read, created, modified and deleted. The corresponding relation API calls report an error if the relation type does not exist.

Buyer: `'urn:onoffice-dens:smart:2.5:relationTypes:estate:address:buyer'`

(estates are `parentIds`, buyers are `childIds`)

Tenant: `'urn:onoffice-de-ns:smart:2.5:relationTypes:estate:address:renter'`

(estates are `parentIds`, tenants are `childIds`)

Owner: `'urn:onoffice-de-ns:smart:2.5:relationTypes:estate:address:owner'`

(estates are `parentIds`, owners are `childIds`)

Prospective buyer: `'urn:onoffice-de-ns:smart:2.5:relationTypes:estate:address:interested'`

(estates are `parentIds`, prospective buyers are `childIds`)

Contact person (brokers only): `'urn:onoffice-de-ns:smart:2.5:relationTypes:estate:address:contactPerson'`

(estates are `parentIds`, brokers are `childIds`)

All contact persons: `'urn:onoffice-de-ns:smart:2.5:relationTypes:estate:address:contactPersonAll'`

(estates are `parentIds`, addresses are `childIds`)

Other important relation types are for example:

- `'urn:onoffice-de-ns:smart:2.5:relationTypes:estate:estateUnit'` A base object is assigned an estate units.

- `'urn:onoffice-de-ns:smart:2.5:relationTypes:calendar:address'` An appointment is linked to an address.

- `'urn:onoffice-de-ns:smart:2.5:relationTypes:calendar:estate'` An appointment is linked to an estate.

- `'urn:onoffice-de-ns:smart:2.5:relationTypes:agentsLog:file:attachment'` An agents log entry is assigned to a file attachment.

- `'urn:onoffice-de-ns:smart:2.5:relationTypes:agentsLog:address'` An agents log entry is assigned an address.

- `'urn:onoffice-de-ns:smart:2.5:relationTypes:agentsLog:estate'` An agents log entry is assigned an object.

- `'urn:onoffice-de-ns:smart:2.5:relationTypes:address:process'` Process to address (address = parent record, process = child record)

- `'urn:onoffice-de-ns:smart:2.5:relationTypes:address:resubmission'` Resubmission of Address (address = parent record, resubmission = child record)

- `'urn:onoffice-de-ns:smart:2.5:relationTypes:estate:address:buyer'` Buyer of estate (estate = parent record, address = child record)

- `'urn:onoffice-de-ns:smart:2.5:relationTypes:estate:address:renter'` Renter of estate (estate = parent record, address = child record)

- `'urn:onoffice-de-ns:smart:2.5:relationTypes:estate:address:owner'` Owner of estate (estate = parent record, address = child record)

- `'urn:onoffice-de-ns:smart:2.5:relationTypes:estate:user:officer'` Officer (Betreuer) of estate (estate = parent record, user = child record)

- `'urn:onoffice-de-ns:smart:2.5:relationTypes:estate:address:tenant'` Tenant of estate (estate = parent, address = child)

- `'urn:onoffice-de-ns:smart:2.5:relationTypes:estate:address:contactPerson'` Contact person of estate (Makler) (estate = parent, address = child)

- `'urn:onoffice-de-ns:smart:2.5:relationTypes:estate:address:contactPersonAll'` All contact persons of estate (estate = parent, address = child)

- `'urn:onoffice-de-ns:smart:2.5:relationTypes:estate:address:interested'` All interested persons of estate (estate = parent, address = child)

- `'urn:onoffice-de-ns:smart:2.5:relationTypes:estate:allFiles'` All files of an estate (estate = parent, file = child)

- `'urn:onoffice-de-ns:smart:2.5:relationTypes:estate:file:titelbild'` Titelbild (estate = parent, file = child)

- `'urn:onoffice-de-ns:smart:2.5:relationTypes:estate:file:grundriss'` Grundriss (estate = parent, file = child)

- `'urn:onoffice-de-ns:smart:2.5:relationTypes:estate:file:foto'` Foto (estate = parent, file = child)

- `'urn:onoffice-de-ns:smart:2.5:relationTypes:estate:file:allpictures'` All pictures of an estate (estate = parent, file = child)

- `'urn:onoffice-de-ns:smart:2.5:relationTypes:estate:file:alllinks'` All links of an estate (estate = parent, file = child)

- `'urn:onoffice-de-ns:smart:2.5:relationTypes:estate:file:allpicturesExceptTitelbild'` All pictures of an estate (estate = parent, file = child)

- `'urn:onoffice-de-ns:smart:2.5:relationTypes:estate:address:matching'` estate/address matching (estate = parent, file = child)

- `'urn:onoffice-de-ns:smart:2.5:relationTypes:estateTracking:estate'` estateTracking/estate (estateTracking = parent, estate = child)

- `'urn:onoffice-de-ns:smart:2.5:relationTypes:estate:estateUnit'` estate/estate_unit (estate = parent, estate_unit = child)

- `'urn:onoffice-de-ns:smart:2.5:relationTypes:address:address:isTippgeberOf'` Referenceprovider-ID (Tipp-ID) of address (address = parent record, address = child record)

- `'urn:onoffice-de-ns:smart:2.5:relationTypes:address:estate:tipp'` Referenceprovider (Tippgeber) of estate (address = parent, estate = child)

- `'urn:onoffice-de-ns:smart:2.5:relationTypes:address:user:officer'` Officer (Betreuer) of address (address = parent record, user = child record)

- `'urn:onoffice-de-ns:smart:2.5:relationTypes:address:user:additionalOfficers'` Additional officers (Zusatzbetreuer) of address (address = parent record, user = child record)

- `'urn:onoffice-de-ns:smart:2.5:relationTypes:address:file:attachment'` Estate/file relation (estate = parent, file = child)

- `'urn:onoffice-de-ns:smart:2.5:relationTypes:templateManagement:email:attachment'` Template/file matching (email = parent, file = child)

- `'urn:onoffice-de-ns:smart:2.5:relationTypes:templateManagement:email:documentAttributes'` Template/schluessel2 matching (email = parent, schluessel2 = child)

- `'urn:onoffice-de-ns:smart:2.5:relationTypes:address:searchcriteria'` searchcriteria for address (adress = parent record, searchcriteria = child record)

- `'urn:onoffice-de-ns:smart:2.5:relationTypes:address:estate:offer'` Offer (Angebot) (adress = parent record, estate = child record)

- `'urn:onoffice-de-ns:smart:2.5:relationTypes:address:estate:contacted'` Contacted (Adressen) (adress = parent record, estate = child record)

- `'urn:onoffice-de-ns:smart:2.5:relationTypes:address:estate:offerByAgentsLog'` Offer (Angebot) by table “maklerbuch” (address = parent, estate = child)

- `'urn:onoffice-de-ns:smart:2.5:relationTypes:address:user:strangeNameRelation'` user for address, related by “Name” and “Vorname” (address = parent, user = child)

- `'urn:onoffice-de-ns:smart:2.5:relationTypes:address:estate:matching'` immo-matching entry (address = parent, estate = child)

- `'urn:onoffice-de-ns:smart:2.5:relationTypes:customer:address:contact'` contact for customer (customer = parent, address = child)

- `'urn:onoffice-de-ns:smart:2.5:relationTypes:project:task:customer'` project-task relation in customerDb (project = parent, task = child)

- `'urn:onoffice-de-ns:smart:2.5:relationTypes:project:agentslog'` project-agentslog relation (project = parent, agentslog = child)

- `'urn:onoffice-de-ns:smart:2.5:relationTypes:project:calendar'` project-calendar relation (project = parent, calendar = child)

- `'urn:onoffice-de-ns:smart:2.5:relationTypes:project:address'` project-address relation (project = parent, address = child)

- `'urn:onoffice-de-ns:smart:2.5:relationTypes:project:estate'` project-estate relation (project = parent, estate = child)

- `'urn:onoffice-de-ns:smart:2.5:relationTypes:complex:estate:units'` Units of complex (Immobilienanlage) (complex = parent, estate = child)

- `'urn:onoffice-de-ns:smart:2.5:relationTypes:task:address'` task-address (task = parent, address = child)

- `'urn:onoffice-de-ns:smart:2.5:relationTypes:task:estate'` task-estate (task = parent, estate = child)

- `'urn:onoffice-de-ns:smart:2.5:relationTypes:task:file:attachment'` task-attachments (task = parent, file = child)

- `'urn:onoffice-de-ns:smart:2.5:relationTypes:calendar:file:attachment'` calendar-attachments (calendar = parent, file = child)

- `'urn:onoffice-de-ns:smart:2.5:relationTypes:calendar:address'` calendar-address (calendar = parent, address = child)

- `'urn:onoffice-de-ns:smart:2.5:relationTypes:calendar:estate'` calendar-estate (calendar = parent, estate = child)

- `'urn:onoffice-de-ns:smart:2.5:relationTypes:project:file:attachment'` project-attachments (project = parent, file = child)

- `'urn:onoffice-de-ns:smart:2.5:relationTypes:agentsLog:file:attachment'` agents-log-attachments (agents log = parent, file = child)

- `'urn:onoffice-de-ns:smart:2.5:relationTypes:agentsLog:address'` agents-log-address (agents log = parent, address = child)

- `'urn:onoffice-de-ns:smart:2.5:relationTypes:agentsLogMail:address'` agents-log-address (agents log = parent, address = child)

- `'urn:onoffice-de-ns:smart:2.5:relationTypes:agentsLog:estate'` agents-log-estate (agents log = parent, estate = child)

- `'urn:onoffice-de-ns:smart:2.5:relationTypes:agentsLogMail:estate'` agents-log-estate (agents log = parent, estate = child)

- `'urn:onoffice-de-ns:smart:2.5:relationTypes:estate:user:assignment'` estate-user-assignments (estate = parent, user = child)

- `'urn:onoffice-de-ns:smart:2.5:relationTypes:user:address:birthday'` user-address-birthday (user = parent, address = child)

- `'urn:onoffice-de-ns:smart:2.5:relationTypes:user:address'` user-address-birthday (user = parent, address = child)

- `'urn:onoffice-de-ns:smart:2.5:relationTypes:address:mail'` address-mail (address = parent, mail = child)

- `'urn:onoffice-de-ns:smart:2.5:relationTypes:estate:mail'` estate-mail (estate = parent, mail = child)

- `'urn:onoffice-de-ns:smart:2.5:relationTypes:billing:estate'` billing-estate (billing = parent, estate = child)

- `'urn:onoffice-de-ns:smart:2.5:relationTypes:job:estate'` job-estate (job = parent, estate = child)

- `'urn:onoffice-de-ns:smart:2.5:relationTypes:agentsLog:attachment:download'` agentsLog-attachments-download (agentsLogId = parent, attachmentid = child)

- `'urn:onoffice-de-ns:smart:2.5:relationTypes:address:contact:address'` Sets main and 2nd level contacts on the relations tab for addresses. Parent is main contact, child is 2nd level contact.

- `'urn:onoffice-de-ns:smart:2.5:relationTypes:address:user:sync'` address-user (address = parent, user = child). Reads out those users who have set the field `outlookSync` for this address.

- `'urn:onoffice-de-ns:smart:2.5:relationTypes:user:messengerUser:is'` user-messenger user (user = parent, messenger user = child). Reads out the associated messenger user ID for a user and vice versa. The relation is read only.