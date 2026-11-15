"use client";

import { useEffect } from "react";
import { track } from "@/lib/analytics";

export function CaseViewTracker({ slug }: { slug: string }) {
  useEffect(() => {
    track("case_study_view", { case_study: slug });
  }, [slug]);
  return null;
}
