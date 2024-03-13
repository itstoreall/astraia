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

// ------ Body overflow:

export const updateBodyOverflow = (value: boolean) =>
  (document.body.style.overflow = value ? 'hidden' : 'auto');
