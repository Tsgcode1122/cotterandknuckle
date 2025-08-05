// ColorComponent.js

export const Colors = {
  primaryBlue: "#0166FF",
  deepBlue: "#0B2C6B",
  softBlue: "#E4E7FF",
  lightBlue: "#F2F7FF",
  brightBlue: "#2866FF",
  yellow: "#FBCB01",
  purple: "#7943BA",
  white: "#FFFFFF",
  black: "#000000",
  lightCream: "#F6F2F2",
  gray: "#6B7280",
};

export const Shadows = {
  blueShadow: `
    0 0 3px #0166FF,
    0 0 6px #0B2C6B,
    0 0 9px #2866FF
  `,
  yellowShadow: `
    0 0 2px #FBCB01,
    0 0 4px #FBCB01
  `,
};

export const Gradients = {
  blueGradient: `
    linear-gradient(
      135deg,
      #0166FF 0%,
      #2866FF 50%,
      #0B2C6B 100%
    )
  `,
  purpleToYellow: `
    linear-gradient(
      135deg,
      #7943BA 0%,
      #FBCB01 100%
    )
  `,
  blueToSoftBlue: `
    linear-gradient(
      180deg,
      #0166FF 0%,
      #E4E7FF 100%
    )
  `,
};

export default { Colors, Shadows, Gradients };
