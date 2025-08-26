const base = { 
    retries: 3, 
    timeout: 1000, 
    headers: { "X-App": "demo" } 
};
const override = { 
    timeout: 3000, 
    headers: { Authorization: "Bearer token" } 
};

const merged = {
    ...base,
    ...override,
    headers: {
        ...base.headers,
        ...override.headers
    }
};

console.log(merged);
