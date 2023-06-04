type BaseQueryParamType = string | string[][] | Record<string, string> | URLSearchParams;

const get = async <QueryParamType extends BaseQueryParamType>(
  url: string,
  queryParams?: QueryParamType
) => {
  const newUrl = queryParams ? `${url}?${new URLSearchParams(queryParams)}` : url;

  const response = await fetch(newUrl, {
    method: 'GET',
  });

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return response.json();
};

export default { get };
