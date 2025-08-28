import {
  Button,
  Center,
  Fieldset,
  Group,
  Text,
  TextInput,
  Title,
} from '@mantine/core';
import Layout from '../../components/Layout';
import { screenFit } from '../../helper/screen';

export default function Login() {
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
          w="30%"
        >
          <Fieldset variant="unstyled" w="100%">
            <Center>
              <Title fz={screenFit(42)} mb={32}>
                PSM LRT Jakarta
              </Title>
            </Center>
            <Center mb={screenFit(32)}>
              <Text fz={screenFit(32)}>Silahkan Login</Text>
            </Center>
            <TextInput mb={screenFit(32)} placeholder="Username" />
            <TextInput mb={screenFit(32)} placeholder="Password" />

            <Center>
              <Button flex={1}>Submit</Button>
            </Center>
          </Fieldset>
        </Group>
      </Center>
    </Layout>
  );
}
