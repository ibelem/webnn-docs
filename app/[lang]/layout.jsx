import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Banner, Head } from 'nextra/components'
import { getDictionary, getDirection } from '../_dictionaries/get-dictionary'
import { getPageMap } from 'nextra/page-map'
import { GoogleAnalytics } from '@next/third-parties/google'
import 'nextra-theme-docs/style.css'
import '../style.css'

export const metadata = {
  description:
    'WebNN doc, WebNN documentation, WebNN Neural Network API documentation site.',
  title: {
    absolute: 'WebNN',
    template: '%s | WebNN Docs - Web Neural Network API'
  },
  metadataBase: new URL('https://webnn.io'),
  openGraph: {
    images:
      'https://webnn.io/android-chrome-512x512.png'
  },
  twitter: {
    site: '@ibelem'
  },
  appleWebApp: {
    title: 'WebNN Documentation'
  },
  other: {
    'msapplication-TileColor': '#fff'
  }
}
 
const navbar = (
  <Navbar
    projectLink="https://github.com/ibelem/webnn-docs"
    logo={
      <>
      <svg className="logo"
        height="36"
        viewBox="0 0 734 146"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M269.016 103.288C273.283 103.288 276.739 104.589 279.384 107.192C282.029 109.752 283.352 113.464 283.352 118.328V139H277.592V119.16C277.592 115.661 276.717 112.995 274.968 111.16C273.219 109.283 270.829 108.344 267.8 108.344C264.728 108.344 262.275 109.304 260.44 111.224C258.648 113.144 257.752 115.939 257.752 119.608V139H251.928V103.928H257.752V108.92C258.904 107.128 260.461 105.741 262.424 104.76C264.429 103.779 266.627 103.288 269.016 103.288ZM324.226 120.12C324.226 121.229 324.162 122.403 324.034 123.64H296.002C296.215 127.096 297.388 129.805 299.522 131.768C301.698 133.688 304.322 134.648 307.394 134.648C309.911 134.648 312.002 134.072 313.666 132.92C315.372 131.725 316.567 130.147 317.25 128.184H323.522C322.583 131.555 320.706 134.307 317.89 136.44C315.074 138.531 311.575 139.576 307.394 139.576C304.066 139.576 301.079 138.829 298.434 137.336C295.831 135.843 293.783 133.731 292.29 131C290.796 128.227 290.05 125.027 290.05 121.4C290.05 117.773 290.775 114.595 292.226 111.864C293.676 109.133 295.703 107.043 298.306 105.592C300.951 104.099 303.98 103.352 307.394 103.352C310.722 103.352 313.666 104.077 316.226 105.528C318.786 106.979 320.748 108.984 322.114 111.544C323.522 114.061 324.226 116.92 324.226 120.12ZM318.21 118.904C318.21 116.685 317.719 114.787 316.738 113.208C315.756 111.587 314.412 110.371 312.706 109.56C311.042 108.707 309.186 108.28 307.138 108.28C304.194 108.28 301.676 109.219 299.586 111.096C297.538 112.973 296.364 115.576 296.066 118.904H318.21ZM362.377 103.928V139H356.553V133.816C355.444 135.608 353.886 137.016 351.881 138.04C349.918 139.021 347.742 139.512 345.353 139.512C342.622 139.512 340.169 138.957 337.993 137.848C335.817 136.696 334.089 134.989 332.809 132.728C331.572 130.467 330.953 127.715 330.953 124.472V103.928H336.713V123.704C336.713 127.16 337.588 129.827 339.337 131.704C341.086 133.539 343.476 134.456 346.505 134.456C349.62 134.456 352.073 133.496 353.865 131.576C355.657 129.656 356.553 126.861 356.553 123.192V103.928H362.377ZM377.395 109.624C378.419 107.619 379.869 106.061 381.747 104.952C383.667 103.843 385.992 103.288 388.723 103.288V109.304H387.187C380.659 109.304 377.395 112.845 377.395 119.928V139H371.571V103.928H377.395V109.624ZM392.63 121.336C392.63 117.752 393.355 114.616 394.806 111.928C396.256 109.197 398.24 107.085 400.758 105.592C403.318 104.099 406.155 103.352 409.27 103.352C412.342 103.352 415.008 104.013 417.27 105.336C419.531 106.659 421.216 108.323 422.326 110.328V103.928H428.214V139H422.326V132.472C421.174 134.52 419.446 136.227 417.142 137.592C414.88 138.915 412.235 139.576 409.206 139.576C406.091 139.576 403.275 138.808 400.758 137.272C398.24 135.736 396.256 133.581 394.806 130.808C393.355 128.035 392.63 124.877 392.63 121.336ZM422.326 121.4C422.326 118.755 421.792 116.451 420.726 114.488C419.659 112.525 418.208 111.032 416.374 110.008C414.582 108.941 412.598 108.408 410.422 108.408C408.246 108.408 406.262 108.92 404.47 109.944C402.678 110.968 401.248 112.461 400.182 114.424C399.115 116.387 398.582 118.691 398.582 121.336C398.582 124.024 399.115 126.371 400.182 128.376C401.248 130.339 402.678 131.853 404.47 132.92C406.262 133.944 408.246 134.456 410.422 134.456C412.598 134.456 414.582 133.944 416.374 132.92C418.208 131.853 419.659 130.339 420.726 128.376C421.792 126.371 422.326 124.045 422.326 121.4ZM443.24 91.64V139H437.416V91.64H443.24ZM486.036 103.288C490.303 103.288 493.759 104.589 496.404 107.192C499.049 109.752 500.372 113.464 500.372 118.328V139H494.612V119.16C494.612 115.661 493.737 112.995 491.988 111.16C490.239 109.283 487.849 108.344 484.82 108.344C481.748 108.344 479.295 109.304 477.46 111.224C475.668 113.144 474.772 115.939 474.772 119.608V139H468.948V103.928H474.772V108.92C475.924 107.128 477.481 105.741 479.444 104.76C481.449 103.779 483.647 103.288 486.036 103.288ZM541.246 120.12C541.246 121.229 541.182 122.403 541.054 123.64H513.022C513.235 127.096 514.408 129.805 516.542 131.768C518.718 133.688 521.342 134.648 524.414 134.648C526.931 134.648 529.022 134.072 530.686 132.92C532.392 131.725 533.587 130.147 534.27 128.184H540.542C539.603 131.555 537.726 134.307 534.91 136.44C532.094 138.531 528.595 139.576 524.414 139.576C521.086 139.576 518.099 138.829 515.454 137.336C512.851 135.843 510.803 133.731 509.31 131C507.816 128.227 507.07 125.027 507.07 121.4C507.07 117.773 507.795 114.595 509.246 111.864C510.696 109.133 512.723 107.043 515.326 105.592C517.971 104.099 521 103.352 524.414 103.352C527.742 103.352 530.686 104.077 533.246 105.528C535.806 106.979 537.768 108.984 539.134 111.544C540.542 114.061 541.246 116.92 541.246 120.12ZM535.23 118.904C535.23 116.685 534.739 114.787 533.758 113.208C532.776 111.587 531.432 110.371 529.726 109.56C528.062 108.707 526.206 108.28 524.158 108.28C521.214 108.28 518.696 109.219 516.606 111.096C514.558 112.973 513.384 115.576 513.086 118.904H535.23ZM555.397 108.728V129.4C555.397 131.107 555.76 132.323 556.485 133.048C557.21 133.731 558.469 134.072 560.261 134.072H564.549V139H559.301C556.058 139 553.626 138.253 552.005 136.76C550.384 135.267 549.573 132.813 549.573 129.4V108.728H545.029V103.928H549.573V95.096H555.397V103.928H564.549V108.728H555.397ZM617.686 103.928L606.742 139H600.726L592.278 111.16L583.83 139H577.814L566.806 103.928H572.758L580.822 133.368L589.526 103.928H595.478L603.99 133.432L611.926 103.928H617.686ZM638.121 139.576C634.836 139.576 631.849 138.829 629.161 137.336C626.516 135.843 624.425 133.731 622.889 131C621.396 128.227 620.649 125.027 620.649 121.4C620.649 117.816 621.417 114.659 622.953 111.928C624.532 109.155 626.665 107.043 629.353 105.592C632.041 104.099 635.049 103.352 638.377 103.352C641.705 103.352 644.713 104.099 647.401 105.592C650.089 107.043 652.201 109.133 653.737 111.864C655.316 114.595 656.105 117.773 656.105 121.4C656.105 125.027 655.295 128.227 653.673 131C652.095 133.731 649.94 135.843 647.209 137.336C644.479 138.829 641.449 139.576 638.121 139.576ZM638.121 134.456C640.212 134.456 642.175 133.965 644.009 132.984C645.844 132.003 647.316 130.531 648.425 128.568C649.577 126.605 650.153 124.216 650.153 121.4C650.153 118.584 649.599 116.195 648.489 114.232C647.38 112.269 645.929 110.819 644.137 109.88C642.345 108.899 640.404 108.408 638.313 108.408C636.18 108.408 634.217 108.899 632.425 109.88C630.676 110.819 629.268 112.269 628.201 114.232C627.135 116.195 626.601 118.584 626.601 121.4C626.601 124.259 627.113 126.669 628.137 128.632C629.204 130.595 630.612 132.067 632.361 133.048C634.111 133.987 636.031 134.456 638.121 134.456ZM668.947 109.624C669.971 107.619 671.422 106.061 673.299 104.952C675.219 103.843 677.544 103.288 680.275 103.288V109.304H678.739C672.211 109.304 668.947 112.845 668.947 119.928V139H663.123V103.928H668.947V109.624ZM705.942 139L692.182 123.512V139H686.358V91.64H692.182V119.48L705.686 103.928H713.814L697.302 121.4L713.878 139H705.942Z"
          className="c1"
        />
        <path
          d="M233 18C233 12.4772 237.477 8 243 8H388C393.523 8 398 12.4772 398 18V76C398 81.5228 393.523 86 388 86H243C237.477 86 233 81.5228 233 76V18Z"
          className="c2_a"
        />
        <path
          d="M300.069 33.928L289.125 69H283.109L274.661 41.16L266.213 69H260.197L249.189 33.928H255.141L263.205 63.368L271.909 33.928H277.861L286.373 63.432L294.309 33.928H300.069ZM337.209 50.12C337.209 51.2293 337.145 52.4027 337.017 53.64H308.985C309.199 57.096 310.372 59.8053 312.505 61.768C314.681 63.688 317.305 64.648 320.377 64.648C322.895 64.648 324.985 64.072 326.649 62.92C328.356 61.7253 329.551 60.1467 330.233 58.184H336.505C335.567 61.5547 333.689 64.3067 330.873 66.44C328.057 68.5307 324.559 69.576 320.377 69.576C317.049 69.576 314.063 68.8293 311.417 67.336C308.815 65.8427 306.767 63.7307 305.273 61C303.78 58.2267 303.033 55.0267 303.033 51.4C303.033 47.7733 303.759 44.5947 305.209 41.864C306.66 39.1333 308.687 37.0427 311.289 35.592C313.935 34.0987 316.964 33.352 320.377 33.352C323.705 33.352 326.649 34.0773 329.209 35.528C331.769 36.9787 333.732 38.984 335.097 41.544C336.505 44.0613 337.209 46.92 337.209 50.12ZM331.193 48.904C331.193 46.6853 330.703 44.7867 329.721 43.208C328.74 41.5867 327.396 40.3707 325.689 39.56C324.025 38.7067 322.169 38.28 320.121 38.28C317.177 38.28 314.66 39.2187 312.569 41.096C310.521 42.9733 309.348 45.576 309.049 48.904H331.193ZM350.081 40.456C351.275 38.3653 353.025 36.6587 355.329 35.336C357.633 34.0133 360.257 33.352 363.201 33.352C366.358 33.352 369.195 34.0987 371.713 35.592C374.23 37.0853 376.214 39.1973 377.665 41.928C379.115 44.616 379.841 47.752 379.841 51.336C379.841 54.8773 379.115 58.0347 377.665 60.808C376.214 63.5813 374.209 65.736 371.649 67.272C369.131 68.808 366.315 69.576 363.201 69.576C360.171 69.576 357.505 68.9147 355.201 67.592C352.939 66.2693 351.233 64.584 350.081 62.536V69H344.257V21.64H350.081V40.456ZM373.889 51.336C373.889 48.6907 373.355 46.3867 372.289 44.424C371.222 42.4613 369.771 40.968 367.937 39.944C366.145 38.92 364.161 38.408 361.985 38.408C359.851 38.408 357.867 38.9413 356.033 40.008C354.241 41.032 352.79 42.5467 351.681 44.552C350.614 46.5147 350.081 48.7973 350.081 51.4C350.081 54.0453 350.614 56.3707 351.681 58.376C352.79 60.3387 354.241 61.8533 356.033 62.92C357.867 63.944 359.851 64.456 361.985 64.456C364.161 64.456 366.145 63.944 367.937 62.92C369.771 61.8533 371.222 60.3387 372.289 58.376C373.355 56.3707 373.889 54.024 373.889 51.336Z"
          className="w"
        />
        <path
          d="M15 66L33 45"
          className="c2"
          strokeWidth="6"
          strokeLinecap="round"
        />
        <path
          d="M63 59L44 44"
          className="c2"
          strokeWidth="6"
          strokeLinecap="round"
        />
        <path
          d="M77 61L103 55"
          className="c2"
          strokeWidth="6"
          strokeLinecap="round"
        />
        <path
          d="M126 16L119 39"
          className="c2"
          strokeWidth="6"
          strokeLinecap="round"
        />
        <path
          d="M151 41L127 47"
          className="c2"
          strokeWidth="6"
          strokeLinecap="round"
        />
        <path
          d="M161 50L156 85"
          className="c2"
          strokeWidth="6"
          strokeLinecap="round"
        />
        <path
          d="M163 38L193 83"
          className="c2"
          strokeWidth="6"
          strokeLinecap="round"
        />
        <path
          d="M162 92L188 92"
          className="c2"
          strokeWidth="6"
          strokeLinecap="round"
        />
        <path
          d="M148 98L119 119"
          className="c2"
          strokeWidth="6"
          strokeLinecap="round"
        />
        <path
          d="M101 90L155 132"
          className="c2"
          strokeWidth="6"
          strokeLinecap="round"
        />
        <path
          d="M183 126L155 132"
          className="c2"
          strokeWidth="6"
          strokeLinecap="round"
        />
        <path
          d="M194 117L197 105"
          className="c2"
          strokeWidth="6"
          strokeLinecap="round"
        />
        <path
          d="M195 131L203 142"
          className="c2"
          strokeWidth="6"
          strokeLinecap="round"
        />
        <path
          d="M123 60L149 87"
          className="c2"
          strokeWidth="6"
          strokeLinecap="round"
        />
        <path
          d="M67 71L55 103"
          className="c2"
          strokeWidth="6"
          strokeLinecap="round"
        />
        <path
          d="M27 72L87 88"
          className="c2"
          strokeWidth="6"
          strokeLinecap="round"
        />
        <path
          d="M79 36L97 79"
          className="c2"
          strokeWidth="6"
          strokeLinecap="round"
        />
        <path
          d="M120 11L88 21"
          className="c2"
          strokeWidth="6"
          strokeLinecap="round"
        />
        <circle cx="38.5" cy="38.5" r="6.5" className="c2" strokeWidth="4" />
        <circle cx="69.5" cy="63.5" r="6.5" className="c2" strokeWidth="4" />
        <circle cx="127.5" cy="8.5" r="6.5" className="c2" strokeWidth="4" />
        <circle
          cx="154.5"
          cy="92.5"
          r="6.5"
          className="c2"
          strokeWidth="4"
        />
        <circle
          cx="112.5"
          cy="124.5"
          r="6.5"
          className="c2"
          strokeWidth="4"
        />
        <circle
          cx="190.5"
          cy="124.5"
          r="6.5"
          className="c2"
          strokeWidth="4"
        />
        <circle cx="200" cy="93" r="10" className="c2" strokeWidth="6" />
        <circle cx="115" cy="51" r="10" className="c2" strokeWidth="6" />
        <circle cx="15" cy="68" r="15" className="c1" />
        <circle cx="75" cy="25" r="15" className="c1" />
        <circle cx="163" cy="38" r="15" className="c1" />
        <circle cx="101" cy="90" r="15" className="c1" />
        <circle cx="156" cy="131" r="15" className="c1" />
      </svg>
    </>
    }
  />
)
const footer = <Footer>
  <div className="title w-full text-sm">&copy;{new Date().getFullYear()} Web Neural Network API</div> 
  </Footer>
 
