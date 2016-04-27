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
        
        var photos = [];
        
        for (var i=0; i < responseData.photos.photo.length; i++) {
          var photo = responseData.photos.photo[i];
          photos.push({imgUrl: 'https://farm'+photo.farm+'.staticflickr.com/'+photo.server+'/'+photo.id+'_'+photo.secret+'.jpg'});
        }
        
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(photos)
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
          placeholder="Keyword..."
          style={styles.searchBarInput}
          onEndEditing={this.onSearchChange} />
        <ListView
          contentContainerStyle={styles.row}
          dataSource={this.state.dataSource}
          renderRow={this.renderRow}
          initialListSize={21}
          scrollRenderAheadDistance={100}
        />
      </View>
    );
  }
  
  renderRow(row) {
    return (
      <Image
        style={styles.picture}
        source={{uri: row.imgUrl}} />
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
  }
});

AppRegistry.registerComponent('MyApp', () => MyApp);
