// i18n
import "src/locales/i18n";
// scrollbar
import "simplebar-react/dist/simplebar.min.css";

// image
import "react-lazy-load-image-component/src/effects/blur.css";

// ----------------------------------------------------------------------

// locales
import { LocalizationProvider } from "src/locales";
// theme
import ThemeProvider from "src/theme";
import { primaryFont } from "src/theme/typography";
// components
import ProgressBar from "src/components/progress-bar";
import { MotionLazy } from "src/components/animate/motion-lazy";
import { SettingsProvider, SettingsDrawer } from "src/components/settings";

// ----------------------------------------------------------------------

export const metadata = {
  title: "Sottocasa Michele portfolio",
  description: "Sottocasa Michele's personal portfolio",
  keywords:
    "web developer, sottocasa michele, portfolio, web3 developer, frontend developer, developer",
  themeColor: "#000000",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  icons: [
    {
      rel: "icon",
      url: "/favicon/favicon.ico",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      url: "/favicon/favicon-16x16.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      url: "/favicon/favicon-32x32.png",
    },
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      url: "/favicon/apple-touch-icon.png",
    },
  ],
};

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <html
      lang="en"
      className={`${primaryFont.className} scroll-smooth`}
      style={{ scrollBehavior: "smooth" }}
    >
      <body>
        <LocalizationProvider>
          <SettingsProvider
            defaultSettings={{
              themeMode: "light", // 'light' | 'dark'
              themeDirection: "ltr", //  'rtl' | 'ltr'
              themeContrast: "default", // 'default' | 'bold'
              themeLayout: "vertical", // 'vertical' | 'horizontal' | 'mini'
              themeColorPresets: "default", // 'default' | 'cyan' | 'purple' | 'blue' | 'orange' | 'red'
              themeStretch: false,
            }}
          >
            <ThemeProvider>
              <MotionLazy>
                <SettingsDrawer />
                <ProgressBar />
                {children}
              </MotionLazy>
            </ThemeProvider>
          </SettingsProvider>
        </LocalizationProvider>
      </body>
    </html>
  );
}
