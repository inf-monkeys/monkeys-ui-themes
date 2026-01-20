'use strict';

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefault(React);

// src/registry/index.ts
var registries = {};
var themeConfigs = {};
function registerTheme(themeId, components, config) {
  registries[themeId] = { ...registries[themeId], ...components };
  if (config) {
    themeConfigs[themeId] = { id: themeId, ...config };
  }
}
function registerComponent(themeId, componentName, component) {
  if (!registries[themeId]) {
    registries[themeId] = {};
  }
  registries[themeId][componentName] = component;
}
function resolveComponent(themeId, componentName) {
  const themeComponent = registries[themeId]?.[componentName];
  if (themeComponent) {
    return themeComponent;
  }
  const defaultComponent = registries["default"]?.[componentName];
  if (defaultComponent) {
    return defaultComponent;
  }
  return null;
}
function hasCustomComponent(themeId, componentName) {
  return !!registries[themeId]?.[componentName];
}
function getRegisteredComponents(themeId) {
  return Object.keys(registries[themeId] || {});
}
function getRegisteredThemes() {
  return Object.keys(registries);
}
function getThemeConfig(themeId) {
  return themeConfigs[themeId] || null;
}
function clearRegistry() {
  Object.keys(registries).forEach((key) => delete registries[key]);
  Object.keys(themeConfigs).forEach((key) => delete themeConfigs[key]);
}
function DynamicComponent({
  themeId,
  name,
  fallback = null,
  ...props
}) {
  const Component = resolveComponent(themeId, name);
  if (!Component) {
    if (typeof window !== "undefined" && window.__DEV__) {
      console.warn(
        `[monkeys-ui-themes] Component "${name}" not found for theme "${themeId}"`
      );
    }
    return fallback;
  }
  return /* @__PURE__ */ jsxRuntime.jsx(Component, { ...props });
}
function DefaultLandingPage({ className, style, children }) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    {
      className,
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        ...style
      },
      children: children || /* @__PURE__ */ jsxRuntime.jsx("span", { children: "Welcome to Monkeys" })
    }
  );
}
function DefaultToolboxPanel({
  className,
  style,
  tools = [],
  onToolSelect
}) {
  return /* @__PURE__ */ jsxRuntime.jsxs("div", { className, style, children: [
    /* @__PURE__ */ jsxRuntime.jsx("h3", { children: "Toolbox" }),
    /* @__PURE__ */ jsxRuntime.jsx("div", { style: { display: "grid", gap: "8px" }, children: tools.map((tool) => /* @__PURE__ */ jsxRuntime.jsxs(
      "button",
      {
        onClick: () => onToolSelect?.(tool.id),
        style: {
          padding: "12px",
          textAlign: "left",
          border: "1px solid #e0e0e0",
          borderRadius: "8px",
          cursor: "pointer"
        },
        children: [
          /* @__PURE__ */ jsxRuntime.jsx("strong", { children: tool.title }),
          tool.description && /* @__PURE__ */ jsxRuntime.jsx("p", { style: { margin: "4px 0 0", opacity: 0.7 }, children: tool.description })
        ]
      },
      tool.id
    )) })
  ] });
}

