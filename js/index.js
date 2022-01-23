//store the deployment address of smart contract
const address = "0xaDFD70410bD651dec5602A52229E6deD6fA24e7c";

//ABI of the smart contract
const abi = [
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "name",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "age",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "dob",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "gender",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "club",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "course",
                "type": "string"
            },
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            }
        ],
        "name": "EnterStudentDetails",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "id",
                "type": "uint256"
            }
        ],
        "name": "RetriveAge",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "id",
                "type": "uint256"
            }
        ],
        "name": "RetriveClub",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "id",
                "type": "uint256"
            }
        ],
        "name": "RetriveCourse",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "id",
                "type": "uint256"
            }
        ],
        "name": "RetriveDOB",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "id",
                "type": "uint256"
            }
        ],
        "name": "RetriveGender",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "id",
                "type": "uint256"
            }
        ],
        "name": "RetriveName",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "course",
                "type": "string"
            }
        ],
        "name": "RetriveStudentFromSameCourse",
        "outputs": [
            {
                "internalType": "uint256[]",
                "name": "",
                "type": "uint256[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "counter",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    }
];

//create a jquery function, connect metamask inside jquery function
$(function () {
    var DAPP;
    $('#b1').click(function (event) {

        event.preventDefault();
        var name = document.getElementById('name').value;
        var age = document.getElementById('age').value;
        var dob = document.getElementById('DOB').value;
        var gender = document.getElementById('gender').value;
        var club = document.getElementById('clubs').value;
        var course = document.getElementById('courses').value;
        console.log(name);

        DAPP.EnterStudentDetails.sendTransaction(name, age, dob, gender, club, course, '0x463A8ee2430Ddb5cef113A4A10c6d16664199aDe',
            function (err, result) {
                console.log(result);
            }); 

    })
    $('#b2').click(function () {
        var ID = document.getElementById('ID').value;
        DAPP.RetriveName.call(ID, function (err, result) {
            document.getElementById("N").innerHTML = result;
        });

        DAPP.RetriveAge.call(ID, function (err, result) {
            document.getElementById("A").innerHTML = result;
        });

        DAPP.RetriveDOB.call(ID, function (err, result) {
            document.getElementById("D").innerHTML = result;
        });

        DAPP.RetriveGender.call(ID, function (err, result) {
            document.getElementById("G").innerHTML = result;
        });

        DAPP.RetriveClub.call(ID, function (err, result) {
            document.getElementById("C").innerHTML = result;
        });

        DAPP.RetriveCourse.call(ID, function (err, result) {
            document.getElementById("Co").innerHTML = result;
        });

    })

    $('#b3').click(function () {
        var course = document.getElementById('crs').value;
        DAPP.RetriveStudentFromSameCourse.call(course, function (err, result) {
            document.getElementById("IDs").innerHTML = result;
        })
    })


    if (typeof (web3) == 'undefined') {
        console.log("please connect to the metamask");
    } else {
        console.log("found injected web3");
        web3 = new Web3(web3.currentProvider);
        ethereum.enable();
        if (web3.version.network != 3) {
            console.log("wrong network is detected");
        } else {
            console.log("connected to Ropston network");
            DAPP = web3.eth.contract(abi).at(address);
        }

    }
})

//assign contract abi to the deployment address
