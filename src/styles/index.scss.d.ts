declare namespace IndexScssNamespace {
  export interface IIndexScss {
    'first-letter': string;
    hr: string;
    indented: string;
    lead: string;
  }
}

declare const IndexScssModule: IndexScssNamespace.IIndexScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: IndexScssNamespace.IIndexScss;
};

export = IndexScssModule;
