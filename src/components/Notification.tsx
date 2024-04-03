import { notification } from 'antd';

export const Notification = {
  success: (placement: any, message: any, description: any) => notification.success({
    placement: placement,
    message: message,
    description: description,
    duration: 2,
  }),
  error: (placement: any, message: any, description: any) => notification.error({
    placement: placement,
    message: message,
    description: description,
    duration: 2,
  }),
};