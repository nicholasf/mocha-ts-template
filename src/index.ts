import { readFileSync } from "fs";

const filePath = "./test/fixtures/messages.json";


export function parseJSON(path: string): any {
    let data = readFileSync(filePath)
    try {
        return JSON.parse(data.toString());
    } catch (error) {
        throw new Error(`Failed to parse JSON from ${path}: ${error}`);
    }
}
