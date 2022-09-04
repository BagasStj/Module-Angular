export function getURLSearchParams(url: string): any {
    const start = url.indexOf('?');
    const sub = url.substring(start == -1 ? 0 : start, url.length);
    console.log('subsr', sub);
    const u = new URLSearchParams(sub);
    console.log('u', u);
    const mp: any = {};
    u.forEach((x, i) => {
      mp[i] = x;
    });
    return mp;
}
  
export function copy(obj: any) {
    return JSON.parse(JSON.stringify(obj));
}

export function safelyParseJSON(json: any): any | undefined {
    // This function cannot be optimised, it's best to
    // keep it small!
    let parsed;
  
    try {
      parsed = JSON.parse(json);
    } catch (e) {
      // Oh well, but whatever...
      console.log('ex when trying to parse json = ' + e);
    }
  
    return parsed; // Could be undefined!
  }