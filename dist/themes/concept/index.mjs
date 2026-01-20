import { jsxs, jsx } from 'react/jsx-runtime';

// src/registry/index.ts
var registries = {};
function registerTheme(themeId, components, config) {
  registries[themeId] = { ...registries[themeId], ...components };
  if (config) {
    ({ id: themeId, ...config });
  }
}
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
var QuickActionCard = ({ cardUrl, onClick }) => {
  return /* @__PURE__ */ jsx(
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
      children: /* @__PURE__ */ jsx("img", { src: cardUrl, alt: "", style: { width: "100%", height: "100%" } })
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
  return /* @__PURE__ */ jsxs(
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
        /* @__PURE__ */ jsxs(
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
              /* @__PURE__ */ jsx("img", { src: CONCEPT_CONFIG.titleUrl, alt: "", style: { height: "100%" } }),
              /* @__PURE__ */ jsx("img", { src: CONCEPT_CONFIG.titleTailUrl, alt: "", style: { height: "100%" } })
            ]
          }
        ),
        /* @__PURE__ */ jsx("div", { style: { flex: 1 } }),
        /* @__PURE__ */ jsx(
          "div",
          {
            style: {
              marginBottom: "60px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center"
            },
            children: /* @__PURE__ */ jsxs("div", { style: { display: "flex", gap: "18px" }, children: [
              /* @__PURE__ */ jsx(
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
                  children: /* @__PURE__ */ jsxs("div", { style: { display: "flex", height: "26px", alignItems: "center", justifyContent: "center", gap: "10px" }, children: [
                    /* @__PURE__ */ jsx(
                      "img",
                      {
                        src: `${CONCEPT_CONFIG.entryActionsBaseUrl}/%E4%BB%8E%E8%AE%BE%E8%AE%A1%E6%A8%A1%E6%9D%BF%E5%87%BA%E5%8F%91.svg`,
                        alt: "\u4ECE\u8BBE\u8BA1\u6A21\u677F\u51FA\u53D1"
                      }
                    ),
                    /* @__PURE__ */ jsx("img", { src: `${CONCEPT_CONFIG.entryActionsBaseUrl}/plus.svg`, alt: "+" })
                  ] })
                }
              ),
              /* @__PURE__ */ jsx(
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
                  children: /* @__PURE__ */ jsxs("div", { style: { display: "flex", height: "26px", alignItems: "center", justifyContent: "center", gap: "10px" }, children: [
                    /* @__PURE__ */ jsx(
                      "img",
                      {
                        src: `${CONCEPT_CONFIG.entryActionsBaseUrl}/%E8%AE%BE%E8%AE%A1%E8%B5%84%E4%BA%A7.svg`,
                        alt: "\u8BBE\u8BA1\u8D44\u4EA7"
                      }
                    ),
                    /* @__PURE__ */ jsx("img", { src: `${CONCEPT_CONFIG.entryActionsBaseUrl}/right.svg`, alt: "\u2192" })
                  ] })
                }
              )
            ] })
          }
        ),
        /* @__PURE__ */ jsxs("div", { style: { display: "flex", flexDirection: "column", gap: 0 }, children: [
          /* @__PURE__ */ jsx("img", { src: CONCEPT_CONFIG.othersUrl, alt: "", style: { width: "96px" } }),
          /* @__PURE__ */ jsx("div", { style: { display: "flex", gap: "22px" }, children: quickActions.map((action) => /* @__PURE__ */ jsx(
            QuickActionCard,
            {
              cardUrl: action.cardUrl,
              onClick: () => onQuickActionClick?.(action.name)
            },
            action.name
          )) })
        ] }),
        /* @__PURE__ */ jsx(
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
        /* @__PURE__ */ jsx(
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

export { CONCEPT_CONFIG, CONCEPT_DEFAULT_QUICK_ACTIONS, ConceptDesignLandingPage };
//# sourceMappingURL=index.mjs.map
//# sourceMappingURL=index.mjs.map