const adminKey = process.env.NEXT_PUBLIC_ADMIN_KEY;
const ownerKey = process.env.NEXT_PUBLIC_OWNER_KEY;

export const isOwnerId = (id: string) => id && id === ownerKey;
export const isAdminId = (id: string) => id && id === adminKey;

// ------ Local Storage:

export const getLS = (label: string) => {
  const data = localStorage.getItem(label);
  return data ? JSON.parse(data) : null;
};

export const setLS = <D>(label: string, data: D) => {
  localStorage.setItem(label, JSON.stringify(data));
};

export const delLS = (label: string) => {
  localStorage.removeItem(label);
};
