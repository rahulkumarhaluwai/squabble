"use client";

import React from "react";
import { FileIcon, X } from "lucide-react";
import { UploadButton } from "@/lib/uploadthing";
import Image from "next/image";

interface FileUploadProps {
  onChange: (file?: { url?: string; type?: string }) => void;
  value?: { url?: string; type?: string };
  endpoint: "messageFile" | "serverImage";
}

export const FileUpload = ({
  onChange,
  value,
  endpoint
}: FileUploadProps) => {
  const fileUrl = value?.url;
  const fileType = value?.type;

  if (fileUrl) {
    const isImage = fileType?.startsWith("image/");

    return (
      <div className="relative flex items-center p-1 mt-2">
        {isImage ? (
          <div className="relative h-20 w-20">
            <Image fill src={fileUrl} alt="Upload" className="rounded-full" />
          </div>
        ) : (
          <>
            <FileIcon className="h-8 w-8 fill-indigo-200 stroke-indigo-400" />
            <a
              href={fileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-indigo-500 dark:text-indigo-400 hover:underline ml-2"
            >
              {fileUrl}
            </a>
          </>
        )}

        <button
          onClick={() => onChange(undefined)}
          className="bg-rose-500 text-white p-1 rounded-full absolute -top-2 -right-2 shadow-sm"
          type="button"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    );
  }

  return (
    <UploadButton
      className="px-10 py-0.5 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-300/80"
      endpoint={endpoint}
      onClientUploadComplete={(res) => {
        if (res && res[0]) {
          onChange({
            url: res[0].url,
            type: res[0].type // <-- IMPORTANT: save MIME type here
          });
        }
      }}
      onUploadError={(error: Error) => {
        console.log(error);
      }}
    />
  );
};
