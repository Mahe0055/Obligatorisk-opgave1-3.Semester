# Obligatorisk opgave 1 - 3. Semester

## Øvelse 1 - opsætning
- HTTP-verb + Endpoint: Post https://api.dropboxapi.com/2/files/list_folder
- Body request:
``` 
{
"path":"",
"recursive":false,
"include_media_info":false,
"include_deleted":false,
"include_has_explicit_shared_members":false,
"include_mounted_folders":true,
"include_non_downloadable_files":true
}
```
- Response:
200 OK
``` 
{
"entries": [],
"cursor": "AAEfIahUXnafl2Uo382YsTCTNdMkFJdzBKNKjOMybULNtSKaoKW11C9U14WO2ynp7hX1QalNRi-GtaLENPEOye7fVS66oJjg-f9yyJmDYi_XmZcigN-CfKKRpdqlAi4W6y8D2NKWoKs_3Bg5G_SFlJGJZ5qxpHN8TKi_r02SztiDwUym3sSMNKl8Hbl9gR9fgWQ",
"has_more": false
}
``` 

## Øvelse 2 - opret en mappe
- HTTP-verb + Endpoint: Post https://api.dropboxapi.com/2/files/create_folder_v2
- Body request:
``` 
{
"autorename": false,
"path": "/Obligatorisk%20opgave%201%20-%203.%20semester/TestMappe"
}
```
- Response:
200 OK
```
{
    "metadata": {
        "name": "testmappe",
        "path_lower": "/obligatorisk%20opgave%201%20-%203.%20semester/TestMappe",
        "path_display": "/Obligatorisk%20opgave%201%20-%203.%20semester/TestMappe",
        "id": "id:NvXdVRLJDdsAAAAAAAAACA"
    }
}
```

## Øvelse 3 - hent mappe detaljer
- HTTP-verb + Endpoint: Post https://api.dropboxapi.com/2/files/get_metadata
- Body request:
```
{
"include_deleted": false,
"include_has_explicit_shared_members": false,
"include_media_info": false,
"path": "/Obligatorisk%20opgave%201%20-%203.%20semester/TestMappe"
}
``` 
- Response:
200 OK
``` 
{
    ".tag": "folder",
    "name": "testmappe",
    "path_lower": "/obligatorisk%20opgave%201%20-%203.%20semester/TestMappe",
    "path_display": "/Obligatorisk%20opgave%201%20-%203.%20semester/TestMappe",
    "id": "id:NvXdVRLJDdsAAAAAAAAACA"
}
``` 

## Øvelse 4 - upload en fil
- HTTP-verb + Endpoint: Post https://content.dropboxapi.com/2/files/upload
- Headers:
  1. Authorization = ACCESS TOKEN
  2. Content-type = application/octet-stream
  3. Dropbox-API-Arg = {"autorename": false, "mode":"add", "mute":false, "path": "/TestMappe/Random_cat.jpg", "strict_conflict": false}
- Body request:
```
{
binary - selected file: Random cat.jpg
}
``` 
- Response: 200 OK
```
{
    "name": "Random_cat.jpg",
    "path_lower": "/testmappe/random_cat.jpg",
    "path_display": "/TestMappe/Random_cat.jpg",
    "id": "id:NvXdVRLJDdsAAAAAAAAAHQ",
    "client_modified": "2023-09-07T03:52:59Z",
    "server_modified": "2023-09-07T03:52:59Z",
    "rev": "01604bccbcbdd17000000010d032ad1",
    "size": 4573,
    "is_downloadable": true,
    "content_hash": "a7ac543469af7cb837c5d025fb3364d88397aa7344f1675f59eb8369f7e8dbb3"
}
```

## Øvelse 5 - slet en fil
- HTTP-verb + Endpoint: Post https://api.dropboxapi.com/2/files/delete_v2
- Body request:
```
{
    "path": "/TestMappe/Random_cat.jpg4"
}
``` 
- Response: 200 OK
```
{
    "metadata": {
        ".tag": "file",
        "name": "Random_cat.jpg4",
        "path_lower": "/testmappe/random_cat.jpg4",
        "path_display": "/TestMappe/Random_cat.jpg4",
        "id": "id:NvXdVRLJDdsAAAAAAAAAHA",
        "client_modified": "2023-09-06T16:59:11Z",
        "server_modified": "2023-09-06T16:59:12Z",
        "rev": "01604b3a9a63553000000010d032ad1",
        "size": 9155,
        "is_downloadable": true,
        "content_hash": "3858293c590b603a663d7bb5ee9511402fa2a0b129ff471db21a959d562161e0"
    }
}
```

## Øvelse 6 - søg efter filer
