import secureLocalStorage from 'react-secure-storage';

const KEY = 'resp';
export const loadState = () => {
  try {
    const serializedState = secureLocalStorage.getItem(KEY);
    if (!serializedState) return undefined;
    return JSON.parse(serializedState);
  } catch (e) {
    return undefined;
  }
};

export const saveState = async (state) => {
  try {
    const serializedState = JSON.stringify(state);
    secureLocalStorage.setItem(KEY, serializedState);
  } catch (e) {
    // Ignore
  }
};

window.addEventListener('beforeunload', () => {
  if (
    window.location.href.includes('/signup')
    || window.location.href.includes('/login')
  ) {
    localStorage.removeItem('@secure.s.resp');
  }
});
