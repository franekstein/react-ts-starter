declare module '*.svg';
declare module '*.png';
declare module '*.jpg';

declare module '*.css' {
  const styles: string;
  export = styles;
}

declare module '*.svg' {
  const value: string;
  export default value;
}

declare module '*.png' {
  const value: string;
  export default value;
}

declare module '*.scss' {
  const styles: { [className: string]: string };
  export default styles;
}
