"use client";

import { Tree, File, Folder, CollapseButton, type TreeViewElement } from "@/components/magicui/file-tree";

const elements: TreeViewElement[] = [
  {
    id: "1",
    name: "project",
    children: [
      {
        id: "2",
        name: "src",
        children: [
          {
            id: "3",
        name: "components",
        children: [
              { id: "4", name: "button.tsx" },
              { id: "5", name: "header.tsx" },
            ],
          },
          { id: "6", name: "styles.css" },
        ],
      },
      { id: "7", name: "package.json" },
    ],
  },
];

export function FileTreeDemo() {
  return (
    <div className="z-0 h-full max-h-[400px] w-full max-w-lg rounded-xl border border-border bg-background">
      <div className="flex flex-col gap-y-2 border-b border-border p-4">
        <div className="flex flex-row gap-x-2">
          <div className="h-2 w-2 rounded-full bg-red-500"></div>
          <div className="h-2 w-2 rounded-full bg-yellow-500"></div>
          <div className="h-2 w-2 rounded-full bg-green-500"></div>
        </div>
      </div>
      <div className="p-4">
        <Tree elements={elements} initialExpandedItems={["1", "2", "3"]}>
          <Folder element="project" value="1">
            <Folder element="src" value="2">
              <Folder element="components" value="3">
                <File value="4">button.tsx</File>
                <File value="5">header.tsx</File>
              </Folder>
              <File value="6">styles.css</File>
            </Folder>
            <File value="7">package.json</File>
          </Folder>
        </Tree>
      </div>
    </div>
  );
}
