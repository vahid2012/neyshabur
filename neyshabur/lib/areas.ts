export type ServiceArea = {
  slug: string;
  name: string;
  description: string;
  verified: boolean;
  imageQuery: string;
};

export const serviceAreas: ServiceArea[] = [
  {
    slug: 'neyshabur',
    name: 'نیشابور',
    description:
      'تعمیرات تخصصی لوازم خانگی در شهر نیشابور و محلات مختلف توسط تکنسین‌های متخصص گلزاری.',
    verified: true,
    imageQuery: 'neyshabur iran city',
  },
  {
    slug: 'firuzeh',
    name: 'فیروزه',
    description:
      'خدمات تعمیر لوازم خانگی در فیروزه و مناطق اطراف آن.',
    verified: false,
    imageQuery: 'small town iran',
  },
  {
    slug: 'zebarkhan',
    name: 'زبرخان',
    description:
      'خدمات تعمیر لوازم خانگی در زبرخان و مناطق اطراف آن.',
    verified: false,
    imageQuery: 'small town iran',
  },
  {
    slug: 'qadmgah',
    name: 'قدمگاه',
    description:
      'خدمات تعمیر لوازم خانگی در قدمگاه و مناطق اطراف آن.',
    verified: false,
    imageQuery: 'small town iran',
  },
  {
    slug: 'kharv',
    name: 'خرو',
    description:
      'خدمات تعمیر لوازم خانگی در خرو و مناطق اطراف آن.',
    verified: false,
    imageQuery: 'small town iran',
  },
  {
    slug: 'eshqabad',
    name: 'عشق‌آباد',
    description:
      'خدمات تعمیر لوازم خانگی در عشق‌آباد و مناطق اطراف آن.',
    verified: false,
    imageQuery: 'small town iran',
  },
  {
    slug: 'bar',
    name: 'بار',
    description:
      'خدمات تعمیر لوازم خانگی در بار و مناطق اطراف آن.',
    verified: false,
    imageQuery: 'small town iran',
  },
  {
    slug: 'chekneh',
    name: 'چکنه',
    description:
      'خدمات تعمیر لوازم خانگی در چکنه و مناطق اطراف آن.',
    verified: false,
    imageQuery: 'small town iran',
  },
];

export const verifiedAreas = serviceAreas.filter((a) => a.verified);
export const pendingAreas = serviceAreas.filter((a) => !a.verified);
