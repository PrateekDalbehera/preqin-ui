interface TableProps<T> {
    data: T[];
    onRowClick?: (row: T) => void;
}

const Table = <T extends object>({ data, onRowClick }: TableProps<T>) => {
    const headers = Object.keys(data.length > 0 ? data[0] : {});

    const isRowClickable = onRowClick && typeof onRowClick === "function";

    const handleRowClick = (item: T) => {
        if (isRowClickable) {
            onRowClick(item);
        }
        return false;
    };

    return !!data && data.length ? (
        <table className="table-auto w-full border border-collapse">
            <thead>
                <tr>
                    {
                        headers.map((column, index) => (
                            <th key={index} className="border px-4 py-2 capitalize text-center">{column}</th>
                        ))
                    }
                </tr>
            </thead>
            <tbody>
                {
                    data.map((item, index) => (
                        <tr
                        key={index}
                        onClick={() => handleRowClick(item)}
                        className={isRowClickable ? "cursor-pointer hover:bg-gray-100" : ""}
                        >
                        {Object.values(item).map((value, index) => (
                            <td key={index} className="border px-4 py-2 capitalize text-center">{value}</td>
                        ))}
                        </tr>
                    ))
                }
            </tbody>
        </table>
        ) : (
        "No data available."
    );
};

export default Table;