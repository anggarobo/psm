import { Center, Group, Text } from '@mantine/core';
import moment from 'moment';
import { screenFit } from '../helper/screen';

export default function Footer() {
  return (
    <Center bg="#1E293B" h={screenFit(56)}>
      <Group>
        <Text c="#FFF" fz={screenFit(16)}>
          © {moment().format('YYYY')} LRT Jakarta · Passenger Service Machine ·
          v2.0.0
        </Text>
      </Group>
    </Center>
  );
}
