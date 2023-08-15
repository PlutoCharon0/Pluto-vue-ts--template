/// <reference types="vite/client" />

type handleMouseEvent = (payload: MouseEvent) => void;

// 配置环境变量定义 以便获取ts的智能提示
interface ImportMetaEnv {
  readonly VITE_BASE_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}