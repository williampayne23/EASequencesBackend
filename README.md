# Backend for Sequences site

## Installation
First clone repository

```bash
git clone https://github.com/williampayne23/EASequencesBackend
```

then install npm repositories enter the folder and run

```bash
npm install
```
This project uses a mysql database so to use it you need to install mysql, set up a user for your sql database and then write these credentials into the credentials file in `./src/models`

Finally the database structure can be set up by running the initiateFreshDatabase command

```bash
npm run cleanDatabase
```

## Running the server

To run the server use the npm start script

```bash
npm start
```

### Sequences Endpoint
This is for creating and reading sequences found at "/sequences".

#### GET
Provides data on all sequences in the database as a json object.

```json
[
    {
        "id": 1,
        "Name" : "Name of sequence",
        "Description": "Description of sequence",
        "Links": [
            {
                "id": 1,
                "Name": "Name of link",
                "Description": "Description of link",
                "url": "link url"
            },

            ...
        ]
    },

    {
        "id": 2
        ...
    }
    ...
]
```

#### POST

Creates a sequence from data in body of the request, expects a request like...

```json
{
	"Name": "name of new sequence",
	"Description": "description of new sequence",
	"links" : [
        {"Name": "Name of link", "url": "url of link"},
        {"id" : "id of existing link"},
        {"url" : "url of existing link"}
        ]
}
```

For a sequence **Name is a required field**

This adds links to the sequence from the array and creates links if needed but prefers to find links matching the data given. If a link already exists matching on unique fields like only url or id is possible. If this link doesn't exist then **Name and url are required fields** 