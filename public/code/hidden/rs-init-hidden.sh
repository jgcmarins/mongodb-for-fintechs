#!/bin/bash

mongosh <<EOF
const config = {
    "_id": "rs0",
    "version": 1,
    "members": [
        {
            "_id": 1,
            "host": "mongo1:27017",
            "priority": 2
        },
        {
            "_id": 2,
            "host": "mongo2:27017",
            "priority": 1
        },
        {
            "_id": 3,
            "host": "mongo-hidden:27017",
            "priority": 0,
            "hidden": true,
        },
    ]
};
rs.initiate(config, { force: true });
rs.status();
EOF