import { useConfig } from "nextra-theme-docs";

export default {
  logo: (
    <img
      src="https://res.cloudinary.com/luvely/image/upload/v1712853154/NavbarLogo1_kit76u.png"
      alt="Logo"
      style={{
        width: "100%",
        height: "30px",
      }}
    />
  ),
  project: {
    link: "https://github.com/hokagedemehin/swimlink-web-docs",
  },
  docsRepositoryBase: "https://github.com/hokagedemehin/swimlink-web-docs",
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content="Swimlink Web Documentation" />
      <meta name="og:title" content="Swimlink Web Documentation" />
      <link
        rel="icon"
        href="https://res.cloudinary.com/luvely/image/upload/v1718846086/favicon_yykon2.ico"
      />
    </>
  ),
  navigation: {
    prev: true,
    next: true,
  },
  // gitTimestamp: () => {
  //   const { gitTimestamp } = useConfig();
  //   console.log("gitTimestamp :>> ", gitTimestamp);
  //   return (
  //     <div>
  //       <p>Last Updated: {gitTimestamp}</p>
  //     </div>
  //   );
  // },
  footer: {
    text: (
      <>
        <div className="">
          Copyright {new Date().getFullYear()} ©{" "}
          <a
            href="https://admin-stg-f987f871eac0.herokuapp.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Swimlink
          </a>
        </div>
        {/* <div>
          <a href="/" target="_blank" rel="noopener noreferrer">
            Swimlink Web Documentation
          </a>
        </div> */}
      </>
    ),
  },
};
