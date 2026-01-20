'use strict';

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