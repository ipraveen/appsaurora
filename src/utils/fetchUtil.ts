enum FETCH_METHODS {
    GET = 'GET',
    POST = 'POST',
}

const doFetch = (url: string, method: FETCH_METHODS, body?: any, headers = { 'Content-Type': 'application/json' }) => {
    return fetch(url, {
        method,
        body,
        headers,
    });
};

class FetchUtil {
    get(url: string) {
        return doFetch(url, FETCH_METHODS.GET).then((r) => r.json());
    }
    getText(url: string) {
        return doFetch(url, FETCH_METHODS.GET, null, { 'Content-Type': 'text/plain' }).then((r) => r.text());
    }
    // post(url: string, body: any) {
    //     return doFetch(url, FETCH_METHODS.POST, JSON.stringify(body));
    // }
}

export default new FetchUtil();
