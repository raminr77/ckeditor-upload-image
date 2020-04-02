# Upload Image In CKEditor 5 With API
[![GitHub stars](https://img.shields.io/github/stars/badges/shields.svg?style=social&label=Stars&style=plastic)]() [![GitHub watchers](https://img.shields.io/github/watchers/badges/shields.svg?style=social&label=Watch&style=plastic)]() [![GitHubforks](https://img.shields.io/github/forks/badges/shields.svg?style=social&label=Fork&style=plastic)]()


this React Project help you for how to **upload image in CKEditor 5 with API** URL and without use to any plugin


##### First Install Axios
` npm i axios --save `

### Upload Request (POST)
```
{
    image: binary // form data
}
```

### Server Response
```
{
    'uploaded': true,
    'fileName': 'example',
    'url': 'https://example.com'
}
```


#### License
[![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://github.com/tterb/atomic-design-ui/blob/master/LICENSEs)