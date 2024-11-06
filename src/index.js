import featureImage from './feature.svg';
import iconImage from './icon.svg';

export default {
  preview: true,
  name: 'MQTT',
  description: 'The standard for IoT messaging.',
  image: featureImage,
  icon: iconImage,
  tags: ['blocks', 'data'],
  internetRequired: true,

  // l10n
  translations: {
    en: {
      name: 'MQTT',
      description: 'The standard for IoT messaging.',
    },
    'zh-Hans': {
      name: 'MQTT 协议',
      description: '让万物互联的消息。',
    },
  },
};
