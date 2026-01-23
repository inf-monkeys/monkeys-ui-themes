'use strict';

var React = require('react');
var jsxRuntime = require('react/jsx-runtime');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefault(React);

// src/registry/index.ts
var registries = {};
function registerTheme(themeId, components, config) {
  registries[themeId] = { ...registries[themeId], ...components };
  if (config) {
    ({ id: themeId, ...config });
  }
}
var BSD_CONFIG = {
  logo: "https://inf-monkeys.oss-cn-beijing.aliyuncs.com/monkeys-assets/bsd/bsd.ai.svg",
  backgroundImage: "https://inf-monkeys.oss-cn-beijing.aliyuncs.com/monkeys-assets/bsd/background.svg",
  sloganImage: "https://inf-monkeys.oss-cn-beijing.aliyuncs.com/monkeys-assets/bsd/%E5%B1%B1%E5%B7%9D%E5%88%B0%E6%9E%81%E5%9C%B0.svg",
  primaryColor: "rgba(40, 82, 173, 1)",
  borderRadius: 20,
  icons: {
    news: "https://inf-monkeys.oss-cn-beijing.aliyuncs.com/monkeys-assets/bsd/%E5%89%8D%E6%B2%BF%E8%B5%84%E8%AE%AF.svg",
    agent: "https://inf-monkeys.oss-cn-beijing.aliyuncs.com/monkeys-assets/bsd/%E8%AE%BE%E8%AE%A1%E6%99%BA%E8%83%BD%E4%BD%93.png",
    arrowDefault: "https://inf-monkeys.oss-cn-beijing.aliyuncs.com/monkeys-assets/bsd/%E7%AE%AD%E5%A4%B42.svg",
    arrowHover: "https://inf-monkeys.oss-cn-beijing.aliyuncs.com/monkeys-assets/bsd/%E7%AE%AD%E5%A4%B41.svg"
  }
};
var BSD_DEFAULT_FEATURE_CARDS = [
  {
    title: "\u7075\u611F\u751F\u6210",
    subtitle: "\u7531\u63D0\u793A\u8BCD\u751F\u6210\u8BBE\u8BA1\u7A3F",
    imageUrl: "https://inf-monkeys.oss-cn-beijing.aliyuncs.com/monkeys-assets/bsd/newhomecard1.png"
  },
  {
    title: "\u81EA\u7531\u88C2\u53D8",
    subtitle: "\u7531\u53C2\u8003\u56FE\u7247\u548C\u63D0\u793A\u8BCD\u751F\u6210\u8BBE\u8BA1\u7A3F",
    imageUrl: "https://inf-monkeys.oss-cn-beijing.aliyuncs.com/monkeys-assets/bsd/newhomecard2.png"
  },
  {
    title: "\u98CE\u683C\u878D\u5408",
    subtitle: "\u878D\u5408\u591A\u7C7B\u578B\u53C2\u8003\u56FE\u7247\u751F\u6210\u8BBE\u8BA1\u56FE",
    imageUrl: "https://inf-monkeys.oss-cn-beijing.aliyuncs.com/monkeys-assets/bsd/newhomecard3.png"
  },
  {
    title: "\u5C40\u90E8\u4FEE\u6539",
    subtitle: "\u5212\u5B9A\u9009\u533A\uFF0C\u9009\u53D6\u5185\u8BBE\u8BA1\u4FEE\u6539",
    imageUrl: "https://inf-monkeys.oss-cn-beijing.aliyuncs.com/monkeys-assets/bsd/newhomecard4.png"
  },
  {
    title: "\u7EBF\u7A3F\u6210\u8863",
    subtitle: "\u53C2\u8003\u7EBF\u7A3F\u56FE\u751F\u6210\u8BBE\u8BA1\u7A3F",
    imageUrl: "https://inf-monkeys.oss-cn-beijing.aliyuncs.com/monkeys-assets/bsd/newhomecard5.png"
  },
  {
    title: "\u66F4\u591AAI\u5DE5\u5177",
    subtitle: "\u8BBF\u95EE\u4F60\u7684\u8BBE\u8BA1\u5DE5\u5177\u7BB1",
    imageUrl: "https://inf-monkeys.oss-cn-beijing.aliyuncs.com/monkeys-assets/bsd/newhomecard6.png",
    isToolbox: true
  }
];
var FeatureCard = ({ title, subtitle, imageUrl, onClick }) => {
  const [isHovered, setIsHovered] = React.useState(false);
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    {
      onClick,
      style: {
        flex: "1 1 0",
        minWidth: "clamp(12rem, 15vw, 28rem)",
        aspectRatio: "273 / 366",
        borderRadius: "clamp(15px, 1.5vw, 20px)",
        background: "linear-gradient(168deg, rgba(23, 23, 23, 0) 35%, rgba(39, 77, 189, 0.715) 72%, #2D62FF 87%)",
        border: "1px solid rgba(18, 220, 255, 0.6)",
        backdropFilter: "blur(32px)",
        cursor: "pointer",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        transition: "transform 0.3s",
        transform: isHovered ? "scale(1.05)" : "scale(1)"
      },
      onMouseEnter: () => setIsHovered(true),
      onMouseLeave: () => setIsHovered(false),
      children: /* @__PURE__ */ jsxRuntime.jsxs("div", { style: { position: "relative", height: "100%", width: "100%" }, children: [
        /* @__PURE__ */ jsxRuntime.jsx(
          "div",
          {
            style: {
              position: "absolute",
              inset: 0,
              background: "rgba(0, 0, 0, 0.3)",
              zIndex: 1,
              transition: "all 0.3s",
              opacity: isHovered ? 0 : 1
            }
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(
          "img",
          {
            src: imageUrl,
            alt: title,
            style: {
              position: "absolute",
              mixBlendMode: "screen",
              opacity: isHovered ? 0.9 : 0.6,
              width: "85%",
              height: "85%",
              objectFit: "cover",
              objectPosition: "left top",
              right: 0,
              bottom: 0,
              zIndex: 2,
              transition: "all 0.3s"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsxs(
          "div",
          {
            style: {
              position: "absolute",
              left: 0,
              right: 0,
              top: "clamp(10rem, 60%, 20rem)",
              padding: "0 clamp(0.5rem, 20%, 1rem)",
              zIndex: 3
            },
            children: [
              /* @__PURE__ */ jsxRuntime.jsx(
                "h3",
                {
                  style: {
                    fontSize: "clamp(1rem, 2vw, 1.5rem)",
                    fontWeight: 600,
                    textAlign: "left",
                    background: "linear-gradient(270deg, #9AB3FF 0%, rgba(180, 169, 245, 0) 100%), #FFFFFF",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    margin: 0,
                    marginBottom: "clamp(0.25rem, 0.5vh, 0.5rem)",
                    lineHeight: 1.2
                  },
                  children: title
                }
              ),
              /* @__PURE__ */ jsxRuntime.jsx(
                "p",
                {
                  style: {
                    fontSize: "clamp(0.75rem, 1.2vw, 1rem)",
                    textAlign: "left",
                    background: "linear-gradient(270deg, #9AB3FF 0%, rgba(180, 169, 245, 0) 100%), #FFFFFF",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    opacity: 0.8,
                    margin: 0,
                    lineHeight: 1.2,
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden"
                  },
                  children: subtitle
                }
              )
            ]
          }
        )
      ] })
    }
  );
};
var UserIcon = ({ size = 24 }) => /* @__PURE__ */ jsxRuntime.jsxs("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: [
  /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" }),
  /* @__PURE__ */ jsxRuntime.jsx("circle", { cx: "12", cy: "7", r: "4" })
] });
var SparklesIcon = ({ size = 24 }) => /* @__PURE__ */ jsxRuntime.jsxs("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: [
  /* @__PURE__ */ jsxRuntime.jsx("path", { d: "m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" }),
  /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M5 3v4" }),
  /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M19 17v4" }),
  /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M3 5h4" }),
  /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M17 19h4" })
] });
function BsdLandingPage({
  isAuthenticated = false,
  user,
  featureCards = BSD_DEFAULT_FEATURE_CARDS,
  onEnterWorkbench,
  onLogin,
  onCardClick,
  className = "",
  style = {},
  i18n = {}
}) {
  const {
    enterWorkspace = "\u524D\u6CBF\u8D44\u8BAF",
    designAgent = "\u8BBE\u8BA1\u667A\u80FD\u4F53",
    tags = []
  } = i18n;
  const handleToWorkbench = () => {
    if (isAuthenticated) {
      onEnterWorkbench?.();
    } else {
      onLogin?.();
    }
  };
  const handleCardClick = (title, isToolbox) => {
    if (!isAuthenticated) {
      onLogin?.();
      return;
    }
    if (isToolbox) {
      if (onCardClick) {
        onCardClick("AI\u5DE5\u5177\u7BB1");
        return;
      }
      onEnterWorkbench?.();
    } else {
      onCardClick?.(title);
    }
  };
  const buttonBaseStyle = {
    height: "clamp(4rem, 5vh, 5rem)",
    width: "clamp(16rem, 18vw, 18.3rem)",
    padding: "0 clamp(1rem, 1.5vw, 1.5rem)",
    fontSize: "clamp(1.25rem, 1.5vw, 1.5rem)",
    fontWeight: 500,
    borderRadius: "clamp(12px, 1vw, 15px)",
    background: "linear-gradient(0deg, rgba(40, 82,173, 0.08), rgba(40, 82, 173,0.08)), #171717",
    boxShadow: "inset 4px 4px 8.7px 0px rgba(255, 255, 255, 0.25)",
    border: "1.5px solid rgba(255, 255, 255, 0.1)",
    cursor: "pointer",
    transition: "all 0.2s"
  };
  const handleButtonHover = (e, isHover) => {
    if (isHover) {
      e.currentTarget.style.background = "#03072D";
      e.currentTarget.style.border = "1.5px solid rgba(144, 166, 231, 0.8)";
      e.currentTarget.style.boxShadow = "inset 11px -12px 13.7px 0px rgba(144, 166, 231,0.5), 0 0 20px rgba(144, 166, 231, 0.6)";
      e.currentTarget.style.transform = "scale(1.05)";
    } else {
      e.currentTarget.style.background = "linear-gradient(0deg, rgba(40, 82,173, 0.08), rgba(40, 82, 173,0.08)), #171717";
      e.currentTarget.style.border = "1.5px solid rgba(255, 255, 255, 0.1)";
      e.currentTarget.style.boxShadow = "inset 4px 4px 8.7px 0px rgba(255, 255, 255, 0.25)";
      e.currentTarget.style.transform = "scale(1)";
    }
  };
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "div",
    {
      className,
      style: {
        position: "relative",
        minHeight: "100vh",
        width: "100%",
        overflow: "hidden",
        backgroundColor: "#000",
        ...style
      },
      children: [
        /* @__PURE__ */ jsxRuntime.jsxs(
          "header",
          {
            style: {
              position: "relative",
              zIndex: 30,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
              backgroundColor: "rgba(0, 0, 0, 0.8)",
              backdropFilter: "blur(4px)",
              padding: "clamp(1rem, 2vh, 2.5rem) clamp(1rem, 2vw, 4rem)"
            },
            children: [
              /* @__PURE__ */ jsxRuntime.jsx("div", { style: { display: "flex", alignItems: "center" }, children: /* @__PURE__ */ jsxRuntime.jsx("img", { src: BSD_CONFIG.logo, alt: "BSD AI", style: { height: "clamp(4rem, 6vh, 6.25rem)", width: "auto" } }) }),
              isAuthenticated && user ? /* @__PURE__ */ jsxRuntime.jsx(
                "div",
                {
                  style: {
                    width: "clamp(2.5rem, 4vw, 3rem)",
                    height: "clamp(2.5rem, 4vw, 3rem)",
                    borderRadius: "50%",
                    background: "linear-gradient(to bottom right, #60a5fa, #a855f7)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    overflow: "hidden"
                  },
                  children: user.photo ? /* @__PURE__ */ jsxRuntime.jsx("img", { src: user.photo, alt: user.name || "", style: { width: "100%", height: "100%", objectFit: "cover", borderRadius: "50%" } }) : /* @__PURE__ */ jsxRuntime.jsx(UserIcon, { size: 20 })
                }
              ) : /* @__PURE__ */ jsxRuntime.jsx(
                "div",
                {
                  style: {
                    width: "clamp(2.5rem, 4vw, 3rem)",
                    height: "clamp(2.5rem, 4vw, 3rem)",
                    borderRadius: "50%",
                    background: "linear-gradient(to bottom right, #4ade80, #3b82f6)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#fff"
                  },
                  children: /* @__PURE__ */ jsxRuntime.jsx(SparklesIcon, { size: 20 })
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(
          "div",
          {
            style: {
              position: "absolute",
              left: 0,
              right: 0,
              bottom: 0,
              top: "clamp(4.5rem, 8vh, 7.5rem)",
              minHeight: "120vh",
              backgroundImage: `url('${BSD_CONFIG.backgroundImage}')`,
              backgroundSize: "cover",
              backgroundPosition: "center top",
              backgroundRepeat: "no-repeat"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(
          "div",
          {
            style: {
              position: "relative",
              zIndex: 10,
              display: "flex",
              minHeight: "calc(100vh - 4.5rem)",
              flexDirection: "column",
              alignItems: "center",
              padding: "0 1rem 2rem"
            },
            children: /* @__PURE__ */ jsxRuntime.jsxs(
              "div",
              {
                style: {
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  marginTop: "clamp(1.5rem, 6vh, 4.5rem)"
                },
                children: [
                  /* @__PURE__ */ jsxRuntime.jsx("div", { style: { marginBottom: "clamp(3rem, 8.5vh, 8.5rem)" }, children: /* @__PURE__ */ jsxRuntime.jsx(
                    "img",
                    {
                      src: BSD_CONFIG.sloganImage,
                      alt: "\u4ECE\u5C71\u5DDD\u5230\u6781\u5730\u7684\u98CE\u683C\u6307\u5357",
                      style: { height: "auto", width: "100%", maxWidth: "clamp(30rem, 60vw, 80rem)", padding: "0 1rem" }
                    }
                  ) }),
                  /* @__PURE__ */ jsxRuntime.jsx(
                    "div",
                    {
                      style: {
                        display: "flex",
                        flexWrap: "wrap",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#fff",
                        marginBottom: "clamp(2rem, 3vh, 3rem)",
                        gap: "clamp(0.75rem, 1.5vw, 1.5rem)"
                      },
                      children: tags.map((tag, index) => /* @__PURE__ */ jsxRuntime.jsxs(React__default.default.Fragment, { children: [
                        /* @__PURE__ */ jsxRuntime.jsx("span", { style: { fontSize: "clamp(1rem, 1.5vw, 1.25rem)" }, children: tag }),
                        index < tags.length - 1 && /* @__PURE__ */ jsxRuntime.jsx("span", { style: { color: "rgba(255,255,255,0.6)" }, children: "|" })
                      ] }, tag))
                    }
                  ),
                  /* @__PURE__ */ jsxRuntime.jsxs("div", { style: { display: "flex", flexDirection: "row", gap: "clamp(1.5rem, 3vw, 5rem)", flexWrap: "wrap", justifyContent: "center" }, children: [
                    /* @__PURE__ */ jsxRuntime.jsx(
                      "button",
                      {
                        onClick: handleToWorkbench,
                        style: buttonBaseStyle,
                        onMouseEnter: (e) => handleButtonHover(e, true),
                        onMouseLeave: (e) => handleButtonHover(e, false),
                        children: /* @__PURE__ */ jsxRuntime.jsxs(
                          "span",
                          {
                            style: {
                              display: "flex",
                              width: "100%",
                              alignItems: "center",
                              justifyContent: "space-between",
                              background: "linear-gradient(270deg, #9AB3FF 0%, rgba(180, 169, 245, 0) 100%), #FFFFFF",
                              WebkitBackgroundClip: "text",
                              WebkitTextFillColor: "transparent",
                              backgroundClip: "text"
                            },
                            children: [
                              /* @__PURE__ */ jsxRuntime.jsxs("span", { style: { display: "flex", alignItems: "center", gap: "clamp(0.5rem, 0.8vw, 0.8rem)" }, children: [
                                /* @__PURE__ */ jsxRuntime.jsx("img", { src: BSD_CONFIG.icons.news, alt: "", style: { width: "clamp(1rem, 1.5vw, 1.5rem)", height: "clamp(1rem, 1.5vw, 1.5rem)" } }),
                                enterWorkspace
                              ] }),
                              /* @__PURE__ */ jsxRuntime.jsx("img", { src: BSD_CONFIG.icons.arrowDefault, alt: "", style: { width: "clamp(1rem, 1.5vw, 1.5rem)", height: "clamp(1rem, 1.5vw, 1.5rem)" } })
                            ]
                          }
                        )
                      }
                    ),
                    /* @__PURE__ */ jsxRuntime.jsx(
                      "button",
                      {
                        onClick: handleToWorkbench,
                        style: buttonBaseStyle,
                        onMouseEnter: (e) => handleButtonHover(e, true),
                        onMouseLeave: (e) => handleButtonHover(e, false),
                        children: /* @__PURE__ */ jsxRuntime.jsxs(
                          "span",
                          {
                            style: {
                              display: "flex",
                              width: "100%",
                              alignItems: "center",
                              justifyContent: "space-between",
                              background: "linear-gradient(270deg, #9AB3FF 0%, rgba(180, 169, 245, 0) 100%), #FFFFFF",
                              WebkitBackgroundClip: "text",
                              WebkitTextFillColor: "transparent",
                              backgroundClip: "text"
                            },
                            children: [
                              /* @__PURE__ */ jsxRuntime.jsxs("span", { style: { display: "flex", alignItems: "center", gap: "clamp(0.5rem, 0.8vw, 0.8rem)" }, children: [
                                /* @__PURE__ */ jsxRuntime.jsx("img", { src: BSD_CONFIG.icons.agent, alt: "", style: { width: "clamp(1rem, 1.5vw, 1.5rem)", height: "clamp(1rem, 1.5vw, 1.5rem)" } }),
                                designAgent
                              ] }),
                              /* @__PURE__ */ jsxRuntime.jsx("img", { src: BSD_CONFIG.icons.arrowDefault, alt: "", style: { width: "clamp(1rem, 1.5vw, 1.5rem)", height: "clamp(1rem, 1.5vw, 1.5rem)" } })
                            ]
                          }
                        )
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntime.jsx(
                    "div",
                    {
                      style: {
                        display: "flex",
                        width: "100%",
                        alignItems: "flex-end",
                        justifyContent: "center",
                        padding: "0 1rem",
                        marginTop: "clamp(3.5rem, 8.5vh, 8.5rem)",
                        gap: "clamp(0.5rem, 0.8vw, 1rem)",
                        maxWidth: "clamp(60rem, 90vw, 110rem)"
                      },
                      children: featureCards.map((card) => /* @__PURE__ */ jsxRuntime.jsx(
                        FeatureCard,
                        {
                          title: card.title,
                          subtitle: card.subtitle,
                          imageUrl: card.imageUrl,
                          onClick: () => handleCardClick(card.title, card.isToolbox)
                        },
                        card.title
                      ))
                    }
                  )
                ]
              }
            )
          }
        )
      ]
    }
  );
}
var BSD_TOOLBOX_COVER_PREFIX = "https://bsd-ai-oss-prd.oss-cn-wulanchabu.aliyuncs.com/new-ai/%E5%B7%A5%E5%85%B7%E7%AE%B1/";
var BSD_DEFAULT_TOOLS = [
  { id: "inspiration", title: "\u7075\u611F\u751F\u6210", category: "text", description: "\u6839\u636E\u6587\u5B57\u63CF\u8FF0\u751F\u6210\u8BBE\u8BA1\u7075\u611F" },
  { id: "free-fission", title: "\u81EA\u7531\u88C2\u53D8", category: "image", description: "\u56FE\u7247\u591A\u6837\u5316\u88C2\u53D8\u751F\u6210" },
  { id: "style-fusion", title: "\u98CE\u683C\u878D\u5408", category: "image", description: "\u591A\u98CE\u683C\u667A\u80FD\u878D\u5408" },
  { id: "local-edit", title: "\u5C40\u90E8\u4FEE\u6539", category: "image", description: "\u5C40\u90E8\u533A\u57DF\u7CBE\u51C6\u4FEE\u6539" },
  { id: "line-to-garment", title: "\u7EBF\u7A3F\u6210\u8863", category: "image", description: "\u7EBF\u7A3F\u5FEB\u901F\u8F6C\u5316\u6210\u8863" },
  { id: "garment-on-model", title: "\u6210\u8863\u4E0A\u8EAB", category: "image", description: "\u670D\u88C5\u865A\u62DF\u8BD5\u7A7F" },
  { id: "light-effect", title: "\u5149\u5F71\u5927\u7247", category: "image", description: "\u4E13\u4E1A\u5149\u5F71\u6548\u679C" },
  { id: "atmosphere", title: "\u6C1B\u56F4\u56FE\u751F\u6210", category: "image", description: "\u6C1B\u56F4\u573A\u666F\u751F\u6210" },
  { id: "smart-outfit", title: "\u667A\u80FD\u7A7F\u642D", category: "image", description: "\u667A\u80FD\u642D\u914D\u63A8\u8350" },
  { id: "runway", title: "\u79C0\u573A\u6B3E\u751F\u6210", category: "image", description: "\u79C0\u573A\u98CE\u683C\u751F\u6210" }
];
function BsdToolboxPanel({
  className,
  style,
  tools = BSD_DEFAULT_TOOLS,
  onToolSelect
}) {
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "div",
    {
      className,
      style: {
        padding: 24,
        background: "linear-gradient(180deg, #1a1a2e 0%, #0f0f1a 100%)",
        borderRadius: 20,
        ...style
      },
      children: [
        /* @__PURE__ */ jsxRuntime.jsx("h2", { style: { color: "#fff", marginBottom: 24 }, children: "AI \u5DE5\u5177\u7BB1" }),
        /* @__PURE__ */ jsxRuntime.jsx(
          "div",
          {
            style: {
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))",
              gap: 16
            },
            children: tools.map((tool) => /* @__PURE__ */ jsxRuntime.jsxs(
              "div",
              {
                onClick: () => onToolSelect?.(tool.id),
                style: {
                  padding: 16,
                  borderRadius: 12,
                  background: "rgba(255,255,255,0.05)",
                  cursor: "pointer",
                  transition: "all 0.2s"
                },
                onMouseEnter: (e) => {
                  e.currentTarget.style.background = "rgba(40, 82, 173, 0.3)";
                },
                onMouseLeave: (e) => {
                  e.currentTarget.style.background = "rgba(255,255,255,0.05)";
                },
                children: [
                  /* @__PURE__ */ jsxRuntime.jsx(
                    "div",
                    {
                      style: {
                        width: "100%",
                        aspectRatio: "1",
                        borderRadius: 8,
                        marginBottom: 12,
                        background: `url(${BSD_TOOLBOX_COVER_PREFIX}${tool.id}.png) center/cover`,
                        backgroundColor: "rgba(40, 82, 173, 0.2)"
                      }
                    }
                  ),
                  /* @__PURE__ */ jsxRuntime.jsx("h4", { style: { color: "#fff", margin: 0 }, children: tool.title }),
                  tool.description && /* @__PURE__ */ jsxRuntime.jsx("p", { style: { color: "rgba(255,255,255,0.6)", margin: "4px 0 0", fontSize: 12 }, children: tool.description })
                ]
              },
              tool.id
            ))
          }
        )
      ]
    }
  );
}

// src/themes/bsd/index.ts
registerTheme(
  "bsd",
  {
    "landing-page": BsdLandingPage,
    "toolbox-panel": BsdToolboxPanel
  },
  {
    name: "BSD Theme",
    description: "BSD Theme Components for Monkeys UI",
    version: "1.0.0"
  }
);

exports.BSD_CONFIG = BSD_CONFIG;
exports.BSD_DEFAULT_FEATURE_CARDS = BSD_DEFAULT_FEATURE_CARDS;
exports.BsdLandingPage = BsdLandingPage;
exports.BsdToolboxPanel = BsdToolboxPanel;
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map