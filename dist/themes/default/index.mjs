import { jsx, jsxs } from 'react/jsx-runtime';

// src/registry/index.ts
var registries = {};
function registerTheme(themeId, components, config) {
  registries[themeId] = { ...registries[themeId], ...components };
  if (config) {
    ({ id: themeId, ...config });
  }
}
function DefaultLandingPage({ className, style, children }) {
  return /* @__PURE__ */ jsx(
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
      children: children || /* @__PURE__ */ jsx("span", { children: "Welcome to Monkeys" })
    }
  );
}
function DefaultToolboxPanel({
  className,
  style,
  tools = [],
  onToolSelect
}) {
  return /* @__PURE__ */ jsxs("div", { className, style, children: [
    /* @__PURE__ */ jsx("h3", { children: "Toolbox" }),
    /* @__PURE__ */ jsx("div", { style: { display: "grid", gap: "8px" }, children: tools.map((tool) => /* @__PURE__ */ jsxs(
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
          /* @__PURE__ */ jsx("strong", { children: tool.title }),
          tool.description && /* @__PURE__ */ jsx("p", { style: { margin: "4px 0 0", opacity: 0.7 }, children: tool.description })
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

export { DefaultLandingPage, DefaultToolboxPanel };
//# sourceMappingURL=index.mjs.map
//# sourceMappingURL=index.mjs.map