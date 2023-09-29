export const lineHeightGrowthVariants = {
  initial: {
    height: 0,
  },
  animate: ({
    lineHeight,
    duration,
    delay,
  }: {
    lineHeight: string;
    duration: number;
    delay: number;
  }) => ({
    height: lineHeight,
    transition: {
      type: 'tween',
      duration: duration ?? 1,
      delay: delay,
    },
  }),
};

export const lineWidthGrowthVariants = {
  initial: {
    width: 0,
  },
  animate: ({
    lineWidth,
    duration,
    delay,
  }: {
    lineWidth: string;
    duration: number;
    delay: number;
  }) => ({
    width: lineWidth,
    transition: {
      type: 'tween',
      duration: duration ?? 0.5,
      delay: delay,
    },
  }),
};