type HeadersRecord = Record<string, string>;
type QueryParams = Record<string, string | number | boolean | undefined>;

export default class CrudClient {
  private baseURL: string;
  private defaultHeaders: HeadersRecord;

  constructor(baseURL: string, defaultHeaders: HeadersRecord = {}) {
    this.baseURL = baseURL;
    this.defaultHeaders = defaultHeaders;
  }

  //Helper: normalize URL to avoid double slashes
  private _buildUrl(endpoint: string | false): string {
    const cleanBase = this.baseURL.replace(/\/$/, "");
    const cleanEndpoint = endpoint ? endpoint.replace(/^\//, "") : false;
    return `${cleanBase}${cleanEndpoint ? "/" + cleanEndpoint : ""}`;
  }

  //Helper: safe JSON parse and detailed error handling
  private async _handleResponse<T = any>(response: Response): Promise<T | null> {
    const text = await response.text();

    if (!response.ok) {
      let message = text;
      try {
        const parsed = JSON.parse(text);
        message = parsed.error || parsed.message || text;
      } catch {
        /* ignore */
      }
      throw new Error(
        `Request to ${response.url} failed (${response.status}): ${message}`
      );
    }

    // Handle empty responses (e.g., 204 No Content)
    if (!text) return null;

    try {
      return JSON.parse(text);
    } catch {
      return text as unknown as T;
    }
  }

  //CREATE (POST) — use `false` if baseURL is the endpoint
  async create<T = any>(
    endpoint: string | false,
    data: unknown,
    headers: HeadersRecord = {}
  ): Promise<T | null> {
    const response = await fetch(this._buildUrl(endpoint), {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...this.defaultHeaders,
        ...headers,
      },
      body: JSON.stringify(data),
    });
    return this._handleResponse<T>(response);
  }

  //READ (GET)
  async read<T = any>(
    endpoint: string,
    params: QueryParams = {},
    headers: HeadersRecord = {}
  ): Promise<T | null> {
    const query = new URLSearchParams(
      Object.entries(params).reduce(
        (acc, [key, value]) => {
          if (value !== undefined) acc[key] = String(value);
          return acc;
        },
        {} as Record<string, string>
      )
    ).toString();

    const url = query
      ? `${this._buildUrl(endpoint)}?${query}`
      : this._buildUrl(endpoint);

    const response = await fetch(url, {
      headers: {
        ...this.defaultHeaders,
        ...headers,
      },
    });
    return this._handleResponse<T>(response);
  }

  //UPDATE (PUT)
  async update<T = any>(
    endpoint: string,
    data: unknown,
    headers: HeadersRecord = {}
  ): Promise<T | null> {
    const response = await fetch(this._buildUrl(endpoint), {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        ...this.defaultHeaders,
        ...headers,
      },
      body: JSON.stringify(data),
    });
    return this._handleResponse<T>(response);
  }

  //PATCH (partial update)
  async patch<T = any>(
    endpoint: string,
    data: unknown,
    headers: HeadersRecord = {}
  ): Promise<T | null> {
    const response = await fetch(this._buildUrl(endpoint), {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        ...this.defaultHeaders,
        ...headers,
      },
      body: JSON.stringify(data),
    });
    return this._handleResponse<T>(response);
  }

  //DELETE
  async delete<T = any>(
    endpoint: string,
    headers: HeadersRecord = {}
  ): Promise<T | null> {
    const response = await fetch(this._buildUrl(endpoint), {
      method: "DELETE",
      headers: {
        ...this.defaultHeaders,
        ...headers,
      },
    });
    return this._handleResponse<T>(response);
  }
}