// src/themes/default/index.ts
registerTheme(
  "default",
  {
    "landing-page": DefaultLandingPage,
    "toolbox-panel": DefaultToolboxPanel
  },
  {
    name: "Default Theme",
    description: "Monkeys default theme with basic components"
  }
);
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
  const [isHovered, setIsHovered] = React__default.default.useState(false);
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
              bottom: "clamp(1.5rem, 25%, 10rem)",
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
                    marginBottom: "clamp(0.25rem, 0.5vh, 0.5rem)"
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
                    margin: 0
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
                  marginTop: "clamp(2rem, 4vh, 3.75rem)"
                },
                children: [
                  /* @__PURE__ */ jsxRuntime.jsx("div", { style: { marginBottom: "clamp(1.5rem, 3vh, 2rem)" }, children: /* @__PURE__ */ jsxRuntime.jsx(
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
                        marginTop: "clamp(4rem, 8vh, 8rem)",
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
var ARTIST_CONFIG = {
  iconUrl: "https://inf-monkeys.oss-cn-beijing.aliyuncs.com/monkeys-assets/artist/icon.svg",
  titleUrl: "https://inf-monkeys.oss-cn-beijing.aliyuncs.com/monkeys-assets/artist/title%E8%89%BA%E6%9C%AF%E5%AE%B6.svg",
  sloganUrl: "https://inf-monkeys.oss-cn-beijing.aliyuncs.com/icons/artist/home.svg",
  quickActionsBaseUrl: "https://inf-monkeys.oss-cn-beijing.aliyuncs.com/monkeys-assets/artist/quick-actions"
};
var ARTIST_DEFAULT_QUICK_ACTIONS = [
  {
    name: "\u610F\u56FE\u8868\u8FBE",
    iconUrl: `${ARTIST_CONFIG.quickActionsBaseUrl}/\u610F\u56FE\u8868\u8FBE/icon.svg`,
    titleUrl: `${ARTIST_CONFIG.quickActionsBaseUrl}/\u610F\u56FE\u8868\u8FBE/title.svg`,
    subtitleUrl: `${ARTIST_CONFIG.quickActionsBaseUrl}/\u610F\u56FE\u8868\u8FBE/subtitle.svg`
  },
  {
    name: "\u4E00\u952E\u751F\u6210",
    iconUrl: `${ARTIST_CONFIG.quickActionsBaseUrl}/\u4E00\u952E\u751F\u6210/icon.svg`,
    titleUrl: `${ARTIST_CONFIG.quickActionsBaseUrl}/\u4E00\u952E\u751F\u6210/title.svg`,
    subtitleUrl: `${ARTIST_CONFIG.quickActionsBaseUrl}/\u4E00\u952E\u751F\u6210/subtitle.svg`
  },
  {
    name: "\u667A\u80FD\u4FEE\u6539",
    iconUrl: `${ARTIST_CONFIG.quickActionsBaseUrl}/\u667A\u80FD\u4FEE\u6539/icon.svg`,
    titleUrl: `${ARTIST_CONFIG.quickActionsBaseUrl}/\u667A\u80FD\u4FEE\u6539/title.svg`,
    subtitleUrl: `${ARTIST_CONFIG.quickActionsBaseUrl}/\u667A\u80FD\u4FEE\u6539/subtitle.svg`
  }
];
var ArrowUpRightIcon = ({ size = 40, color = "#ffffff80" }) => /* @__PURE__ */ jsxRuntime.jsxs("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", children: [
  /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M7 17L17 7" }),
  /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M7 7h10v10" })
] });
var QuickActionCard = ({ name, iconUrl, titleUrl, subtitleUrl, onClick }) => {
  const [isHovered, setIsHovered] = React.useState(false);
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "div",
    {
      onClick,
      onMouseEnter: () => setIsHovered(true),
      onMouseLeave: () => setIsHovered(false),
      style: {
        position: "relative",
        flex: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        overflow: "hidden",
        borderRadius: "1rem",
        padding: "26px 20px",
        cursor: "pointer",
        background: "linear-gradient(180deg, rgba(255, 255, 255, 0.5625) 2%, rgba(90, 87, 83, 0.75) 80%)",
        backgroundBlendMode: "overlay",
        border: "1.76px solid rgba(255, 255, 255, 0.5)",
        boxShadow: "inset 0px 0px 0px 0px rgba(0, 0, 0, 0.1)",
        transition: "all 0.3s ease",
        minHeight: "350px"
      },
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(
          "div",
          {
            style: {
              position: "absolute",
              right: "12px",
              top: "12px",
              width: "40px",
              height: "40px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "50%",
              background: isHovered ? "#000" : "transparent",
              transition: "background 0.3s"
            },
            children: /* @__PURE__ */ jsxRuntime.jsx(ArrowUpRightIcon, { size: 40, color: "#ffffff80" })
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(
          "img",
          {
            src: iconUrl,
            alt: name,
            style: {
              position: "absolute",
              right: "20%",
              bottom: "30%",
              width: "120px",
              height: "120px",
              objectFit: "contain",
              opacity: 0.8,
              filter: isHovered ? "hue-rotate(180deg)" : "none",
              transition: "filter 0.3s"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsxs("div", { style: { display: "flex", flexDirection: "column", gap: "24px", zIndex: 10 }, children: [
          /* @__PURE__ */ jsxRuntime.jsx(
            "img",
            {
              src: titleUrl,
              alt: name,
              style: {
                height: "24px",
                objectFit: "contain",
                objectPosition: "left",
                filter: isHovered ? "brightness(0.7)" : "none",
                transition: "filter 0.3s"
              }
            }
          ),
          /* @__PURE__ */ jsxRuntime.jsx(
            "img",
            {
              src: subtitleUrl,
              alt: "",
              style: {
                height: "16px",
                objectFit: "contain",
                objectPosition: "left",
                filter: isHovered ? "invert(1)" : "none",
                transition: "filter 0.3s"
              }
            }
          )
        ] })
      ]
    }
  );
};
function ArtistLandingPage({
  isAuthenticated = false,
  user,
  quickActions = ARTIST_DEFAULT_QUICK_ACTIONS,
  onEnterWorkbench,
  onLogin,
  onQuickActionClick,
  className = "",
  style = {},
  backgroundComponent
}) {
  const handleToWorkbench = () => {
    if (isAuthenticated) {
      onEnterWorkbench?.();
    } else {
      onLogin?.();
    }
  };
  const handleUserClick = () => {
    onEnterWorkbench?.();
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
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        ...style
      },
      children: [
        backgroundComponent || /* @__PURE__ */ jsxRuntime.jsx(
          "div",
          {
            style: {
              position: "fixed",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
              zIndex: 0,
              background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(
          "header",
          {
            style: {
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100px",
              zIndex: 20,
              padding: "30px",
              boxSizing: "border-box",
              boxShadow: "inset 4px 4px 8.7px 0px rgba(255, 255, 255, 0.25)",
              backdropFilter: "blur(10px)",
              backgroundColor: "rgba(255, 255, 255, 0.1)"
            },
            children: /* @__PURE__ */ jsxRuntime.jsxs(
              "div",
              {
                style: {
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  paddingBottom: "30px",
                  borderBottom: "1px solid rgba(255, 255, 255, 0.2)"
                },
                children: [
                  /* @__PURE__ */ jsxRuntime.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "10px", marginLeft: "16px" }, children: [
                    /* @__PURE__ */ jsxRuntime.jsx("img", { src: ARTIST_CONFIG.iconUrl, alt: "logo", style: { width: "46px", height: "46px" } }),
                    /* @__PURE__ */ jsxRuntime.jsx("img", { src: ARTIST_CONFIG.titleUrl, alt: "\u827A\u672F\u5BB6", style: { height: "36px" } })
                  ] }),
                  /* @__PURE__ */ jsxRuntime.jsx("div", { style: { marginRight: "16px" }, children: isAuthenticated && user ? /* @__PURE__ */ jsxRuntime.jsx("div", { onClick: handleUserClick, style: { cursor: "pointer" }, children: /* @__PURE__ */ jsxRuntime.jsx(
                    "img",
                    {
                      src: user.photo || "",
                      alt: user.name || "",
                      title: user.name,
                      style: {
                        width: "40px",
                        height: "40px",
                        borderRadius: "50%",
                        border: "2px solid rgba(255, 255, 255, 0.2)",
                        objectFit: "cover"
                      }
                    }
                  ) }) : /* @__PURE__ */ jsxRuntime.jsx(
                    "button",
                    {
                      onClick: onLogin,
                      style: {
                        width: "40px",
                        height: "40px",
                        borderRadius: "50%",
                        border: "1px solid rgba(255, 255, 255, 0.3)",
                        background: "rgba(255, 255, 255, 0.1)",
                        color: "#fff",
                        cursor: "pointer",
                        fontSize: "14px",
                        transition: "all 0.3s",
                        backdropFilter: "blur(10px)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                      },
                      children: /* @__PURE__ */ jsxRuntime.jsxs("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "#fff", strokeWidth: "2", children: [
                        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" }),
                        /* @__PURE__ */ jsxRuntime.jsx("circle", { cx: "12", cy: "7", r: "4" })
                      ] })
                    }
                  ) })
                ]
              }
            )
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsxs(
          "div",
          {
            style: {
              position: "fixed",
              zIndex: 10,
              display: "flex",
              flexDirection: "column",
              width: "100%",
              height: "100vh"
            },
            children: [
              /* @__PURE__ */ jsxRuntime.jsxs(
                "div",
                {
                  style: {
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    padding: "150px 0 0 30px",
                    gap: "30px"
                  },
                  children: [
                    /* @__PURE__ */ jsxRuntime.jsx(
                      "img",
                      {
                        src: ARTIST_CONFIG.sloganUrl,
                        alt: "slogan",
                        style: { maxWidth: "80%", height: "auto" }
                      }
                    ),
                    /* @__PURE__ */ jsxRuntime.jsxs(
                      "div",
                      {
                        onClick: handleToWorkbench,
                        style: {
                          marginTop: "40px",
                          width: "308px",
                          height: "77px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          gap: "12px",
                          background: "linear-gradient(103deg, #4D8F9D 0%, #416887 100%)",
                          borderRadius: "15px",
                          cursor: "pointer",
                          boxShadow: "inset 4px 4px 8.7px 0px rgba(255, 255, 255, 0.25), 0 0 20px rgba(255, 255, 255, 0.3), 0 0 40px rgba(255, 255, 255, 0.2)",
                          transition: "all 0.3s",
                          color: "#fff",
                          fontSize: "26px",
                          fontWeight: 600
                        },
                        children: [
                          /* @__PURE__ */ jsxRuntime.jsx("svg", { width: "24", height: "23", viewBox: "0 0 24 23", fill: "#fff", children: /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M20.414621,7.7390924L20.145603,8.3532591C19.948801,8.802886,19.323929,8.802886,19.12702,8.3532591L18.858112,7.7390924C18.378654,6.6439967,17.515091,5.7721038,16.43749,5.2951164L15.60873,4.928297C15.160691,4.729948,15.160691,4.0809946,15.60873,3.8826451L16.39113,3.5363247C17.496439,3.0470688,18.375492,2.1429076,18.846657,1.0106162L19.122875,0.34691912C19.315418,-0.11563972,19.957314,-0.11563972,20.149748,0.34691912L20.425968,1.0106162C20.89724,2.1429076,21.776295,3.0470688,22.881603,3.5363247L23.663895,3.8826451C24.112041,4.0809946,24.112041,4.729948,23.663895,4.928297L22.835239,5.2951164C21.757639,5.7721038,20.894073,6.6439967,20.414621,7.7390924ZM10.909091,1.0857151C4.8841639,1.0857151,0,5.9466209,0,11.942858C0,13.791286,0.46411648,15.531795,1.2827022,17.055267L0,22.799999L5.7721863,21.523418C7.3029823,22.338139,9.0518188,22.799999,10.909091,22.799999C16.933966,22.799999,21.818182,17.939041,21.818182,11.942858C21.818182,11.505858,21.792221,11.074504,21.7416,10.650207L19.574947,10.906218C19.615528,11.24572,19.636366,11.591631,19.636366,11.942858C19.636366,16.73987,15.729055,20.628574,10.909091,20.628574C9.4532728,20.628574,8.0536156,20.275171,6.801033,19.608541L6.0880923,19.229088L2.8736296,19.940012L3.5879564,16.74085L3.2067165,16.031332C2.5368986,14.784716,2.1818182,13.391744,2.1818182,11.942858C2.1818182,7.1458678,6.089149,3.2571435,10.909091,3.2571435C11.663892,3.2571435,12.394691,3.3522527,13.09091,3.5305159L13.63451,1.4275739C12.762219,1.2042099,11.8488,1.0857151,10.909091,1.0857151ZM7.6363645,11.942858L5.4545455,11.942858C5.4545455,14.94095,7.8966331,17.371428,10.909091,17.371428C13.921529,17.371428,16.363638,14.94095,16.363638,11.942858L14.18182,11.942858C14.18182,13.741777,12.71662,15.200002,10.909091,15.200002C9.1015635,15.200002,7.6363645,13.741777,7.6363645,11.942858Z" }) }),
                          "\u8FDB\u5165\u8BBE\u8BA1\u9879\u76EE",
                          /* @__PURE__ */ jsxRuntime.jsx(
                            "div",
                            {
                              style: {
                                width: "40px",
                                height: "40px",
                                borderRadius: "8px",
                                background: "#000",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center"
                              },
                              children: /* @__PURE__ */ jsxRuntime.jsxs("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "#fff", strokeWidth: "2", children: [
                                /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M5 12h14" }),
                                /* @__PURE__ */ jsxRuntime.jsx("path", { d: "m12 5 7 7-7 7" })
                              ] })
                            }
                          )
                        ]
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntime.jsx(
                "div",
                {
                  style: {
                    flex: 1,
                    display: "flex",
                    justifyContent: "space-between",
                    gap: "30px",
                    padding: "30px",
                    marginTop: "auto"
                  },
                  children: quickActions.map((action, index) => /* @__PURE__ */ jsxRuntime.jsx(
                    QuickActionCard,
                    {
                      name: action.name,
                      iconUrl: action.iconUrl,
                      titleUrl: action.titleUrl,
                      subtitleUrl: action.subtitleUrl,
                      onClick: () => onQuickActionClick?.(action.name)
                    },
                    action.name
                  ))
                }
              )
            ]
          }
        )
      ]
    }
  );
}

// src/themes/artist/index.ts
registerTheme(
  "artist",
  {
    "landing-page": ArtistLandingPage
  },
  {
    name: "Artist Theme",
    description: "Artist Theme Components for Monkeys UI",
    version: "1.0.0"
  }
);
var CONCEPT_CONFIG = {
  backgroundUrl: "https://inf-monkeys.oss-cn-beijing.aliyuncs.com/monkeys-assets/concept-design/bg.jpg",
  titleUrl: "https://inf-monkeys.oss-cn-beijing.aliyuncs.com/monkeys-assets/concept-design/title.svg",
  titleTailUrl: "https://inf-monkeys.oss-cn-beijing.aliyuncs.com/monkeys-assets/concept-design/title_tail.svg",
  othersUrl: "https://inf-monkeys.oss-cn-beijing.aliyuncs.com/monkeys-assets/concept-design/others.svg",
  entryActionsBaseUrl: "https://inf-monkeys.oss-cn-beijing.aliyuncs.com/monkeys-assets/concept-design/entry-actions",
  quickActionsBaseUrl: "https://inf-monkeys.oss-cn-beijing.aliyuncs.com/monkeys-assets/concept-design/quick-actions"
};
var CONCEPT_DEFAULT_QUICK_ACTIONS = [
  {
    name: "\u8BBE\u8BA1\u5DE5\u4F5C\u53F0",
    cardUrl: `${CONCEPT_CONFIG.quickActionsBaseUrl}/\u8BBE\u8BA1\u5DE5\u4F5C\u53F0/card.svg`
  },
  {
    name: "\u521B\u65B0\u65B9\u6CD5\u8BC6\u522B",
    cardUrl: `${CONCEPT_CONFIG.quickActionsBaseUrl}/\u521B\u65B0\u65B9\u6CD5\u8BC6\u522B/card.svg`
  },
  {
    name: "\u7075\u611F\u6FC0\u53D1",
    cardUrl: `${CONCEPT_CONFIG.quickActionsBaseUrl}/\u7075\u611F\u6FC0\u53D1/card.svg`
  },
  {
    name: "\u903B\u8F91\u5173\u7CFB\u53D1\u73B0",
    cardUrl: `${CONCEPT_CONFIG.quickActionsBaseUrl}/\u903B\u8F91\u5173\u7CFB\u53D1\u73B0/card.svg`
  }
];
var QuickActionCard2 = ({ cardUrl, onClick }) => {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    {
      onClick,
      style: {
        height: "350px",
        width: "260px",
        cursor: "pointer",
        border: "1.5px solid #e0e0e0",
        backgroundColor: "rgba(255, 255, 255, 0.7)",
        transition: "all 0.3s"
      },
      onMouseEnter: (e) => {
        e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 1)";
      },
      onMouseLeave: (e) => {
        e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.7)";
      },
      children: /* @__PURE__ */ jsxRuntime.jsx("img", { src: cardUrl, alt: "", style: { width: "100%", height: "100%" } })
    }
  );
};
function ConceptDesignLandingPage({
  isAuthenticated = false,
  quickActions = CONCEPT_DEFAULT_QUICK_ACTIONS,
  onEnterWorkbench,
  onLogin,
  onQuickActionClick,
  className = "",
  style = {}
}) {
  const handleToWorkbench = () => {
    if (isAuthenticated) {
      onEnterWorkbench?.();
    } else {
      onLogin?.();
    }
  };
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "div",
    {
      className,
      style: {
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100%",
        minHeight: "100vh",
        padding: "40px 80px",
        backgroundImage: `url('${CONCEPT_CONFIG.backgroundUrl}')`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top center",
        backgroundSize: "cover",
        position: "relative",
        ...style
      },
      children: [
        /* @__PURE__ */ jsxRuntime.jsxs(
          "div",
          {
            style: {
              marginTop: "100px",
              display: "flex",
              height: "180px",
              alignItems: "center",
              justifyContent: "space-between"
            },
            children: [
              /* @__PURE__ */ jsxRuntime.jsx("img", { src: CONCEPT_CONFIG.titleUrl, alt: "", style: { height: "100%" } }),
              /* @__PURE__ */ jsxRuntime.jsx("img", { src: CONCEPT_CONFIG.titleTailUrl, alt: "", style: { height: "100%" } })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx("div", { style: { flex: 1 } }),
        /* @__PURE__ */ jsxRuntime.jsx(
          "div",
          {
            style: {
              marginBottom: "60px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center"
            },
            children: /* @__PURE__ */ jsxRuntime.jsxs("div", { style: { display: "flex", gap: "18px" }, children: [
              /* @__PURE__ */ jsxRuntime.jsx(
                "div",
                {
                  onClick: handleToWorkbench,
                  style: {
                    cursor: "pointer",
                    background: "linear-gradient(to bottom, #444444, #000000)",
                    padding: "24px 20px",
                    transition: "transform 0.3s"
                  },
                  onMouseEnter: (e) => {
                    e.currentTarget.style.transform = "scale(1.02)";
                  },
                  onMouseLeave: (e) => {
                    e.currentTarget.style.transform = "scale(1)";
                  },
                  children: /* @__PURE__ */ jsxRuntime.jsxs("div", { style: { display: "flex", height: "26px", alignItems: "center", justifyContent: "center", gap: "10px" }, children: [
                    /* @__PURE__ */ jsxRuntime.jsx(
                      "img",
                      {
                        src: `${CONCEPT_CONFIG.entryActionsBaseUrl}/%E4%BB%8E%E8%AE%BE%E8%AE%A1%E6%A8%A1%E6%9D%BF%E5%87%BA%E5%8F%91.svg`,
                        alt: "\u4ECE\u8BBE\u8BA1\u6A21\u677F\u51FA\u53D1"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntime.jsx("img", { src: `${CONCEPT_CONFIG.entryActionsBaseUrl}/plus.svg`, alt: "+" })
                  ] })
                }
              ),
              /* @__PURE__ */ jsxRuntime.jsx(
                "div",
                {
                  onClick: handleToWorkbench,
                  style: {
                    cursor: "pointer",
                    background: "#ffffff",
                    padding: "24px 20px",
                    transition: "transform 0.3s"
                  },
                  onMouseEnter: (e) => {
                    e.currentTarget.style.transform = "scale(1.02)";
                  },
                  onMouseLeave: (e) => {
                    e.currentTarget.style.transform = "scale(1)";
                  },
                  children: /* @__PURE__ */ jsxRuntime.jsxs("div", { style: { display: "flex", height: "26px", alignItems: "center", justifyContent: "center", gap: "10px" }, children: [
                    /* @__PURE__ */ jsxRuntime.jsx(
                      "img",
                      {
                        src: `${CONCEPT_CONFIG.entryActionsBaseUrl}/%E8%AE%BE%E8%AE%A1%E8%B5%84%E4%BA%A7.svg`,
                        alt: "\u8BBE\u8BA1\u8D44\u4EA7"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntime.jsx("img", { src: `${CONCEPT_CONFIG.entryActionsBaseUrl}/right.svg`, alt: "\u2192" })
                  ] })
                }
              )
            ] })
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsxs("div", { style: { display: "flex", flexDirection: "column", gap: 0 }, children: [
          /* @__PURE__ */ jsxRuntime.jsx("img", { src: CONCEPT_CONFIG.othersUrl, alt: "", style: { width: "96px" } }),
          /* @__PURE__ */ jsxRuntime.jsx("div", { style: { display: "flex", gap: "22px" }, children: quickActions.map((action) => /* @__PURE__ */ jsxRuntime.jsx(
            QuickActionCard2,
            {
              cardUrl: action.cardUrl,
              onClick: () => onQuickActionClick?.(action.name)
            },
            action.name
          )) })
        ] }),
        /* @__PURE__ */ jsxRuntime.jsx(
          "div",
          {
            style: {
              position: "fixed",
              bottom: "390px",
              left: 0,
              height: "1.5px",
              width: "100%",
              background: "#ACACAC",
              boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
              zIndex: 1
            }
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(
          "div",
          {
            style: {
              position: "fixed",
              bottom: 0,
              left: "80px",
              height: "492px",
              width: "1.5px",
              background: "#ACACAC",
              boxShadow: "2px 0 4px rgba(0,0,0,0.1)",
              zIndex: 1
            }
          }
        )
      ]
    }
  );
}

// src/themes/concept/index.ts
registerTheme(
  "concept-design",
  {
    "landing-page": ConceptDesignLandingPage
  },
  {
    name: "Concept Design Theme",
    description: "Concept Design Theme Components for Monkeys UI",
    version: "1.0.0"
  }
);

exports.ARTIST_CONFIG = ARTIST_CONFIG;
exports.ARTIST_DEFAULT_QUICK_ACTIONS = ARTIST_DEFAULT_QUICK_ACTIONS;
exports.ArtistLandingPage = ArtistLandingPage;
exports.BSD_CONFIG = BSD_CONFIG;
exports.BSD_DEFAULT_FEATURE_CARDS = BSD_DEFAULT_FEATURE_CARDS;
exports.BsdLandingPage = BsdLandingPage;
exports.BsdToolboxPanel = BsdToolboxPanel;
exports.CONCEPT_CONFIG = CONCEPT_CONFIG;
exports.CONCEPT_DEFAULT_QUICK_ACTIONS = CONCEPT_DEFAULT_QUICK_ACTIONS;
exports.ConceptDesignLandingPage = ConceptDesignLandingPage;
exports.DefaultLandingPage = DefaultLandingPage;
exports.DynamicComponent = DynamicComponent;
exports.clearRegistry = clearRegistry;
exports.getRegisteredComponents = getRegisteredComponents;
exports.getRegisteredThemes = getRegisteredThemes;
exports.getThemeConfig = getThemeConfig;
exports.hasCustomComponent = hasCustomComponent;
exports.registerComponent = registerComponent;
exports.registerTheme = registerTheme;
exports.resolveComponent = resolveComponent;
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map