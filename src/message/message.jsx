import style from "./message.module.css";
import { useEffect, useState } from "react";

function Message({ type, msg }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!msg) return;

    setVisible(true);

    const timer = setTimeout(() => {
      setVisible(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, [msg]);

  return <>{visible && <div className={`${style.message} ${style[type]}`}>{msg}</div>}</>;
}

export default Message;
