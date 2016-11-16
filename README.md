
# aws-get-ip

[![npm version][npm-badge]][npm-url]


- __Sponsored by:__ [nearForm][Sponsor]
- __Node:__ 4.x, 6.x

Return the private ip of a list of EC2 instanstes using [aws-sdk](https://github.com/aws/aws-sdk-js)

## Install
```
npm install aws-get-ip
```

## Usage

```

const Finder = require('aws-get-ip')
const getIp = new Finder({
  region: 'eu-central-1'
})

getIp.byTags({tag: 'value'}, function (err, ips) {
  console.log(ips)
})

```

## Options

The constructor accepts the same options of aws-sdk.

You should pass in the aws region and credentials (unless using a IAM role)

## Methods

### byTags

List all the private ips of running instances with the specified tags


## License
Copyright (c) 2013 - 2016, Paolo Chiodi and other contributors.
Licensed under [MIT][].

[Sponsor]: http://nearform.com
[npm-badge]: https://badge.fury.io/js/aws-get-ip.svg
[npm-url]: https://badge.fury.io/js/aws-get-ip
[travis-badge]: https://api.travis-ci.org/senecajs-labs/aws-get-ip.svg
[travis-url]: https://travis-ci.org/senecajs-labs/aws-get-ip
[MIT]: ./LICENSE
