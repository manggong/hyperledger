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

