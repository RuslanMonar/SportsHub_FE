import React, { useEffect, useState, useMemo } from "react";
import { useDropzone } from "react-dropzone";

const baseStyle = {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  height: "fit-content",
  padding: "20px",
  borderWidth: 2,
  borderRadius: 2,
  borderColor: "#eeeeee",
  borderStyle: "dashed",
  backgroundColor: "#fafafa",
  color: "balck",
  outline: "none",
  textAlign: "center",
  fontFamily: "Open Sans",
  fontWeight: "bold",
  transition: "border .24s ease-in-out",
  cursor: "pointer",
};

const activeStyle = {
  borderColor: "#2196f3",
};

const acceptStyle = {
  borderColor: "red",
};

const rejectStyle = {
  borderColor: "#ff1744",
};

const thumbsContainer = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  position: "absolute",
  top: 0,
  right: 0,
};

const thumb = {
  display: "inline-flex",
  borderRadius: 2,
  marginBottom: 8,
  height: 130,
  padding: 4,
  boxSizing: "border-box",
};

const thumbInner = {
  display: "flex",
  minWidth: 0,
  overflow: "hidden",
};

const img = {
  display: "block",
  width: "auto",
  height: "100%",
};

export default function Dropzone({ onChange }) {
  const [files, setFiles] = useState([]);
  const [imageActive, setImageActive] = useState(false);

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
      onChange(files);
    },
  });

  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isDragActive ? activeStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isDragActive, isDragReject, isDragAccept]
  );

  const thumbs = files.map((file) => (
    <div style={thumb} key={file.name}>
      <div style={thumbInner}>
        <img src={file.preview} style={img} />
      </div>
    </div>
  ));

  useEffect(
    () => () => {
      // Make sure to revoke the data uris to avoid memory leaks
      files.forEach((file) => URL.revokeObjectURL(file.preview));
      setImageActive(true);
    },
    [files]
  );

  return (
    <div
      className="DropZone"
      onMouseEnter={() => setImageActive(false)}
      onMouseLeave={() => setImageActive(true)}
    >
      <div {...getRootProps({ style })}>
        <input {...getInputProps()}/>
        <svg
          width="39"
          height="39"
          viewBox="0 0 39 39"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="19.5" cy="19.5" r="19.5" fill="#D72130" />
          <path
            d="M27.4867 14.5113H24.5034L22.7179 12.7081C22.7179 12.7081 22.709 12.6993 22.7046 12.6993L22.6958 12.6904C22.4306 12.4253 22.0726 12.2573 21.666 12.2573H17.9535C17.5204 12.2573 17.1358 12.4429 16.8663 12.7391V12.7435L15.1205 14.5113H12.0709C11.2489 14.5113 10.5859 15.1566 10.5859 15.9787V24.9108C10.5859 25.7328 11.2489 26.4002 12.0709 26.4002H27.4867C28.3043 26.4002 28.9717 25.7328 28.9717 24.9108V15.9787C28.9717 15.1566 28.3043 14.5113 27.4867 14.5113ZM19.7788 24.1683C17.5292 24.1683 15.695 22.3297 15.695 20.0757C15.695 17.8172 17.5292 15.9831 19.7788 15.9831C22.0328 15.9831 23.8625 17.8172 23.8625 20.0757C23.8625 22.3297 22.0328 24.1683 19.7788 24.1683ZM27.2082 16.8759C26.8679 16.8759 26.5895 16.5974 26.5895 16.2527C26.5895 15.9079 26.8679 15.6295 27.2082 15.6295C27.5485 15.6295 27.827 15.9079 27.827 16.2527C27.827 16.5974 27.5485 16.8759 27.2082 16.8759Z"
            fill="white"
          />
          <path
            d="M19.7802 16.9817C18.0742 16.9817 16.6953 18.365 16.6953 20.0754C16.6953 21.7814 18.0742 23.1692 19.7802 23.1692C21.4818 23.1692 22.8651 21.7858 22.8651 20.0754C22.8651 18.365 21.4818 16.9817 19.7802 16.9817Z"
            fill="white"
          />
        </svg>

        <p>
          <span className="dropzone-title">Add logo</span> right here
        </p>
      </div>
      {imageActive && <aside style={thumbsContainer}>{thumbs}</aside>}
    </div>
  );
}
