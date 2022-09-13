import type { Response } from "./Response.solution";

const parseJson = (response: any): Response => JSON.parse(response) as Response;

const prefixUrl = (url: string, prefix: string) => `${prefix}/${url}`;

export { parseJson, prefixUrl };
