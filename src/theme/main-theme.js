const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px'
};

export const device = {
  mobileS: `(max-width: ${size.mobileS})`,
  mobileM: `(max-width: ${size.mobileM})`,
  mobileL: `(max-width: ${size.mobileL})`,
  tablet: `(max-width: ${size.tablet})`,
  laptop: `(max-width: ${size.laptop})`,
  laptopL: `(max-width: ${size.laptopL})`,
  desktop: `(max-width: ${size.desktop})`,
  desktopL: `(max-width: ${size.desktop})`
};

export const lightTheme = {
  body: '#FFF',
  text: '#363537',
  toggleBorder: '#FFF',
  background: '#F7FAF9',
  cardBg: '#FFFFFF',
  primary: '#3498db',
  secondary: '#2ecc71',
  danger: '#e74c3c',
  borderRadius: {
    s: '4px',
    m: '8px',
    l: '12px',
    xl: '20px'
  },
  shadows: {
    small: '0 2px 4px rgba(0,0,0,0.1)',
    medium: '0 4px 8px rgba(0,0,0,0.15)',
    large: '0 8px 16px rgba(0,0,0,0.2)'
  },
  colors: {
    background: '#F7FAF9',
    text: '#363537',
    border: '#DDDDDD',
    surface: '#FFFFFF'
  },
  buttons: {
    primary: {
      background: '#363537',
      color: '#FFFFFF',
      hover: '#504e50',
    },
    secondary: {
      background: 'rgba(255, 255, 255, 0.7)',
      color: '#363537',
      hover: 'rgba(255, 255, 255, 1)',
    },
    add: {
      background: '#F7D02C',
      color: '#363537',
      hover: '#f8d852',
    },
    cta: {
      background: '#F7D02C',
      color: '#363537',
      hover: '#f8d852',
    },
    danger: {
      background: '#e74c3c',
      color: '#ffffff',
      hover: '#c0392b',
    },
  },
};

export const darkTheme = {
  body: '#363537',
  text: '#FAFAFA',
  toggleBorder: '#6B8096',
  background: '#121212',
  cardBg: '#1E1E1E',
  primary: '#3498db',
  secondary: '#2ecc71',
  danger: '#e74c3c',
  borderRadius: {
    s: '4px',
    m: '8px',
    l: '12px',
    xl: '20px'
  },
  shadows: {
    small: '0 2px 4px rgba(0,0,0,0.25)',
    medium: '0 4px 8px rgba(0,0,0,0.3)',
    large: '0 8px 16px rgba(0,0,0,0.35)'
  },
  colors: {
    background: '#121212',
    text: '#FAFAFA',
    border: '#444444',
    surface: '#1E1E1E'
  },
  buttons: {
    primary: {
      background: '#E0E0E0',
      color: '#121212',
      hover: '#FFFFFF',
    },
    secondary: {
      background: 'rgba(54, 53, 55, 0.7)',
      color: '#FAFAFA',
      hover: 'rgba(54, 53, 55, 1)',
    },
    add: {
      background: '#F7D02C',
      color: '#363537',
      hover: '#f8d852',
    },
    cta: {
      background: '#F7D02C',
      color: '#363537',
      hover: '#f8d852',
    },
    danger: {
      background: '#e74c3c',
      color: '#ffffff',
      hover: '#c0392b',
    },
  },
};
