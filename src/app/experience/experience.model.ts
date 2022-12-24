export interface EnpointInterface {
    endpoint: string;
    query: Array<{
        name: string;
        data: string;
    }>;
    token: string | undefined;
}