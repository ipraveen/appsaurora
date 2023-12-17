import { useEffect, useState } from 'react';
import { navigate } from 'gatsby';
import { getNavigation, isBrowser } from 'utils/browserUtil';


export default function useNavigation() {
    const [params, setLocalParams] = useState({});
    const [path, setPath] = useState('');
   

    if(!isBrowser()) return ({ params, path, setParams: () => {} });
    
    const navigation = getNavigation();
    const { id, url } = navigation?.currentEntry;

    useEffect(() => {

        const cURL = new URL(url);
        const path = cURL.pathname;
        const cParams = Object.fromEntries(cURL.searchParams);
        setPath(path);
        setLocalParams(cParams);
    }, [id, url]);

    const setParams =  (params) => {
        const cURL = new URL(url);
        Object.keys(params).forEach((key) => {
            const value = params[key];
            if (value == null) {
                cURL.searchParams.delete(key);
            } else {
                cURL.searchParams.set(key, params[key]);
            }
        });
         navigate(cURL.search, {
            
        });
    };

    return { params, path, setParams };
}
