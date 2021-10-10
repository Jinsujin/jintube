// const deviceSizes = {
//   mobile: "375px",
//   tablet: "768px",
//   laptop: "1024px",
// };

// youtube
// 496 - 1 mobile
// 872 - 2 iPads, Tablets
//1128 - 3 small screen, laptop
// extra large screens, tv
const deviceSizes = {
  mobile: "496px",
  tablet: "872px",
  laptop: "1128px",
};

const device = {
  mobile: `screen and (max-width: ${deviceSizes.mobile})`,
  tablet: `screen and (max-width: ${deviceSizes.tablet})`,
  laptop: `screen and (max-width: ${deviceSizes.laptop})`,
};

const theme = {
  device,
};

export default theme;

/**
 * 사용 예
 @media ${({ theme }) => theme.device.tablet} {
  flex-direction: column;
  font-size: ${({ theme }) => theme.fontSizes.paragraph};
}
 */
