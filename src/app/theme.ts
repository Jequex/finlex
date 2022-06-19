export interface Theme {
  name: string;
  properties: any;
}

export const light: Theme = {
  name: "light",
  properties: {
    "--light": "#eeeeee",
    "--danger": "#ff0000",
    "--secondary": "#7e7e7e",
    "--dark": "#000000",
    "--white": "#ffffff"
  }
};

export const dark: Theme = {
  name: "dark",
  properties: {
    "--light": "#3d2e2e",
    "--danger": "#e5c8c8",
    "--secondary": "#9fb979",
    "--dark": "#ffffff",
    "--white": "#000000"
  }
};
