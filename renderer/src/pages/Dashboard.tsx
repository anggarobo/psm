import {
  Box,
  Button,
  Card,
  Center,
  Flex,
  Group,
  Image,
  Stack,
  Text,
  Title,
} from '@mantine/core';
import Layout from '../components/Layout';

export default function Dashboard() {
  const listing = [
    'Single Journey Ticket',
    'Stored Value Ticket',
    'Season Pass',
    'Total Uang (Rp)',
  ];

  const tickets = [
    {
      label: 'Single Journey Ticket',
      img: '../assets/illustrations/SJT.svg',
    },
    {
      label: 'Stored Value Ticket',
      img: '../assets/illustrations/SVT.svg',
    },
    {
      label: 'Season Pass',
      img: '../assets/illustrations/SP.svg',
    },
    {
      label: 'Electronic Money',
      img: '../assets/illustrations/SJT.svg',
    },
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
        <Group
          h="50vh"
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
          w="70%"
        >
          <Box w="100%">
            <Center>
              <Title mb={32}>PSM System</Title>
            </Center>
            <Stack gap={20}>
              <Card withBorder>
                <Stack gap={4}>
                  <Title order={3}>Current Stock</Title>
                  <Flex gap={12} justify="space-between">
                    {listing.map((item, id) => (
                      <Stack key={`item__${id}`} gap={0} w="25%">
                        <Text c="#6C757D">{item}</Text>
                        <Center
                          bg="#FFF9E7"
                          p={{ sm: 8, md: 12, xl: 18 }}
                          style={{ borderRadius: 6 }}
                        >
                          {10}
                        </Center>
                      </Stack>
                    ))}
                  </Flex>
                </Stack>
              </Card>
              <Card p={0}>
                <Stack gap={4}>
                  <Title order={3}>Menu Ticket</Title>
                  <Flex gap={12} justify="space-between">
                    {tickets.map((item, id) => (
                      <Card key={`item__${id}`} withBorder w="25%">
                        <Stack>
                          <Center>
                            <Image src={item.img} w="50%" />
                          </Center>
                          <Center style={{ borderRadius: 6 }}>
                            <Text c="#6C757D">{item.label}</Text>
                          </Center>
                        </Stack>
                      </Card>
                    ))}
                  </Flex>
                </Stack>
              </Card>
              <Stack gap={4}>
                <Title order={3}>Administrasi Lain</Title>
                <Button c="#000" variant="light" w="20%">
                  Petugas Lain
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Group>
      </Center>
    </Layout>
  );
}
