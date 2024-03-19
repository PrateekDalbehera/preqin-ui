import { useEffect, useState } from "react";
import { generatePath, useNavigate } from "react-router-dom";

import { Table } from "@shared/components";

import { investorService } from "../../services";

interface Firm {
    id: number;
    name: string;
    type: string;
    addedOn: string;
    address: string;
}

const Investors = () => {
    const navigate = useNavigate();

    const [investors, setInvestors] = useState<Firm[]>([]);

    useEffect(() => {
        const fetchInvestors = async () => {
            const response = await investorService.getInvestors();
            const _investors: Firm[] = response?.map(
                (f: {
                    firm_id: number;
                    firm_name: string;
                    firm_type: string;
                    date_added: string;
                    address: string;
                    city: string;
                    country: string;
                }) => ({
                    id: f.firm_id,
                    name: f.firm_name,
                    type: f.firm_type,
                    addedOn: new Date(f.date_added).toLocaleDateString(),
                    address: `${f.address}, ${f.country}`
                })
            );

            setInvestors(_investors);
        };

        fetchInvestors();
    }, []);

    const onInvestorClick = (investor: Firm) => {
        const path = generatePath("/investor/commitment/:id", { id: investor.id.toString() });
        navigate(path, { replace: true, state: { firmName: investor.name } });
    };

    return (
        <div className="mx-auto max-w-6xl p-6">
            <h2 className="text-2xl font-bold mb-4">Investors</h2>
            <div>
                <Table data={investors} onRowClick={onInvestorClick} />
            </div>
        </div>
    );    
};

export default Investors;