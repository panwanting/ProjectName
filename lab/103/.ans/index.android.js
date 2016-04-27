import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  TextInput,
  ListView,
  Image,
  View,
} from 'react-native';

class MyApp extends Component {

  constructor(props) {
    super(props)
    this.state = {
      dataSource: new ListView.DataSource({
          rowHasChanged: (row1, row2) => row1 !== row2,
      })
    };
    this.onSearchChange = this.onSearchChange.bind(this);
  }
  
  onSearchChange(event) {
    const BASE_URL = "https://api.flickr.com/services/rest/?&method=flickr.photos.search&format=json&nojsoncallback=1&per_page=99&api_key=b49d87bfd659c5768ab0eafa74f2b6a5&tags=";

    var keyword = event.nativeEvent.text.toLowerCase();
    var queryURL = BASE_URL + encodeURIComponent(keyword);
    
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows([])
    });
  
    fetch(queryURL)
    .then((response) => response.json())
    .then((responseData) => {
      if (responseData.photos) {
        console.log(responseData.photos.photo.length);
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(responseData.photos.photo)
        });
      }
    })
    .done();
  }
  
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Search for a project..."
          style={styles.searchBarInput}
          onEndEditing={this.onSearchChange} />
        <ListView
          contentContainerStyle={styles.row}
          dataSource={this.state.dataSource}
          renderRow={this.renderRow}
        />
      </View>
    );
  }
  
  renderRow(row) {
    return (
      <Image
        style={styles.picture}
        defaultSource={require('./placeholder.png')}
        source={{uri: 'https://farm'+row.farm+'.staticflickr.com/'+row.server+'/'+row.id+'_'+row.secret+'.jpg'}} />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  searchBarInput: {
    padding: 5,
    margin: 5,
    fontSize: 15,
    height: 50,
    backgroundColor: '#EAEAEA',
  },
  row: {
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  picture: {
    width: 100,
    height: 100,
    margin: 5,
  },
  tilte: {
    justifyContent: 'center',
    padding: 5,
    fontSize: 25,
    fontWeight: 'bold',
  }
});

AppRegistry.registerComponent('MyApp', () => MyApp);
