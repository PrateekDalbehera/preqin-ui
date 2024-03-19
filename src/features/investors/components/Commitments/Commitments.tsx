import { useCallback, useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";

import { Dropdown, Table } from "@shared/components";

import { investorService } from "../../services";
import { ASSET_CLASSESS } from "../../constants";

type AssetClass = {
    label: string;
    value: string;
};

interface Commitment {
    id: number;
    amount: string;
    currency: string;
}

const Commitments = () => {
    const { state: { firmName = "" } = {} } = useLocation();
    const { id } = useParams<{ id: string }>();
    const [assetClass, setAssetClass] = useState<AssetClass>(ASSET_CLASSESS[0]);
    const [commitments, setCommitments] = useState<Commitment[]>([]);

    const fetchCommitments = useCallback(async () => {
        const investorId = id ?? "";

        const response = await investorService.getInvestorCommitments({
            assetClass: assetClass.value,
            investorId,
        });
        const _commitments: Commitment[]= response?.map(
        ( c:{
                id: number;
                asset_class: string;
                firm_id: string;
                currency: string;
                amount: string;
        }) => ({
            id: c.id,
            amount: c.amount,
            currency: c.currency
        })
        );
        setCommitments(_commitments);
    }, [id, assetClass]);

    useEffect(() => {
        fetchCommitments();
    }, [fetchCommitments]);

    const handleAssetClassSelect = (ac: AssetClass) => {
        setAssetClass(ac);
    };

    return (
        <div className="mx-auto max-w-3xl p-6">
            {firmName && (
                <h1 className="text-2xl font-bold mb-4">
                    {assetClass.label} <span className="font-normal">Commitments of</span> {firmName}
                </h1>
            )}
            <div className="flex mb-4 justify-center items-center">
                <div>
                    <Dropdown
                        options={ASSET_CLASSESS}
                        onSelect={handleAssetClassSelect}
                        defaultSelection={assetClass}
                    />
                </div>
            </div>
            <div>
                <Table data={commitments} />
            </div>
        </div>
    );            
};

export default Commitments;