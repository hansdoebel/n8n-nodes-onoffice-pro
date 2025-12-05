import { createHmac } from "crypto";

export function generateHmac(
	secret: string,
	timestamp: number,
	token: string,
	resourceType: string,
	actionId: string,
): string {
	const queryString = `${timestamp}${token}${resourceType}${actionId}`;
	const hmac = createHmac("sha256", secret);
	hmac.update(queryString);
	return hmac.digest("base64");
}
