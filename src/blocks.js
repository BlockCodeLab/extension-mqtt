import mqtt from 'mqtt';
import { Text } from '@blockcode/ui';
import translations from './l10n.yaml';
import iconURI from './icon.svg';
import mqttPyURI from './mqtt.py';

const DIALOGS_LENGTH = 3;

export default {
  iconURI,
  name: (
    <Text
      id="extension.mqtt.name"
      defaultMessage="MQTT"
    />
  ),
  files: [
    {
      name: 'mqtt',
      type: 'text/x-python',
      uri: mqttPyURI,
    },
  ],
  blocks: [
    {
      id: 'connect',
      text: (
        <Text
          id="extension.mqtt.connect"
          defaultMessage="connect to MQTT broker: [URL]"
        />
      ),
      inputs: {
        URL: {
          type: 'string',
          default: 'ws://test.mosquitto.org:8081',
        },
      },
    },
    {
      id: 'publish',
      text: (
        <Text
          id="extension.mqtt.publish"
          defaultMessage="publish [MESSAGE] to [TOPIC]"
        />
      ),
      inputs: {
        MESSAGE: {
          type: 'string',
          default: (
            <Text
              id="extension.mqtt.message.content"
              defaultMessage="message"
            />
          ),
        },
        TOPIC: {
          type: 'string',
          default: (
            <Text
              id="extension.mqtt.message.topic"
              defaultMessage="topic"
            />
          ),
        },
      },
    },
    {
      id: 'whenReceived',
      hat: true,
      text: (
        <Text
          id="extension.mqtt.whenReceived"
          defaultMessage="when I receive [TOPIC]"
        />
      ),
      inputs: {
        TOPIC: {
          type: 'string',
          default: (
            <Text
              id="extension.mqtt.message.topic"
              defaultMessage="topic"
            />
          ),
        },
      },
    },
    {
      id: 'message',
      text: (
        <Text
          id="extension.mqtt.message"
          defaultMessage="last message from [TOPIC]"
        />
      ),
      inputs: {
        TOPIC: {
          type: 'string',
          default: (
            <Text
              id="extension.mqtt.message.topic"
              defaultMessage="topic"
            />
          ),
        },
      },
      output: 'string',
    },
    '---',
    {
      id: 'whenConnected',
      hat: true,
      text: (
        <Text
          id="extension.mqtt.whenConnected"
          defaultMessage="when connected to MQTT broker"
        />
      ),
    },
    {
      id: 'isConnected',
      text: (
        <Text
          id="extension.mqtt.isConnected"
          defaultMessage="connected to MQTT broker?"
        />
      ),
      output: 'boolean',
    },
    {
      id: 'end',
      text: (
        <Text
          id="extension.mqtt.end"
          defaultMessage="disconnect"
        />
      ),
    },
  ],
  translations,
};
