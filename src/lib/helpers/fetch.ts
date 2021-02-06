const readJSON = (response: Response) => {
  return response.json();
};

const readText = (response: Response) => {
  return response.text();
};

const handleErrorResponse = async (response: Response) => {
  const errorMessage = await readText(response);
  throw new Error(errorMessage);
};

const handleResponse = (response: Response) => {
  if (!response.ok) {
    return handleErrorResponse(response);
  }

  const contentType = response.headers.get('content-type');

  if (contentType && contentType.indexOf('application/json') !== -1) {
    return readJSON(response);
  } else {
    return readText(response);
  }
};

export const getRequest = <T>(url: string): Promise<T> => {
  const headers = new Headers({
    'Content-Type': 'application/json',
    pragma: 'no-cache',
  });

  return fetch(`${url}`, { headers }).then(handleResponse);
};

export const postRequest = <T>(
  url: string,
  data: Record<string, any>,
): Promise<T> => {
  const headers = new Headers({
    'Content-Type': 'application/json',
  });

  return fetch(`${url}`, {
    method: 'POST',
    body: JSON.stringify(data),
    headers,
  }).then(handleResponse);
};

export const putRequest = <T>(
  url: string,
  data: Record<string, any>,
): Promise<T> => {
  const headers = new Headers({
    'Content-Type': 'application/json',
  });

  return fetch(`${url}`, {
    method: 'PUT',
    body: JSON.stringify(data),
    headers,
  }).then(handleResponse);
};

export const deleteRequest = <T>(url: string): Promise<T> => {
  const headers = new Headers({
    'Content-Type': 'application/json',
    pragma: 'no-cache',
  });

  return fetch(`${url}`, { method: 'DELETE', headers }).then(handleResponse);
};
