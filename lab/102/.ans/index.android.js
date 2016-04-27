import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  Image,
  View
} from 'react-native';

import Hello from './src/hello.js';

class MyApp extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.row}>
          <Image
            style={styles.img}
            defaultSource={require('./placeholder.png')}
            source={{uri: 'http://lorempixel.com/160/160/abstract/2'}}
          />
          <Image
            style={styles.img}
            defaultSource={require('./placeholder.png')}
            source={{uri: 'http://lorempixel.com/160/160/animals/3'}}
          />
          <Image
            style={styles.img}
            defaultSource={require('./placeholder.png')}
            source={{uri: 'http://lorempixel.com/160/160/business/4'}}
          />
        </View>
        <View style={styles.row}>
          <Image
            style={styles.img}
            defaultSource={require('./placeholder.png')}
            source={{uri: 'http://lorempixel.com/160/160/cats/1'}}
          />
          <Image
            style={styles.img}
            defaultSource={require('./placeholder.png')}
            source={{uri: 'http://lorempixel.com/160/160/city/2'}}
          />
          <Image
            style={styles.img}
            defaultSource={require('./placeholder.png')}
            source={{uri: 'http://lorempixel.com/160/160/food/3'}}
          />
        </View>
        <View style={styles.row}>
          <Image
            style={styles.img}
            defaultSource={require('./placeholder.png')}
            source={{uri: 'http://lorempixel.com/160/160/people/4'}}
          />
          <Image
            style={styles.img}
            defaultSource={require('./placeholder.png')}
            source={{uri: 'http://lorempixel.com/160/160/technics/3'}}
          />
          <Image
            style={styles.img}
            defaultSource={require('./placeholder.png')}
            source={{uri: 'http://lorempixel.com/160/160/fashion/1'}}
          />
        </View>
        <View style={styles.row}>
          <Image
            style={styles.img}
            defaultSource={require('./placeholder.png')}
            source={{uri: 'http://lorempixel.com/160/160/nightlife/1'}}
          />
          <Image
            style={styles.img}
            defaultSource={require('./placeholder.png')}
            source={{uri: 'http://lorempixel.com/160/160/nature/3'}}
          />
          <Image
            style={styles.img}
            defaultSource={require('./placeholder.png')}
            source={{uri: 'http://lorempixel.com/160/160/transport/3'}}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  img: {
    width: 160,
    height: 160,
    margin: 5,
  },
  container: {
    flex: 1,
    borderColor: '#e7e7e7',
    backgroundColor: '#ffffff',
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  }
});

AppRegistry.registerComponent('MyApp', () => MyApp);
