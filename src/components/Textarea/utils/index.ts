export const resetTaHeight = (ta: HTMLTextAreaElement) =>
  (ta.style.height = 'auto');

export const updateTaHeight = (ta: HTMLTextAreaElement) =>
  (ta.style.height = `${ta.scrollHeight}px`);