export default async function RootLayout({ children, params }) {
  const { lang } = await params;
  const direction = getDirection(lang);
  const dictionary = await getDictionary(lang);
  let pageMap = await getPageMap(`/${lang}`);
  // console.log("dictionary: " + dictionary.logo.title);
  return (
    <html lang={lang} dir={direction} suppressHydrationWarning>
      <Head
      // ... Your additional head options
      >
        {/* Your additional tags should be passed as `children` of `<Head>` element */}
      </Head>
      <body>
        <Layout
          banner={
            <Banner storageKey="webnn-announcement">
              <div>
                <div className="snow">
                  <span></span><span></span><span></span><span></span><span></span>
                </div>
                <a href="https://webnn.io">
                  {dictionary.banner}
                </a>
              </div>
            </Banner>
          }
          navbar={navbar}
          pageMap={pageMap}
          docsRepositoryBase="https://github.com/ibelem/webnn-docs/tree/main"
          i18n={[
            { locale: 'en', name: 'English' },
            { locale: 'zh', name: '简体中文' }
          ]}
          sidebar={{
            defaultMenuCollapseLevel: 1,
            autoCollapse: true
          }}
          footer={footer}
          navigation={{
            prev: true,
            next: true
          }}
          editLink={dictionary.editPage}
          feedback = {
            {
              content: dictionary.feedbackContent
            }
          }
          themeSwitch={{
            dark: dictionary.dark,
            light: dictionary.light,
            system: dictionary.system
          }}
          toc={{
            backToTop: dictionary.backToTop,
          }}
          // ... Your additional layout options
        >
          {children}
        </Layout>
      </body>
      <GoogleAnalytics gaId="G-0MBRQQNHVC" />
    </html>
  )
}