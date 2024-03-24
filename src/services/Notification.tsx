import React from 'react';
import { notification } from 'antd';

export const Notification = {
  success: (placement: any, message: string, description: string) => notification.success({
    placement: placement,
    message: message,
    description: description,
    duration: 2,
  }),
  error: (placement: any, message: string, description: string) => notification.error({
    placement: placement,
    message: message,
    description: description,
    duration: 2,
  }),
};
