export const servicesPath = () => (`${process.env.SERVICES_HOST}:${process.env.SERVICES_PORT}`);

export const login = () => (`${servicesPath()}/auth/login`);

export const companiesWithId = (id: string) => (`${servicesPath()}/companies/${id}`);

export const companiesWithParams = (limit: number, start: number) => (`${servicesPath()}/companies?limit=${limit}&start=${start}`);

export const companies = () => (`${servicesPath()}/companies`);
