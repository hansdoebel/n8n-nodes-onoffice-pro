const actionIds: { [key: string]: string } = {
	read: "urn:onoffice-de-ns:smart:2.5:smartml:action:read",
	create: "urn:onoffice-de-ns:smart:2.5:smartml:action:create",
	modify: "urn:onoffice-de-ns:smart:2.5:smartml:action:modify",
	delete: "urn:onoffice-de-ns:smart:2.5:smartml:action:delete",
	get: "urn:onoffice-de-ns:smart:2.5:smartml:action:get",
	do: "urn:onoffice-de-ns:smart:2.5:smartml:action:do",
};

function getActionId(operation: string): string {
	if (operation === "sendMail") {
		return actionIds["do"];
	}
	return actionIds[operation];
}

export { actionIds, getActionId };
