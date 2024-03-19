import config from "@config/config";
import { INVESTOR_ENDPOINTS } from "../constants";

const API_BASE_URL= config.apiBaseUrl;

const investorService = {
    getInvestors: async () => {
        try {
            const url = new URL(`${API_BASE_URL}/${INVESTOR_ENDPOINTS.INVESTOR}`);

            const headers = {
                'Accept': 'application/json',
            };

            const response = await fetch(url, {
                method: 'GET',
                headers
            });

            if(response.ok) {
                const data = await response.json();
                return data;
            } else {
                console.error(`Failed to get access investor data.`)
            }
        } catch (err) {
            console.error(err);
        }
        return null;
    },
    getInvestorCommitments: async ({assetClass, investorId} : { assetClass: string, investorId: string }) => {
        try {
            const endPoint = INVESTOR_ENDPOINTS.COMMITMENT.replace(`{type}/{investorId}`, `${assetClass}/${investorId}`);
            const url = new URL(`${API_BASE_URL}/${endPoint}`);

            const headers = {
                'Accept': 'application/json',
            };

            const response = await fetch(url, {
                method: 'GET',
                headers
            });

            if(response.ok) {
                const data = await response.json();
                return data;
            } else {
                console.error(`Failed to get access investor commitments.`)
            }
        } catch (err) {
            console.error(err);
        }
        return null;
    }
};

export default investorService;