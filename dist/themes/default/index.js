'use strict';

var jsxRuntime = require('react/jsx-runtime');

// src/registry/index.ts
var registries = {};
function registerTheme(themeId, components, config) {
  registries[themeId] = { ...registries[themeId], ...components };
  if (config) {
    ({ id: themeId, ...config });
  }
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

exports.DefaultLandingPage = DefaultLandingPage;
exports.DefaultToolboxPanel = DefaultToolboxPanel;
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map