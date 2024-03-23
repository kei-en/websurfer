"use client";

import { useState } from "react";

export function ToggleAllButton({ title }: { title: string }) {
  const [checkAll, setCheckAll] = useState<boolean>(true);

  const handleToggleAll = () => {
    const cboxes = document.querySelectorAll('input[name="category"]');

    cboxes.forEach((cbox) => {
      (cbox as HTMLInputElement).checked = checkAll;
    });
    setCheckAll(!checkAll);
  };

  return (
    <button
      className="m-4 mt-6 bg-cyan-800 p-2 rounded-sm text-xs font-semibold"
      formAction={handleToggleAll}>
      {title}
    </button>
  );
}
