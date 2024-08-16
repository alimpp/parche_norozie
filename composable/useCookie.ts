interface CookieOptions {
  expires?: number;
  path?: string;
  domain?: string;
  secure?: boolean;
  sameSite?: "Lax" | "Strict" | "None";
}

export function useCookie() {
  const setCookie = (
    name: string,
    value: string,
    options: CookieOptions = {}
  ): void => {
    let cookieString = `${encodeURIComponent(name)}=${encodeURIComponent(
      value
    )}; secure`;

    // Set cookie options
    if (options.expires) {
      const expiresDate = new Date();
      expiresDate.setTime(
        expiresDate.getTime() + options.expires * 24 * 60 * 60 * 1000
      );
      cookieString += `; expires=${expiresDate.toUTCString()}`;
    }
    if (options.path) {
      cookieString += `; path=${options.path}`;
    } else {
      cookieString += `; path=/`;
    }
    if (options.domain) {
      cookieString += `; domain=${options.domain}`;
    }
    if (options.sameSite) {
      cookieString += `; samesite=${options.sameSite}`;
    } else {
      cookieString += `; samesite=Lax`;
    }

    document.cookie = cookieString;
  };

  const getCookie = (name: string): string | null => {
    const nameEQ = `${encodeURIComponent(name)}=`;
    const cookies = document.cookie.split(";");

    for (let i = 0; i < cookies.length; i++) {
      let cookie = cookies[i];
      while (cookie.charAt(0) === " ") {
        cookie = cookie.substring(1);
      }
      if (cookie.indexOf(nameEQ) === 0) {
        return decodeURIComponent(
          cookie.substring(nameEQ.length, cookie.length)
        );
      }
    }

    return null;
  };

  const deleteCookie = (name: string, options: CookieOptions = {}): void => {
    setCookie(name, "", { ...options, expires: -1 });
  };

  return {
    setCookie,
    getCookie,
    deleteCookie,
  };
}
