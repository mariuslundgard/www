import { render } from "lit-html";
import React, { useEffect, useRef } from "react";

import styles from "./PostPreview.module.css";

const IFRAME_ORIGIN =
  window.location.origin === "http://localhost:3333"
    ? "http://localhost:3000"
    : "https://mariuslundgard.com";

function PostPreview(props) {
  const data = props.draft || props.published || props.initialValue;
  const iframeRef = useRef();
  const iframeLoadedRef = useRef();
  const src = `${IFRAME_ORIGIN}/preview?screen=post`;

  useEffect(() => {
    const iframe = iframeRef.current;
    const handleLoad = () => {
      iframeLoadedRef.current = true;
      if (iframe) iframe.contentWindow.postMessage({ type: "data", data }, IFRAME_ORIGIN);
      setTimeout(() => {
        if (iframe) iframe.contentWindow.postMessage({ type: "data", data }, IFRAME_ORIGIN);
      }, 100);
    };
    if (iframe) iframe.addEventListener("load", handleLoad);
    return () => {
      if (iframe) iframe.removeEventListener("load", handleLoad);
    };
  }, [src]);

  useEffect(() => {
    const iframeLoaded = iframeLoadedRef.current;
    const iframe = iframeRef.current;
    if (iframeLoaded && iframe) {
      iframe.contentWindow.postMessage({ type: "data", data }, IFRAME_ORIGIN);
    }
  }, [data]);

  return <iframe className={styles.root} ref={iframeRef} src={src} />;
}

export default PostPreview;
