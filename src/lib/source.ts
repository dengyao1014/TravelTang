// src/lib/source.ts
import { loader } from "fumadocs-core/source";
import { icons } from "lucide-react";
import type { I18nConfig } from "fumadocs-core/i18n";
import { createElement } from "react";

// 安全导入 docs
let docs: any;
try {
  docs = require("@/.source").docs;
} catch (error) {
  console.warn("No .source folder found, creating empty docs");
  docs = { toFumadocsSource: () => [] };
}

export const i18n: I18nConfig = {
  defaultLanguage: "en",
  languages: ["en", "zh"],
};

export const source = loader({
  baseUrl: "/docs",
  source: docs.toFumadocsSource(),
  i18n,
  icon(icon) {
    if (!icon) {
      return;
    }
    if (icon in icons) return createElement(icons[icon as keyof typeof icons]);
  },
});
