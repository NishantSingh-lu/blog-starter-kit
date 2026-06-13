"use client";

import { useServerInsertedHTML } from "next/navigation";
import { NoFOUCScript, STORAGE_KEY } from "@/lib/theme";

export function ThemeScript() {
  useServerInsertedHTML(() => (
    <script
      dangerouslySetInnerHTML={{
        __html: `(${NoFOUCScript.toString()})('${STORAGE_KEY}')`,
      }}
    />
  ));
  return null;
}
