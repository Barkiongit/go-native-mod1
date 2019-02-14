import Reactotron from 'reactotron-react-native'

if(__DEV__){
  const tron = Reactotron.configure() // controls connection & communication settings
  .useReactNative() // add al built-in react ative plugins
  .connect() // let's connect!

console.tron = tron;

tron.clear();
}
