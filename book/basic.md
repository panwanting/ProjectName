# 基本語法

## 文字

JSX

```xml
<Text style={styles.headline}>
  Hello {this.props.who}
</Text>
```

StyleShe

```json
headline: {
  fontSize: 36,
  fontWeight: 'bold',
  textAlign: 'center',
  textShadowColor: '#333333',
  textShadowOffset: {width: 1, height: 1},
  color: '#FFFFFF',
}
```

## 圖片

```xml
<Image
  style={styles.icon}
  source={require('./myIcon.png')}
/>
<Image
  style={styles.logo}
  source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}
/>
```