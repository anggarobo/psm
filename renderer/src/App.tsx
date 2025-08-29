import Dashboard from './pages/Dashboard';

export default function App() {
  // const [platform, setPlatform] = React.useState('');

  // React.useEffect(() => {
  //   console.log(window.api);
  //   window.api?.platform().then((res) => {
  //     console.log(res);
  //     setPlatform(res.platform);
  //   });
  // }, []);

  return (
    <>
      {/* <SerialPort /> */}
      <Dashboard />
    </>
  );
}
