import { z } from 'zod';

export const StatusPageAnnouncementTypeZEnum = z.enum(['Info', 'Maintenance', 'Issue']);
export const StatusPageAnnouncementStatusZEnum = z.enum(['Offline', 'Pending', 'Published', 'Archived']);
export const StatusPageAnnouncementDeliveryStatusZEnum = z.enum(['CantSend', 'InQueue', 'Sent']);

export const StatusPageAnnouncementParser = z.object({
  id: z.number().gte(0).brand('StatusPageAnnouncementId'),
  pspId: z.number().gte(0),
  userId: z.number().gte(0),
  title: z.string(),
  content: z.string(),
  status: StatusPageAnnouncementStatusZEnum.nullable(),
  type: StatusPageAnnouncementTypeZEnum,
  deliveryStatus: StatusPageAnnouncementDeliveryStatusZEnum,
  startDate: z.string().datetime(),
  endDate: z.string().datetime().nullable(),
  creationDate: z.string().datetime(),
  sentCount: z.number().gte(0).nullable(),
});

export type StatusPageAnnouncement = z.infer<typeof StatusPageAnnouncementParser>;
