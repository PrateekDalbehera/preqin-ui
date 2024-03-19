import { useEffect } from 'react';

interface ExternalRedirectProps {
    url: string;
}

const ExternalRedirect: React.FC<ExternalRedirectProps> = ({ url }) => {
    useEffect(() => {
        window.open(url, '_blank');
    }, [url]);

    return <h1>Navigated to {url}</h1>;
};

export default ExternalRedirect;