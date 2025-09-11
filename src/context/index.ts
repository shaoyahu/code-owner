import { createContext } from "react";
import { type NotificationInstance } from "antd/es/notification/interface";

export const ApiContext = createContext<NotificationInstance | null>(null);
