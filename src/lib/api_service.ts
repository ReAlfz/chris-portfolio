import { RequestInit } from "next/dist/server/web/spec-extension/request";

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const defaultHeader = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
};

export async function fetchApi<T>(
    endpoint: string,
    option?: RequestInit,
): Promise<T> {
    const result = await fetch(`${BASE_URL}${endpoint}`, {
        ...option,
        headers: {
            ...defaultHeader,
            ...option?.headers,
        }
    });

    if (!result.ok) {
        throw new Error(`Api error: ${result.status} ${result.statusText}`);
    }

    return result.json() as Promise<T>;
}