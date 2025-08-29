import { Avatar, Button, Center, Group, Image, Text } from '@mantine/core';
import logoHeader from '../../../assets/images/logo-header.png';
import UserIcon from '../assets/icons/user-filled.svg';
import TimeIcon from '../assets/icons/time-filled.svg';
import MonitorIcon from '../assets/icons/monitor-filled.svg';
import { screenFit } from '../helper/screen';

import moment from 'moment';

export default function Header() {
  return (
    <Group bg="#F8F8F8" px={{ sm: 8, md: 12, xl: 24 }}>
      <Group
        h={72}
        justify="space-between"
        px={{ sm: 16, md: 24, xl: 32 }}
        w="100%"
      >
        <Group>
          <Image h={40} src={logoHeader} w="auto" />
          <Text c="red-psm" fw={700} fz={{ sm: 12, md: 14, xl: 20 }}>
            PSM - Staff Terminal
          </Text>
        </Group>
        <Group>
          <Button h={48} variant="white">
            <Center style={{ gap: 8 }}>
              <Avatar color="red" size={screenFit(24)} src={UserIcon} />
              <Text c="#000" fz={{ sm: 12, md: 14, xl: 20 }}>
                RIANI BM
              </Text>
            </Center>
          </Button>
          <Button h={48} variant="white">
            <Center style={{ gap: 8 }}>
              <Avatar color="red" size={screenFit(24)} src={MonitorIcon} />
              <Text c="#000" fz={{ sm: 12, md: 14, xl: 20 }}>
                PSM001
              </Text>
            </Center>
          </Button>
          <Button h={48} variant="white">
            <Center style={{ gap: 8 }}>
              <Avatar color="red" size={screenFit(24)} src={TimeIcon} />
              <Text c="#000" fz={{ sm: 12, md: 14, xl: 20 }}>
                {moment().format('DD MMM YYYY HH:mm:ss')}
              </Text>
            </Center>
          </Button>
        </Group>
      </Group>
    </Group>
  );
}
