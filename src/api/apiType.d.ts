// 放置 api处理的相关 ts类型
import type { AxiosRequestConfig } from 'axios';

import { type Ref } from 'vue';

export type apiHandleFn = (
  payload: Ref,
  data?: object,
  config?: AxiosRequestConfig
) => Promise<any>;
