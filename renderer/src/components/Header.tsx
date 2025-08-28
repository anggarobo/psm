import { Avatar, Button, Center, Group, Image, Text } from '@mantine/core';
import logoHeader from '../../../assets/images/logo-header.png';
import UserIcon from '../assets/icons/user-filled.svg';
import TimeIcon from '../assets/icons/time-filled.svg';
import MonitorIcon from '../assets/icons/monitor-filled.svg';
import { screenFit } from '../helper/screen';

import moment from 'moment';

export default function Header() {
  return (
    <Group bg="#F8F8F8" h={screenFit(72)}>
      <Group justify="space-between" px={24} w="100%">
        <Group>
          <Image h={32} src={logoHeader} w="auto" />
          <Text c="red-psm" fw={700} fz={screenFit(20)}>
            PSM - Staff Terminal
          </Text>
        </Group>
        <Group gap={20}>
          <Button size={screenFit(24)} variant="white">
            <Center style={{ gap: 8 }}>
              <Avatar color="red" size={screenFit(24)} src={UserIcon} />
              <Text fz={screenFit(20)}>RIANI BM</Text>
            </Center>
          </Button>
          <Button size={screenFit(24)} variant="white">
            <Center style={{ gap: 8 }}>
              <Avatar color="red" size={screenFit(24)} src={MonitorIcon} />
              <Text fz={screenFit(20)}>PSM001</Text>
            </Center>
          </Button>
          <Button size={screenFit(24)} variant="white">
            <Center style={{ gap: 8 }}>
              <Avatar color="red" size={screenFit(24)} src={TimeIcon} />
              <Text fz={screenFit(20)}>
                {moment().format('DD MMM YYYY HH:mm:ss')}
              </Text>
            </Center>
          </Button>
        </Group>
      </Group>
    </Group>
  );
}
