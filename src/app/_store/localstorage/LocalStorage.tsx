export default class LocalStorage {
  static setItem(key: string, value: any) {
    if (typeof window !== 'undefined') {
      localStorage.setItem(key, value);
    }
  }

  static getItem(key: string): any {
    if (typeof window !== 'undefined') {
      return localStorage.getItem(key);
    }
    return null;
  }

  static getItemJson(key: string): any {
    if (typeof window !== 'undefined') {
      const items = localStorage.getItem(key);
      if (items) {
        return JSON.parse(items);
      }
    }
    return null;
  }

  static removeItem(key: string) {
    if (typeof window !== 'undefined') {
      localStorage.removeItem(key);
    }
  }
}
