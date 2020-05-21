# HyperLedger

## Learning HyperLedger

### I. BasicNetwork

#### - MyWeb
- HLF Node SDK
~~~javascript
"fabric-ca-client": "~1.4.0",
"fabric-client": "~1.4.0",
"fabric-network": "^1.4.4",
~~~
Add package.json dependencies

- How to fix docker permission error?
~~~
$ sudo usermod -a -G docker $USER 
$ sudo service docker restart

!!! reboot
~~~

- chaincode install options
    - c : chaincode constructor
    - l : chaincode programming languege
    - n : chaincode name
    - p : chaincode path
    - v : chaincode version

- chaincode instantiate options
    - C : network name
    - c : chaincode constructor message
    - E : endorsing chaincode
    - v : chaincode version
    - V : system chaincode name

- command list
~~~
> docker exec -it cli bash

cli> peer chaincode install -n jes_cc_node -v 1.0 -l node -p /opt/gopath/src/github.com/chaincode_example02/node/

> docker exec -it peer0.org1.example.com bash

peer0> cd /var/hyperledger/production/chaincodes

cli> peer chaincode instantiate -C mychannel -n jes_cc_node -l node -v 1.0 -c '{"Args":["init","a","100","b","200"]}' 

cli> peer chaincode query -C mychannel -n jes_cc_node -c '{"Args":["query","a"]}'

cli> peer chaincode invoke -C mychannel -n jes_cc_node -c '{"Args":["invoke","a","b","10"]}'

cli> peer chaincode query -C mychannel -n jes_cc_node -c '{"Args":["query","a"]}'


~~~
