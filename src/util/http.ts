export async function get(url: string): Promise<any> {
    const response = await fetch(url);

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json() as unknown;
    return data;
}