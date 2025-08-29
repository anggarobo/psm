import {
  Avatar,
  Button,
  Card,
  Center,
  Fieldset,
  Flex,
  Grid,
  Group,
  Stack,
  Text,
  TextInput,
  Title,
} from '@mantine/core';
import Layout from '../components/Layout';
import { screenFit } from '../helper/screen';
import UnlockIcon from '../assets/icons/unlock-filled.svg?react';
import BackspaceIcon from '../assets/icons/backspace-filled.svg?react';

const IconBackspace = () => (
  <Avatar size="sm">
    <BackspaceIcon />
  </Avatar>
);
const IconUnlock = () => (
  <Avatar size={20}>
    <UnlockIcon />
  </Avatar>
);

export default function OpenShift() {
  const listing = [
    'Single Journey Ticket',
    'Stored Value Ticket',
    'Season Pass',
    'Total Uang (Rp)',
  ];

  return (
    <Layout>
      <Center
        h="100%"
        style={{
          display: 'flex',
          justifyContent: 'center', // horizontal center
          alignItems: 'center', // vertical center
        }}
        w="100%"
      >
        <Center
          display="flex"
          h="70vh"
          style={{
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 12,
          }}
          w="70%"
        >
          <Title fz={screenFit(32)}>Open Balance</Title>
          <Flex gap={12} h={screenFit(559)} w="100%">
            <Card withBorder w="50%">
              <Fieldset variant="unstyled" w="100%">
                <Stack gap={24}>
                  {listing.map((item, i) => (
                    <Flex
                      key={`item-${i}`}
                      align="center"
                      justify="space-between"
                    >
                      <Text fz={screenFit(20)}>{item}</Text>
                      <TextInput defaultValue={0} type="number" w="50%" />
                    </Flex>
                  ))}
                </Stack>
                <Group justify="center" mt="xl">
                  <Button leftSection={<IconUnlock />}>Submit</Button>
                </Group>
              </Fieldset>
            </Card>
            <Card withBorder bg="#000" w="50%">
              <Stack gap={0} h="100%">
                <Grid
                  gutter={8}
                  h="100%"
                  styles={{ inner: { height: '100%' } }}
                >
                  {[...new Array(3)].map((_, id) => (
                    <Grid.Col key={`id_${id}`} h="100%" span={4}>
                      <Button fullWidth c="#000" h="100%" variant="white">
                        <Title order={3}>{id + 1}</Title>
                      </Button>
                    </Grid.Col>
                  ))}
                </Grid>
                <Grid
                  gutter={8}
                  h="100%"
                  styles={{ inner: { height: '100%' } }}
                >
                  {[...new Array(3)].map((_, id) => (
                    <Grid.Col key={`id_${id}`} h="100%" span={4}>
                      <Button fullWidth c="#000" h="100%" variant="white">
                        <Title order={3}>{id + 4}</Title>
                      </Button>
                    </Grid.Col>
                  ))}
                </Grid>
                <Grid
                  gutter={8}
                  h="100%"
                  styles={{ inner: { height: '100%' } }}
                >
                  {[...new Array(3)].map((_, id) => (
                    <Grid.Col key={`id_${id}`} h="100%" span={4}>
                      <Button fullWidth c="#000" h="100%" variant="white">
                        <Title order={3}>{id + 7}</Title>
                      </Button>
                    </Grid.Col>
                  ))}
                </Grid>
                <Grid
                  gutter={8}
                  h="100%"
                  styles={{ inner: { height: '100%' } }}
                >
                  {['000', '0', <IconBackspace />].map((item, id) => (
                    <Grid.Col key={`id_${id}`} h="100%" span={4}>
                      <Button fullWidth c="#000" h="100%" variant="white">
                        {typeof item === 'string' ? (
                          <Title order={3}>{item}</Title>
                        ) : (
                          item
                        )}
                      </Button>
                    </Grid.Col>
                  ))}
                </Grid>
              </Stack>
            </Card>
          </Flex>
        </Center>
      </Center>
    </Layout>
  );
}
