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
import Layout from '../../components/Layout';
import { screenFit } from '../../helper/screen';
import UnlockIcon from '../../assets/icons/unlock-filled.svg';

export default function OpenShift() {
  const listing = [
    "Single Journey Ticket",
    "Stored Value Ticket",
    "Season Pass",
    "Total Uang (Rp)"
  ]
  
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
        <Center display="flex" style={{ flexDirection: "column", alignItems: "center", justifyContent: 'center' }} >
          <Title fz={screenFit(32)}>
            Open Balance
          </Title>
          <Group w="100%" >
            <Group
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              <Fieldset w="100%">
                <Stack>
                  {listing.map((item, i) => (
                    <Flex key={`item-${i}`} align="center" justify="space-between">
                      <Text fz={screenFit(20)}>{item}</Text>
                      <TextInput defaultValue={0} type="number" w="50%" />
                    </Flex>
                  ))}
                </Stack>
                <Group justify="center" mt="md">
                  <Button leftSection={<Avatar size={screenFit(24)} src={UnlockIcon} />} >Submit</Button>
                </Group>
              </Fieldset>
            </Group>
            <Group
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              <Card withBorder>
                <Grid grow >
                  {[...new Array(9), "000", "0"].map((item, id) => (
                    <Grid.Col span={4}>
                      <Button fullWidth variant='outline' >
                        {item ?? id + 1}
                      </Button>
                    </Grid.Col>
                  ))}
                  <Grid.Col span={4}>
                      <Button fullWidth variant='outline' >
                        <Avatar size={screenFit(24)} src={UnlockIcon} /> 
                      </Button>
                    </Grid.Col>
                </Grid>
              </Card>
            </Group>
          </Group>
        </Center>
      </Center>
    </Layout>
  );
}
