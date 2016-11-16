"use strict"

const aws = require("aws-sdk")

function flatten (arr) {
  return [].concat.apply([], arr)
}

function getInstances (reservation) {
  return reservation.Instances
}

function getIp (instance) {
  return instance.NetworkInterfaces[0].PrivateIpAddress
}

function awsGetIp (opts) {
  this.ec2 = new aws.EC2(opts)
}

awsGetIp.prototype.byTags = function (query, cb) {
  const filters = Object.keys(query).map(function (key) {
    return {
      Name: "tag:" + key,
      Values: [query[key]]
    }
  })

  filters.push({Name: "instance-state-name", Values: ["running"]})

  this.ec2.describeInstances({Filters: filters}, function gotInstances (err, data) {
  	if (err) {
  		return cb(err)
  	}

    const instances = flatten(data.Reservations.map(getInstances))
    cb(null, instances.map(getIp))
  })
}

module.exports = awsGetIp
